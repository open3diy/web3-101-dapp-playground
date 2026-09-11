# Casos de uso y solución práctica

> Outlinner de soluciones desde casos completos a parciales

## Lanar un Protocolo DeFi

- Financiación: Gitcoin Grant (community) + Seed VC
- Lanzamiento: LBP (price discovery) → IDO (liquidez)
- Liquidez: 6 meses liquidity mining → transición a POL (Olympus Pro)
- Gobernanza: Fase 1 Snapshot + Safe → Fase 2 Governor on-chain
- Tokenomics: Fee switch + ve-model (lock para boost)

## Creo una DAO Social

- Identidad: Lens Protocol (social graph) + ENS (nombres)
- Membresía: Guild.xyz (token-gating) o NFT membership
- Gobernanza: Snapshot (votación) + Tally (delegación)
- Coordinación: Coordinape (peer rewards) + Dework (bounties)
- Treasury: Safe multisig + Parcel (payroll automation)

## Construyo un Juego Web3

- Assets: ERC-1155 (items) + ERC-721 (characters/land)
- Escalabilidad: Immutable X (L2 ZK para NFTs) o Polygon
- Marketplace: Seaport (OpenSea protocol) integrado in-game
- Economía: Dual-token (governance GOV + utility GOLD)
- Interoperabilidad: LayerZero (llevar NFTs cross-game)

## DApp de préstamos colateralizados con NFTs

- NFT valuation: Chainlink Price Feeds (floor price)
- Lending: Fork Aave (modificar collateral para ERC-721)
- Liquidation: Integración Seaport (subastar NFT)
- Oracle backup: Uniswap TWAP (NFT wrapped tokens)

## Plataforma de crowdfunding con refunds automáticos

- Pagos: Recibir ETH/ERC-20 directamente
- Custody: Safe multisig (hasta goal alcanzado)
- Refund automation: Chainlink Automation (si deadline pasa sin goal)
- Governance: Snapshot (contributors votan uso de fondos)

## Juego play-to-earn con economía sostenible

- In-game items: ERC-1155 (fungibles + NFTs)
- Marketplace: Seaport (players tradean entre sí)
- Token swaps: Uniswap (GOLD token → ETH)
- Staking rewards: Custom vault inspirado en Yearn
- Anti-sybil: Gitcoin Passport (verificar humanidad)

## DAO con tesorería diversificada

- Multisig: Safe (custody)
- Governance: Governor on-chain (proposals)
- Yield: Yearn vaults (idle treasury)
- DeFi exposure: Aave (lending), Uniswap V3 (LP)
- Liquidez automática: Chainlink Automation (rebalanceos)

## Marketplace de datos con pagos por uso

- Subscripciones: Superfluid (streaming payments)
- Identity: ENS (nombres legibles para proveedores)
- Attestations: EAS (verificar calidad de datos)
- Storage: No on-chain (IPFS/Arweave references)
- Payments: Accept USDC via Circle CCTP (multi-chain)

## Necesito aceptar pagos en mi DApp

- Opción 1: Pagos simples en ETH/tokens
  - Estándar: **ERC-20** (tokens fungibles).
  - Patrón: Recibir nativos o ERC-20 directamente.
  - Implementación: Funciones `receive()` o `payable`.
  - Dependencias: Ninguna.
- Opción 2: Pagos con conversión automática
  - Protocolo: **Uniswap V3 Router**.
  - Uso: Un usuario paga con USDC y tu contrato recibe ETH en la misma transacción.
  - Implementación: `exactInputSingle` o `exactOutputSingle`.
- Opción 3: Pagos recurrentes (suscripciones)
  - Protocolo: **Superfluid**.
  - Patrón: *Streaming* de tokens por segundo (Constant Flow Agreement).
  - Uso: Ideal para nóminas, suscripciones o alquileres.
- Opción 4: Pagos sin gas para el usuario
  - Estándar: **ERC-4337** (Account Abstraction).
  - Patrón: Un *Paymaster* (tu DApp) patrocina el gas del usuario.
  - Implementaciones: Pimlico, Biconomy, Alchemy.
- Opción 5: Pagos sin aprobación previa (gasless approve)
  - Estándar: **ERC-2612** (Permit).
  - Patrón: Firma off-chain para aprobar tokens, ejecutada en la misma transacción del pago.
  - Ventaja: Ahorra una transacción de `approve()` y mejora UX.
  - Uso: DAI, USDC y otros tokens compatibles.

