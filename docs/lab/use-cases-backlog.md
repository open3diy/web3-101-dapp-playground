## X. CASOS DE USO PRÁCTICOS

### Lanzo un Protocolo DeFi

1. Financiación: Gitcoin Grant (community) + Seed VC
2. Lanzamiento: LBP (price discovery) → IDO (liquidez)
3. Liquidez: 6 meses liquidity mining → transición a POL (Olympus Pro)
4. Gobernanza: Fase 1 Snapshot + Safe → Fase 2 Governor on-chain
5. Tokenomics: Fee switch + ve-model (lock para boost)

### Creo una DAO Social

1. Identidad: Lens Protocol (social graph) + ENS (nombres)
2. Membresía: Guild.xyz (token-gating) o NFT membership
3. Gobernanza: Snapshot (votación) + Tally (delegación)
4. Coordinación: Coordinape (peer rewards) + Dework (bounties)
5. Treasury: Safe multisig + Parcel (payroll automation)

### Construyo un Juego Web3

1. Assets: ERC-1155 (items) + ERC-721 (characters/land)
2. Escalabilidad: Immutable X (L2 ZK para NFTs) o Polygon
3. Marketplace: Seaport (OpenSea protocol) integrado in-game
4. Economía: Dual-token (governance GOV + utility GOLD)
5. Interoperabilidad: LayerZero (llevar NFTs cross-game)

---

## XI. PROTOCOLOS COMPOSABLES PARA DApps

### Por Caso de Uso del Smart Contract

#### Necesito aceptar pagos en mi DApp

##### Opción 1: Pagos simples en ETH/tokens

- Patrón: Recibir nativos o ERC-20 directamente.
- Implementación: Funciones `receive()` o `payable`.
- Dependencias: Ninguna.

##### Opción 2: Pagos con conversión automática

- Protocolo: **Uniswap V3 Router**.
- Uso: Un usuario paga con USDC y tu contrato recibe ETH en la misma transacción.
- Implementación: `exactInputSingle` o `exactOutputSingle`.

##### Opción 3: Pagos recurrentes (suscripciones)

- Protocolo: **Superfluid**.
- Patrón: *Streaming* de tokens por segundo (Constant Flow Agreement).
- Uso: Ideal para nóminas, suscripciones o alquileres.

##### Opción 4: Pagos sin gas para el usuario

- Protocolo: **ERC-4337 (Account Abstraction)**.
- Patrón: Un *Paymaster* (tu DApp) patrocina el gas del usuario.
- Implementaciones: Pimlico, Biconomy, Alchemy.

#### Necesito un precio de referencia (Oráculo)

##### Opción 1: Precios fiables y descentralizados

- Protocolo: **Chainlink Price Feeds**.
- Uso: Obtener precios robustos (ej. ETH/USD) para liquidaciones o lógica crítica.
- Patrón: Redes de oráculos descentralizadas que agregan datos de múltiples fuentes.

##### Opción 2: Precios nativos del DEX

- Protocolo: **Uniswap V3 TWAP** (Time-Weighted Average Price).
- Ventaja: Más barato que un oráculo externo.
- Riesgo: Susceptible a manipulación en pools con poca liquidez.

##### Opción 3: Precios de alta frecuencia para trading

- Protocolo: **Pyth Network**.
- Uso: Aplicaciones de trading, derivados y *perpetuals* que necesitan datos sub-segundo.
- Patrón: Modelo *pull* donde el usuario paga para actualizar el precio on-chain.

#### Necesito aleatoriedad verificable (VRF)

##### Opción 1: VRF como servicio

- Protocolo: **Chainlink VRF**.
- Patrón: Solicitas un número aleatorio y lo recibes en una transacción de *callback*.
- Uso: Loterías, sorteos, mentas de NFT y mecánicas de juegos.

##### Opción 2: Patrón Commit-Reveal

- Patrón: El usuario primero envía un *hash* de un secreto (commit) y luego lo revela (reveal).
- Ventaja: No depende de oráculos.
- Desventaja: Requiere dos transacciones y el usuario puede decidir no revelar si el resultado no le favorece.

#### Necesito gestionar la identidad o reputación

##### Opción 1: Verificar "humanidad" (resistencia a Sybil)

- Protocolo: **Gitcoin Passport**.
- Patrón: Agregador de "sellos" (redes sociales, ENS, BrightID) que genera un *score* de humanidad.
- Uso: Filtrar bots en airdrops o votaciones.

