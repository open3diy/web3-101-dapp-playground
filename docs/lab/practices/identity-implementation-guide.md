# Guía de implementación: Identidad descentralizada

Esta guía técnica cubre la implementación práctica de sistemas de identidad descentralizada en aplicaciones Web3. Está dirigida a desarrolladores que necesitan integrar DIDs, Verifiable Credentials, attestations y protocolos de autenticación en sus proyectos.

Para comprender los fundamentos conceptuales de identidad Web3, consulta primero [Identidad Web3](../../101/7-1-identity.md). Este documento asume familiaridad con DIDs, VCs, SBTs y el ecosistema de proyectos de identidad.

## Arquitectura de identidad: decisiones fundamentales

Antes de escribir código, debes tomar decisiones arquitecturales que determinarán la experiencia del usuario, los costos operativos y la portabilidad de la identidad en tu aplicación.

**Método DID: elegir el identificador apropiado**:

Los DIDs son el fundamento de la identidad descentralizada, pero existen múltiples métodos con trade-offs diferentes. La elección del método DID afecta la descentralización, costos, verificabilidad y experiencia del desarrollador.

`did:key` es el método más simple: genera un identificador directamente desde una clave pública sin requerir registro on-chain ni resolución de red. Ideal para desarrollo local, testing y casos donde no necesitas actualizar el DID Document después de creación. El documento se deriva criptográficamente de la clave, eliminando dependencias externas. Sin embargo, no soporta rotación de claves ni actualización de metadatos: si la clave se compromete, debes crear un DID completamente nuevo.

`did:ethr` ancla identidades en Ethereum mediante el contrato ERC-1056 DID Registry. Permite rotación de claves, delegación de permisos y actualización de atributos mediante transacciones on-chain. Funciona en cualquier red compatible con EVM (Ethereum, Polygon, Arbitrum, Optimism). Los costos de gas para actualizaciones pueden ser significativos en mainnet, pero son accesibles en L2s. Ideal para aplicaciones que requieren identidades persistentes y actualizables con verificabilidad máxima.

`did:web` utiliza infraestructura web tradicional: el DID Document se aloja en un servidor bajo tu control en `https://tudominio.com/.well-known/did.json`. Ofrece la mejor experiencia para organizaciones con infraestructura web existente y elimina costos de transacciones blockchain. Sin embargo, introduce puntos centralizados de fallo: si tu servidor cae, el DID no resuelve. Apropiado para DIDs organizacionales donde la organización ya gestiona dominios web de forma confiable.

`did:ion` es una implementación de Sidetree sobre Bitcoin, proporcionando descentralización máxima sin costos por operación. Las operaciones DID se anclan en Bitcoin mediante Merkle trees batched, permitiendo crear, actualizar y desactivar DIDs sin pagar fees por cada operación individual. La complejidad operacional es mayor: requieres nodos ION para resolución, y la latencia de anclaje en Bitcoin introduce delays. Ideal para casos de uso que demandan máxima descentralización y censorship resistance sin depender de networks específicas.

**Recomendaciones prácticas**:

Para MVP y experimentación inicial, comienza con `did:key` por su simplicidad. Para producción en ecosistema Ethereum/EVM, `did:ethr` en L2 como Polygon o Base ofrece el mejor balance costo-funcionalidad. Para organizaciones establecidas que priorizan simplicidad operacional sobre descentralización pura, `did:web` es pragmático. Para aplicaciones que requieren máxima resistencia a censura y no pueden depender de una blockchain específica, considera `did:ion` pero prepárate para mayor complejidad.

**Almacenamiento de credenciales: on-chain vs off-chain**:

La decisión de dónde almacenar credenciales tiene implicaciones profundas en privacidad, costos y experiencia del usuario.

Las Verifiable Credentials off-chain se almacenan como archivos JSON en la wallet del usuario, en almacenamiento local cifrado, o en redes de almacenamiento descentralizado como IPFS o Ceramic. El usuario mantiene control físico total: las credenciales no existen en blockchain hasta que decide presentarlas. Esto maximiza privacidad porque ningún observador externo puede enumerar qué credenciales posees sin que las reveles activamente. Los costos son mínimos: no pagas gas por almacenar credenciales, solo si decides generar pruebas on-chain derivadas de ellas.

Sin embargo, este modelo introduce fricción. El usuario debe gestionar archivos de credenciales en su dispositivo, hacer backups, y potencialmente sincronizarlos entre múltiples dispositivos. La verificación requiere que el usuario presente activamente la credencial firmada, que el verificador valida consultando al emisor o verificando firmas criptográficas off-chain. Este modelo funciona excelentemente para credenciales sensibles como datos de KYC, información médica, o credenciales financieras donde privacidad es prioritaria.