## Necesito un precio de referencia (Oráculo)

- Opción 1: Precios fiables y descentralizados
  - Protocolo: **Chainlink Price Feeds**.
  - Uso: Obtener precios robustos (ej. ETH/USD) para liquidaciones o lógica crítica.
  - Patrón: Redes de oráculos descentralizadas que agregan datos de múltiples fuentes.
- Opción 2: Precios nativos del DEX
  - Protocolo: **Uniswap V3 TWAP** (Time-Weighted Average Price).
  - Ventaja: Más barato que un oráculo externo.
  - Riesgo: Susceptible a manipulación en pools con poca liquidez.
- Opción 3: Precios de alta frecuencia para trading
  - Protocolo: **Pyth Network**.
  - Uso: Aplicaciones de trading, derivados y *perpetuals* que necesitan datos sub-segundo.
  - Patrón: Modelo *pull* donde el usuario paga para actualizar el precio on-chain.

## Necesito aleatoriedad verificable (VRF)

- Opción 1: VRF como servicio
  - Protocolo: **Chainlink VRF**.
  - Patrón: Solicitas un número aleatorio y lo recibes en una transacción de *callback*.
  - Uso: Loterías, sorteos, mentas de NFT y mecánicas de juegos.
- Opción 2: Patrón Commit-Reveal
  - Patrón: El usuario primero envía un *hash* de un secreto (commit) y luego lo revela (reveal).
  - Ventaja: No depende de oráculos.
  - Desventaja: Requiere dos transacciones y el usuario puede decidir no revelar si el resultado no le favorece.

## Necesito gestionar la identidad o reputación

- Opción 1: Verificar "humanidad" (resistencia a Sybil)
  - Protocolo: **Gitcoin Passport**.
  - Patrón: Agregador de "sellos" (redes sociales, ENS, BrightID) que genera un *score* de humanidad.
  - Uso: Filtrar bots en airdrops o votaciones.
- Opción 2: Nombres legibles
  - Protocolo: **ENS (Ethereum Name Service)**.
  - Uso: Convertir direcciones (`0x123...`) a nombres (`vitalik.eth`) y viceversa.
  - Patrón: Sistema de DNS descentralizado.
- Opción 3: Verificación de posesión de activos
  - Estándares: **ERC-20**, **ERC-721**, **ERC-1155**.
  - Patrón: Comprobar el balance de un usuario.
  - Implementación: `balanceOf(address)` en contratos de tokens.
  - Uso: *Token-gating* para acceso a contenidos o comunidades.
- Opción 5: Detección de interfaces (verificar compatibilidad)
  - Estándar: **ERC-165** (Interface Detection).
  - Patrón: Verificar si un contrato implementa una interfaz específica antes de interactuar.
  - Implementación: `supportsInterface(bytes4 interfaceId)`.
  - Uso: Validar compatibilidad ERC-721, ERC-1155 u otras interfaces antes de llamar funciones.
- Opción 4: Credenciales y atestaciones verificables
  - Protocolo: **EAS (Ethereum Attestation Service)**.
  - Patrón: Emitir y verificar *claims* firmados sobre cualquier cosa.
  - Uso: Certificados, KYC, reputación, insignias.

## Necesito intercambiar tokens

- Opción 1: AMM simple
  - Protocolo: **Uniswap V3 Router**.
  - Uso: Swaps simples (`exactInputSingle`) o multi-hop (`exactInput`).
  - Implementación: Tu contrato necesita aprobación para gastar los tokens del usuario.
- Opción 2: Mejor precio (agregador)
  - Protocolo: **1inch Aggregator**.
  - Patrón: Divide el swap entre múltiples DEXs (Uniswap, Curve, etc.) para encontrar la mejor ruta.
  - Implementación: Generalmente se consulta una API off-chain para la ruta y se ejecuta on-chain.
- Opción 3: Swaps protegidos contra MEV
  - Protocolo: **CoWSwap**.
  - Patrón: Subastas por lotes donde *solvers* compiten para ejecutar la orden del usuario.
  - Ventaja: Sin *slippage* y protección contra *front-running*.

## Necesito ofrecer préstamos o pedir prestado

- Opción 1: Pools de liquidez
  - Protocolo: **Aave V3**.
  - Patrón: Los usuarios depositan activos en un pool para ganar rendimiento y otros piden prestado contra ese colateral.
  - Implementación: `supply()`, `borrow()`, `liquidationCall()`.