##### Opción 2: Nombres legibles

- Protocolo: **ENS (Ethereum Name Service)**.
- Uso: Convertir direcciones (`0x123...`) a nombres (`vitalik.eth`) y viceversa.
- Patrón: Sistema de DNS descentralizado.

##### Opción 3: Verificación de posesión de activos

- Patrón: Comprobar el balance de un usuario.
- Implementación: `balanceOf(address)` en contratos ERC-20, ERC-721 o ERC-1155.
- Uso: *Token-gating* para acceso a contenidos o comunidades.

##### Opción 4: Credenciales y atestaciones verificables

- Protocolo: **EAS (Ethereum Attestation Service)**.
- Patrón: Emitir y verificar *claims* firmados sobre cualquier cosa.
- Uso: Certificados, KYC, reputación, insignias.

#### Necesito intercambiar tokens

##### Opción 1: AMM simple

- Protocolo: **Uniswap V3 Router**.
- Uso: Swaps simples (`exactInputSingle`) o multi-hop (`exactInput`).
- Implementación: Tu contrato necesita aprobación para gastar los tokens del usuario.

##### Opción 2: Mejor precio (agregador)

- Protocolo: **1inch Aggregator**.
- Patrón: Divide el swap entre múltiples DEXs (Uniswap, Curve, etc.) para encontrar la mejor ruta.
- Implementación: Generalmente se consulta una API off-chain para la ruta y se ejecuta on-chain.

##### Opción 3: Swaps protegidos contra MEV

- Protocolo: **CoWSwap**.
- Patrón: Subastas por lotes donde *solvers* compiten para ejecutar la orden del usuario.
- Ventaja: Sin *slippage* y protección contra *front-running*.

#### Necesito ofrecer préstamos o pedir prestado

##### Opción 1: Pools de liquidez

- Protocolo: **Aave V3**.
- Patrón: Los usuarios depositan activos en un pool para ganar rendimiento y otros piden prestado contra ese colateral.
- Implementación: `supply()`, `borrow()`, `liquidationCall()`.

##### Opción 2: Tasas optimizadas (P2P)

- Protocolo: **Morpho**.
- Patrón: Capa de optimización sobre Aave/Compound que empareja prestamistas y prestatarios directamente (P2P) para ofrecer mejores tasas.

#### Necesito ofrecer staking o yield

##### Opción 1: Staking líquido de ETH

- Protocolo: **Lido**.
- Patrón: El usuario deposita ETH y recibe a cambio `stETH`, un token líquido que acumula recompensas de staking y puede usarse en DeFi.

##### Opción 2: Bóvedas de rendimiento (Yield Vaults)

- Protocolo: **Yearn Vaults (ERC-4626)**.
- Patrón: El usuario deposita en una bóveda que automáticamente invierte y auto-compone el rendimiento a través de estrategias complejas.

#### Necesito un marketplace de NFTs

##### Opción 1: Marketplace basado en órdenes

- Protocolo: **Seaport (de OpenSea)**.
- Patrón: Sistema de órdenes flexible que soporta subastas, ofertas por colección y pagos en ERC-20.
- Uso: La base para la mayoría de marketplaces de NFT.

##### Opción 2: AMM para NFTs

- Protocolo: **Sudoswap**.
- Patrón: Pools de liquidez para NFTs que permiten compra/venta instantánea usando curvas de precios.
- Ventaja: Liquidez inmediata sin necesidad de esperar un comprador.

#### Necesito un sistema de gobernanza

##### Opción 1: Votación on-chain

- Protocolo: **OpenZeppelin Governor**.
- Patrón: Framework modular para crear un ciclo de gobernanza completo: propuesta, votación y ejecución automática con *timelock*.

##### Opción 2: Votación sin gas (off-chain)

- Protocolo: **Snapshot**.
- Patrón: Los usuarios firman mensajes (votos) sin coste de gas. La ejecución es manual (a través de un multisig) o mediante un sistema optimista.

#### Necesito comunicación entre cadenas (cross-chain)

##### Opción 1: Mensajería genérica

- Protocolo: **LayerZero** o **Axelar**.
- Patrón: Envío de mensajes arbitrarios entre cadenas para sincronizar estado o ejecutar acciones.
- Uso: Tokens omnichain, gobernanza cross-chain.

##### Opción 2: Transferencia nativa de tokens

