# Capa Backend blockchain con smart contrats

## Arquitectura y responsabilidades

La capa backend basada en smart contracts en blockchains compatibles con EVM se encarga de gestionar la lógica de negocio descentralizada, la persistencia de datos críticos y la ejecución de reglas inmutables. Su diseño debe garantizar seguridad, transparencia y auditabilidad, minimizando la superficie de ataque y facilitando la interacción con aplicaciones externas.

### Principios de diseño

- Separación de responsabilidades: cada contrato debe tener una función clara y limitada, evitando la acumulación de lógica innecesaria.
- Mínima confianza: reducir la necesidad de confiar en actores externos o intermediarios, delegando la validación y ejecución a la blockchain.
- Transparencia: toda la lógica relevante debe ser visible y verificable en el código fuente del contrato.
- Actualización controlada: si se requiere capacidad de upgrade, emplear patrones como proxies o contratos modulares, siempre documentando los riesgos y limitaciones.
- Seguridad como prioridad: aplicar patrones de defensa en profundidad, validaciones estrictas y revisiones de código continuas.
- Eficiencia en gas: optimizar el uso de recursos para minimizar costes de transacción, evitando operaciones innecesarias o estructuras de datos costosas.
- Interoperabilidad: diseñar interfaces y eventos estándar para facilitar la integración con otras aplicaciones, wallets y servicios externos.
- Documentación y pruebas: mantener contratos bien documentados y cubiertos por pruebas automatizadas para asegurar su correcto funcionamiento y facilitar auditorías externas.

## Lenguajes

Solidity: El lenguaje más utilizado y ampliamente soportado para escribir contratos inteligentes en blockchains compatibles con EVM.

## Entorno de desarrollo y frameworks

Foundry: Herramienta moderna y eficiente para desarrollo, pruebas y despliegue de contratos inteligentes.

  > Nota: Se ha excluido Hardhat y Truffle en este stack principal para mantener un flujo de trabajo más moderno y eficiente, aunque siguen siendo opciones válidas según las necesidades del proyecto, este repositorio parte de una situación inicial ideal y no necesita arrastrar componentes legacy

## Librerías recomendadas

OpenZeppelin Contracts: Conjunto de contratos inteligentes auditados y reutilizables para implementar estándares y patrones comunes de seguridad.

## Linting

Con un enfoque centrado en Foundry, se recomienda utilizar la extensión [NomicFoundation.hardhat-solidity](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) para Visual Studio Code, ya que ofrece resaltado de sintaxis, autocompletado y soporte para Solidity moderno. Alternativamente, la extensión [solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity) es una opción válida, especialmente si se prefiere la integración con Solhint para el linting de código. La elección depende de las preferencias del equipo y del flujo de trabajo, pero ambas opciones facilitan la escritura y revisión de contratos inteligentes en Solidity.

## Análisis estático de código

Slither: analizador estático avanzado desarrollado por Trail of Bits. Detecta vulnerabilidades conocidas (como reentrancy, shadowing, etc.), patrones problemáticos y oportunidades de optimización de gas. Se ejecuta desde CLI y es una herramienta central para revisar contratos antes de desplegar. Complementa perfectamente a Solhint.

**Herramientas adicionales (opcional según el proyecto)**.

Echidna: framework de fuzzing para contratos inteligentes en Solidity, desarrollado por Trail of Bits. Permite definir propiedades (invariantes) que deben cumplirse durante la ejecución del contrato y genera automáticamente entradas aleatorias para intentar romper esas propiedades. Es especialmente útil para descubrir errores lógicos, vulnerabilidades y comportamientos inesperados que no se detectan con pruebas convencionales. Se integra fácilmente con Foundry y es recomendado para fortalecer la seguridad y robustez de los contratos antes de su despliegue.

Securify: analizador online de seguridad creado por ETH Zurich. Permite análisis rápido y detección de patrones de vulnerabilidad conocidos, pero está menos actualizado que otras opciones.

MythX: plataforma comercial que combina análisis estático, simbólico y fuzz testing. Ofrece una cobertura más completa, pensada para entornos de auditoría profesional o despliegues en mainnet.

## Entorno de pruebas

### Servidor desarrollo local

Anvil (Foundry): Simulador local de red Ethereum incluido en Foundry. Ofrece ejecución rápida, control sobre bloques y tiempo, y soporte para forks de mainnet. Ideal para desarrollo local, pruebas automatizadas y debugging. Suficiente para la mayoría de los flujos de desarrollo.

**Testnets públicas (opcional según necesidades)**.

Para pruebas con wallets reales, validación de experiencia de usuario o simulaciones de gas real, se recomienda utilizar testnets públicas como Sepolia (Ethereum) y OP Sepolia (Optimism). Estas redes permiten desplegar y probar contratos inteligentes en entornos que replican las condiciones de mainnet, pero sin riesgo económico. No son necesarias en etapas tempranas si se utiliza Anvil de forma efectiva, pero resultan útiles para pruebas de integración, interacción con wallets y validación de costes de gas en condiciones reales.

### Testing

Pruebas con Forge: herramienta de pruebas incluida en Foundry, diseñada para ejecutar tests sobre contratos inteligentes escritos en Solidity. Permite realizar pruebas unitarias (unit testing) para validar funciones individuales, pruebas de integración (integration testing) para verificar la interacción entre varios contratos o componentes, y pruebas sobre forks de mainnet (fork testing) para simular escenarios reales utilizando el estado actual de la red. Además, mide la cobertura de código para identificar qué partes del contrato han sido probadas y cuáles no. Incluye soporte para [fuzzing](https://book.getfoundry.sh/forge/fuzz-testing.html) (técnica que genera entradas aleatorias para descubrir errores inesperados, más información en [Wikipedia](https://es.wikipedia.org/wiki/Fuzzing)) y [pruebas de invariantes](https://getfoundry.sh/forge/advanced-testing/invariant-testing/) (verificación automática de que ciertas condiciones siempre se cumplen durante la ejecución), lo que aporta mayor robustez a largo plazo.

## Scripts de despliegue automatizados

Uso de `forge script` para automatizar despliegues en entornos locales, testnet o mainnet. Permite mantener la lógica de despliegue versionada y reproducible dentro del proyecto.

## CI/CD para smart contracts

Integración opcional de pipelines de integración continua (CI), como GitHub Actions, para ejecutar pruebas, análisis y verificación automáticamente con cada cambio en el repositorio.

## Documentación

NatSpec (Ethereum Natural Specification Format): estándar de comentarios para Solidity que permite que herramientas como Forge puedan generar documentación automáticamente. Los comentarios NatSpec utilizan la sintaxis `///` para funciones públicas y `/**` para bloques más extensos, facilitando la creación de documentación técnica clara y mantenible directamente desde el código fuente.

**Herramientas adicionales (opcional)**.

- `solidity-docgen`: genera documentación en formato Markdown a partir de comentarios NatSpec.
- `Docusaurus` (open source) o `Gitbook` (sin coste inicial pero limitado): pueden usarse para publicar documentación más completa si se desea.
