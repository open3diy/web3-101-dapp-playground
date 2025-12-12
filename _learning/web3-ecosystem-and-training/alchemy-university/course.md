# Ruta educativa Dapps: Alchemy University

Curso: <https://university.alchemy.com/>.

## Introducción

Este es el resumen del curso de formación sobre web3 ofrecido por Alchemy University. Es imprescindible para quienes desean convertirse en desarrolladores web3, ya que ofrece explicaciones detalladas y prácticas orientadas al aprendizaje aplicado.

Se recomienda realizar el curso completo, pero aquí tienes un resumen de los principales temas abordados.

## Enfoque del curso

El curso está orientado a desarrolladores que buscan comprender los aspectos técnicos y de bajo nivel de JavaScript y Solidity. Se ofrecen explicaciones fundamentales y prácticas específicas para fortalecer el conocimiento técnico y la capacidad de programación.

## Valoración

Es un curso esencial para quienes desean adquirir habilidades de programación en web3, pero también fundamental para cualquiera que quiera comprender los conceptos de web3.

Aunque en la práctica muchas de estas funciones ya están implementadas en librerías, el curso será relevante para programadores que necesiten resolver problemas o entender qué están utilizando.

Quizás peca de resumir ciertos aspectos clave de la arquitectura de Ethereum y los traslada directamente al ámbito de la programación, sin definir completamente el contexto y el propósito. Esto puede dificultar la comprensión global para quienes buscan una visión más amplia antes de profundizar en los detalles técnicos.

## Skills o habilidades adquiridas

## Apartados del curso

A continuación se presentan los capítulos, excluyendo las prácticas:

> Si quieres ver las prácticas y el contenido, accede al curso y hazlo!!!! es demasiado bajo nivel para explicarlo en este resumen.

### Welcome

Este módulo introductorio de Ethereum en Alchemy University explica los conceptos básicos de la blockchain de Ethereum, su funcionamiento y los motivos por los que es relevante en el ecosistema web3. Se abordan temas como la descentralización, los contratos inteligentes y la importancia de la red de nodos para el desarrollo de aplicaciones descentralizadas (Dapps).

**Enlaces de interés**:

- [ETHGlobal](https://ethglobal.com): Comunidad global que organiza hackathons y eventos para desarrolladores de Ethereum y web3.
- [OpenZeppelin](https://openzeppelin.com): Proveedor líder de herramientas y contratos inteligentes seguros para el desarrollo en blockchain.
- [Uniswap](https://uniswap.org): Plataforma de intercambio descentralizado (DEX) basada en Ethereum que permite el trading de tokens sin intermediarios.
- [OpenSea](https://opensea.io): Mercado líder para la compra, venta y exploración de NFTs en distintas blockchains.
- [Developer DAO](https://www.developerdao.com): Comunidad de desarrolladores que colaboran en proyectos web3 y fomentan el aprendizaje abierto.
- [Raid Guild](https://www.raidguild.org): Colectivo de desarrolladores y diseñadores especializados en servicios y productos web3.
- [Stader Labs](https://www.staderlabs.com): Plataforma que facilita el staking de criptomonedas y la gestión de activos digitales.
- [Solidity](https://soliditylang.org): Lenguaje de programación principal para escribir contratos inteligentes en Ethereum.
- [JSON-RPC Specification](https://www.jsonrpc.org/specification): Especificación estándar para la comunicación entre clientes y servidores en aplicaciones blockchain.

### Blockchain y Crypto

Este módulo explica por qué existen las blockchains y su papel en la creación de criptomonedas y contratos inteligentes. Presenta el concepto de consenso como la base para que una red de nodos acuerde un mismo estado de datos sin depender de una autoridad central. Explica cómo Bitcoin resolvió el problema de la confianza con criptografía y teoría de incentivos, y cómo Ethereum amplía la idea con contratos inteligentes que se ejecutan en una red descentralizada. Introduce también las funciones de hash criptográficas, pieza clave para la seguridad, integridad de datos y mecanismos de consenso como la prueba de trabajo.

**Enlaces de interés**:

- [Bitcoin Whitepaper](https://bitcoin.org/bitcoin.pdf): Documento original de Satoshi Nakamoto que describe el funcionamiento de Bitcoin y el uso de blockchain para resolver el problema de la confianza.
- [Ethereum](https://ethereum.org): Sitio oficial con documentación sobre la red, contratos inteligentes y herramientas de desarrollo.
- [Solidity](https://soliditylang.org): Lenguaje de programación para escribir contratos inteligentes en Ethereum.
- [Keccak-256 / SHA-3](https://keccak.team/): Información técnica sobre el algoritmo de hash utilizado en Ethereum.
- [Proof of Work](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/): Descripción del mecanismo de consenso basado en prueba de trabajo.
- [Have I Been Pwned](https://haveibeenpwned.com/): Herramienta para verificar si una dirección de correo electrónico o cuenta ha sido comprometida en filtraciones de datos. Es útil para entender la importancia de la seguridad y la protección de la identidad digital en el contexto de blockchain y criptomonedas.

### Criptografía de clave pública

Este módulo explica la evolución de la criptografía desde los sistemas de cifrado clásico y simétrico hasta el surgimiento de la criptografía de clave pública. Describe cómo antes de los años 70 la protección de mensajes dependía de claves compartidas y del secreto absoluto de la clave. En 1976 Whitfield Diffie, junto con Martin Hellman y Ralph Merkle, propuso el uso de una clave pública y una privada, permitiendo comunicaciones seguras sin un intercambio previo de claves. Se detallan las ventajas de este enfoque asimétrico, como la posibilidad de crear firmas digitales y de cifrar mensajes que solo el destinatario puede descifrar. Finalmente se presentan los principales algoritmos actuales: RSA, basado en la dificultad de factorizar números primos, y ECDSA, que emplea curvas elípticas y es usado por Bitcoin en la curva secp256k1.

**Enlaces de interés**:

- [Whitfield Diffie y Martin Hellman](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange): Descripción del intercambio de claves de Diffie-Hellman, base de la criptografía de clave pública.
- [RSA Algorithm](https://en.wikipedia.org/wiki/RSA_(cryptosystem)): Explicación del sistema RSA y su importancia en la seguridad informática.
- [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm): Detalles sobre el algoritmo de firma digital de curva elíptica.
- [P vs NP Problem](https://en.wikipedia.org/wiki/P_versus_NP_problem): Contexto del problema de complejidad que respalda la seguridad de RSA.
- [secp256k1](https://en.bitcoin.it/wiki/Secp256k1): Curva elíptica utilizada por Bitcoin para firmas digitales.
- [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1/tree/1.7.1): Implementación de la curva secp256k1 en JavaScript.

### Recursos complementarios en firmas digitales

Este texto agrupa recursos para profundizar en firmas digitales: explica ECDSA y su uso en la web, detalla cómo Bitcoin usa la curva secp256k1 y cómo derivan direcciones (incluyendo el checksum y Base58Check), cubre el intercambio de claves Diffie–Hellman y su papel en el handshake TLS, y ofrece referencias sobre RSA (con vídeos didácticos) y debates históricos sobre posibles puertas traseras en esquemas criptográficos. Es una lista práctica para complementar la parte teórica con lecturas y explicaciones más accesibles o más matemáticas según necesites.

**Enlaces de interés**:

- [Cloudflare — ¿Qué es ECDSA?](https://blog.cloudflare.com/ecdsa-the-digital-signature-algorithm-of-a-better-internet/): Artículo práctico que explica cómo se usa ECDSA en la web y en HTTPS.
- [ECDSA — Wikipedia](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm): Descripción técnica y matemáticas detrás de ECDSA.
- [secp256k1 — Bitcoin Wiki](https://en.bitcoin.it/wiki/Secp256k1): Detalles sobre la curva elíptica usada por Bitcoin.
- [Bitcoin Addresses — Bitcoin Wiki](https://en.bitcoin.it/wiki/Address): Diagrama y pasos sobre cómo se deriva una dirección desde la clave privada/pública.
- [Base58Check — Bitcoin Wiki](https://en.bitcoin.it/wiki/Base58Check): Explicación del formato Base58 y el checksum usado en direcciones Bitcoin.
- [Diffie–Hellman Key Exchange — Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange): Fundamentos del intercambio de claves que posibilitan los apretones de manos asimétricos.
- [TLS handshake](https://security.stackexchange.com/questions/41205/diffie-hellman-and-its-tls-ssl-usage/41226#41226): Cómo se usa Diffie–Hellman en el apretón de manos TLS y el paso a criptografía simétrica.
- [RSA — Wikipedia](https://en.wikipedia.org/wiki/RSA_(cryptosystem)): Resumen del algoritmo RSA y sus bases matemáticas.
- [Dual_EC_DRBG — Wikipedia (controversia de backdoor/aleatoriedad)](https://en.wikipedia.org/wiki/Dual_EC_DRBG): Contexto histórico sobre sospechas de puertas traseras criptográficas y problemas de generación de números aleatorios.
- [Eddie Woo — búsqueda de vídeos sobre RSA (YouTube)](https://www.youtube.com/results?search_query=Eddie+Woo+RSA): Dos vídeos recomendados de divulgación matemática que explican la aritmética detrás de RSA.

### Prueba de trabajo y minería

Este módulo explica cómo las redes blockchain logran consenso sin una autoridad central mediante la prueba de trabajo. Describe cómo los nodos, llamados mineros, compiten para añadir nuevos bloques resolviendo un rompecabezas criptográfico que exige hallar un hash por debajo de una dificultad objetivo. Detalla el proceso: ensamblar transacciones, variar una nonce, calcular el hash y verificar si cumple la dificultad. Resalta que el trabajo computacional garantiza que los bloques sean válidos, evita el doble gasto y mantiene la seguridad. También aborda el incentivo económico, donde los mineros reciben recompensas por el gasto energético y de hardware, y menciona que Ethereum migró a prueba de participación, mientras que Bitcoin sigue usando prueba de trabajo.

**Enlaces de interés**:

- [Proof of Work — Ethereum Docs](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/): Explicación oficial del mecanismo de consenso de prueba de trabajo.
- [Mining — Bitcoin Wiki](https://en.bitcoin.it/wiki/Mining): Detalles técnicos sobre el proceso de minería en la red Bitcoin.
- [Nonce — Bitcoin Wiki](https://en.bitcoin.it/wiki/Nonce): Concepto de nonce y su papel en la minería de bloques.
- [SHA-256 — Wikipedia](https://en.wikipedia.org/wiki/SHA-2): Descripción del algoritmo de hash usado en Bitcoin.
- [Nakamoto Consensus — Bitcoin Wiki](https://en.bitcoin.it/wiki/Consensus): Fundamentos del consenso basado en la cadena más larga y el trabajo acumulado.
- [Proof of Stake — Ethereum Docs](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/): Información sobre el mecanismo alternativo que Ethereum utiliza actualmente.

### Hashing y prueba de trabajo

Este módulo describe el concepto de prueba de trabajo (Proof of Work) y su relación con el hashing. Explica cómo consiste en resolver un problema computacional costoso, como encontrar un hash con un patrón específico, y cómo se puede ajustar la dificultad exigiendo más coincidencias al inicio del hash. Muestra su origen en la lucha contra el spam: cada acción requiere un cálculo único, encareciendo los envíos masivos. Introduce el uso de nonces, números que se varían para encontrar un hash válido. Finalmente detalla cómo Bitcoin aplica este mecanismo: miles de nodos compiten para hallar un hash que cumpla una dificultad objetivo, protegiendo la red frente a manipulaciones. Un atacante necesitaría controlar más del 51 % del poder de cómputo para intentar alterar la cadena de bloques.

Describe cómo Adam Back propuso HashCash para frenar el spam, idea que inspiró a Hal Finney en los Reusable Proofs of Work y a Wei Dai en B-Money, pasos clave hacia Bitcoin. Explica cómo Bitcoin usa minería y prueba de trabajo para validar transacciones y ajustar dinámicamente la dificultad de minado, manteniendo un bloque promedio cada 10 minutos. También aborda el papel de los pools de minería, que permiten a los mineros agrupar su potencia de cálculo y obtener recompensas más estables en lugar de depender de hallazgos individuales.

**Enlaces de interés**:

- [HashCash — Wikipedia](https://en.wikipedia.org/wiki/Hashcash): Concepto original de prueba de trabajo ideado para combatir el spam.
- [Reusable Proofs of Work — Hal Finney](https://nakamotoinstitute.org/finney/rpow/): Descripción de su propuesta basada en HashCash.
- [B-Money — Wei Dai](https://nakamotoinstitute.org/b-money/): Ensayo que anticipó características de las criptomonedas.
- [Bitcoin Mining — Bitcoin Wiki](https://en.bitcoin.it/wiki/Mining): Detalles del proceso de minería y su ajuste de dificultad.
- [Mining Pool — Bitcoin Wiki](https://en.bitcoin.it/wiki/Mining_pool): Información sobre cómo funcionan los pools de minería.
- [Bitcoin Coinbase Reward — Bitcoin Wiki](https://en.bitcoin.it/wiki/Controlled_supply): Datos actualizados sobre la recompensa por bloque minado.
- [51% Attack — Investopedia](https://www.investopedia.com/terms/1/51-attack.asp): Descripción de los riesgos y limitaciones de un ataque mayoritario.
- [Target — Bitcoin Wiki](https://en.bitcoin.it/wiki/Target): Explicación técnica sobre el objetivo de dificultad en la minería de Bitcoin.
- [Block Reward — Learn Me A Bitcoin](https://learnmeabitcoin.com/technical/mining/block-reward/): Detalles sobre cómo funciona la recompensa por bloque minado en Bitcoin.

### Estructura de Blockchain

Este módulo explica cómo funciona la arquitectura de una blockchain y cómo se diferencia de una base de datos tradicional. Describe que cada bloque es una base de datos enlazada criptográficamente con el bloque anterior, formando una cadena de bloques. Explica que los nodos de la red, distribuidos globalmente, mantienen copias idénticas del estado y validan cada nuevo bloque sin un servidor central, resolviendo el “problema de los generales bizantinos” mediante mecanismos de consenso como la prueba de trabajo. Detalla los elementos de un bloque: índice, marca de tiempo, hash previo, datos, nonce y el hash resultante que debe cumplir una dificultad específica. Muestra cómo la minería busca un hash válido incrementando la nonce y cómo cualquier modificación en un bloque invalida toda la cadena, garantizando la integridad de los datos. Concluye describiendo el proceso de añadir un nuevo bloque y la validación conjunta de todos los nodos en una red peer-to-peer.

**Enlaces de interés**:

- [Blockchain Demo](https://blockchaindemo.io/): Demostración interactiva para entender la estructura y funcionamiento de una cadena de bloques.
- [Genesis Block — Bitcoin Wiki](https://en.bitcoin.it/wiki/Genesis_block): Información sobre el primer bloque de Bitcoin y su importancia histórica.
- [Byzantine Generals Problem — Wikipedia](https://en.wikipedia.org/wiki/Byzantine_fault): Explicación del problema de consenso en redes distribuidas.
- [Proof of Work — Bitcoin Wiki](https://en.bitcoin.it/wiki/Proof_of_work): Mecanismo de consenso que asegura la validez de los bloques.
- [Peer-to-Peer — Wikipedia](https://en.wikipedia.org/wiki/Peer-to-peer): Concepto de redes distribuidas sin un servidor central.

### Proyecto: construir una app usando ECDSA

Se realiza la práctica <https://github.com/alchemyplatform/ecdsa-node>.

Es una simulación educativa de transferencias seguras usando ECDSA (firma digital de curva elíptica) y direcciones.

Se explica la importancia de no compartir la clave privada, cómo se generan las claves y direcciones, y cómo se firma y verifica una transacción.

Para asegurar la integridad y autenticidad de las transferencias, la solución debe garantizar que:

- El mensaje firmado por el usuario refleje exactamente la operación que se va a realizar.
- El servidor verifique que la firma corresponde a ese mensaje y que el mensaje corresponde a los datos recibidos.
- Solo se permita la transferencia si la validación es exitosa y el balance es suficiente.
- En otras palabras, la seguridad depende de que el servidor no confíe ciegamente en los datos recibidos, sino que reconstruya y verifique todo lo que se firma y se envía. Así, se evita que un usuario pueda manipular los datos de la transacción sin tener la clave privada correspondiente.

### UTXO y modelos de cuenta

Este módulo explica cómo Bitcoin y Ethereum gestionan los saldos de los usuarios mediante dos modelos diferentes. En el modelo basado en cuenta, usado por Ethereum, cada dirección mantiene un estado de saldo global que se actualiza con cada transacción, similar a una cuenta bancaria. En el modelo UTXO (Unspent Transaction Output), usado por Bitcoin, los saldos se representan como salidas de transacciones no gastadas, cada una con su propio script y condiciones de gasto. Describe cómo las transacciones requieren monto, pagador, beneficiario y una firma digital para autorizarse. Compara ventajas y desventajas: el modelo de cuenta es más intuitivo y flexible para contratos inteligentes, mientras que UTXO ofrece mejor privacidad y evita el doble gasto, aunque es más complejo de manejar. Concluye que la elección depende del diseño y objetivos de cada red.

**Enlaces de interés**:

- [UTXO — Bitcoin Wiki](https://en.bitcoin.it/wiki/UTXO): Descripción detallada del modelo de salidas de transacciones no gastadas.
- [Bitcoin Script — Bitcoin Wiki](https://en.bitcoin.it/wiki/Script): Información sobre los scripts que definen las condiciones para gastar un UTXO.
- [Accounts — Ethereum Docs](https://ethereum.org/en/developers/docs/accounts/): Explicación del modelo de cuenta en Ethereum.
- [Ethereum Transactions — Ethereum Docs](https://ethereum.org/en/developers/docs/transactions/): Cómo se procesan las transacciones en la red Ethereum.
- [Replay Attack](https://immunebytes.com/blog/replay-attack-in-blockchain-networks-and-nodes/): Riesgo de ataques de repetición en modelos basados en cuentas.

### Estructuras de datos de árboles

Este módulo presenta las estructuras de datos en forma de árbol, fundamentales para organizar y buscar información en sistemas como las blockchains. Explica conceptos clave como nodo, raíz, hojas, hermanos y subárboles, y compara árboles simples, binarios y listas enlazadas. Destaca que los árboles son ideales cuando los datos tienen jerarquía, permiten búsquedas y ordenaciones eficientes y se combinan con algoritmos recursivos. Introduce el árbol de búsqueda binario (Binary Search Tree, BST), que impone la regla de que los nodos a la izquierda son menores que su padre y los de la derecha mayores, optimizando el almacenamiento y las búsquedas.

### Árbol de búsqueda binario

Este módulo explica cómo funciona un árbol de búsqueda binario (Binary Search Tree, BST), una estructura de datos muy usada para organizar información de forma jerárquica y eficiente. Cada árbol comienza con un nodo raíz y cada nodo puede tener como máximo dos hijos. La clave está en su orden: los nodos a la izquierda del padre contienen valores menores y los de la derecha, valores mayores. Gracias a esta organización, las búsquedas, inserciones y eliminaciones de datos pueden realizarse en un tiempo medio de O(log n), lo que es mucho más rápido que buscar en una lista sin ordenar. Esta propiedad lo convierte en una herramienta ideal para bases de datos, índices de archivos, almacenamiento de transacciones en blockchain y otros sistemas que requieren búsquedas rápidas y escalables.

**Enlaces de interés**:

- [Binary Search Tree — Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree): Concepto, operaciones y análisis de eficiencia de los BST.
- [Big O Notation — Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation): Referencia para entender la complejidad de las operaciones de búsqueda.
- [Data Structures — GeeksforGeeks](https://www.geeksforgeeks.org/data-structures/): Recursos para profundizar en árboles y otras estructuras de datos.

### Árboles de Merkle

Este módulo presenta los árboles de Merkle, una estructura de datos esencial para la verificación eficiente de información en blockchains y redes peer-to-peer. Un árbol de Merkle combina hashes de datos en pares hasta obtener un único hash llamado raíz de Merkle, que sirve como huella digital de todo el conjunto de datos. Esta organización permite comprobar si un dato pertenece al conjunto sin tener que revisar cada elemento, usando solo un número logarítmico de pruebas en relación al tamaño del árbol.

Este proceso es eficiente siempre que conozcas la raíz de Merkle, la verificación es muy rápida y solo requiere recorrer el camino desde la hoja hasta la raíz, calculando y comparando unos pocos hashes.

Gracias a esta propiedad, los árboles de Merkle son clave para la integridad de bloques, la validación de transacciones y la sincronización rápida de nodos en sistemas descentralizados trustless como Bitcoin y Ethereum.

**Enlaces de interés**:

- [Merkle Tree — Wikipedia](https://en.wikipedia.org/wiki/Merkle_tree): Explicación detallada del concepto y sus usos en blockchains.
- [Merkle Proof — Ethereum Docs](https://ethereum.org/en/developers/docs/data-structures-and-encoding/merkle-proofs/): Cómo funcionan las pruebas de inclusión en Ethereum.
- [Blockchain Merkle Trees — Bitcoin Wiki](https://en.bitcoin.it/wiki/Merkle_tree): Aplicación específica en la red Bitcoin.
- [Hash Function — Wikipedia](https://en.wikipedia.org/wiki/Cryptographic_hash_function): Fundamentos del hashing, base de los árboles de Merkle.

### Árboles de Merkle en Bitcoin

Este módulo profundiza en cómo Bitcoin aplica los árboles de Merkle para almacenar y verificar transacciones de forma eficiente. En cada bloque, todas las transacciones se organizan en un árbol de Merkle y solo el hash de la raíz queda registrado en la cabecera del bloque, reduciendo drásticamente el tamaño de la cadena. Esto permite que los nodos completos conserven las transacciones en bases de datos fuera de la cadena sin comprometer la integridad. Explica también las pruebas de Merkle, que permiten demostrar la existencia de una transacción usando solo una pequeña cantidad de datos, lo que facilita la verificación ligera (SPV) en billeteras y clientes sin descargar toda la cadena. Esta estructura garantiza eficiencia, escalabilidad y descentralización en redes blockchain.

**Enlaces de interés**:

- [Merkle Tree — Bitcoin Wiki](https://en.bitcoin.it/wiki/Merkle_tree): Funcionamiento de los árboles de Merkle en la red Bitcoin.
- [Simple Payment Verification (SPV) — Bitcoin Wiki](https://en.bitcoin.it/wiki/Thin_Client_Security#Simplified_Payment_Verification): Uso de pruebas de Merkle para verificar transacciones sin descargar toda la cadena.
- [Block — Bitcoin Wiki](https://en.bitcoin.it/wiki/Block): Detalles de la estructura de un bloque de Bitcoin y su cabecera.
- [Merkle Proof — Ethereum Docs](https://ethereum.org/developers/tutorials/merkle-proofs-for-offline-data-integrity/): Explicación de cómo funcionan las pruebas de Merkle en Ethereum y otros sistemas.
- [LevelDB](https://github.com/google/leveldb): Base de datos clave-valor usada por los nodos de Bitcoin para almacenar transacciones.

### Patricia Merkle Tries

A diferencia de Bitcoin, que certifica transacciones inmutables en cada bloque con árboles de Merkle, Ethereum certifica tanto las transacciones y sus logs (inmutables) como las transiciones de un estado que cambia bloque a bloque. Ese estado —saldos, nonces, almacenamiento y código de contratos— se recalcula en cada nodo.
La estructura que lo hace posible es el Merkle Patricia Trie (MPT), que produce tres árboles de datos optimizados para la máquina de estado, cuyas raíces (hashes) se guardan on-chain para garantizar la integridad:

- `stateRoot`: raíz del árbol que representa el estado global final, con todas las cuentas y su almacenamiento. Este state trie se actualiza en cada bloque porque es un estado vivo.
- `transactionsRoot`: raíz del árbol que resume la lista exacta de transacciones incluidas en el bloque. Este transaction trie es inmutable para cada bloque.
- `receiptsRoot`: raíz del árbol que resume los recibos de ejecución —logs de eventos, gas consumido y resultado de cada transacción—. Este receipt trie también es inmutable tras el bloque.
- `storageTrie`: para cada cuenta de contrato inteligente, existe un storage trie independiente que almacena las variables y datos persistentes de ese contrato.

El MPT es una única estructura de datos que combina:

- Merkle hashing (garantiza integridad criptográfica).
- radix trie (organiza claves por prefijos para búsquedas eficientes)
- usando el algoritmo PATRICIA (Practical Algorithm To Retrieve Information Coded In Alphanumeric, en español Algoritmo Práctico para Recuperar Información Codificada en Alfanumérico), que compacta las rutas y permite operaciones rápidas de lectura, inserción y borrado.

Se habla en plural de Merkle Patricia tries porque Ethereum mantiene tres de estos árboles, uno para cada raíz mencionada.

Para visualizar el concepto de trie (árbol de prefijos), si quisiéramos almacenar las palabras:

```plaintext
car
cat
dog
```

el árbol sería:

```plaintext
(root)
 ├─ c
 │   └─ a
 │       ├─ r
 │       └─ t
 └─ d
    └─ o
        └─ g
```

Así, Ethereum combina prefijos compartidos (trie), hashes encadenados (Merkle) y compactación de rutas (PATRICIA) en una sola estructura eficiente para su máquina de estado, como dicen en el artículo "Patricia Merkle Trees son básicamente árboles de Merkle en esteroides. Eficiente para las necesidades de verificación de datos, pero también eficiente para editar esos datos."

En Ethereum, la mayoría de los nodos mantienen únicamente el estado actual y los bloques recientes, lo que permite validar y operar sobre la cadena de forma eficiente pero sin acceso directo al historial completo de estados anteriores. Sin embargo, existen los llamados "nodos archivo" (archive nodes), que conservan el historial completo de todos los estados y transiciones desde el bloque génesis. Estos nodos permiten consultar cualquier estado pasado, lo que resulta esencial para auditorías, análisis históricos y ciertas aplicaciones avanzadas. Mantener un nodo archivo requiere mucho más almacenamiento y recursos, por lo que no es habitual en la mayoría de usuarios o servicios, pero es clave para la transparencia y la verificación profunda en la red Ethereum.

**Enlaces de interés**:

- [Visualización de Radix Trie](https://www.cs.usfca.edu/~galles/visualization/RadixTree.html): Herramienta interactiva para entender cómo funcionan los árboles de prefijos (radix tries).
- [Ejemplo de consulta de bloque con Patricia Trie (Alchemy Sandbox)](https://sandbox.alchemy.com/?network=ETH_MAINNET&method=eth_getBlockByNumber&body.id=1&body.jsonrpc=2.0&body.method=eth_getBlockByNumber&body.params%5B0%5D=0x68b3&body.params%5B1%5D=false): Ejemplo práctico para explorar la estructura de bloques y raíces de trie en Ethereum.
- [Merkle Patricia Trie — Ethereum Wiki](https://ethereum.org/developers/docs/data-structures-and-encoding/patricia-merkle-trie/): Fundamentos y diseño de los tries usados por Ethereum.
- [Data structures & encoding — Ethereum.org](https://ethereum.org/en/developers/docs/data-structures-and-encoding/): Panorama de estructuras (incluye Merkle y Patricia tries).
- [EVM y transición de estado — Ethereum.org](https://ethereum.org/en/developers/docs/evm/): Cómo la EVM aplica transacciones para producir el nuevo estado.
- [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf): Especificación formal de encabezados de bloque, raíces `stateRoot/txRoot/receiptsRoot` y transición de estado.
- [Estado mundial y cuentas — Ethereum.org](https://ethereum.org/en/developers/docs/accounts/): Mapeo de direcciones a estado de cuenta y su almacenamiento.
- [Paquete `trie` (go-ethereum)](https://pkg.go.dev/github.com/ethereum/go-ethereum/trie): Implementación de tries usada por clientes como Geth.
- [Archive Nodes — Alchemy](https://www.alchemy.com/overviews/archive-nodes): Explicación sobre nodos de archivo y su papel en la consulta de estados históricos en Ethereum.

### Merkle Árboles en Ethereum

Este módulo explica cómo Ethereum aplica los Patricia Merkle Tries (PMT) para lograr almacenamiento y verificación de datos eficientes. Basándose en las ideas de Vitalik Buterin, destaca que esta estructura permite verificar datos de forma segura, manejar consultas de clientes ligeros más complejas y actualizar valores rápidamente sin recalcular todo el árbol, limitando la profundidad para prevenir ataques de denegación de servicio. Describe los cuatro tries principales que cada nodo mantiene: el **state trie** (estado global de cuentas), el **storage trie** (datos persistentes de contratos), el **transaction trie** (transacciones de cada bloque) y el **receipt trie** (registros y eventos). También menciona el uso de **RLP** (Recursive Length Prefix), un formato de serialización binaria que Ethereum usa para codificar y transmitir datos de forma compacta y fácilmente interpretable.

**Enlaces de interés**:

- [Understanding Trie Databases in Ethereum — Medium](https://medium.com/shyft-network/understanding-trie-databases-in-ethereum-9f03d2c3325d): Análisis sobre cómo Ethereum usa bases de datos tipo trie.
- [Ethereum Block Architecture — Stack Exchange](https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture/6413#6413): Descripción visual y técnica de la arquitectura de bloque de Ethereum.
- [RLP — Ethereum Docs](https://ethereum.org/developers/docs/data-structures-and-encoding/rlp/): Especificación completa del formato de serialización utilizado en Ethereum.
- [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf): Documento técnico oficial con las definiciones de las raíces `stateRoot`, `transactionsRoot` y `receiptsRoot`.

### Proyecto: GiftList

Se realiza la práctica <https://github.com/alchemyplatform/GiftList>.

GiftList es un ejercicio donde un cliente debe demostrar a un servidor, mediante una prueba de Merkle, que su nombre está en una lista de “buenos”.

El servidor solo almacena la raíz de Merkle (32 bytes) y verifica pruebas enviadas por el cliente, sin conocer la lista completa.

El flujo es: el cliente genera la prueba y la envía junto a su nombre; el servidor valida la prueba usando solo la raíz.

### Introducción a Ethereum

Ethereum es una gran computadora descentralizada que ejecuta programas llamados contratos inteligentes sobre una red blockchain. Funciona como una máquina de estado global única, accesible en cualquier parte del mundo, donde cada nodo replica y valida las mismas operaciones. Su objetivo no es la velocidad ni el bajo coste, sino la confiabilidad, la inmutabilidad y la resistencia a la censura.

A nivel técnico combina un modelo de cuentas, un consenso basado en prueba de participación y una Máquina Virtual de Ethereum (EVM) que permite ejecutar código Turing-completo. Cada operación requiere gas, un mecanismo que limita el consumo de recursos y evita bucles infinitos. Su criptomoneda nativa, ether (ETH), sirve para pagar estas operaciones y asegurar la red. Frente a Bitcoin, Ethereum destaca por su EVM que permite aplicaciones y contratos complejos, mientras que Bitcoin se centra en transacciones simples mediante un lenguaje de scripts limitado.

Las propiedades clave de Ethereum incluyen ser un singleton global sin ubicación física, accesible desde cualquier conexión a internet, resistente a la censura y con capacidad para generar cuentas prácticamente infinitas. Los contratos desplegados son verificables y permanentes a menos que se programe su destrucción explícita. Aunque su velocidad y coste de ejecución son inferiores a los de una computadora convencional, su valor está en la seguridad y en la certeza de que el código se ejecutará igual en cualquier nodo.

La EVM se define en el Yellow Paper y es mantenida por distintos clientes, como Geth o Erigon, que implementan la misma especificación. Para evolucionar, la red aplica mejoras propuestas en los EIP que se activan mediante forks. En este contexto se distinguen tres tipos principales. El temporary chain fork u orphan o uncle fork ocurre cuando dos bloques válidos se producen casi a la vez. Durante unos segundos existen dos cadenas competidoras hasta que la red elige la más larga o justificada, quedando los bloques perdedores como uncle u ommer. Un soft fork es un cambio de reglas compatible hacia atrás, donde los nodos antiguos pueden seguir validando, mientras que un hard fork es un cambio incompatible que exige que todos los nodos se actualicen para permanecer en la cadena principal. Estas bifurcaciones permiten introducir nuevas funciones, ajustar costos de gas o responder a ataques. En caso de desacuerdo, pueden originar redes separadas como Ethereum y Ethereum Classic.

En conjunto, Ethereum es una infraestructura informática abierta, confiable y neutral que permite crear aplicaciones descentralizadas con lógica económica integrada y disponibilidad global.

**Enlaces de interés**:

- [¿Qué es Ethereum? — ethereum.org](https://ethereum.org/es/what-is-ethereum/): Introducción oficial a Ethereum, sus objetivos y funcionamiento básico.
- [Ethereum Virtual Machine (EVM) — ethereum.org](https://ethereum.org/en/developers/docs/evm/): Documentación técnica sobre la EVM, el entorno de ejecución de contratos inteligentes.
- [Gas y tarifas en Ethereum — ethereum.org](https://ethereum.org/en/developers/docs/gas/): Explicación detallada sobre el sistema de gas, tarifas y su importancia en la red.
- [EVM Opcodes Reference — evm.codes](https://www.evm.codes/): Referencia interactiva de los opcodes disponibles en la EVM.
- [Ethereum Improvement Proposals — eips.ethereum.org](https://eips.ethereum.org/): Listado y documentación de todas las propuestas de mejora de Ethereum (EIP).
- [EIP-20 Token Standard — eips.ethereum.org](https://eips.ethereum.org/EIPS/eip-20): Especificación oficial del estándar de tokens ERC-20.
- [EIP-1559: mecanismo de tarifas — ethereum.github.io](https://ethereum.github.io/abm1559/notebooks/eip1559.html): Explicación técnica y visual del mecanismo de tarifas introducido por EIP-1559.
- [Lista de hard forks de Ethereum — Investopedia](https://www.investopedia.com/terms/h/hard-fork.asp): Artículo sobre los principales hard forks y su impacto en la red.
- [Ethereum Classic (fork DAO) — Wikipedia](https://en.wikipedia.org/wiki/Ethereum_Classic): Historia y contexto del fork que originó Ethereum Classic.
- [Ethereum vs Bitcoin — ethereum.org](https://ethereum.org/en/developers/docs/ethereum-stack/#ethereum-vs-bitcoin): Comparativa técnica y conceptual entre Ethereum y Bitcoin.

### Proof of Stake en Ethereum

El 15 de septiembre de 2022 Ethereum completó The Merge, pasando de Proof of Work a Proof of Stake (PoS). Este consenso reduce el consumo energético, aumenta la seguridad y mejora la escalabilidad. En lugar de competir con potencia de cálculo, los validadores deben bloquear 32 ETH como garantía. Cada 12 segundos se elige al azar un validador para proponer un bloque, que es verificado por los demás. Si actúa de forma maliciosa puede perder su depósito.

PoS introduce un nuevo marco de finalización de bloques que afecta a los desarrolladores. La finalización indica la certeza de que un bloque no será revertido. Los principales estados son: earliest (primer bloque disponible), finalized (aceptado por más de dos tercios de los validadores y casi imposible de reorganizar), safe (probablemente irreversible tras un epoch), latest (último bloque observado que podría reorganizarse) y pending (bloque en preparación). Se ordenan así: earliest ≤ finalized ≤ safe ≤ latest ≤ pending.

Al hacer solicitudes on-chain es esencial considerar estos niveles de finalización para asegurar la confiabilidad de los datos.

**Enlaces de interés**:

- [Proof of Stake — ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/): Documentación oficial sobre el mecanismo de consenso Proof of Stake en Ethereum, incluyendo fundamentos, ventajas y funcionamiento.
- [The Merge — ethereum.org](https://ethereum.org/en/roadmap/merge/): Explicación detallada de The Merge, el evento que marcó la transición de Ethereum de Proof of Work a Proof of Stake.
- [Block Finality — ethereum.org](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#finality): Información sobre los distintos estados de finalización de bloques en Ethereum y su importancia para la seguridad y confiabilidad de la red.
- [JSON-RPC — ethereum.org](https://ethereum.org/en/developers/docs/apis/json-rpc/): Guía sobre la API JSON-RPC utilizada para interactuar programáticamente con nodos Ethereum, consultar estados y enviar transacciones.

### Acceso a transacciones antiguas y soluciones modernas con The Graph

En blockchains como Ethereum, acceder a información de transacciones muy antiguas puede ser complicado si los nodos no conservan todos los estados históricos. Muchos nodos “podados” descartan datos antiguos para ahorrar espacio, por lo que no pueden responder consultas históricas profundas. Para resolver esto, existen métodos especializados de indexación y consulta.

The Graph es una solución común: consiste en un protocolo que permite indexar eventos y estados de contratos mediante “subgraphs”. Estos subgraphs procesan bloques a medida que se crean, extraen datos relevantes y los almacenan en bases de datos optimizadas para consulta. Así, cuando una dApp necesita verificar una transacción antigua o estado anterior de un contrato, consulta al subgraph en lugar de pedir al nodo directamente. Esto garantiza acceso rápido, fiable y eficiente al historial completo.

La arquitectura típica usa un nodo (o múltiples) para entregar bloques y eventos, y luego el indexador del subgraph los procesa y los convierte en esquemas relacionales o gráficos que responde consultas GraphQL. De esa forma, una aplicación DeFi puede cargar balances antiguos, historial de operaciones o estados en fechas pasadas sin depender de que el nodo soporte esos datos directamente.

Este enfoque descentralizado facilita que las dApps manejen datos históricos sin tener que construir y mantener su propia infraestructura de archivos.  

### Gas en Ethereum

El gas mide el coste de ejecutar operaciones en la red. Cada instrucción de la EVM consume una cantidad fija de gas, pero el precio de ese gas, expresado normalmente en Gwei, varía en cada bloque. Con la propuesta EIP-1559, activada en agosto de 2021, Ethereum cambió de un sistema de subasta caótica a un mecanismo automático que ajusta la tarifa según la demanda de espacio en los bloques.

Cada bloque tiene capacidad máxima de 30 millones de gas y un objetivo de 15 millones. La red calcula una base fee o tarifa base que sube cuando los bloques se llenan por encima del objetivo y baja cuando están por debajo. Esto hace que las tarifas sean más predecibles. La base fee no se paga a los validadores sino que se quema, es decir, se elimina de la circulación de ether. Este diseño evita que los mineros o validadores intenten manipular los precios, un problema que existía antes de EIP-1559 cuando podían inflar artificialmente las tarifas incluyendo sus propias transacciones y quedarse con las comisiones. Ahora deben pagar al menos base fee × número de transacciones para cada bloque que proponen, de modo que no pueden recuperar ese coste y pierden si intentan eludir el mecanismo.

El usuario que envía una transacción no fija la base fee, sino una max fee o tarifa máxima dispuesta a pagar. Si el precio real resulta menor, la diferencia se le devuelve. Para incentivar la inclusión rápida se añade una propina al validador, llamada tip o maxPriorityFee. Esta propina suele ser pequeña y varía según la congestión.

En resumen, EIP-1559 trajo tres mejoras clave: un cálculo automático de la base fee que ajusta la oferta y demanda de espacio en bloque, una quema de esa tarifa que introduce presión deflacionaria en el ether, y un modelo más transparente para que usuarios y dApps calculen costes mediante herramientas como eth_feeHistory.

**Enlaces de interés**:

- [EIP-1559 — ¿Qué es y cómo afecta a Ethereum?](https://es.cointelegraph.com/news/what-is-eip-1559-and-what-will-be-its-impact-on-ethereums-valuation): Explicación sobre la propuesta EIP-1559 y su impacto en la economía de Ethereum.
- [Ethereum Gas — ethereum.org](https://ethereum.org/en/developers/docs/gas/): Documentación oficial sobre el funcionamiento del gas en Ethereum.
- [Etherscan Gas Tracker](https://etherscan.io/gastracker): Herramienta para consultar en tiempo real el precio del gas y la congestión de la red.
- [Cómo estimar tarifas de gas con EIP-1559 — MetaMask Support](https://support.metamask.io/es/more-web3/learn/how-to-estimate-the-gas-fee/): Guía práctica para calcular y optimizar las tarifas de gas en transacciones Ethereum bajo EIP-1559.

### Cuentas en Ethereum

En Ethereum existen dos tipos de cuentas: las controladas externamente (Externally Owned Accounts o EOAs) y las cuentas de contrato.

Las EOAs se basan en un par de claves pública/privada con firma digital de curva elíptica, similares a Bitcoin. La dirección de una EOA es una cadena hexadecimal de 40 caracteres derivada de la clave pública. Por defecto, Ethereum no incluye una suma de comprobación en la dirección, lo que puede llevar a errores de transcripción. Para mejorar la seguridad, el estándar [EIP-55](https://eips.ethereum.org/EIPS/eip-55) define un esquema de direcciones en el que ciertas letras se escriben en mayúsculas o minúsculas según el hash de la dirección, permitiendo validar si una dirección está correctamente escrita simplemente comprobando el patrón de mayúsculas/minúsculas. Este sistema ayuda a detectar errores tipográficos y evita que se envíen fondos a direcciones mal formateadas.

Cada EOA tiene un saldo y un nonce que cuenta cuántas transacciones ha enviado. Solo las direcciones que han interactuado con la red aparecen en el estado global, evitando almacenar las 2^160 posibles combinaciones de direcciones.

Las cuentas de contrato, por otro lado, representan programas desplegados en la cadena. Estas cuentas tienen dirección y saldo, pero no se controlan con una clave privada; su ejecución depende de las llamadas de las EOAs u otros contratos. El código de un contrato es inmutable, aunque su almacenamiento puede modificarse, permitiendo patrones de actualización y lógica avanzada.

El modelo de cuentas simplifica las transacciones frente al sistema de UTXO de Bitcoin. En Ethereum, el saldo se resta de la cuenta emisora y se suma al destinatario en una única operación de estado, y el opcode BALANCE permite consultar el saldo directamente en la EVM. El nonce impide ataques de repetición, ya que cada transacción debe tener el número exacto correspondiente.

Las cuentas de contrato representan programas desplegados en la cadena. Un contrato inteligente se escribe en lenguajes como Solidity o Vyper, se compila a bytecode y se publica mediante una transacción. Estas cuentas tienen dirección y saldo, pero no se controlan con una clave privada; su ejecución depende de las llamadas de las EOAs u otros contratos. Su código es inmutable, aunque su almacenamiento puede modificarse, lo que permite actualizar referencias y crear patrones de upgradeabilidad.

En resumen, Ethereum combina EOAs y cuentas de contrato en un modelo de cuentas que simplifica la gestión de saldos y permite la ejecución de lógica descentralizada de manera nativa.

**Enlaces de interés**:

- [Accounts — ethereum.org](https://ethereum.org/en/developers/docs/accounts/): Documentación oficial sobre los tipos de cuentas, gestión de saldos y funcionamiento interno en Ethereum.
- [EIP-55 — Mixed-case checksum address encoding](https://eips.ethereum.org/EIPS/eip-55): Especificación del esquema de direcciones con suma de comprobación en mayúsculas/minúsculas para mejorar la seguridad y evitar errores de transcripción.
- [EIP-161 — State trie clearing](https://eips.ethereum.org/EIPS/eip-161): Propuesta para optimizar el almacenamiento eliminando cuentas vacías del trie de estado.
- [Smart Contracts — ethereum.org](https://ethereum.org/en/developers/docs/smart-contracts/): Guía sobre contratos inteligentes, despliegue y funcionamiento en la red Ethereum.
- [Ethereum Builders Guide — Design Rationale](https://ethereumbuilders.gitbooks.io/guide/content/en/design_rationale.html): Análisis detallado de los principios y motivaciones técnicas del diseño de Ethereum.

### Ethereum: lecturas complementarias

Ethereum se apoya en una diversidad de clientes de nodo como [Geth](https://geth.ethereum.org/), [Erigon](https://github.com/ledgerwatch/erigon) y [Nethermind](https://nethermind.io/), lo que reduce riesgos ante fallos de un solo software. Servicios como [Alchemy](https://alchemy.com/) permiten acceder a varios clientes y a sus APIs especializadas sin que el desarrollador mantenga infraestructuras distintas.

Su historia incluye hitos clave: el [white paper de 2013](https://ethereum.org/en/whitepaper/), la venta inicial de ether en 2014, el [lanzamiento de la red en 2015](https://ethereum.org/en/history/), la división en [Ethereum y Ethereum Classic en 2016](https://en.wikipedia.org/wiki/Ethereum_Classic), la introducción de [EIP-1559 en 2021](https://eips.ethereum.org/EIPS/eip-1559) para quemar tarifas y hacer más predecible el gas, [The Merge en 2022](https://ethereum.org/en/roadmap/merge/) que trasladó la red a Proof of Stake, avanzó con [Shapella en 2023](https://www.onesafe.io/es/blog/ethereum-shapella-upgrade-impact-on-liquidity-and-payroll) que habilitó los retiros de ETH en staking, con [Dencun en 2024](https://ethereum.org/en/roadmap/dencun/) que introdujo proto-danksharding para abaratar las transacciones de capa 2, y con [Pectra](https://es.cointelegraph.com/news/ethereum-s-pectra-network-upgrade-goes-live-today-what-to-expect) en 2025 que mejora la gestión de cuentas y amplía la capacidad de la red.

El ether se ha convertido en un activo con presión deflacionaria gracias a la quema de comisiones, origen del concepto [“ultrasound money”](https://ultrasound.money/).

Los casos de uso van desde registros de propiedad verificables y despliegue de código auditable hasta [DeFi](https://ethereum.org/en/defi/), [NFTs](https://ethereum.org/en/nft/) y [DAOs](https://ethereum.org/en/dao/), con nuevas aplicaciones en continuo crecimiento.

Para profundizar, la comunidad recomienda recursos como los [white](https://ethereum.org/en/whitepaper/) (visión y conceptos), [yellow](https://ethereum.github.io/yellowpaper/) (la especificación técnica) y beige papers (documentación con menos formalismos) en [ethereum.org](https://ethereum.org/en/developers/docs/), especificaciones de la [EVM](https://ethereum.org/en/developers/docs/evm/) y [libros especializados](https://ethereum.org/en/developers/docs/books/).

## Introducción a JSON-RPC

Ethereum funciona como una única computadora mundial distribuida en miles de nodos, el `Ethereum world state trie singleton`. Para que una dApp pueda comunicarse con ese “ordenador Ethereum” se utiliza JSON-RPC, un protocolo de llamadas a procedimientos remotos que envía y recibe datos en formato JSON.

Cada nodo de Ethereum ejecuta un cliente (como Geth, Erigon o Nethermind) y expone una interfaz JSON-RPC. A través de ella se pueden hacer peticiones como eth_blockNumber, eth_getBalance o eth_getBlockByNumber, que devuelven información directamente del estado de la red. La estructura de una petición incluye la versión jsonrpc (2.0), el método a invocar, parámetros y un id para correlacionar la respuesta. La respuesta refleja la versión, el id y el resultado en formato hexadecimal.

El flujo es sencillo: una aplicación o un monedero web3 envía la petición JSON-RPC al nodo, el nodo ejecuta el método solicitado y responde con los datos. Esto se asemeja al estándar REST pero orientado a procedimientos en lugar de recursos.

Gracias a esta interfaz, cualquier desarrollador puede leer información de la blockchain en tiempo real. En la siguiente etapa, las solicitudes firmadas permiten escribir en la red, ya sea transfiriendo ether o interactuando con contratos inteligentes.

**Enlaces de interés**:

- [JSON-RPC — ethereum.org](https://ethereum.org/en/developers/docs/apis/json-rpc/): Documentación oficial sobre la API JSON-RPC, métodos disponibles y ejemplos de uso para interactuar con nodos Ethereum.
- [Clientes de nodo — ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/): Información sobre los principales clientes de nodo de Ethereum, cómo funcionan y cómo exponen la interfaz JSON-RPC.
- [Gwei / Wei Converter — Alchemy](https://www.alchemy.com/gwei-calculator): Herramienta para convertir entre unidades de ether, gwei y wei, útil para interpretar valores en respuestas JSON-RPC.
- [¿Por qué Ethereum JSON-RPC usa hexadecimal para números? — Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/26710/why-is-ethereum-json-rpc-using-hexidecimal-for-numbers): Explicación sobre el uso de formato hexadecimal en los valores numéricos devueltos por la API JSON-RPC.

**Práctica**:

[Práctica de llamada JSON-RPC](./practice-alchemy/Activity-JSON-RPC-Read-Requests.ipynb).

### Nodos de Ethereum

Los nodos son los componentes que mantienen la integridad y los datos de la red Ethereum. Existen distintos tipos de nodos según las necesidades de acceso o validación de información. Los nodos completos almacenan y verifican todos los bloques y transacciones, ejecutan contratos inteligentes y aseguran la coherencia del estado global, aunque requieren grandes recursos. Plataformas como Alchemy ofrecen acceso gratuito tanto a datos históricos (desde el bloque génesis) como a datos recientes, evitando la necesidad de mantener nodos propios.

Ethereum utiliza estructuras llamadas Merkle Patricia Tries para almacenar datos de forma eficiente y verificable. Cada cambio en los datos altera su hash raíz, garantizando integridad y trazabilidad. Hay cuatro tipos principales de tries: el State Trie (estado global), el Storage Trie (almacenamiento por cuenta), el Transactions Trie (transacciones por bloque) y el Receipts Trie (recibos de ejecución). Estas estructuras permiten que los nodos manejen grandes volúmenes de información de manera segura y optimizada.

En la práctica, los desarrolladores no interactúan directamente con estos árboles, sino a través de interfaces como la API JSON-RPC o mediante librerías Web3 que facilitan la comunicación con los nodos.

En las siguientes etapas se abordará cómo interactuar con los nodos utilizando endpoints de Alchemy y herramientas que simplifican el desarrollo en la red Ethereum.

**Enlaces de interés**:

- [Full vs Light vs Archive Nodes — Alchemy](https://www.alchemy.com/overviews/full-vs-light-vs-archive-nodes): Comparativa entre los diferentes tipos de nodos de Ethereum, sus características, ventajas y casos de uso.
- [Ethereum Nodes — ethereum.org](https://ethereum.org/en/developers/docs/nodes-and-clients/): Explicación detallada de los tipos de nodos y su papel en la red.  
- [Ethereum Merkle Patricia Trie — Ethereum Wiki](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/): Descripción técnica de la estructura de almacenamiento usada en Ethereum.  
- [Alchemy Docs — Accessing Ethereum Data](https://docs.alchemy.com/): Documentación sobre cómo acceder a datos de la blockchain a través de endpoints de Alchemy.  
- [Ethereum JSON-RPC API — ethereum.org](https://ethereum.org/en/developers/docs/apis/json-rpc/): Guía para interactuar con nodos mediante llamadas remotas.

### Introducción a las transacciones de Ethereum

Ethereum es una máquina de estado basada en transacciones. Cada cambio en su estado global se produce únicamente a través de transacciones, que son instrucciones firmadas criptográficamente enviadas por cuentas externas (EOA). Estas transacciones pueden transferir valor o ejecutar código en contratos inteligentes, y son el mecanismo que mantiene el sistema en funcionamiento.

Una transacción se origina siempre desde una EOA y puede dirigirse a otra EOA o a una cuenta de contrato. Las transacciones se agrupan en bloques, y cada bloque representa una transición del estado global (de σt a σt+1). Este proceso continuo forma la cadena de estados que constituye la blockchain de Ethereum.

Existen dos tipos principales de transacciones:

1. Creación de contrato: despliega un nuevo contrato inteligente y crea una nueva entrada en el estado mundial.
2. Llamada de mensaje: interactúa con otra cuenta o contrato, modificando un estado existente.

Las transacciones contienen campos clave como nonce, recipient, value, data, gasLimit, tipo (0 o 2), chainId y los componentes de firma digital (yParity, r, s). Las transacciones tipo 2 incluyen parámetros de EIP-1559, como maxFeePerGas y maxPriorityFeePerGas.

La diferencia fundamental entre leer y escribir datos en Ethereum es la firma: las solicitudes JSON-RPC de solo lectura no requieren firma, mientras que las de escritura sí, ya que representan transacciones firmadas digitalmente.

El estado mundial de Ethereum es un mapeo entre direcciones y el estado de sus cuentas. Las cuentas pueden ser:

- EOA: controladas por una clave privada, sin código EVM.
- Contratos inteligentes: sin clave privada, pero con código y almacenamiento propios.

En las cuentas de contrato, el almacenamiento se gestiona mediante una estructura Merkle Patricia Trie. Esta estructura mantiene todas las variables persistentes del contrato y se referencia mediante el campo *storageRoot* o *hash de almacenamiento*. El hash raíz del trie representa todo el estado almacenado de ese contrato; si cualquier dato cambia, el hash raíz también cambia. Este mecanismo permite verificar el estado y las pruebas de inclusión sin necesidad de descargar todo el contenido del almacenamiento.

Las direcciones públicas tienen 160 bits (20 bytes) y se representan en formato hexadecimal con el prefijo 0x. Las direcciones de contratos se derivan de la dirección y nonce del creador.

Para ejecutar una función en un contrato inteligente, se construye manualmente el campo `data` o calldata. Este se genera tomando el hash keccak256 de la firma de la función y usando los primeros 4 bytes del resultado, seguidos de los parámetros codificados, si existen.

Las transacciones son el núcleo de Ethereum: definen los cambios de estado, garantizan la seguridad mediante firmas criptográficas y hacen posible la existencia de aplicaciones descentralizadas.

En la práctica, escribir transacciones firmadas manualmente es complejo, por lo que se utilizan bibliotecas como Ethers.js o el Alchemy SDK, que abstraen estos detalles técnicos y facilitan la interacción con la red.

**Enlaces de interés**:

- [Ethereum Transactions — ethereum.org](https://ethereum.org/en/developers/docs/transactions/): Documentación sobre la estructura y el flujo de las transacciones en Ethereum.  
- [EIP-1559 — Ethereum Improvement Proposals](https://eips.ethereum.org/EIPS/eip-1559): Especificación del modelo de tarifas de transacción introducido en Ethereum.  
- [Ethereum Merkle Patricia Trie — ethereum.org](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/): Explicación de cómo se utiliza esta estructura para gestionar el almacenamiento de cuentas y contratos.  
- [Alchemy Docs — Sending Transactions](https://docs.alchemy.com/): Guía sobre cómo enviar transacciones y usar endpoints JSON-RPC firmados.  
- [Ethers.js — Documentation](https://docs.ethers.org/): Referencia oficial para construir, firmar y enviar transacciones mediante la librería Ethers.js.

**Práctica**:

[Práctica de llamada JSON-RPC](./practice-alchemy/Activity-Signed-JSON-RPC-Write-Requests.ipynb).

### Introducción a las bibliotecas front-end de Ethereum

Las bibliotecas front-end como ethers.js y web3.js permiten a los desarrolladores interactuar con la blockchain de Ethereum mediante el protocolo JSON-RPC sin necesidad de realizar llamadas manuales a la API. Estas herramientas facilitan operaciones esenciales como desplegar contratos inteligentes, firmar transacciones, crear billeteras y consultar datos de la cadena.

Ethers.js y web3.js son las dos principales bibliotecas JavaScript para este propósito. Ambas proporcionan una interfaz sencilla para conectar aplicaciones web3 con nodos Ethereum o compatibles con la EVM. Además, Alchemy ofrece el Alchemy SDK, una extensión que mantiene la sintaxis de ethers.js pero añade acceso a APIs mejoradas como la API de NFTs, WebSockets optimizados y endpoints personalizados.

Ventajas de ethers.js:

- Licencia MIT, más flexible que la LGPL-3.0 de web3.js.  
- Tamaño reducido (77 KB comprimido), ideal para aplicaciones front-end.  
- Soporte nativo para dominios ENS (.eth).  
- Más de 10 000 casos de prueba, lo que garantiza estabilidad y fiabilidad.

Inconvenientes:

- Menor presencia en proyectos más antiguos o corporativos, donde web3.js sigue siendo más común.

Ethers.js es especialmente recomendable para nuevos proyectos por su ligereza, soporte activo y comunidad en crecimiento. Su diseño modular y documentación clara lo convierten en una opción sólida para el desarrollo moderno de dApps.

Principales abstracciones de ethers.js:

- Provider: conexión con un nodo Ethereum.  
- Wallet: cuenta EOA con clave privada para firmar y enviar transacciones.  
- Contract: instancia que representa un contrato inteligente desplegado.

En conjunto, estas herramientas permiten desarrollar aplicaciones web3 de forma más sencilla, segura y eficiente, evitando la complejidad de interactuar directamente con JSON-RPC.

**Enlaces de interés**:

- [Ethers.js — Documentation](https://docs.ethers.org/): Guía oficial para interactuar con Ethereum usando ethers.js.  
- [Web3.js — Documentation](https://web3js.readthedocs.io/): Referencia para la biblioteca web3.js y sus funciones principales.  
- [Alchemy SDK — Docs](https://docs.alchemy.com/): Documentación del SDK de Alchemy compatible con ethers.js.  
- [Ethereum JSON-RPC API — ethereum.org](https://ethereum.org/en/developers/docs/apis/json-rpc/): Descripción del protocolo JSON-RPC utilizado por estas bibliotecas.

### Proyecto: Node Explorer

Se realiza la práctica <https://github.com/alchemyplatform/blockexplorer>.

Este repositorio es un proyecto de Ethereum Block Explorer construido con React y AlchemySDK. Su objetivo es mostrar información en tiempo real de la blockchain de Ethereum Mainnet, similar a Etherscan pero de forma simplificada y educativa.

### Introducción a Solidity

Solidity es un lenguaje de programación orientado a objetos y de alto nivel diseñado para crear contratos inteligentes que se ejecutan en la Ethereum Virtual Machine (EVM). Su sintaxis se asemeja a JavaScript, C++ y Python, y está específicamente pensado para compilarse a bytecode compatible con la EVM.

Entre sus principales características destacan el tipado estático, la herencia entre contratos, las bibliotecas y la posibilidad de definir tipos complejos personalizados. Aunque existen otros lenguajes de contratos inteligentes como Vyper, Solidity es el más usado por su amplio ecosistema y comunidad activa.

Un contrato inteligente en Ethereum es un programa que contiene código (funciones) y estado (datos) en una dirección específica de la blockchain. Son programas sin permiso y componibles, lo que significa que cualquiera puede desplegarlos y que sus funciones pueden ser invocadas por otros contratos o usuarios, como si fueran API abiertas.

La analogía clásica de los contratos inteligentes es la máquina expendedora: si el usuario cumple las condiciones predefinidas (por ejemplo, enviar suficiente dinero), el contrato ejecuta la acción programada (entregar el producto o servicio). Esta lógica autónoma e inmutable es la base de su funcionamiento.

**Estructura básica de un contrato Solidity**:

Un contrato comienza declarando su licencia, versión de compilador y cuerpo principal.  

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract MyContract {
    
}
```

- La línea de licencia define bajo qué términos se distribuye el código.  
- El pragma indica la versión mínima y máxima compatible del compilador.  
- La palabra clave `contract` define la estructura principal, similar a una clase en JavaScript.

**Constructores y variables de estado**:

El constructor se ejecuta una sola vez durante el despliegue y sirve para inicializar el estado del contrato. Las variables de estado se almacenan permanentemente en la blockchain y definen el comportamiento o configuración del contrato.  

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

address public owner;
bool public isHappy;

contract MyContract {
    constructor(address _owner, bool _isHappy) {
        owner = _owner;
        isHappy = _isHappy;
    }
}
```

Las variables públicas generan automáticamente funciones getter. También existen los modificadores `private` e `internal`. Solidity incluye tipos numéricos (`uint`, `int`) con tamaños configurables (por ejemplo, `uint8`, `uint256`), y otros tipos comunes como `bool`, `string`, `bytes`, `array`, `enum`, `mapping` y `struct`.

**Tipos específicos de Ethereum**:

El tipo `address` representa una dirección de 20 bytes, y `address payable` extiende este tipo para aceptar o transferir ETH.  

- `address.balance`: devuelve el saldo en wei.  
- `address.transfer()`: envía ETH a otra dirección.

**Contexto de ejecución**:

Cada transacción proporciona información contextual accesible desde el contrato:  

- `msg.sender`: dirección del remitente.  
- `msg.value`: cantidad de ETH enviada.  
- `tx.gasLimit`: límite de gas asignado.  
- `block.number` y `block.timestamp`: datos del bloque actual.  

Estas variables permiten definir la lógica condicional de los contratos y controlar la interacción con el entorno de la red.

Solidity es el lenguaje central del ecosistema Ethereum y la herramienta fundamental para desarrollar contratos inteligentes. Su comprensión permite construir programas autoejecutables, seguros y transparentes que definen el comportamiento de dApps y protocolos DeFi. Conceptos clave como `msg.sender`, `address` y las variables de estado son esenciales para dominar su uso.

En la siguiente sección se abordarán las funciones en Solidity y cómo estructurar la lógica interna de los contratos.

**Enlaces de interés**:

- [Solidity — Documentation](https://docs.soliditylang.org/): Documentación oficial del lenguaje.  
- [Smart Contracts — ethereum.org](https://ethereum.org/en/developers/docs/smart-contracts/): Introducción a los contratos inteligentes en Ethereum.  
- [Mastering Ethereum — GitHub](https://github.com/ethereumbook/ethereumbook): Libro técnico que profundiza en Solidity y la EVM.  
- [Vyper — Documentation](https://docs.vyperlang.org/): Alternativa a Solidity enfocada en simplicidad y seguridad.

### Solidity y el EVM

Solidity es un lenguaje de alto nivel que se compila a bytecode ejecutado por la Ethereum Virtual Machine (EVM). A diferencia de JavaScript, expone más detalles del sistema, lo que obliga a los desarrolladores a escribir código eficiente, ya que cada operación en la blockchain tiene un coste de gas.

El EVM interpreta este bytecode mediante instrucciones llamadas opcodes, que realizan tareas básicas como operaciones matemáticas o control de flujo. En lugar de bucles o funciones como en lenguajes tradicionales, el EVM usa saltos (`JUMP`, `JUMPI`) y etiquetas para cambiar la secuencia de ejecución. Estas instrucciones, junto con el uso de la pila (estructura LIFO donde se almacenan datos temporales), hacen al EVM Turing completo.

Comprender cómo Solidity se traduce a bytecode ayuda a optimizar contratos y evitar errores costosos. Cada línea de código de alto nivel tiene un reflejo directo en instrucciones del EVM que determinan su eficiencia y coste en gas.

**Enlaces de interés**:

- [Ethereum Virtual Machine (EVM) — ethereum.org](https://ethereum.org/en/developers/docs/evm/)  
- [Opcodes — evm.codes](https://www.evm.codes/)  
- [Solidity Compiler Output — docs.soliditylang.org](https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description)

### Contratos Inteligentes

Un contrato inteligente en Solidity es un programa que se ejecuta en la blockchain y define lógica, datos y permisos de forma autónoma. En el ejemplo del contrato *OnOffSwitch*, se observa que Solidity comparte similitudes con JavaScript (uso de llaves, comentarios, funciones, retorno de valores y constructor), pero introduce diferencias importantes.

Cada contrato declara la versión del compilador con `pragma`, define visibilidad de variables y funciones (`public`, `private`, `internal`, `external`) y usa tipado estático, lo que significa que el tipo de cada variable debe definirse en la compilación. Esto evita errores y garantiza coherencia en la ejecución del código.

Las variables de estado se almacenan permanentemente en la blockchain, mientras que las locales solo existen en memoria durante la ejecución. Solidity admite estructuras de control comunes como `if`, `while`, `for`, `break` y `continue`, además de permitir que las funciones devuelvan múltiples valores mediante tuplas.

La visibilidad no protege la privacidad del dato en sí (todo en la cadena es público), solo restringe el acceso desde otros contratos. El tipado estático evita que una variable cambie de tipo y genera errores de compilación si no se cumple el tipo esperado.

En resumen, Solidity combina una sintaxis familiar con control estricto de tipos, visibilidad y almacenamiento, sentando las bases para el desarrollo seguro y predecible de contratos inteligentes.

Enlaces de interés:

- [Solidity — Documentation](https://docs.soliditylang.org/)  
- [Smart Contracts — ethereum.org](https://ethereum.org/en/developers/docs/smart-contracts/)  
- [Solidity by Example](https://solidity-by-example.org/)  
- [Mastering Ethereum — GitHub](https://github.com/ethereumbook/ethereumbook)

### Introducción a las funciones de Solidity

Las funciones son el núcleo lógico de cualquier contrato inteligente y se definen con la palabra clave `function`. Pueden ejecutar instrucciones, devolver valores, modificar o leer el estado del contrato, y su comportamiento se controla mediante modificadores y visibilidad.

**Sintaxis y estructura básica**:

Una función se declara con su nombre, parámetros y visibilidad. Si devuelve un valor, se especifica con `returns(tipo)`.  
Ejemplo básico: una función que cambia el propietario de un contrato asignando una nueva dirección.

Las funciones pueden ser llamadas desde scripts (por ejemplo, con Ethers.js o web3.js) o por otros contratos. Al ejecutarse, el EVM procesa las instrucciones y actualiza el estado si la función modifica almacenamiento.

**Tipos de funciones según acceso al estado**:

- **view**: solo leen el estado, no lo modifican.  
- **pure**: no leen ni modifican el estado, operan de forma independiente.  
- **sin modificador**: pueden escribir en el almacenamiento (por tanto, consumen gas).  

Ejemplo: una función `sum()` declarada como `view` puede devolver `x + y` sin alterar el contrato; una `pure` puede hacer operaciones aritméticas sin depender de variables de estado.

**Devoluciones y tuplas**:

Las funciones pueden devolver uno o varios valores.

- Con `returns(tipo)` se define el tipo de retorno.  
- También es posible un retorno implícito nombrando las variables de salida dentro del encabezado.  
- Para varios valores, se devuelven como tuplas (por ejemplo, `(suma, producto)`).

**Escritura en almacenamiento**:

Cuando una función modifica el estado (por ejemplo, asignando valores a variables globales), incurre en costes de gas, ya que el almacenamiento en la blockchain es permanente y costoso. Se recomienda minimizar las escrituras para optimizar el gasto.

**Visibilidad de funciones**:

Controla desde dónde puede llamarse una función:

- `public`: accesible desde cualquier parte (contratos o EOA).  
- `external`: accesible solo desde fuera del contrato.  
- `internal`: accesible solo desde el propio contrato y los que hereden de él.  
- `private`: accesible únicamente dentro del contrato donde está definida.  

Estas reglas también se aplican a las variables de estado (excepto `external`).

**Conclusión**:

Las funciones en Solidity definen la lógica y el comportamiento de los contratos inteligentes. Comprender sus tipos, visibilidad y efectos sobre el almacenamiento es clave para escribir código eficiente, seguro y de bajo coste en gas.

**Enlaces de interés**:

- [Functions — Solidity Documentation](https://docs.soliditylang.org/en/latest/contracts.html#functions)  
- [Solidity by Example — Functions](https://solidity-by-example.org/function/)  
- [Solidity — Visibility Specifiers](https://docs.soliditylang.org/en/latest/contracts.html#visibility-and-getters)  
- [Solidity — View and Pure](https://docs.soliditylang.org/en/latest/contracts.html#view-and-pure-functions)

### Comunicación entre contratos inteligentes

Para que los contratos inteligentes y las aplicaciones puedan comunicarse con la red Ethereum, es esencial entender tres procesos: compilación, despliegue e interacción. Cuando un contrato se compila, el compilador de Solidity genera dos artefactos fundamentales: el **ABI** (Application Binary Interface) y el **bytecode**.

**ABI: Application Binary Interface**:

El ABI define cómo los datos y las funciones de un contrato pueden ser accedidos. Es el estándar que permite que tanto las dApps (desde fuera de la blockchain) como otros contratos (desde dentro) interactúen con un contrato desplegado. Describe las funciones disponibles, los tipos de parámetros y el formato de los valores devueltos.

En Ethereum, el ABI actúa como una interfaz de comunicación que codifica y decodifica las llamadas y respuestas del contrato. Es un objeto JSON que describe la estructura del contrato y que las librerías front-end, como Ethers.js o Web3.js, utilizan para traducir las peticiones a instrucciones comprensibles por la EVM.

Mientras una **API** define la interfaz de alto nivel entre aplicaciones, un **ABI** cumple la misma función pero a nivel binario, siendo el puente entre el código fuente y el bytecode.

**Bytecode y despliegue**:

El bytecode es la traducción del contrato a instrucciones de máquina ejecutables por la EVM. Existen dos tipos:

- **Creation bytecode:** se ejecuta solo una vez, durante el despliegue, e incluye el constructor.  
- **Runtime bytecode:** permanece almacenado en la blockchain y representa el contrato ejecutable permanente.

Durante el despliegue, el bytecode se incluye en la transacción que crea la cuenta del contrato. Este código se almacena en el trie de estado y define el comportamiento del contrato en la red.

**Interacción con contratos inteligentes**:

Para interactuar con un contrato desde una aplicación se necesitan dos elementos:

1. La **dirección del contrato** desplegado.  
2. El **ABI** del contrato.

Librerías como Ethers.js crean instancias de contrato utilizando estos datos, permitiendo ejecutar funciones, enviar transacciones o leer el estado. Cada llamada se traduce mediante el ABI, se envía a la red y, tras validarse, produce un **recibo de transacción** con información sobre gas usado, logs y eventos generados.

**Árbol de recibos**:

Cada bloque de Ethereum incluye un *receipts trie* que almacena:

- El estado posterior a la transacción.  
- El gas acumulado.  
- Los registros (logs) generados.  
- Un filtro Bloom derivado de esos logs.

Este trie permite verificar la ejecución de eventos y auditar el comportamiento de las transacciones en la red.

**Conclusión**:

El ABI y el bytecode son los dos artefactos esenciales del proceso de compilación.

- El **bytecode** se despliega en la red y representa el programa ejecutable.  
- El **ABI** permite interactuar con ese programa desde otras aplicaciones o contratos.  
Ambos son la base de la comunicación entre la máquina Ethereum y el mundo exterior.

**Enlaces de interés**:

- [Ethereum ABI Specification](https://docs.soliditylang.org/en/latest/abi-spec.html)  
- [Ethers.js — Contract Interaction](https://docs.ethers.org/v6/getting-started/)  
- [Ethereum Virtual Machine (EVM)](https://ethereum.org/en/developers/docs/evm/)  
- [Transaction Receipts — Ethereum Docs](https://ethereum.org/en/developers/docs/transactions/)

### Hardhat

Hardhat es un entorno de desarrollo diseñado para compilar, desplegar, probar y depurar contratos inteligentes en Ethereum. Es una herramienta esencial en el flujo moderno de desarrollo Web3, ofreciendo una capa de automatización y control sobre el proceso completo de construcción de dApps.

**¿Por qué usar Hardhat?**

Simplifica tareas repetitivas como la compilación, el despliegue y las pruebas de contratos, permitiendo integrar fácilmente librerías como Ethers.js y frameworks de testing. Además, facilita la depuración gracias a su red local integrada, **Hardhat Network**, que simula la blockchain para pruebas rápidas y seguras.

**Principales características**:

- Ejecución local con Hardhat Network.  
- Compilación y verificación de errores en Solidity.  
- Integración flexible con plugins y librerías externas.  
- Despliegue automatizado e interacción con contratos inteligentes.  

**Estructura de un proyecto Hardhat**:

Un proyecto típico contiene las siguientes carpetas y archivos:

- `/contracts`: contratos escritos en Solidity.  
- `/scripts`: scripts de despliegue e interacción.  
- `/artifacts`: contiene los artefactos generados tras la compilación (ABI y bytecode).  
- `/test`: pruebas automatizadas.  
- `hardhat.config.js`: archivo de configuración central del proyecto.  

El archivo `hardhat.config.js` define las redes, compiladores, plugins y claves de configuración. Si algo falla, este suele ser el primer lugar que revisar.

**Flujo recomendado de uso**:

1. Crear una carpeta de proyecto y ejecuta `npm init -y`.  
2. Instalar dependencias: `npm i hardhat dotenv`.  
3. Ejecutar `npx hardhat` para inicializar el proyecto.  
4. Configurar variables en `.env` (por ejemplo, URL RPC de Alchemy y clave privada del testnet).  
5. Modificar `hardhat.config.js` agregando la red y credenciales.  
6. Escribir contratos en `/contracts`, scripts en `/scripts` y desplegar fácilmente.  

**Conclusión**:

Hardhat es la herramienta más completa para el ciclo de vida de desarrollo en Ethereum. Permite compilar, probar y desplegar contratos con rapidez, manteniendo un entorno reproducible y escalable. Dominar Hardhat significa dominar el flujo profesional de desarrollo Web3.

**Enlaces de interés**:

- [Hardhat — Official Documentation](https://hardhat.org/getting-started/)  
- [Hardhat Network](https://hardhat.org/hardhat-network/)  
- [Using Ethers.js with Hardhat](https://hardhat.org/tutorial/connecting-to-the-network)  
- [Alchemy + Hardhat Setup Guide](https://www.alchemy.com/overviews/hardhat)

### Practica: Deploy con Hardhat + Ethers.js

Práctica enfocada en explotar la diferencia entre `tx.origin` y `msg.sender` para emitir un evento desde un contrato con restricciones de llamada. El objetivo es hacer que el contrato `Contract.sol` emita el evento `Winner(address)` a través de su función `attempt()`, que requiere que el llamador inmediato sea diferente del originador de la transacción. Esta actividad enseña conceptos fundamentales de seguridad en Solidity y patrones de interacción entre contratos.

El contrato objetivo `Contract.sol` implementa una validación mediante `require(msg.sender != tx.origin)`, lo que significa que una EOA no puede llamarlo directamente. `tx.origin` siempre apunta a la cuenta externa que inició la transacción, mientras que `msg.sender` es el remitente inmediato de la llamada actual. Al introducir un contrato intermediario, `msg.sender` pasa a ser la dirección de ese contrato, mientras `tx.origin` sigue siendo la EOA, permitiendo superar la restricción.

El contrato `Attacker.sol` actúa como intermediario: recibe la dirección del contrato objetivo mediante su interfaz `ITarget` y expone una función `attack()` que ejecuta la llamada a `attempt()`. Esto crea la cadena EOA → Attacker → Contract, donde `msg.sender` en `Contract` es `Attacker` y `tx.origin` es la EOA, cumpliendo la condición del `require`.

El proyecto usa Hardhat como framework principal, proporcionando compilación, testing local y scripts de despliegue tanto para red local como para Sepolia. Los artifacts generados (ABI y bytecode) permiten a ethers.js interactuar con ambos contratos. El archivo `hardhat.config.js` configura la red Sepolia usando variables de entorno para mantener privadas las credenciales.

El archivo `test/attempt-test.js` implementa pruebas automatizadas que despliegan ambos contratos en una red local, ejecutan el ataque y verifican mediante `expect(events[0].event).to.equal("Winner")` que el evento se emitió correctamente. Esta validación local es esencial antes de desplegar en testnet.

Los scripts de despliegue siguen el patrón estándar de ethers.js: `hh-deploy-contract.js` despliega el contrato objetivo y muestra su dirección, mientras que `attack-sepolia.js` despliega el `Attacker`, ejecuta `attack(TARGET)` contra el contrato ya desplegado en Sepolia y permite verificar el resultado en Etherscan. Este flujo representa el ciclo completo de desarrollo, testing y despliegue en testnet.

La configuración inicial requiere instalar dependencias con `npm install`, crear un archivo `.env` con `ALCHEMY_URL`, `PRIVATE_KEY` y `TARGET` (dirección del contrato objetivo), y compilar con `npx hardhat compile`. Los tests se ejecutan con `npm test` en red local. Para desplegar en Sepolia se usa `npx hardhat run scripts/hh-deploy-contract.js --network sepolia` primero, copiando la dirección resultante en `TARGET`, y luego `node scripts/attack-sepolia.js` para ejecutar el ataque.

El patrón enseña una vulnerabilidad común: nunca usar `tx.origin` para autenticación, ya que puede ser explotado mediante contratos intermediarios. La práctica demuestra tanto el concepto de seguridad como la arquitectura de llamadas entre contratos, fundamentos esenciales para desarrollo en Solidity.

### Práctica: Unit Testing con Hardhat y Chai

Práctica sobre cómo implementar pruebas unitarias completas para smart contracts usando Hardhat como framework de testing. El objetivo es validar todas las funcionalidades del contrato `Faucet.sol`: asignación correcta del owner en el constructor, restricciones en la función `withdraw`, control de acceso en `withdrawAll` y `destroyFaucet`, y verificación del comportamiento de selfdestruct. Esta actividad enseña el ciclo completo de testing: configuración, fixtures, assertions y validación de estados on-chain.

El contrato `Faucet.sol` implementa cuatro funcionalidades clave: un constructor `payable` que asigna el owner y permite fondear el contrato al desplegarlo, `withdraw(uint _amount)` que permite retirar hasta 0.1 ETH por llamada, `withdrawAll()` restringida al owner para vaciar el balance completo, y `destroyFaucet()` que ejecuta selfdestruct eliminando el código del contrato. El modificador `onlyOwner` protege las funciones administrativas.

Hardhat proporciona el entorno de testing mediante una red local efímera que se reinicia entre tests, garantizando aislamiento y reproducibilidad. La librería `@nomicfoundation/hardhat-network-helpers` aporta `loadFixture`, que crea snapshots del estado blockchain y los restaura antes de cada test, optimizando velocidad y evitando dependencias entre pruebas. Chai ofrece assertions claras como `expect().to.equal()` y `expect().to.be.revertedWith()`.

El patrón de fixture `deployContractAndSetVariables` centraliza la configuración: despliega el contrato con 1 ETH inicial usando `{ value: ethers.parseEther('1') }`, obtiene signers (owner y other) mediante `ethers.getSigners()`, y prepara cantidades de prueba como `withdrawAmount` (1 ETH para forzar revert) y `allowedAmount` (0.05 ETH para éxito). Este fixture se reutiliza en todos los tests mediante `loadFixture`.

Las pruebas cubren casos positivos y negativos: verificar que `owner` se asigna correctamente comparando con `owner.address`, que `withdraw` revierte con mensaje específico cuando se excede 0.1 ETH usando `expect().to.be.revertedWith()`, y que permite retiros válidos comprobando incremento de balance. Para funciones restringidas se valida que `other` no puede ejecutarlas (revert con "Only owner") y que el owner sí puede.

La validación de `withdrawAll` requiere comparar balances antes/después usando `ethers.provider.getBalance()`, considerando costos de gas en las assertions con márgenes de tolerancia. La prueba de `destroyFaucet` verifica que tras la ejecución el código del contrato desaparece comprobando `await ethers.provider.getCode(faucet.address)` que debe retornar `'0x'`, confirmando que selfdestruct funcionó.

El uso de `faucet.connect(other)` permite ejecutar transacciones desde diferentes cuentas, esencial para probar control de acceso. Las pruebas calculan cambios netos en balances restando gas estimado para evitar falsos negativos, usando comparaciones como `expect(after).to.be.gt(before.sub(ethers.parseEther('0.001')))`.

La configuración requiere un proyecto Hardhat existente con `npm install` ejecutado, contratos en `contracts/` y tests en `test/`. La compilación se realiza con `npx hardhat compile` generando artifacts, y los tests se ejecutan con `npx hardhat test` o `npm test`. Cada test corre sobre estado limpio gracias a fixtures, garantizando independencia y fiabilidad.

El enfoque enseña principios fundamentales: fixtures para estados reproducibles, separación de casos positivos/negativos, validación de control de acceso, manejo de transacciones con ethers.js, y verificación de efectos secundarios on-chain como cambios de balance y destrucción de contratos. Estas técnicas son la base del testing profesional en desarrollo Solidity.

### Mappings en Solidity

Los mappings en Solidity funcionan como tablas hash: estructuras de clave-valor basadas en funciones hash deterministas. Permiten acceder a un valor en tiempo O(1) usando directamente la clave, sin búsquedas lineales. En Solidity se declaran como `mapping(KeyType => ValueType)` y son especialmente útiles para asociar direcciones Ethereum a datos numéricos, booleanos o cualquier tipo simple.

```solidity
mapping(address => uint) public sodasPurchased;
```

```solidity
function numSodasPerUser(address _userAddress) public returns (uint) {
    return sodasPurchased[_userAddress];
}
```

```solidity
function purchaseSoda() public {
    require(numSodas > 0, "Sodas must be in stock!");
    sodasPurchased[msg.sender] += 1;
    numSodas--;
}
```

Los ERC-20 utilizan mappings para gestionar saldos mediante `balanceOf`. Otros usos incluyen registro de votos, permisos o niveles en juegos. Para relaciones más complejas existen los *nested mappings*:

```solidity
mapping(address => mapping(uint => bool)) public votesPerProposal;
```

Los mappings permiten organizar y consultar datos de forma eficiente en contratos inteligentes dentro de Ethereum.

**Enlaces de interés**:

- [Mappings in Solidity explained in under two minutes — Medium](https://medium.com/upstate-interactive/mappings-in-solidity-explained-in-under-two-minutes-ecba88aff96e)
- [Store data in mapping vs array — Ethereum Stack Exchange](https://ethereum.stackexchange.com/questions/2592/store-data-in-mapping-vs-array)
- [Mapping — Solidity by Example](https://solidity-by-example.org/mapping/)
- [Layout of State Variables in Storage — Solidity Docs](https://docs.soliditylang.org/en/v0.8.4/internals/layout_in_storage.html)
- [ERC20 — OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/3.x/erc20)

### Práctica: Contract Puzzles

Repo: <https://github.com/alchemyplatform/Contract-Puzzles>-

Práctica sobre resolución de puzzles de smart contracts mediante análisis de condiciones lógicas y manipulación de estado blockchain. El objetivo es activar la variable `isWon` en cinco contratos sin modificar el código Solidity, implementando toda la lógica exclusivamente en los archivos de prueba. Esta actividad enseña manipulación de estado on-chain, control de acceso, generación de direcciones determinísticas, y uso avanzado de ethers.js para interactuar desde múltiples cuentas.

Los cinco contratos implementan mecanismos diferentes: `Game1` requiere llamar `unlock()` antes de `win()` como patrón secuencial, `Game2` valida activación de switches específicos en un mapping, `Game3` compara balances con desigualdades encadenadas, `Game4` usa mappings anidados validando relaciones entre direcciones mediante `msg.sender`, y `Game5` verifica que la dirección del caller sea numéricamente menor que un threshold.

Las soluciones: `Game1` llama `unlock()` y luego `win()`. `Game2` activa switches específicos (20, 47, 212) con `switchOn(key)`. `Game3` asigna balances 1/2/3 ETH mediante `buy()` con `{ value: ethers.parseEther() }` desde diferentes signers cumpliendo las desigualdades. `Game4` requiere que cuenta B llame `write(A.address)` estableciendo `nested[A][B] = true`, y luego A ejecute `win(B.address)`. `Game5` genera wallets determinísticas con claves secuenciales hasta encontrar dirección menor que threshold, asigna balance con `hardhat_setBalance` RPC, y ejecuta `win()`.

El patrón `connect()` de ethers.js es fundamental: `game.connect(signer)` asocia un signer al contrato para que las transacciones sean firmadas por esa cuenta y `msg.sender` refleje su dirección. Esto permite simular interacciones multiusuario esenciales para los puzzles.

La configuración requiere `npm i`, contratos en `contracts/` y tests en `test/`. Ejecutar con `npx hardhat test` o `npx hardhat test test/gameXTest.js` para pruebas individuales. El enfoque enseña que requires no son suficiente protección si el estado puede manipularse, mappings anidados se explotan con coordinación multiusuario, y comparación de direcciones como números permite generación de claves maliciosas. Estas técnicas son base del análisis de vulnerabilidades en auditoría de smart contracts.

### Events en Solidity

Los **events** son el mecanismo que ofrece Solidity para registrar información durante la ejecución de una transacción sin almacenarla en las variables del contrato. Funcionan como una capa de abstracción sobre los opcodes de bajo nivel `LOG0` a `LOG4` de la EVM, que permiten escribir datos en los *logs* incluidos en el **transaction receipt** (recibo) que se guardan on-chain (en la cadena). Estos logs son permanentes, forman parte del historial de la cadena y pueden ser consultados por aplicaciones externas, pero **no pueden ser leídos por los propios contratos**, lo que evita ciclos de dependencia y reduce costes de gas.

En Solidity no puedes usar directamente los opcodes LOG0–LOG4: la única forma de escribir logs es emitiendo un evento. Cuando emites un evento, el compilador lo traduce internamente a una instrucción LOGx y ese log se guarda en el recibo de la transacción.

Un evento declara campos que serán registrados al emitirse. Los marcados como `indexed` pasan a ser *topics* (temas de indice), valores que pueden utilizarse para filtrar búsquedas de manera eficiente. Esto hace a los eventos ideales para notificaciones, auditoría, sincronización de interfaces y extracción de datos sin impactar en el almacenamiento del contrato.

Ejemplo típico del estándar ERC‑20 en su declaración de interfaz:

```solidity
interface IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
}
```

Cuando se ejecuta una transferencia, el contrato emite:

```solidity
emit Transfer(from, to, amount);
```

Al hacerlo, la información queda registrada en el recibo de transacción, permitiendo que cualquier aplicación externa la escuche.

Para consumir eventos desde fuera del contrato se emplea un proveedor (por ejemplo, Ethers.js):

```js
contract.on("Transfer", (from, to, amount) => {
  console.log("Transferencia detectada", from, to, amount);
});
```

Sin embargo, la verdadera utilidad de los parámetros indexed es permitir filtrar eventos por from, to o ambos. Aquí un ejemplo práctico usando filtros de ethers.js:

```solidity
// Filtrar por dirección de origen (from)
const filterFrom = contract.filters.Transfer("0xFROM_ADDRESS");
const logsFrom = await contract.queryFilter(filterFrom);


// Filtrar por dirección de destino (to)
const filterTo = contract.filters.Transfer(null, "0xTO_ADDRESS");
const logsTo = await contract.queryFilter(filterTo);


// Filtrar por origen y destino
const filterBoth = contract.filters.Transfer("0xFROM", "0xTO");
const logsBoth = await contract.queryFilter(filterBoth);
```

También puede accederse a los logs de forma más directa usando JSON‑RPC (`eth_getLogs`), aunque requiere procesar manualmente los topics y valores, siendo menos práctico que usar librerías.

Los eventos, al almacenarse fuera del espacio de almacenamiento del contrato, son más baratos y adecuados para datos que solo necesitan ser consultados externamente, no utilizados en la lógica interna.

**Diferencia entre logs y eventos en Solidity**:

En la blockchain solo existen **logs**. Son datos crudos escritos por la EVM cuando un contrato emite un evento. Un log contiene únicamente la dirección del contrato, los *topics* y los datos codificados. Es la forma más básica y de bajo nivel.

Los **eventos** son la versión de alto nivel que escribe el desarrollador en Solidity usando `event` y `emit`. Cuando se emite un evento, Solidity lo convierte internamente en un log. El contrato no puede leer logs, pero las aplicaciones externas sí pueden hacerlo.

Ethers.js toma los logs y los decodifica usando el ABI del contrato. Por eso en un receipt aparecen dos secciones:

- `logs`: los datos tal como vienen de la blockchain  
- `events`: la interpretación legible de esos logs (nombre del evento, parámetros decodificados, etc.)

En resumen, un evento es la forma humana de definir información y un log es la forma en que esa información se guarda realmente on-chain. Ethers.js solo facilita la lectura convirtiendo los logs en eventos decodificados.

**El propósito de los eventos**:

Los eventos permiten guardar información dentro de una transacción sin necesidad de usar variables de estado, que son más costosas y no muestran fácilmente su historial. A diferencia de los valores devueltos por `return`, que no quedan registrados en la blockchain, los eventos se almacenan en los logs del recibo de la transacción y pueden consultarse más adelante.

En un contrato como un faucet, sería difícil saber qué direcciones han retirado fondos si solo usamos lógica interna. Con un evento, podemos registrar cada retirada:

```solidity
contract Faucet {
    event Withdrawal(address _recipient);

    function withdraw() external {
        msg.sender.transfer(1 ether);
        emit Withdrawal(msg.sender);
    }
}
```

**Enlaces de interés**:

- [Solidity — Events e indexed topics](https://docs.soliditylang.org/en/latest/contracts.html#events) — Documentación oficial sobre definición y uso de eventos.
- [Opcodes LOG0–LOG4](https://www.evm.codes/?fork=shanghai) — Detalle de los opcodes de la EVM que soportan el sistema de logging.
- [eth_getLogs — JSON-RPC](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) — Método para obtener logs directamente desde un nodo.
- [Ethers.js — Event API](https://docs.ethers.org/v5/api/contract/example/#contract-events) — Cómo escuchar eventos desde aplicaciones externas.

### Introducción a Escrows

Un *escrow* es un acuerdo donde una tercera parte neutral sostiene fondos o bienes mientras un comprador y un vendedor completan una transacción. Esa tercera parte solo libera los fondos cuando se cumplen ciertas condiciones que ambas partes aceptaron. Su propósito es eliminar la desconfianza natural entre comprador y vendedor.

En un proceso tradicional, el comprador envía el dinero al agente de escrow, el vendedor entrega el bien y, una vez verificado que todo está correcto, el agente libera el dinero al vendedor. El problema es que este agente es humano y puede fallar, equivocarse o directamente actuar de forma maliciosa. Puede robar los fondos, quedarse con una de las partes o realizar una verificación injusta. Toda la seguridad depende de confiar ciegamente en ese intermediario.

Un contrato inteligente permite reemplazar al agente humano por código inmutable que ejecuta exactamente las condiciones acordadas. El comprador y el vendedor no dependen ya de la honestidad de un tercero, sino de reglas claras programadas previamente. El contrato puede retener fondos, verificar condiciones y liberar los recursos según lo establecido, sin favoritismos ni riesgos de corrupción. Este mecanismo es la base de muchos sistemas DeFi, donde las interacciones financieras se realizan sin intermediarios humanos.

Un escrow descentralizado permite cualquier tipo de diseño: desde un contrato totalmente autónomo hasta un contrato donde una persona, una DAO o incluso un grupo de direcciones actúan como árbitros. La flexibilidad del contrato inteligente permite crear sistemas que serían difíciles de lograr con intermediarios tradicionales. Esto abre la puerta a plataformas de compraventa, préstamos, acuerdos entre desconocidos y todo tipo de transacciones transparentes y verificables.

**Enlaces de interés**:

- [Escrow — Wikipedia](https://en.wikipedia.org/wiki/Escrow): Explicación general del concepto de escrow y sus usos tradicionales.
- [Smart Contracts — Ethereum Docs](https://ethereum.org/en/developers/docs/smart-contracts/): Base teórica sobre contratos inteligentes.
- [Solidity Docs — Contract Structure](https://docs.soliditylang.org/en/latest/structure-of-a-contract.html): Cómo se estructuran y comportan los contratos en Solidity.
- [What is DeFi? — Ethereum](https://ethereum.org/en/defi/): Relación entre escrows descentralizados y los sistemas financieros sin intermediarios.

---

Gracias.