- Protocolo: **Circle CCTP (Cross-Chain Transfer Protocol)**.
- Patrón: Quema USDC en la cadena de origen y lo emite en la de destino.
- Ventaja: Transfiere USDC nativo, no una versión *wrapped*.

#### Necesito automatización (ejecución programada)

##### Opción 1: Keepers descentralizados

- Protocolo: **Chainlink Automation**.
- Patrón: Tu contrato expone una función `checkUpkeep` (condición) y `performUpkeep` (acción). Los nodos de Chainlink ejecutan la acción cuando la condición es verdadera.
- Uso: Cosechar recompensas, rebalancear índices, liquidaciones.

##### Opción 2: Relay-as-a-Service

- Protocolo: **Gelato Network**.
- Patrón: Servicio de relay que ejecuta transacciones en nombre de los usuarios.
- Uso: Permite transacciones sin gas, automatización y ejecución de lógica off-chain (Web3 Functions).

#### Necesito custodia segura (multisig)

##### Opción 1: Multisig estándar

- Protocolo: **Safe (antes Gnosis Safe)**.
- Patrón: Contrato que requiere M de N firmas para ejecutar una transacción.
- Uso: Estándar de facto para la gestión de tesorerías de DAOs y protocolos.

##### Opción 2: Carteras con recuperación social

- Protocolo: **Argent (Account Abstraction)**.
- Patrón: Permite a "guardianes" (otros wallets o personas) recuperar el acceso a la cuenta.
- Ventaja: Mejora la UX y reduce el riesgo de pérdida de claves.

#### Necesito fraccionar un NFT

##### Opción 1: NFT a ERC-20

- Protocolo: **Fractional.art**.
- Patrón: Bloquea un NFT en una bóveda y emite tokens ERC-20 que representan una parte de su propiedad.

##### Opción 2: Índices de NFTs

- Protocolo: **NFTX**.
- Patrón: Deposita NFTs de una colección en una bóveda y recibe un token fungible (vToken) que representa una participación en el *floor price* de la colección.

#### Necesito gestionar Airdrops o Vesting

##### Opción 1: Vesting de tokens

- Patrón: **Contrato de TokenVesting** (ej. de OpenZeppelin).
- Uso: Bloquear tokens para un equipo o inversores y liberarlos gradualmente según un calendario (lineal, con *cliff*, etc.).

##### Opción 2: Airdrops eficientes

- Patrón: **Merkle Distributor**.
- Uso: Generar un árbol de Merkle off-chain con las direcciones y montos del airdrop. Solo la raíz del árbol se almacena on-chain, ahorrando gas masivamente. Los usuarios reclaman sus tokens presentando una prueba de Merkle.

---

## XII. MATRIZ DE COMPOSABILIDAD

### Combinar protocolos para casos complejos

#### DApp de préstamos colateralizados con NFTs

```
1. NFT valuation: Chainlink Price Feeds (floor price)
2. Lending: Fork Aave (modificar collateral para ERC-721)
3. Liquidation: Integración Seaport (subastar NFT)
4. Oracle backup: Uniswap TWAP (NFT wrapped tokens)
```

#### Plataforma de crowdfunding con refunds automáticos

```
1. Pagos: Recibir ETH/ERC-20 directamente
2. Custody: Safe multisig (hasta goal alcanzado)
3. Refund automation: Chainlink Automation (si deadline pasa sin goal)
4. Governance: Snapshot (contributors votan uso de fondos)
```

#### Juego play-to-earn con economía sostenible

```
1. In-game items: ERC-1155 (fungibles + NFTs)
2. Marketplace: Seaport (players tradean entre sí)
3. Token swaps: Uniswap (GOLD token → ETH)
4. Staking rewards: Custom vault inspirado en Yearn
5. Anti-sybil: Gitcoin Passport (verificar humanidad)
```

#### DAO con tesorería diversificada

```
1. Multisig: Safe (custody)
2. Governance: Governor on-chain (proposals)
3. Yield: Yearn vaults (idle treasury)
4. DeFi exposure: Aave (lending), Uniswap V3 (LP)
5. Liquidez automática: Chainlink Automation (rebalanceos)
```

#### Marketplace de datos con pagos por uso

```
1. Subscripciones: Superfluid (streaming payments)
2. Identity: ENS (nombres legibles para proveedores)
3. Attestations: EAS (verificar calidad de datos)
4. Storage: No on-chain (IPFS/Arweave references)
5. Payments: Accept USDC via Circle CCTP (multi-chain)
```