Los Soulbound Tokens y attestations on-chain como EAS se almacenan directamente en blockchain como contratos ERC-721 no transferibles o registros en contratos de attestation. Cualquier aplicación puede consultar instantáneamente qué credenciales posee una dirección sin necesidad de que el usuario las presente: simplemente llamas `balanceOf(address)` o consultas el schema de attestation correspondiente.

Esta visibilidad pública es poderosa para casos donde transparencia es deseable: diplomas universitarios, certificaciones profesionales públicas, historial de participación en DAOs, POAPs de eventos atendidos. Los smart contracts pueden verificar credenciales directamente sin oráculos: `if (user.hasCredential(degreeNFT)) { grantAccess(); }`. La composabilidad es nativa: otros protocolos pueden construir lógica basada en tus credenciales on-chain sin permiso.

Los trade-offs son claros: costos de gas para emitir y potencialmente actualizar credenciales, y pérdida completa de privacidad financiera si tus credenciales están vinculadas a direcciones que también manejan fondos. Además, la permanencia on-chain significa que credenciales emitidas erróneamente o que deseas eliminar persisten para siempre en el historial de blockchain.

**Estrategia híbrida**:

La mayoría de aplicaciones de producción implementan modelos híbridos: credenciales sensibles como VCs off-chain con selective disclosure mediante ZK-proofs, y credenciales públicas de reputación y participación como SBTs on-chain. Por ejemplo, tu aplicación podría requerir una VC de KYC off-chain que el usuario presenta solo una vez a un servicio verificador, que luego emite una attestation on-chain simple indicando "este usuario pasó KYC nivel 2" sin revelar datos personales. El mejor de ambos mundos: privacidad donde importa, composabilidad donde es útil.

## Implementando Sign-In With Ethereum (SIWE)

Sign-In With Ethereum reemplaza el flujo tradicional de registro con email/contraseña por autenticación basada en wallet, eliminando la necesidad de gestionar credenciales de usuario en tu backend.

**Arquitectura del flujo SIWE**:

El proceso comienza en el frontend cuando el usuario conecta su wallet mediante WalletConnect, MetaMask u otra wallet provider. Tu aplicación solicita al backend un nonce único y temporal asociado a esa dirección. El backend genera un nonce criptográficamente seguro, lo almacena temporalmente en caché (Redis, memoria, database) con TTL corto (5-10 minutos), y lo devuelve al frontend.

El frontend construye un mensaje SIWE estructurado usando la librería `siwe` que incluye tu dominio, el nonce recibido, timestamp de emisión, y opcionalmente expiración y recursos solicitados. El mensaje se presenta al usuario en su wallet de forma legible según el estándar EIP-4361. El usuario revisa y firma el mensaje con su clave privada. La firma resultante es una prueba criptográfica de que controla esa dirección sin revelar la clave privada.

El frontend envía el mensaje firmado y la firma al backend. El backend utiliza `siwe` para verificar: que la firma corresponde criptográficamente al mensaje y dirección reclamada, que el nonce es el esperado y no ha sido reutilizado, que el timestamp está dentro de un rango aceptable, y que el dominio coincide con tu aplicación. Si todas las verificaciones pasan, el nonce se consume (marca como usado para prevenir replay attacks) y el backend crea una sesión autenticada para esa dirección, típicamente mediante JWT con la dirección como subject.

**Implementación con Next.js y wagmi**:

```typescript
// Frontend: hooks/useAuth.ts
import { useAccount, useSignMessage } from 'wagmi';
import { SiweMessage } from 'siwe';

export function useAuth() {
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const signIn = async () => {
    if (!address) throw new Error('No wallet connected');

    // 1. Solicitar nonce del backend
    const nonceRes = await fetch('/api/auth/nonce', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address })
    });
    const { nonce } = await nonceRes.json();

    // 2. Construir mensaje SIWE
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in to MyApp',
      uri: window.location.origin,
      version: '1',
      chainId: 1,
      nonce,
      issuedAt: new Date().toISOString()
    });

    // 3. Firmar con wallet
    const signature = await signMessageAsync({
      message: message.prepareMessage()
    });

    // 4. Verificar en backend
    const verifyRes = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature })
    });

    if (!verifyRes.ok) throw new Error('Verification failed');
    
    return verifyRes.json();
  };

  return { signIn };
}
```