- Opción 2: Tasas optimizadas (P2P)
  - Protocolo: **Morpho**.
  - Patrón: Capa de optimización sobre Aave/Compound que empareja prestamistas y prestatarios directamente (P2P) para ofrecer mejores tasas.

## Necesito ofrecer staking o yield

- Opción 1: Staking líquido de ETH
  - Protocolo: **Lido**.
  - Patrón: El usuario deposita ETH y recibe a cambio `stETH`, un token líquido que acumula recompensas de staking y puede usarse en DeFi.
- Opción 2: Bóvedas de rendimiento (Yield Vaults)
  - Estándar: **ERC-4626** (Tokenized Vaults).
  - Protocolo: **Yearn Vaults**.
  - Patrón: El usuario deposita en una bóveda que automáticamente invierte y auto-compone el rendimiento a través de estrategias complejas.
  - Ventaja: Interfaz estandarizada para todas las vaults (deposit, withdraw, mint, redeem).

## Necesito un marketplace de NFTs

- Opción 1: Marketplace basado en órdenes
  - Protocolo: **Seaport (de OpenSea)**.
  - Patrón: Sistema de órdenes flexible que soporta subastas, ofertas por colección y pagos en ERC-20.
  - Uso: La base para la mayoría de marketplaces de NFT.
- Opción 2: AMM para NFTs
  - Protocolo: **Sudoswap**.
  - Patrón: Pools de liquidez para NFTs que permiten compra/venta instantánea usando curvas de precios.
  - Ventaja: Liquidez inmediata sin necesidad de esperar un comprador.

## Necesito un sistema de gobernanza

- Opción 1: Votación on-chain
  - Protocolo: **OpenZeppelin Governor**.
  - Patrón: Framework modular para crear un ciclo de gobernanza completo: propuesta, votación y ejecución automática con *timelock*.
- Opción 2: Votación sin gas (off-chain)
  - Protocolo: **Snapshot**.
  - Patrón: Los usuarios firman mensajes (votos) sin coste de gas. La ejecución es manual (a través de un multisig) o mediante un sistema optimista.

## Necesito comunicación entre cadenas (cross-chain)

- Opción 1: Mensajería genérica
  - Protocolo: **LayerZero** o **Axelar**.
  - Patrón: Envío de mensajes arbitrarios entre cadenas para sincronizar estado o ejecutar acciones.
  - Uso: Tokens omnichain, gobernanza cross-chain.
- Opción 2: Transferencia nativa de tokens
  - Protocolo: **Circle CCTP (Cross-Chain Transfer Protocol)**.
  - Patrón: Quema USDC en la cadena de origen y lo emite en la de destino.
  - Ventaja: Transfiere USDC nativo, no una versión *wrapped*.

## Necesito automatización (ejecución programada)

- Opción 1: Keepers descentralizados
  - Protocolo: **Chainlink Automation**.
  - Patrón: Tu contrato expone una función `checkUpkeep` (condición) y `performUpkeep` (acción). Los nodos de Chainlink ejecutan la acción cuando la condición es verdadera.
  - Uso: Cosechar recompensas, rebalancear índices, liquidaciones.
- Opción 2: Relay-as-a-Service
  - Protocolo: **Gelato Network**.
  - Patrón: Servicio de relay que ejecuta transacciones en nombre de los usuarios.
  - Uso: Permite transacciones sin gas, automatización y ejecución de lógica off-chain (Web3 Functions).

## Necesito custodia segura (multisig)

- Opción 1: Multisig estándar
  - Protocolo: **Safe (antes Gnosis Safe)**.
  - Patrón: Contrato que requiere M de N firmas para ejecutar una transacción.
  - Uso: Estándar de facto para la gestión de tesorerías de DAOs y protocolos.
- Opción 2: Carteras con recuperación social
  - Protocolo: **Argent (Account Abstraction)**.
  - Patrón: Permite a "guardianes" (otros wallets o personas) recuperar el acceso a la cuenta.
  - Ventaja: Mejora la UX y reduce el riesgo de pérdida de claves.

## Necesito fraccionar un NFT

- Opción 1: NFT a ERC-20
  - Estándares: **ERC-721** → **ERC-20**.
  - Protocolo: **Fractional.art**.
  - Patrón: Bloquea un NFT en una bóveda y emite tokens ERC-20 que representan una parte de su propiedad.
