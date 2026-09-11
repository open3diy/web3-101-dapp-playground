# Herramientas de documentación para proyectos Web3

Herramientas para generar documentación técnica automática desde repositorios GitHub, comparativa de opciones y recomendaciones según el tipo de proyecto.

## Herramientas que generan documentación desde GitHub

### Jekyll + GitHub Pages

Generador de sitios estáticos con integración nativa en GitHub.

- **Licencia**: MIT (open source)
- **Hosting**: `github.io` o dominio personalizado
- **Formato**: Markdown + Liquid templates
- **Ventajas**:
  - Integración directa con GitHub (activar en Settings → Pages)
  - Sin configuración de CI/CD (automático)
  - Sin costos de hosting
  - Sin publicidad
  - Ideal para landing pages y blogs técnicos
- **Limitaciones**:
  - Menos features de documentación técnica que alternativas
  - Temas limitados para documentación API
  - Búsqueda básica

**Uso en open3diy**: actualmente usado en `/org/site/` para <https://open3diy.org>

### Read the Docs

Plataforma especializada en documentación técnica que se conecta a repositorios.

- **Licencia**: Servicio (backend propietario, usa Sphinx open source)
- **Hosting**: `readthedocs.io` o dominio propio
- **Formato**: reStructuredText, Markdown (vía MyST)
- **Versión Community (gratuita)**:
  - 100% gratuita para proyectos open source
  - Sin límites de páginas, builds o tráfico
  - Builds automáticos desde GitHub/GitLab/Bitbucket
  - Versionado automático (ramas, tags, releases)
  - Búsqueda avanzada integrada
  - Múltiples formatos de salida (HTML, PDF, ePub)
  - **Limitación**: muestra publicidad no intrusiva
- **Versión Business (pago)**:
  - Sin publicidad
  - Proyectos privados
  - Dominios personalizados
  - Control de acceso granular
  - Desde ~$50/mes

**Ideal para**: documentación técnica completa tipo API reference, proyectos Python/blockchain con múltiples versiones.

### GitBook

Plataforma de documentación interactiva con sincronización GitHub.

- **Licencia**: Servicio (propietario)
- **Hosting**: `gitbook.io` o dominio propio
- **Formato**: Markdown
- **Versión gratuita**:
  - Muy limitada (1 usuario, 1 espacio)
  - Sin colaboración en equipo
- **Versión de pago**:
  - Desde $6.70/usuario/mes
  - Colaboración en equipo
  - Búsqueda avanzada
  - Integraciones

**Ideal para**: documentación visual e interactiva con presupuesto, equipos que priorizan UX sobre features técnicos.

### Sphinx (completamente open source)

El motor de documentación más establecido, usado por Read the Docs.

- **Licencia**: BSD (100% open source)
- **Hosting**: Self-hosted (GitHub Pages, servidor propio, Netlify, etc.)
- **Formato**: reStructuredText (nativo), Markdown (vía extensiones)
- **Ventajas**:
  - Sin costos ni publicidad
  - Control total sobre hosting y diseño
  - Generación de HTML, PDF, ePub
  - Extensiones potentes (autodoc, Napoleon, sphinx-js, etc.)
  - Usado en proyectos masivos (Python official docs, Linux kernel)
- **Limitaciones**:
  - Curva de aprendizaje más pronunciada
  - Requiere configuración inicial (conf.py)
  - reStructuredText puede ser menos intuitivo que Markdown

**Ideal para**: proyectos técnicos complejos que necesitan máximo control, documentación de APIs con autodocumentación desde código.

### MkDocs (completamente open source)

Generador de documentación minimalista y moderno.

- **Licencia**: BSD (100% open source)
- **Hosting**: Self-hosted (GitHub Pages, Netlify, Vercel, etc.)
- **Formato**: Markdown puro
- **Ventajas**:
  - Configuración mínima (archivo `mkdocs.yml`)
  - Markdown estándar (más fácil que reStructuredText)
  - Tema Material Design hermoso y completo (`mkdocs-material`)
  - Live reload durante desarrollo
  - Búsqueda integrada
  - Plugins para versioning, i18n, etc.
  - Muy rápido de configurar
- **Limitaciones**:
  - Menos extensiones que Sphinx
  - No genera PDF nativamente (requiere plugins)

**Ideal para**: proyectos que priorizan Markdown + rapidez, documentación moderna sin complejidad.

**Uso común**: muy popular en comunidad Web3 y DevOps.

### Docusaurus (completamente open source)

Framework moderno de Meta/Facebook para documentación.