```typescript
// Backend: pages/api/auth/nonce.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { generateNonce } from 'siwe';
import { redis } from '@/lib/redis';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.body;
  const nonce = generateNonce();

  // Almacenar nonce temporalmente (TTL 10 minutos)
  await redis.setex(`nonce:${address}`, 600, nonce);

  res.status(200).json({ nonce });
}
```

```typescript
// Backend: pages/api/auth/verify.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { SiweMessage } from 'siwe';
import { redis } from '@/lib/redis';
import jwt from 'jsonwebtoken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, signature } = req.body;
    const siweMessage = new SiweMessage(message);

    // Verificar firma criptográfica
    const fields = await siweMessage.verify({ signature });

    // Verificar nonce no reutilizado
    const storedNonce = await redis.get(`nonce:${fields.data.address}`);
    if (!storedNonce || storedNonce !== fields.data.nonce) {
      return res.status(401).json({ error: 'Invalid nonce' });
    }

    // Consumir nonce
    await redis.del(`nonce:${fields.data.address}`);

    // Crear sesión JWT
    const token = jwt.sign(
      { address: fields.data.address },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    res.status(200).json({ token, address: fields.data.address });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
}
```

**Consideraciones de seguridad**:

El nonce debe ser criptográficamente seguro y único por intento de autenticación. Reutilizar nonces permite replay attacks. La función `generateNonce()` de `siwe` utiliza `crypto.randomBytes()` que es apropiado. Los nonces deben tener TTL corto: 5-10 minutos máximo. Esto limita la ventana de ataque si un nonce es interceptado.

Valida siempre el dominio en el mensaje SIWE: debe coincidir exactamente con tu dominio. Atacantes pueden intentar phishing construyendo mensajes para su dominio malicioso que parecen legítimos. Verifica timestamps: rechaza mensajes con `issuedAt` muy antiguos o en el futuro. Implementa rate limiting en los endpoints de nonce y verify para prevenir brute force.

Los JWTs de sesión deben tener expiración razonable (7 días típicamente) y deben incluir claims mínimos: la dirección y posiblemente roles/permisos. No incluyas datos sensibles en JWTs porque son decodificables. Almacena el token en cookies HttpOnly con flags Secure y SameSite para prevenir XSS y CSRF.

## Implementando EIP-712 para typed data signing

EIP-712 transforma hashes incomprensibles en datos estructurados legibles, mejorando seguridad dramáticamente al prevenir que usuarios firmen transacciones maliciosas ciegamente.

**Definiendo el domain y types**:

```typescript
// contracts/Permit.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TokenPermit {
    bytes32 public DOMAIN_SEPARATOR;
    
    // Type hash para el mensaje Permit
    bytes32 public constant PERMIT_TYPEHASH = keccak256(
        "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
    );
    
    mapping(address => uint256) public nonces;
    
    constructor() {
        DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
                keccak256(bytes("MyToken")),
                keccak256(bytes("1")),
                block.chainid,
                address(this)
            )
        );
    }
    
    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        require(block.timestamp <= deadline, "Permit expired");
        
        bytes32 structHash = keccak256(
            abi.encode(
                PERMIT_TYPEHASH,
                owner,
                spender,
                value,
                nonces[owner]++,
                deadline
            )
        );
        
        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", DOMAIN_SEPARATOR, structHash)
        );
        
        address recoveredAddress = ecrecover(digest, v, r, s);
        require(recoveredAddress == owner, "Invalid signature");
        
        // Aprobar el gasto...
    }
}
```

**Frontend: generando y firmando typed data**:

```typescript
import { useSignTypedData } from 'wagmi';
import { parseEther } from 'viem';

function PermitButton() {
  const { signTypedDataAsync } = useSignTypedData();

  const createPermit = async () => {
    const domain = {
      name: 'MyToken',
      version: '1',
      chainId: 1,
      verifyingContract: '0x...' as `0x${string}`
    };

    const types = {
      Permit: [
        { name: 'owner', type: 'address' },
        { name: 'spender', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'nonce', type: 'uint256' },
        { name: 'deadline', type: 'uint256' }
      ]
    };

    const message = {
      owner: '0xUserAddress...',
      spender: '0xSpenderAddress...',
      value: parseEther('100'),
      nonce: 0n,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 3600) // 1 hora
    };

    // Usuario ve datos estructurados legibles en su wallet
    const signature = await signTypedDataAsync({
      domain,
      types,
      primaryType: 'Permit',
      message
    });

    // Separar firma en componentes v, r, s para el contrato
    const { v, r, s } = splitSignature(signature);
    
    // Enviar al contrato
    await contract.permit(
      message.owner,
      message.spender,
      message.value,
      message.deadline,
      v, r, s
    );
  };

  return <button onClick={createPermit}>Approve via Permit</button>;
}
```