- Opción 2: Índices de NFTs
  - Estándares: **ERC-721** → **ERC-20**.
  - Protocolo: **NFTX**.
  - Patrón: Deposita NFTs de una colección en una bóveda y recibe un token fungible (vToken) que representa una participación en el *floor price* de la colección.

## Necesito gestionar Airdrops o Vesting

- Opción 1: Vesting de tokens
  - Estándar: **ERC-20** (tokens fungibles).
  - Patrón: **Contrato de TokenVesting** (ej. de OpenZeppelin).
  - Uso: Bloquear tokens para un equipo o inversores y liberarlos gradualmente según un calendario (lineal, con *cliff*, etc.).
- Opción 2: Airdrops eficientes
  - Estándar: **ERC-20** (tokens fungibles).
  - Patrón: **Merkle Distributor**.
  - Uso: Generar un árbol de Merkle off-chain con las direcciones y montos del airdrop. Solo la raíz del árbol se almacena on-chain, ahorrando gas masivamente. Los usuarios reclaman sus tokens presentando una prueba de Merkle.

## Necesito NFTs con royalties automáticas

- Opción 1: Royalties estandarizadas
  - Estándar: **ERC-2981** (NFT Royalty Standard).
  - Patrón: Función `royaltyInfo()` devuelve el destinatario y monto de royalties para cada venta.
  - Uso: Marketplaces compatibles pagan automáticamente royalties al creador original.
  - Ventaja: Estándar soportado por OpenSea, Rarible, LooksRare.
- Opción 2: Royalties on-chain forzadas
  - Protocolo: **Operator Filter Registry** (OpenSea).
  - Patrón: Bloquear transferencias a marketplaces que no respetan royalties.
  - Uso: Proteger ingresos de creadores ante marketplaces de royalties opcionales.

## Necesito tokens con funcionalidades avanzadas

- Opción 1: Tokens con hooks y operadores
  - Estándar: **ERC-777** (Advanced Token Standard).
  - Patrón: Callbacks (`tokensReceived`) y operadores autorizados para ejecutar lógica antes/después de transferencias.
  - Uso: Automatización de pagos, integración con smart contracts complejos.
  - Advertencia: Vulnerable a ataques de reentrancy si no se implementa correctamente.
- Opción 2: Compatibilidad con ERC-20
  - Patrón: ERC-777 mantiene compatibilidad hacia atrás con ERC-20.
  - Ventaja: Funciona con infraestructura DeFi existente.

## Necesito credenciales no transferibles (Soulbound)

- Opción 1: Tokens ligados al alma
  - Estándar: **ERC-5192** (Minimal Soulbound NFTs).
  - Patrón: NFTs que no pueden ser transferidos después de mintear.
  - Uso: Certificados educativos, credenciales profesionales, historial de reputación.
  - Implementación: Función `locked()` devuelve `true`, bloqueando transferencias.
- Opción 2: Soulbound con recuperación
  - Patrón: Permitir recuperación del token en caso de pérdida de wallet.
  - Implementación: Combinación de ERC-5192 con recuperación social (guardianes).

## Necesito tokens semi-fungibles (posiciones financieras)

- Opción 1: Tokens con metadata única y cantidad
  - Estándar: **ERC-3525** (Semi-Fungible Token).
  - Patrón: Cada token tiene un `slot` (categoría) y un `value` (cantidad). Tokens del mismo slot son intercambiables.
  - Uso: Bonos financieros, posiciones de liquidez con diferentes vencimientos, fracciones de bienes raíces.
- Opción 2: Composición de fungibles y NFTs
  - Alternativa: **ERC-1155** (Multi-Token).
  - Patrón: Un contrato puede emitir tanto tokens fungibles (cantidad > 1) como NFTs únicos (cantidad = 1).
  - Uso: Items de juegos (fungibles: monedas, consumibles; NFTs: armas únicas, personajes).

---

## Recursos adicionales

### Documentación oficial

- [Ethereum.org - Estándares de tokens](https://ethereum.org/en/developers/docs/standards/tokens/)
- [EIPs.ethereum.org - Propuestas oficiales](https://eips.ethereum.org/)
- [OpenZeppelin Docs - Guías de implementación](https://docs.openzeppelin.com/contracts/)

### Comunidades

- [Ethereum Magicians - Discusión de ERCs](https://ethereum-magicians.org/)
- [OpenZeppelin Forum - Soporte técnico](https://forum.openzeppelin.com/)
- [Ethereum Stack Exchange - Q&A](https://ethereum.stackexchange.com/)

---