- **Licencia**: MIT (100% open source)
- **Hosting**: Self-hosted (GitHub Pages, Vercel, Netlify, etc.)
- **Formato**: Markdown + MDX (Markdown + React components)
- **Ventajas**:
  - UI moderna basada en React
  - Versionado de documentación integrado
  - i18n (internacionalización) nativa
  - Búsqueda con Algolia DocSearch (gratuita para open source)
  - Blog integrado
  - Temas customizables
  - Muy usado en proyectos dev tools y blockchain
- **Limitaciones**:
  - Requiere Node.js y algo de configuración inicial
  - Más pesado que MkDocs o Jekyll
  - Puede ser overkill para proyectos pequeños

**Ideal para**: proyectos modernos que necesitan docs + blog + landing, equipos cómodos con React/JavaScript.

**Uso común**: Solana, Sui, React, Jest, Babel, etc.

### VuePress (completamente open source)

Generador de documentación basado en Vue.js.

- **Licencia**: MIT (100% open source)
- **Hosting**: Self-hosted (GitHub Pages, Netlify, Vercel, etc.)
- **Formato**: Markdown + Vue components
- **Ventajas**:
  - Minimalista y elegante
  - Basado en Vue.js (extensible con componentes Vue)
  - Configuración simple
  - SEO optimizado
  - Búsqueda integrada
- **Limitaciones**:
  - Comunidad más pequeña que Docusaurus
  - Menos plugins disponibles

**Ideal para**: proyectos Vue.js, equipos que prefieren Vue sobre React, documentación simple y elegante.

**Uso común**: Vue.js, Vite, Vitepress (versión moderna).

## Herramientas específicas para smart contracts

### solidity-docgen

Genera documentación Markdown desde comentarios NatSpec en Solidity.

- **Licencia**: MIT (open source)
- **Formato salida**: Markdown
- **Uso**: `npm install --save-dev solidity-docgen`
- **Integración**: se combina con MkDocs, Docusaurus o cualquier generador Markdown

**Ideal para**: proyectos Solidity que quieren auto-generar referencia de contratos.

### Forge (Foundry)

Foundry incluye generación de documentación desde NatSpec.

- **Comando**: `forge doc`
- **Salida**: HTML/Markdown con estructura de contratos
- **Ventajas**: integrado con el toolchain de Foundry

**Ideal para**: proyectos que ya usan Foundry como framework de desarrollo.

## Comparativa rápida

| Herramienta | Costo | Ads | Setup | Formato | Ideal para |
|-------------|-------|-----|-------|---------|------------|
| **Jekyll + GH Pages** | Gratis | No | Fácil | Markdown | Landing pages, blogs |
| **Read the Docs** | Gratis (con ads) / Pago | Sí (versión free) | Medio | reST/Markdown | Docs técnicas, múltiples versiones |
| **GitBook** | Limitado / Pago | No | Fácil | Markdown | Docs visuales con presupuesto |
| **Sphinx** | Gratis | No | Difícil | reST/Markdown | Proyectos técnicos complejos |
| **MkDocs** | Gratis | No | Muy fácil | Markdown | Docs rápidas y modernas |
| **Docusaurus** | Gratis | No | Medio | Markdown/MDX | Docs + blog + landing |
| **VuePress** | Gratis | No | Fácil | Markdown/Vue | Proyectos Vue, docs minimalistas |

## Recomendaciones según caso de uso

### Proyecto Web3 open source pequeño/mediano
**Recomendación**: MkDocs + mkdocs-material + GitHub Pages
- Sin costo
- Setup en minutos
- Hermoso out-of-the-box
- Markdown puro

### Proyecto Web3 grande con múltiples versiones
**Recomendación**: Sphinx + Read the Docs Community o Docusaurus
- Sphinx si priorizas features técnicos (autodoc, etc.)
- Docusaurus si priorizas UX moderna + blog

### Documentación de smart contracts
**Recomendación**: solidity-docgen + MkDocs o Docusaurus
- Auto-generar desde NatSpec
- Combinar con docs escritas manualmente

### Landing + docs + blog todo en uno
**Recomendación**: Docusaurus
- UI moderna
- Versionado integrado
- Blog nativo

### Máximo control y privacidad
**Recomendación**: Sphinx o MkDocs self-hosted
- Sin dependencias externas
- Hostear donde quieras

## Referencias

- [Jekyll](https://jekyllrb.com/)
- [Read the Docs](https://about.readthedocs.com/)
- [GitBook](https://www.gitbook.com/)
- [Sphinx](https://www.sphinx-doc.org/)
- [MkDocs](https://www.mkdocs.org/)
- [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
- [Docusaurus](https://docusaurus.io/)
- [VuePress](https://vuepress.vuejs.org/)
- [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen)
- [Foundry Book - Documentation](https://book.getfoundry.sh/reference/forge/forge-doc)

---

Actualizado: diciembre 2025