**Validación y seguridad**:

El `DOMAIN_SEPARATOR` previene replay attacks cross-chain y cross-contract. Una firma válida para tu contrato en Ethereum mainnet no puede reutilizarse en Polygon o en otro contrato. Incluye siempre `chainId` y `verifyingContract` en el domain.

Los nonces en el contrato previenen replay attacks dentro del mismo contrato. Cada dirección tiene su contador de nonce que incrementa con cada permit exitoso. Una firma antigua no puede reutilizarse porque el nonce ya cambió.

Los deadlines protegen contra firmas que permanecen válidas indefinidamente. Establece deadlines razonables: 1 hora para operaciones interactivas, 24 horas máximo para operaciones diferidas. Valida siempre `block.timestamp <= deadline` en el contrato.

La recuperación de dirección mediante `ecrecover` puede fallar silenciosamente retornando la dirección cero. Siempre verifica que `recoveredAddress != address(0) && recoveredAddress == owner`. Algunos contratos usan bibliotecas como OpenZeppelin's ECDSA para manejo más seguro.

## Integrando Ethereum Attestation Service (EAS)

EAS proporciona infraestructura permissionless para emitir attestations on-chain que cualquiera puede verificar instantáneamente.

**Registrando un schema**:

Los schemas definen la estructura de tus attestations. Deben registrarse una vez on-chain antes de poder emitir attestations basadas en ellos.

```typescript
import { SchemaRegistry } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const schemaRegistryAddress = '0x...'; // Address varía por chain
const schemaRegistry = new SchemaRegistry(schemaRegistryAddress);
schemaRegistry.connect(signer);

// Definir schema: tipos y nombres de campos
const schema = 'string course,uint8 grade,uint32 completionDate';
const resolverAddress = ethers.constants.AddressZero; // Sin resolver custom
const revocable = true; // Las attestations pueden revocarse

const tx = await schemaRegistry.register({
  schema,
  resolverAddress,
  revocable
});

await tx.wait();
console.log('Schema UID:', tx.data); // Guarda este UID
```

**Emitiendo attestations**:

Una vez registrado el schema, puedes emitir attestations referenciando su UID.

```typescript
import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';

const easAddress = '0x...'; // Address varía por chain
const eas = new EAS(easAddress);
eas.connect(signer);

const schemaUID = '0x...'; // UID del schema registrado

// Codificar datos según el schema
const schemaEncoder = new SchemaEncoder(
  'string course,uint8 grade,uint32 completionDate'
);

const encodedData = schemaEncoder.encodeData([
  { name: 'course', value: 'Solidity Development', type: 'string' },
  { name: 'grade', value: 95, type: 'uint8' },
  { name: 'completionDate', value: Math.floor(Date.now() / 1000), type: 'uint32' }
]);

// Emitir attestation on-chain
const tx = await eas.attest({
  schema: schemaUID,
  data: {
    recipient: '0xStudentAddress...',
    expirationTime: 0, // Sin expiración
    revocable: true,
    data: encodedData
  }
});

const attestationUID = await tx.wait();
console.log('Attestation UID:', attestationUID);
```

**Verificando attestations**:

```typescript
// Obtener attestation por UID
const attestation = await eas.getAttestation(attestationUID);

console.log('Emitida a:', attestation.recipient);
console.log('Emitida por:', attestation.attester);
console.log('Schema:', attestation.schema);
console.log('Revocada:', attestation.revocationTime !== 0);

// Decodificar datos
const decodedData = schemaEncoder.decodeData(attestation.data);
console.log('Course:', decodedData.find(d => d.name === 'course').value);
console.log('Grade:', decodedData.find(d => d.name === 'grade').value);
```

**Consultas avanzadas mediante GraphQL**:

EAS expone un subgraph que permite queries complejas sin llamar al contrato repetidamente.

```typescript
const query = `
  query GetUserAttestations($recipient: String!, $schemaId: String!) {
    attestations(
      where: {
        recipient: { equals: $recipient }
        schemaId: { equals: $schemaId }
        revoked: { equals: false }
      }
    ) {
      id
      attester
      recipient
      time
      data
    }
  }
`;

const response = await fetch(EAS_GRAPHQL_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query,
    variables: {
      recipient: '0xUserAddress...',
      schemaId: schemaUID
    }
  })
});

const { data } = await response.json();
console.log('Attestations:', data.attestations);
```

**Revocación**:

```typescript
await eas.revoke({
  schema: schemaUID,
  data: { uid: attestationUID }
});
```

