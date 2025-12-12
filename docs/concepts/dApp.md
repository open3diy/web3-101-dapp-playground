# Arquitectura de dApps (Aplicaciones Descentralizadas)

## Introducción

Una dApp (Decentralized Application) es una aplicación que opera en una red descentralizada, eliminando puntos únicos de fallo y conflictos de interés. La clave en la definición de una dApp es la utilización de tecnología blockchain como capa de backend y consenso.

## Componentes Principales de una dApp Moderna

### 1. Frontend (UI Layer)

Opciones de hosting:

- Centralizado: Servidores tradicionales (AWS, Vercel, Netlify)
- Descentralizado: IPFS, Arweave, Fleek
- Híbrido: CDN tradicional con hash IPFS como backup

Stack tecnológico actual (2024-2025):

- Frameworks: React, Next.js, Vue, SvelteKit
- Librerías Web3:
  - viem - TypeScript interface para Ethereum (reemplazo moderno de ethers.js)
  - wagmi - React Hooks para Ethereum
  - web3.js - Librería clásica (legacy)
- Conexión de wallets:
  - RainbowKit - UI kit para conexión de wallets
  - WalletConnect v2 - Estándar para mobile wallets
  - Web3Modal - Alternativa multi-chain
- Componentes UI: shadcn/ui, daisyUI, Chakra UI con soporte Web3

Consideraciones GDPR y privacidad:

- No almacenar datos personales on-chain sin cifrado
- Usar direcciones públicas (pseudónimas, no anónimas)
- Implementar right-to-be-forgotten mediante referencias off-chain
- Considerar MiCA (Markets in Crypto-Assets) para cumplimiento en UE

### 2. Capa de Interacción (Web3 APIs)

Proveedores RPC:

- Alchemy - RPC robusto con enhanced APIs
- Infura - Clásico y confiable
- QuickNode - Múltiples chains
- Ankr - RPC público y gratuito
- Nodos propios - Máximo control (Geth, Erigon, Reth)

Funciones principales:

- Conectar wallets (MetaMask, WalletConnect, Coinbase Wallet)
- Leer estado de contratos
- Enviar transacciones firmadas
- Escuchar eventos de blockchain
- Gestión de gas y estimaciones

Account Abstraction (ERC-4337):

- Carteras inteligentes: Safe, ZeroDev, Biconomy
- Gasless transactions: Meta-transactions con relayers
- Batch transactions: Múltiples operaciones en una sola
- Social recovery: Recuperación sin seed phrases

### 3. Capa de Almacenamiento y Datos

Blockchain (estado on-chain):

- Contratos inteligentes
- Tokens (ERC-20, ERC-721, ERC-1155)
- Registros inmutables
- Eventos (logs)

Almacenamiento descentralizado off-chain:

- IPFS:
  - Content-addressed storage
  - Pinning services: Pinata, NFT.Storage, Web3.Storage
  - IPNS para contenido mutable
- Arweave:
  - Almacenamiento permanente con pago único
  - Bundlr Network para uploads
- Filecoin:
  - Almacenamiento incentivado
  - Integración con IPFS

Bases de datos descentralizadas:

- Ceramic Network: Streams de datos mutables
- Gun.js: Base de datos descentralizada P2P
- OrbitDB: DB sobre IPFS
- Tableland: SQL en blockchain

Indexación y queries:

- The Graph: Protocolo de indexación para queries GraphQL
  - Subgraphs para eventos de contratos
  - Hosted Service vs Decentralized Network
- Covalent: APIs para datos multi-chain
- Moralis: Backend-as-a-Service Web3
- Dune Analytics: Analytics on-chain

### 4. Capa Lógica (Smart Contracts)

Entorno de desarrollo:

Lenguajes:

- Solidity (EVM estándar)
- Vyper (seguridad enfocada, Python-like)
- Rust (Solana, NEAR, Polkadot)
- Move (Aptos, Sui)

Frameworks:

- Foundry: Rápido, escrito en Rust, testing robusto
- Hardhat: Ecosistema maduro, plugins extensos
- Truffle: Clásico (menos usado actualmente)
- Remix: IDE online para prototipado

Scaffolding:

- Scaffold-ETH 2: Stack completo React + Hardhat + Foundry
- create-web3-dapp: CLI para iniciar proyectos
- thirdweb CLI: Templates con SDKs integrados

Estándares de tokens:

- ERC-20: Tokens fungibles
- ERC-721: NFTs únicos
- ERC-1155: Multi-token (fungible + NFT)
- ERC-4626: Vaults tokenizados (DeFi)
- ERC-2981: Royalties NFT
- ERC-4337: Account Abstraction

Seguridad:

- Auditorías (OpenZeppelin, Trail of Bits, ConsenSys Diligence)
- Testing exhaustivo (unit, integration, fuzz, invariant)
- Herramientas: Slither, Mythril, Echidna, Certora
- Patrones seguros: Checks-Effects-Interactions, ReentrancyGuard

### 5. Escalabilidad y Layer 2

Soluciones L2 en Ethereum:

Optimistic Rollups:

- Optimism
- Arbitrum One & Nova
- Base (por Coinbase)

ZK-Rollups:

- zkSync Era
- Polygon zkEVM
- Starknet (StarkWare)
- Scroll

Otros:

- Validium: Polygon Miden (híbrido)
- Sidechains: Polygon PoS, Gnosis Chain

Consideraciones L2:

- Menor costo de gas (10-100x más barato)
- Mayor throughput (TPS)
- Bridge de assets entre L1 y L2
- Diferentes niveles de seguridad heredada

### 6. Oráculos e Interoperabilidad

Oráculos (datos off-chain → on-chain):

Chainlink:

- Price Feeds (DeFi)
- VRF (randomness verificable)
- Automation (Keepers)
- Functions (computación off-chain)
- CCIP (Cross-Chain Interoperability Protocol)

Otros oráculos:

- Pyth Network: Datos financieros de alta frecuencia
- API3: First-party oracles
- UMA: Optimistic oracle para datos arbitrarios
- Tellor: Oracle descentralizado resistente a censura

Cross-chain y bridges:

- LayerZero: Protocolo omnichain para mensajería
- Axelar: Red de interoperabilidad general
- Wormhole: Bridge multi-chain
- Connext: Bridge con HTLC
- Stargate: DEX cross-chain sobre LayerZero

### 7. Infraestructura Adicional

Identidad descentralizada:

- ENS (Ethereum Name Service)
- Lens Protocol (social graph)
- Ceramic DIDs
- WorldCoin (proof-of-personhood)

Notificaciones:

- EPNS/Push Protocol
- XMTP (mensajería Web3)

Analytics:

- Dune Analytics
- Nansen
- DeFiLlama
- DeBank

## Clasificación de dApps

### Tipo 1: Blockchain Propia

Tienen su propia red blockchain. Son la infraestructura base.

Ejemplos: Bitcoin, Ethereum, Solana, Cosmos Hub

### Tipo 2: Smart Contracts sobre Tipo 1

Usan blockchain existente (principalmente Ethereum). Implementan lógica mediante smart contracts.

Ejemplos: Uniswap, Aave, OpenSea, ENS

Este es el tipo más común y recomendado para la mayoría de proyectos.

### Tipo 3: Composición de dApps Tipo 2

Usan protocolos existentes como building blocks. Añaden smart contracts propios para lógica adicional.

Ejemplos:

- Yearn Finance (compone Aave, Compound, Curve)
- 1inch (agrega DEXs)
- Instadapp (DeFi automation)

## Cuando Necesitas Más que Smart Contracts

### Escenarios que Requieren Backend Adicional

Computación compleja o off-chain:

- Chainlink Functions (computación serverless)
- Cartesi (Linux runtime on-chain)
- iExec (computación descentralizada)
- Backend centralizado + Oracle para resultado on-chain

Almacenamiento masivo:

- IPFS + Pinning services
- Arweave para permanencia
- Filecoin para incentivos de almacenamiento
- Ceramic para datos mutables

Procesamiento de video/streaming:

- Livepeer: Protocolo descentralizado de video
- Theta Network: CDN descentralizada
- Backend centralizado + blockchain para pagos/DRM

Alta frecuencia de transacciones:

- State channels (Connext, Raiden)
- Layer 2 con alta throughput (zkSync, Starknet)
- App-specific chains (Cosmos SDK, Substrate)

### Blockchains para Aplicaciones Específicas

Cosmos SDK:

- Crea tu propia blockchain de aplicación específica
- Interoperabilidad vía IBC
- Soberanía completa sobre reglas de consenso
- Ejemplos: dYdX v4, Osmosis, Celestia

Polkadot/Substrate:

- Parachains con seguridad compartida
- Runtime personalizable en Rust
- XCM para cross-chain messaging

Avalanche Subnets:

- Subredes customizables
- Validadores propios
- Compliance y reglas personalizadas

## Limitaciones y Consideraciones Actuales

### Desafíos Técnicos

Experiencia de usuario:

- Onboarding de wallets complejo → Solucionado parcialmente con Account Abstraction
- Costos de gas variables → Mitigado con L2s y gasless transactions
- Tiempo de confirmación → Mejorado con L2s (confirmación <1s)

Desarrollo:

- Menor madurez que Web2 → Mejorando con Foundry, Scaffold-ETH 2
- Inmutabilidad de contratos → Patterns: Proxy upgradeable, Diamond pattern
- Testing complejo → Herramientas: Foundry fuzz testing, Echidna

Escalabilidad:

- Limitaciones de throughput → Resuelto con L2s y app-chains
- Costos en L1 → L2s ofrecen 100x reducción

### Estrategia de Adopción Gradual

Fase 1 - MVP:

- Smart contracts para lógica crítica (ownership, pagos)
- Backend centralizado para features complejas
- IPFS para assets estáticos

Fase 2 - Descentralización:

- Migrar lógica a L2 para costos menores
- Implementar The Graph para queries
- Account Abstraction para UX mejorada

Fase 3 - Full Decentralization:

- Oráculos para todas las integraciones externas
- Governance on-chain (DAO)
- Cross-chain expansion

## Stack Tecnológico Recomendado 2024-2025

### Para dApps Estándar (Tipo 2)

Frontend:

```typescript
Next.js 14 + TypeScript
+ wagmi v2 + viem
+ RainbowKit / Web3Modal
+ shadcn/ui
```

Smart Contracts:

```solidity
Solidity 0.8.24+
+ Foundry (testing & deployment)
+ OpenZeppelin Contracts
+ Hardhat (tasks & plugins)
```

Deployment:

```text
Ethereum Mainnet (L1) - assets de alto valor
+ Base / Optimism / Arbitrum (L2) - aplicación principal
```

Indexing:

```text
The Graph (subgraphs)
o Envio (alternativa más rápida)
```

Storage:

```text
IPFS + Pinata (metadata, imágenes)
Arweave (datos permanentes)
```

### Para dApps con Backend Complejo (Tipo 3)

Añadir:

```text
Chainlink Functions (computación off-chain)
LayerZero (cross-chain)
Ceramic (base de datos descentralizada)
Backend Node.js + Express (temporal, migrar gradualmente)
```

## Conclusión

El ecosistema Web3 ha madurado significativamente:

- L2s resuelven escalabilidad con costos 100x menores
- Account Abstraction mejora UX drásticamente
- Tooling moderno (Foundry, viem, wagmi) acelera desarrollo
- No necesitas crear tu blockchain en el 99.9% de casos
- Arquitectura híbrida (centralizado + blockchain) es válida para MVPs

Regla de oro: Empieza simple con smart contracts en un L2 establecido (Base, Arbitrum, Optimism) y descentraliza gradualmente según las necesidades del proyecto.

Última actualización: Noviembre 2024
