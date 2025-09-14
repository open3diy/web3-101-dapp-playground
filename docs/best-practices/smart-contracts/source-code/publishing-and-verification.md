# Mejores prácticas de smart contracts

## Licencias del código

Incluir un archivo `LICENSE` en el repositorio y declarar la licencia en el encabezado de cada contrato fuente. Mejora la claridad legal y la reutilización del código por terceros.

## Publicación y verificación del código fuente del smart contract

El código fuente de los smart contracts se publica y verifica en exploradores como Etherscan (para Ethereum) u Optimistic Etherscan (para Optimism), según la red utilizada. Esto permite transparencia, lectura pública del contrato y uso de interfaces ABI directamente desde el explorador.

**Verificación automática con Foundry (forge)**  
Foundry permite verificar contratos automáticamente usando el comando `forge verify-contract`, junto con una clave de API del explorador correspondiente. Esto facilita el proceso post-deploy y garantiza transparencia en el código.

**Verificación manual (opcional)**  
También es posible publicar el código directamente en la web del explorador, pegando el código fuente y configurando los parámetros del compilador de forma manual.

## Incluir todos los archivos fuente y dependencias para compilación reproducible

Es importante incluir todos los archivos `.sol` necesarios para recompilar el contrato exactamente como fue desplegado. Esto incluye dependencias externas (como OpenZeppelin) y configuraciones del compilador, asegurando una compilación verificable y transparente.

## Usar versiones específicas de Solidity (no rangos flotantes como `^0.8.0`)

Usar versiones exactas, como `pragma solidity 0.8.20;`, evita comportamientos inesperados debido a diferencias entre compiladores. Los rangos como `^0.8.0` pueden provocar cambios sutiles con futuras actualizaciones del compilador.

## Documentar todas las funciones públicas con NatSpec completo

Usar comentarios `///` con formato NatSpec en todas las funciones públicas o externas facilita la generación de documentación automática, mejora la experiencia de usuario en wallets compatibles y ayuda a la auditoría del contrato.

## Publicar README con arquitectura del contrato y decisiones de diseño

El repositorio debe incluir un archivo `README.md` que explique la arquitectura general del contrato, el objetivo del proyecto, las decisiones de diseño clave y cómo interactuar con el contrato desde interfaces externas.

## Incluir diagramas de flujo para lógica compleja

En casos donde la lógica del contrato es extensa o condicional, se recomienda incluir diagramas de flujo o diagramas de estado para facilitar la comprensión por parte de auditores y desarrolladores externos.  
Se pueden utilizar herramientas como [Mermaid](https://mermaid-js.github.io/) para crear diagramas directamente en archivos Markdown, permitiendo mantener la documentación visual junto al código fuente.

## Mantener changelog de versiones y actualizaciones

Un archivo `CHANGELOG.md` permite documentar los cambios entre versiones del contrato, incluyendo mejoras, correcciones de errores y cambios en la interfaz pública. Esto ayuda al versionado claro del código y mejora la trazabilidad.

Aplicar un esquema de versionado SemVer y utilizar etiquetas (`git tag`) para marcar versiones relevantes del contrato.

## Proporcionar ejemplos de uso e integración

Incluir scripts o fragmentos de código que muestren cómo interactuar con el contrato desde herramientas como Foundry, Ethers.js o Viem facilita la adopción del proyecto y reduce errores por malentendidos.

## Documentar permisos y roles de acceso claramente

Las funciones que requieren permisos especiales deben estar claramente documentadas. Se debe indicar qué rol puede ejecutar qué función, cómo se asignan estos roles y si pueden ser transferidos o revocados.

## Contratos actualizables

En proyectos donde se requiera la capacidad de actualizar contratos inteligentes tras su despliegue, es fundamental documentar el patrón de upgrade seleccionado, como UUPS (Universal Upgradeable Proxy Standard), Transparent Proxy u otros.  
Se debe describir la arquitectura adoptada, especificando la relación entre el contrato proxy y la implementación lógica, así como el mecanismo de delegación de llamadas (`delegatecall`).  
Es importante detallar los pasos para realizar una actualización segura, incluyendo la gestión de roles administrativos, el proceso de migración de estado y la validación de compatibilidad de almacenamiento entre versiones.

Además, se deben enumerar las consideraciones de seguridad relevantes, como la protección contra ataques de inicialización, la restricción de funciones de upgrade a cuentas autorizadas y la revisión de posibles vulnerabilidades introducidas por la lógica de actualización.  
Se recomienda el uso de librerías auditadas como OpenZeppelin Upgrades para implementar estos patrones y facilitar la gestión de upgrades de manera segura y estandarizada.

Si el proyecto no requiere contratos actualizables, este apartado puede omitirse.