Las attestations revocadas permanecen on-chain pero `revocationTime` se actualiza. Los verificadores deben siempre verificar `revocationTime === 0` antes de considerar una attestation válida.

## Implementando Verifiable Credentials con Veramo

Veramo es un framework modular para trabajar con DIDs y VCs off-chain, ideal para aplicaciones que requieren privacidad.

**Setup inicial del agente Veramo**:

```typescript
import {
  createAgent,
  IDataStore,
  IDataStoreORM,
  IDIDManager,
  IResolver,
  IKeyManager,
  ICredentialPlugin
} from '@veramo/core';
import { DIDManager } from '@veramo/did-manager';
import { EthrDIDProvider } from '@veramo/did-provider-ethr';
import { KeyManager } from '@veramo/key-manager';
import { KeyManagementSystem } from '@veramo/kms-local';
import { CredentialPlugin } from '@veramo/credential-w3c';
import { DIDResolverPlugin } from '@veramo/did-resolver';
import { Resolver } from 'did-resolver';
import { getResolver as ethrDidResolver } from 'ethr-did-resolver';

const agent = createAgent<
  IDIDManager & IKeyManager & IDataStore & IResolver & ICredentialPlugin
>({
  plugins: [
    new KeyManager({
      store: new MemoryKeyStore(),
      kms: {
        local: new KeyManagementSystem(new MemoryPrivateKeyStore())
      }
    }),
    new DIDManager({
      store: new MemoryDIDStore(),
      defaultProvider: 'did:ethr:sepolia',
      providers: {
        'did:ethr:sepolia': new EthrDIDProvider({
          defaultKms: 'local',
          network: 'sepolia',
          rpcUrl: SEPOLIA_RPC_URL
        })
      }
    }),
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID })
      })
    }),
    new CredentialPlugin()
  ]
});
```

**Creando DIDs**:

```typescript
// Crear DID para el emisor
const issuerDID = await agent.didManagerCreate({
  provider: 'did:ethr:sepolia',
  alias: 'university-issuer'
});

// Crear DID para el titular
const holderDID = await agent.didManagerCreate({
  provider: 'did:ethr:sepolia',
  alias: 'student-holder'
});

console.log('Issuer DID:', issuerDID.did);
console.log('Holder DID:', holderDID.did);
```

**Emitiendo Verifiable Credentials**:

```typescript
const credential = await agent.createVerifiableCredential({
  credential: {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiableCredential', 'UniversityDegreeCredential'],
    issuer: { id: issuerDID.did },
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      id: holderDID.did,
      degree: {
        type: 'BachelorDegree',
        name: 'Bachelor of Science in Computer Science',
        university: 'Example University'
      },
      graduationDate: '2024-06-15',
      gpa: 3.8
    }
  },
  proofFormat: 'jwt' // O 'lds' para JSON-LD signatures
});

// Guardar VC en wallet del usuario (típicamente como archivo JSON)
console.log('Verifiable Credential:', credential);
```

**Verificando Verifiable Credentials**:

```typescript
const verificationResult = await agent.verifyCredential({
  credential: credential
});

if (verificationResult.verified) {
  console.log('Credential is valid!');
  console.log('Issued by:', verificationResult.issuer);
  console.log('Holder:', verificationResult.credentialSubject.id);
} else {
  console.log('Verification failed:', verificationResult.error);
}
```

**Creando Verifiable Presentations**:

Las presentations permiten al titular presentar selectivamente múltiples VCs a un verificador.

```typescript
const presentation = await agent.createVerifiablePresentation({
  presentation: {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiablePresentation'],
    holder: holderDID.did,
    verifiableCredential: [credential] // Puede incluir múltiples VCs
  },
  proofFormat: 'jwt',
  domain: 'example-verifier.com', // Opcional: vincula a verificador específico
  challenge: 'nonce-from-verifier' // Previene replay
});

// Enviar presentation al verificador
```

**Verificación de presentations**:

```typescript
const presentationVerification = await agent.verifyPresentation({
  presentation: presentation,
  domain: 'example-verifier.com',
  challenge: 'nonce-from-verifier'
});

if (presentationVerification.verified) {
  // Extraer y validar claims de las credenciales incluidas
  const credentials = presentationVerification.verifiableCredential;
  credentials.forEach(cred => {
    console.log('Degree:', cred.credentialSubject.degree.name);
    console.log('GPA:', cred.credentialSubject.gpa);
  });
}
```

## Implementando WalletConnect para mobile-desktop

WalletConnect permite que aplicaciones web se comuniquen con wallets móviles mediante códigos QR y bridge servers.

