# Contributing a Web3-101-DApp-Playground

Este es un proyecto educativo y experimental relacionado con [web3 - 101](https://github.com/open3diy/web3-101/blob/main/README.md) con el propósito de aprender y experimentar con aplicaciones descentralizadas y smart contrats en Web3.

Como entorno de desarrollo se recomienda [`vscode`](https://code.visualstudio.com/).
  > Aunque puedes usar tu editor favorito.

## Pautas para Contribuciones

Este repositorio tiene las pautas de [open3diy.org](https://github.com/open3diy/org/blob/main/CONTRIBUTING.md).

El repositorio configura [custom instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions), por lo que se recomienda el uso de copilot o herramienta compatible. Revisa `.github/`.

## Herramientas desarrollo recomendadas

**Herramientas para el enfoque educativo**:

Instalar Python y entornos virtuales:

```bash
sudo apt install python3 python3-dev python3-venv
```

Instalar Graphviz y PyGraphviz son necesarios para que los notebooks funcionen correctamente y puedan mostrar las visualizaciones educativas:

```bash
sudo apt install graphviz libgraphviz-dev pkg-config
```

Acceder al workspace `web3-101-dapp-playground`. Inicialmente realizar los pasos siguientes:

Crear un entorno virtual de python:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Instalar paquetes necesarios para usar Jupyter notebook necesario para realizar pruebas y demostraciones:

```bash
pip install notebook ipykernel ipympl graphviz networkx matplotlib pydot pygraphviz pyvis networkx bokeh networkx base58
```

Para el uso de Markdown, se recomienda usar las siguientes extensiones de `vscode`:

- [`Markdown Preview Mermaid Support`](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) o cualquier otra que te permita usar `Mermaid`.
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) para detectar errores o malas prácticas al escribir en [markdown](https://es.wikipedia.org/wiki/Markdown).
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) para corregir ortografía.

Para los realizar pruebas con los cuadernos Jupyter, instalar la extensión [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter). Ideal para pruebas, cálculos, análisis y documentación en un solo archivo `.ipynb`.
  > Desde [binder](https://notebooks.gesis.org/binder/) puedes cargar los notebooks.

**Herramientas para el desarrollo de DApps**:

Instalar herramientas de desarrollo esenciales:

```bash
sudo apt update
sudo apt install build-essential curl wget
```

Instalar Node.js y herramientas base:

```bash
# Instalar nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/HEAD/install.sh | bash
source ~/.bashrc

# Instalar Node.js LTS
nvm install --lts
nvm use --lts
```

Si tienes diferentes versiones de node js, normalmente necesitas ejecutar en terminal `nvm use` para que carge la version indicada en archivo `.nvmrc`. Para automatizar esto, tienes 2 opciones:

- Instalar direnv y dar permiso y configurar:

    ```bash
    #Instalar direnv
    sudo apt install direnv

    #Permiso
    direnv allow

    # Configurar direnv en ~/.bashrc
    echo -e '\neval "$(direnv hook bash)"' >> ~/.bashrc
    source ~/.bashrc
    ```

    Para probar, la próxima vez que se cargue VSCode, abrir terminal y verificar que se carga la versión correcta:

    ```bash
    nvm current
    ```

    > Al realizar la prueba era la v22.19.0

- Instalar la extension vscode nvm integration (recomendado).

Instalar pnpm como gestor de paquetes e iniciar:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Instalar extension vscode: [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense).

Instalar Foundry para desarrollo de smart contracts:

```bash
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup
```

Para completar el stack específico para desarrollar la DApp, puedes ir al [stack principal](docs/stacks/main-evm/INSTALL.md) para revisar los pasos necesarios de instalación.

## Pruebas unitarias y tasks de VSCode

Las pruebas unitarias se integran directamente en VSCode a través del panel de pruebas, que funciona con las herramientas de testing que detecte automáticamente en el proyecto. Sin embargo, muchas tareas automatizadas requieren el uso del CLI, por lo que estas acciones se ejecutan mediante tasks de VSCode.

### Configuración de tasks

Los tasks pueden ser:

- Simples: ejecutan un solo comando
- Compuestos: combinan múltiples tasks
- Paralelos: ejecutan varias tareas simultáneamente

**Visualización de resultados**:

La extensión [Output Colorizer](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer) permite crear reglas visuales para identificar fácilmente el estado de las tareas:

- Verde para éxito
- Rojo para errores
- Amarillo para advertencias

**Ejecución de tasks**:

Para ejecutar los tasks configurados:

1. Usa la paleta de comandos: `Ctrl+Shift+P` → "Tasks: Run Task"
2. Atajo de teclado: `Ctrl+Shift+P` → "Tasks: Run Build Task" (`Ctrl+Shift+B`)
3. Panel de tareas en la barra lateral

Los tasks están configurados en `.vscode/tasks.json` para automatizar operaciones comunes como compilación, testing, linting y deployment de smart contracts.

## CI/CD

Para trabajar con los workflows de integración continua, se recomienda instalar la extensión [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions) de VSCode.

Esta extensión permite:

- Visualizar y editar workflows directamente desde el editor
- Ejecutar workflows localmente para pruebas
- Monitorear el estado de los jobs en tiempo real
- Acceder a logs detallados de ejecución

Los workflows están configurados en `.github/workflows/` para automatizar tareas como testing, linting y deployment.

---

¡Gracias por ayudar a hacer Web3 más accesible para todos! 🌟
