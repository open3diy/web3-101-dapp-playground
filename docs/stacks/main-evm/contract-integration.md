# Capa de integración de smart contract

La capa de integración conecta los contratos inteligentes con sistemas externos a través de TypeScript. Está diseñada para mantener el código limpio, moderno y reutilizable, y puede usarse tanto en scripts backend como empaquetarse como SDK para frontend.

## Arquitectura y responsabilidades

Esta capa actúa como puente entre la blockchain y las aplicaciones, proporcionando:

- Abstracción de la complejidad de interacción con contratos inteligentes
- Tipado fuerte para todas las operaciones blockchain
- Manejo centralizado de configuraciones de red y providers
- Validación de datos de entrada y salida
- Gestión de estados de transacciones y eventos
- Interfaz uniforme para diferentes entornos de ejecución

### Principios de diseño

- Separación de responsabilidades: cada módulo tiene una función específica
- Inmutabilidad: preferencia por estructuras de datos inmutables
- Composición sobre herencia: uso de funciones y composición de módulos
- Type safety: aprovechamiento completo del sistema de tipos de TypeScript
- State Management: Gestión del estado de las operaciones asíncronas (loading, success, error) cuando se invocan funciones del SDK de integración. Incluye manejo de estados de transacciones y actualización de la UI en consecuencia

## Lenguaje

TypeScript - Lenguaje base que proporciona tipado estático, mejor experiencia de desarrollo y facilita el mantenimiento del código.

## Entorno de desarrollo y frameworks

Node.js (LTS) como runtime principal que garantiza compatibilidad y estabilidad a largo plazo.

pnpm, gestor de paquetes que optimiza el espacio en disco y mejora la velocidad de instalación mediante enlaces simbólicos.

dotenv para manejar RPC URLs, claves privadas y configuración de entornos de forma segura.

## Librerías recomendadas

Viem - Librería moderna para interactuar con Ethereum que ofrece API composable y modular, tipado fuerte nativo, mejor rendimiento que alternativas tradicionales y soporte nativo para múltiples chains.

TypeChain - Generador de tipos TypeScript a partir de ABIs que proporciona interfaces tipadas para contratos, autocompletado en IDE y detección de errores en tiempo de compilación.

Zod - Librería de validación que permite definición de esquemas declarativos, validación en runtime, inferencia automática de tipos TypeScript y mensajes de error detallados.

## Linting

eslint - Herramienta de linting que mantiene consistencia en el código y detecta problemas potenciales.

prettier - Formateador automático que asegura un estilo consistente en todo el proyecto.

## Entorno de pruebas

### Unit Testing

> Pruebas unitarias. Altamente repetibles, totalmente automatizadas y aisladas.

Vitest - Framework de testing principal con ejecución rápida de pruebas, compatibilidad nativa con TypeScript y soporte para testing paralelo.

Vitest Mock Functions - Utilities nativas para mockear llamadas RPC, providers y respuestas de contratos en tests unitarios aislados.

### Integration Testing

> Pruebas de interacción entre componentes TypeScript de integración. Altamente repetibles, totalmente automatizadas, relativamente aisladas.

Vitest + Viem - Framework de testing con utilities para validar la integración completa del SDK TypeScript, incluyendo conexión a contratos, manejo de errores de red y validación de responses blockchain.

## Análisis estático de código

ESLint Security: Extensión de ESLint con plugins de seguridad para detectar vulnerabilidades comunes, patrones problemáticos y code smells en código React/TypeScript. Ligero y bien integrado con el flujo de desarrollo existente.

**Herramientas adicionales (opcional según el proyecto)**.

SonarJS: Plugin de SonarQube específico para JavaScript/TypeScript que analiza código de integración Web3. Detecta vulnerabilidades, bugs y code smells en lógica de interacción con contratos.

Semgrep: Herramienta de análisis estático que puede configurarse con reglas específicas para Web3, detectando patrones inseguros en manejo de claves privadas, validación de datos y lógica de transacciones.

## Documentación

Typedoc - Generador de documentación que extrae información directamente del código TypeScript y sus tipos.

## Pruebas y scripts

ts-node - Ejecución directa de scripts TypeScript sin compilación previa, ideal para scripts de deployment, tareas de mantenimiento, pruebas ad-hoc y herramientas de desarrollo.

## Generación de SDK para DApp

tsup - Bundler que genera builds optimizados para diferentes targets (ESM, CJS), tree-shaking automático, minificación y optimización, y source maps para debugging.

El SDK generado incluye módulos por funcionalidad (tokens, NFTs, DeFi, etc.), utilities compartidas, tipos y constantes, y documentación embebida.

## Exclusiones

- Se excluye el uso de ethers.js y web3.js, ya que Viem proporciona una alternativa más moderna, modular y enfocada en la experiencia TypeScript, facilitando la integración y el mantenimiento del código.
- Esta capa no contiene lógica de interfaz ni flujos de usuario, asegurando una separación clara entre la integración de contratos y la presentación o interacción con el usuario.