**Setup con Web3Modal v3**:

```typescript
// app/providers.tsx
'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'viem/chains';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

const metadata = {
  name: 'My Web3 App',
  description: 'Connect your wallet',
  url: 'https://myapp.com',
  icons: ['https://myapp.com/icon.png']
};

const chains = [mainnet, polygon];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export function Providers({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
```

**Componente de conexión**:

```typescript
// components/ConnectButton.tsx
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount, useDisconnect } from 'wagmi';

export function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        <p>Connected: {address}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return <button onClick={() => open()}>Connect Wallet</button>;
}
```

Cuando el usuario hace clic en "Connect Wallet", Web3Modal muestra opciones de wallets. Si elige WalletConnect, aparece un código QR. El usuario escanea con su wallet móvil, aprueba la conexión, y la sesión se establece. Las solicitudes de firma se enrutan automáticamente a través del bridge.

## Integrando Gitcoin Passport

Gitcoin Passport permite verificar que usuarios son humanos únicos mediante scores agregados de múltiples stamps.

**Obteniendo el score de un usuario**:

```typescript
const SCORER_API_KEY = process.env.GITCOIN_SCORER_API_KEY;
const SCORER_ID = process.env.GITCOIN_SCORER_ID;

async function getPassportScore(address: string) {
  const response = await fetch(
    `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${address}`,
    {
      headers: {
        'X-API-Key': SCORER_API_KEY,
        'Accept': 'application/json'
      }
    }
  );

  const data = await response.json();
  
  return {
    score: data.score,
    lastScoreTimestamp: data.last_score_timestamp,
    status: data.status,
    evidence: data.evidence // Stamps que contribuyen al score
  };
}
```

**Verificando umbral mínimo**:

```typescript
const MIN_PASSPORT_SCORE = 20;

app.post('/api/claim-airdrop', async (req, res) => {
  const { address } = req.body;
  
  const passportData = await getPassportScore(address);
  
  if (passportData.score < MIN_PASSPORT_SCORE) {
    return res.status(403).json({
      error: 'Insufficient Passport score',
      required: MIN_PASSPORT_SCORE,
      current: passportData.score
    });
  }
  
  // Proceder con airdrop
});
```

**Solicitando actualización de score**:

```typescript
async function submitPassport(address: string) {
  const response = await fetch(
    `https://api.scorer.gitcoin.co/registry/submit-passport`,
    {
      method: 'POST',
      headers: {
        'X-API-Key': SCORER_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        address,
        scorer_id: SCORER_ID
      })
    }
  );

  return response.json();
}
```

Esto inicia recálculo del score si el usuario agregó nuevos stamps recientemente.

## Privacidad con Zero-Knowledge: Privado ID

Privado ID permite probar atributos sin revelar datos subyacentes mediante ZK-SNARKs.

**Flujo de implementación**:

La implementación completa de Privado ID requiere infraestructura significativa: emisores que corren nodos Privado, usuarios con wallets Privado ID compatibles, y verificadores que validan ZK-proofs. Para integraciones de producción, consulta la [documentación oficial de Privado ID](https://docs.privado.id/).

**Ejemplo conceptual de verificación**:

```typescript
// Verificar que usuario es mayor de 18 sin conocer edad exacta
app.post('/api/verify-age', async (req, res) => {
  const { proof, publicSignals } = req.body;
  
  // Verificar ZK-proof
  const isValid = await verifyPrivadoProof({
    proof,
    publicSignals,
    verificationKey: AGE_VERIFICATION_KEY
  });
  
  if (!isValid) {
    return res.status(403).json({ error: 'Invalid proof' });
  }
  
  // El proof confirmó age >= 18 sin revelar edad exacta
  // Emitir attestation on-chain simple
  await eas.attest({
    schema: AGE_VERIFIED_SCHEMA,
    data: {
      recipient: publicSignals.userAddress,
      data: encodeData([{ name: 'over18', value: true, type: 'bool' }])
    }
  });
  
  res.json({ verified: true });
});
```

## Testing y desarrollo local

**Hardhat para contratos de identidad**:

```javascript
// hardhat.config.js
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
```

```javascript
// test/DIDRegistry.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DID Registry", function() {
  it("Should register and resolve DIDs", async function() {
    const DIDRegistry = await ethers.getContractFactory("ERC1056");
    const registry = await DIDRegistry.deploy();
    await registry.deployed();

    const [owner] = await ethers.getSigners();
    
    // Registrar DID
    await registry.setAttribute(
      owner.address,
      ethers.utils.formatBytes32String("did/pub/Ed25519"),
      "0x1234...",
      86400
    );

    // Resolver atributos
    const events = await registry.queryFilter(
      registry.filters.DIDAttributeChanged(owner.address)
    );
    
    expect(events.length).to.equal(1);
  });
});
```

**Anvil para testing rápido**:

```bash
# Iniciar node local
anvil --fork-url $MAINNET_RPC_URL --fork-block-number 18000000

