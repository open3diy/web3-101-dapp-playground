# Instalación stack main-evm

> Por motivos de claridad, se ha creado un documento separado que detalla el paso a paso de cada componente. Las decisiones de diseño generales se abordan en otros documentos de esta sección.

## backend-blockchain-smart-contrats

### Configuración inicial de Foundry

Antes de instalar dependencias, crea el archivo de configuración de Foundry:

```bash
# Ir al directorio de contratos
cd contracts
# Crear archivo foundry.toml con configuración básica
```

Asegúrate de tener un archivo `foundry.toml` en el directorio `contracts/` con la configuración básica del proyecto (directorios, versión de Solidity, remappings, etc.).

### Iniciar package.json

Para gestionar dependencias (como solhint), necesitas inicializar un archivo `package.json` en el directorio de `contracts`.

El archivo ya está creado, asi que **esto no debes hacerlo**, a modo de ejemplo, te digo como se crearía inicialmente este archivo `package.json`:

```bash
# Ir al directorio de contratos si no estás ya
cd contracts
# Inicializar package.json con configuración por defecto
pnpm init
```

Esto creará un archivo `package.json` básico en `contracts/`, permitiendo instalar y gestionar dependencias como solhint, scripts personalizados, y otras herramientas relacionadas con el desarrollo de smart contracts.

### Instalación local de OpenZeppelin Contracts

Para utilizar OpenZeppelin Contracts en un proyecto basado en Foundry, instala la dependencia ejecutando desde el directorio de contratos:

```bash
# Situarse en el directorio contracts/, instalar librerías openzeppelin
forge install OpenZeppelin/openzeppelin-contracts
```

**Nota**: Este comando creará la carpeta `lib/` en la raíz del workspace (no dentro de `contracts/`). Esto es el comportamiento normal de Foundry, que maneja las dependencias como submódulos de Git a nivel de repositorio.

### [Descartado inicialmente] Linting: Instalación extensión Solidity en vscode

La extensión de vscode [Solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) permite resaltado de sintaxis, autocompletado, navegación de código y detección de errores en tiempo real, incluido Solhint.

Debes tener instalado por lo tanto solhint:

```bash
# Situarse en el directorio contracts/, instalar solhint
pnpm add -D solhint
```

Puedes configurar las reglas de Solhint creando un archivo `.solhint.json` en la directorio `contracts` del proyecto.

Reinicia VS Code para que la extensión detecte Solhint y muestre advertencias y errores directamente en el editor.

### Linting: integrado en Foundry + solhint como task

Instalar la extensión: <https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity>.

Sin embargo, para no perder las comprobaciones de solhint, se recomienda instalarlo y ejecutarlo como tarea manual o integrada en el flujo de trabajo:

```bash
# Situarse en el directorio contracts/, instalar solhint
pnpm add -D solhint
```

Puedes ejecutar solhint sobre tus contratos con:

```bash
npx solhint 'ruta/a/contratos/**/*.sol'
```

### Análisis estático de código: Slither

Slither analizador estático qye detecta vulnerabilidades conocidas.

Asegúrate de tener Python 3 instalado.

Instalar:

```bash
# Se asume que estás situado en el directorio contracts/ para activar el entorno virtual de python
source ../.venv/bin/activate
pip install slither-analyzer
```

Para analizar un proyecto, navega a directorio `contracts` y ejecuta:

```bash
slither .
```

### Entorno de pruebas: Servidor desarrollo local Anvil (Foundry)

Incluido al instalar Foundry inicialmente.

Opciones de configuración común:

```bash
# Cambiar puerto
anvil --port 8546

# Cambiar Chain ID
anvil --chain-id 1337

# Especificar número de cuentas
anvil --accounts 20

# Fork desde mainnet (muy útil para testing)
anvil --fork-url https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY

# Fork desde una red específica en un bloque determinado
anvil --fork-url https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY --fork-block-number 18000000
```

### Entorno de pruebas: Testing con Forge (Foundry)

Incluido al instalar Foundry inicialmente, pero para ejecutarlas en panel testing, instalar extension [Foundry Test Runner](https://marketplace.visualstudio.com/items?itemName=PraneshASP.vscode-foundry-test-adapter).

Algunos comandos y opciones útiles para ejecutar pruebas con Forge:

```bash
# Ejecutar todos los tests
forge test

# Ejecutar tests con mayor detalle de logs
forge test -vv

# Ejecutar un test específico por nombre
forge test --match-test nombreDelTest

# Especificar el archivo de configuración (por defecto foundry.toml)
forge test --config ruta/al/foundry.toml

# Usar un fork de mainnet para pruebas realistas
forge test --fork-url https://eth-mainnet.alchemyapi.io/v2/YOUR_API_KEY

# Limitar el gas máximo por test
forge test --gas-limit 10000000
```

El archivo `foundry.toml` permite personalizar parámetros como el directorio de tests, el compilador, versiones de Solidity, y otras opciones relevantes para el entorno de pruebas.

### Entorno de pruebas: forge scripts

Los scripts de Forge permiten automatizar despliegues y interacciones con contratos. Son archivos Solidity que utilizan la biblioteca `forge-std/Script` (ejemplo: `script/Deploy.s.sol`)

Ejemplo ejecutar:

```bash
# Simular el script (dry run)
forge script script/Deploy.s.sol

# Ejecutar en red local (Anvil)
forge script script/Deploy.s.sol --rpc-url http://localhost:8545 --broadcast

# Ejecutar en testnet (con clave privada)
forge script script/Deploy.s.sol --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast

# Verificar contrato después del despliegue
forge script script/Deploy.s.sol --rpc-url $SEPOLIA_RPC_URL --private-key $PRIVATE_KEY --broadcast --verify
```

Variables de entorno:

Crear archivo `.env` en la raíz del proyecto:

```bash
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/tu_api_key
PRIVATE_KEY=tu_clave_privada
ETHERSCAN_API_KEY=tu_api_key_etherscan
```

### CI/CD para smart contracts

#### Configuración en GitHub

Para implementar CI/CD de smart contracts en GitHub, tomando como ejemplo <.github/workflows/example-smart-contracts.yml>.

**Secrets requeridos en GitHub**:

- `SEPOLIA_RPC_URL`
- `PRIVATE_KEY`
- `ETHERSCAN_API_KEY`

Branch protection rules: configurar en Settings > Branches para requerir status checks antes de merge a main.

## Documentación: NatSpec + Forge

La extensión ya indicada para instalar [Solidity](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) incluye soporte para NatSpec con:

- Resaltado de sintaxis para comentarios NatSpec
- Autocompletado de tags NatSpec (@dev, @notice, @param, etc.)
- Vista previa de documentación al pasar el cursor sobre funciones

La extensión detectará automáticamente archivos `.sol` y habilitará el soporte NatSpec

Para generar documentación HTML a partir de NatSpec:

```bash
# Generar documentación con forge
forge doc

# Especificar directorio de salida
forge doc --out docs

# Servir documentación localmente
forge doc --serve --port 3000
```
