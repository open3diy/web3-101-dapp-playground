
# Web3 - 101 - Playground

## Contexto

Este repositorio forma parte de [Open3DIY.org](https://github.com/open3diy/org/blob/main/README.md) y está relacionado con [web3 - 101](https://github.com/open3diy/web3-101/blob/main/README.md).

> Este repositorio es una extensión de los anteriores y está orientado a realizar pruebas con aplicaciones descentralizadas (Dapps) y contratos inteligentes.

El contenido tiene un enfoque educativo y de pruebas de concepto, sirviendo para explorar el potencial de la Web3 y sus aplicaciones descentralizadas.

**¡Aquí experimentamos con los componentes y aplicaciones de la Web3!**

Web3 representa la evolución de Internet hacia un modelo descentralizado, basado en tecnologías como blockchain, contratos inteligentes y redes peer-to-peer. Su propósito es devolver a los usuarios el control sobre sus datos y transacciones, eliminando intermediarios centralizados.

Las aplicaciones de Web3 incluyen identidades digitales, economías descentralizadas, almacenamiento distribuido, cadena de suministro, tokenización del mundo real y dApps.

## Propósito

**Mi propósito aquí** es probar y experimentar con aplicaciones descentralizadas, contratos inteligentes y otros componentes relevantes de la Web3. Estas pruebas servirán para aprender y documentar en el repositorio relacionado [Web3 - 101 - Proyectos educativos](https://github.com/open3diy/web3-101-edu-projects/blob/main/README.md), y finalmente para la divulgación en una serie de vídeos educativos en el canal de YouTube [Proyectos web3](https://www.youtube.com/@proyectos-web3).

## Solución

La solución adoptada es la formación continua y la práctica. Cualquier formación, documento o explicación será probada y experimentada aquí previamente.

### Asistente y Vibe Coding

Este repositorio se desarrolla en VS Code y Copilot, utilizando [custom instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions).

## Licencia

La licencia es MIT. Consulta el archivo LICENSE para más detalles.

## Referencias

Las referencias están disponibles en [la comunidad](https://github.com/open3diy/web3-101/blob/main/COMMUNITY.md).

## Contribuir

### Preparar el entorno local

Es necesario instalar previamente:

- Python y entornos virtuales de Python:

  ```bash
  sudo apt install python3 python3-dev python3-venv
  ```

- nvm: <https://github.com/nvm-sh/nvm>

**Entorno virtual de Python**.

Se recomienda crear un entorno virtual de Python específico para el repositorio, siguiendo estos pasos:

```bash
python3 -m venv .venv-web3-101-playground
```

Al abrir VS Code normalmente se activa el entorno virtual automáticamente, pero si no es así, puedes activarlo manualmente en la terminal:

```bash
source .venv-web3-101-playground/bin/activate
```

Instala los paquetes necesarios:

```bash
pip install
```

Instala la extensión de VS Code `Jupyter`.

### Iniciar VS Code

Desde la carpeta del proyecto, abre la terminal y ejecuta:

```bash
nvm use
code .
```