# Desplegar contratos
forge create src/CredentialRegistry.sol:CredentialRegistry \
  --rpc-url http://localhost:8545 \
  --private-key $ANVIL_PRIVATE_KEY
```

## Monitoreo y analytics

**Rastreando eventos de attestation**:

```typescript
import { ethers } from 'ethers';

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const easContract = new ethers.Contract(EAS_ADDRESS, EAS_ABI, provider);

// Escuchar attestations en tiempo real
easContract.on('Attested', (recipient, attester, uid, schema) => {
  console.log(`New attestation: ${uid}`);
  console.log(`  Issued to: ${recipient}`);
  console.log(`  Issued by: ${attester}`);
  console.log(`  Schema: ${schema}`);
  
  // Almacenar en analytics database
  analytics.track('attestation_issued', {
    uid,
    recipient,
    attester,
    schema
  });
});
```

**Métricas de adopción de identidad**:

```typescript
// Rastrear wallets únicas que completaron SIWE
app.post('/api/auth/verify', async (req, res) => {
  // ... verificación SIWE ...
  
  await analytics.identify(address, {
    lastLogin: new Date(),
    loginMethod: 'siwe'
  });
  
  await analytics.track('user_authenticated', {
    address,
    method: 'siwe'
  });
});
```

## Buenas prácticas de producción

**Gestión de claves para emisores**:

Nunca almacenes claves privadas de emisores en código o variables de entorno expuestas. Usa servicios de gestión de claves como AWS KMS, Google Cloud KMS, o Azure Key Vault. Para emisión de credenciales críticas, implementa multi-sig donde múltiples firmantes deben aprobar emisiones.

**Rate limiting y prevención de spam**:

Los atacantes pueden intentar spam de solicitudes de attestation o verificación. Implementa rate limiting por dirección:

```typescript
import rateLimit from 'express-rate-limit';

const attestationLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Máximo 5 attestations por ventana
  keyGenerator: (req) => req.body.address,
  message: 'Too many attestations requested'
});

app.post('/api/attest', attestationLimiter, async (req, res) => {
  // Emisión de attestation
});
```

**Caching de resoluciones DID**:

Resolver DIDs repetidamente es costoso. Implementa caching con invalidación inteligente:

```typescript
import NodeCache from 'node-cache';

const didCache = new NodeCache({ stdTTL: 3600 }); // 1 hora

async function resolveDID(did: string) {
  const cached = didCache.get(did);
  if (cached) return cached;
  
  const document = await agent.resolveDid({ didUrl: did });
  didCache.set(did, document);
  
  return document;
}
```

**Versionado de schemas**:

Los schemas de attestation evolucionan. Usa versionado explícito en nombres:

```typescript
const SCHEMA_V1 = 'string name,uint8 age';
const SCHEMA_V2 = 'string name,uint8 age,string country';

// Registrar ambos schemas y referenciar por versión
const schemaV1UID = await registerSchema(SCHEMA_V1);
const schemaV2UID = await registerSchema(SCHEMA_V2);

// Código puede manejar ambas versiones durante migración
function decodeAttestation(attestation) {
  if (attestation.schema === schemaV1UID) {
    return decodeV1(attestation.data);
  } else if (attestation.schema === schemaV2UID) {
    return decodeV2(attestation.data);
  }
}
```

## Ecosistema de herramientas para desarrolladores

Si estás construyendo aplicaciones que utilizan identidad descentralizada, existen varias herramientas y frameworks que simplifican la implementación.

**Spruce ID**:

[SpruceID](https://spruceid.com/) es un toolkit open-source para implementar Sign-In With Ethereum y gestión de credenciales verificables. Proporciona librerías en JavaScript, Rust, y otros lenguajes para generar, verificar y gestionar DIDs y VCs.

Su proyecto [Kepler](https://spruceid.dev/kepler/kepler-overview) es un sistema experimental de almacenamiento descentralizado enfocado en datos de identidad y credenciales. Aunque promete complementar soluciones como Ceramic proporcionando otra opción para datos que usuarios necesitan controlar, está en fase de desarrollo activo y no ha alcanzado adopción mainstream en producción.

La herramienta más madura de Spruce es [DIDKit](https://spruceid.dev/didkit/didkit), un kit multiplataforma para trabajar con DIDs que funciona en web, mobile, y backend, facilitando integración de identidad descentralizada en aplicaciones existentes.

**Veramo**:

[Veramo](https://veramo.io/) es un framework JavaScript modular para construir aplicaciones con identidad descentralizada. Proporciona plugins para diferentes métodos DID (ethr, web, key, ion), diferentes formatos de credenciales (JWT, JSON-LD), y diferentes mecanismos de almacenamiento.

La arquitectura plugin de Veramo significa que puedes comenzar simple con `did:key` y luego migrar a `did:ethr` o `did:ion` cambiando configuración, no código. Esto reduce lock-in y permite evolución gradual de tu arquitectura de identidad.

Veramo incluye agentes que manejan el ciclo de vida completo de identidades y credenciales: creación de DIDs, emisión de VCs, presentación de credenciales, verificación de firmas, y almacenamiento seguro. Esto abstrae complejidad criptográfica, permitiendo que desarrolladores se enfoquen en lógica de negocio.

**Ceramic SDK y ComposeDB**:

Para aplicaciones que necesitan almacenar datos de perfil o identidad mutables, [ComposeDB](https://composedb.js.org/) se ha convertido en la forma principal de trabajar con Ceramic Network. ComposeDB proporciona una capa de base de datos con queries GraphQL sobre los streams de datos descentralizados de Ceramic, haciendo que trabajar con datos de identidad se sienta similar a bases de datos tradicionales pero con las ventajas de descentralización y control del usuario. Para casos de uso más avanzados o de bajo nivel, el [Ceramic SDK](https://developers.ceramic.network/) permite trabajar directamente con streams.

Ceramic se integra nativamente con DIDs, permitiendo que solo el propietario del DID pueda actualizar sus datos mientras cualquiera puede leerlos (o solo ciertas partes si implementas encriptación selectiva).

**Librerías de wallets y conexión**:

Para implementar conexión de wallets y autenticación, el ecosistema [Viem/wagmi](https://wagmi.sh/) se ha consolidado como el stack más usado en 2025-2026. [wagmi](https://wagmi.sh/) proporciona React hooks para Ethereum construidos sobre [Viem](https://viem.sh/), una librería TypeScript de bajo nivel para interactuar con Ethereum. Otras opciones incluyen [web3-react](https://github.com/Uniswap/web3-react) y [RainbowKit](https://www.rainbowkit.com/), que también puede integrarse con wagmi para proporcionar UX mejorada.

Estas herramientas manejan la complejidad de conectar con múltiples wallets (MetaMask, WalletConnect, Coinbase Wallet, etc.), gestionar sesiones, detectar cambios de red, y proporcionar UX pulida con componentes pre-construidos.

Para Sign-In With Ethereum específicamente, la librería [siwe](https://docs.login.xyz/) implementa el estándar EIP-4361, proporcionando funciones para generar mensajes de autenticación, verificar firmas, y gestionar sesiones.

**Testing y desarrollo**:

Para desarrollo local, [Hardhat](https://hardhat.org/) es el framework estándar actual para desplegar y probar contratos de identidad en redes de prueba locales. [Anvil](https://book.getfoundry.sh/anvil/) (parte de Foundry) se ha vuelto muy popular como nodo local de Ethereum ultrarrápido para testing. Ganache, aunque históricamente importante, está en mantenimiento y ya no es la opción recomendada.

Para DIDs y credenciales, puedes usar `did:key` durante desarrollo porque no requiere infraestructura externa, luego migrar a métodos más robustos en producción. Frameworks como Veramo facilitan este cambio mediante configuración.

## Recursos adicionales

**Documentación oficial**:

- [EAS Docs](https://docs.attest.sh/)
- [Veramo Documentation](https://veramo.io/docs/basics/introduction)
- [SIWE Specification](https://login.xyz/)
- [WalletConnect Docs](https://docs.walletconnect.com/)
- [Privado ID Developer Guide](https://docs.privado.id/)

**Ejemplos de código**:

- [EAS Examples](https://github.com/ethereum-attestation-service/eas-sdk)
- [Veramo Examples](https://github.com/uport-project/veramo/tree/next/packages/examples)
- [SIWE Examples](https://github.com/spruceid/siwe)

**Herramientas de desarrollo**:

- [EAS Schema Builder](https://sepolia.easscan.org/schema/create)
- [DID Resolver Universal](https://dev.uniresolver.io/)
- [JWT.io](https://jwt.io/) para inspeccionar VCs en formato JWT
