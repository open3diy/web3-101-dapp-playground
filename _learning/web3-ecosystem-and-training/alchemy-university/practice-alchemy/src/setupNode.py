"""
Setup utilities for Jupyter notebooks
Configures environment for Node.js execution across different platforms
"""
import os
import subprocess
import shutil
from pathlib import Path
from typing import Optional, Tuple


def _find_node_in_nvm() -> Optional[Path]:
    """
    Find Node.js installation in nvm directory
    
    Returns:
        Path to Node.js bin directory if found, None otherwise
    """
    home = Path.home()
    nvm_dir = home / ".nvm" / "versions" / "node"
    
    if not nvm_dir.exists():
        return None
    
    # Get all installed versions, sorted by version number (descending)
    versions = sorted(nvm_dir.iterdir(), reverse=True)
    
    for version_dir in versions:
        node_bin = version_dir / "bin"
        if node_bin.exists() and (node_bin / "node").exists():
            return node_bin
    
    return None


def _find_node_in_conda() -> Optional[Path]:
    """
    Find Node.js in conda environment
    
    Returns:
        Path to Node.js bin directory if found, None otherwise
    """
    conda_prefix = os.environ.get('CONDA_PREFIX')
    
    if conda_prefix:
        conda_bin = Path(conda_prefix) / "bin"
        if (conda_bin / "node").exists():
            return conda_bin
    
    return None


def _find_node_in_system() -> Optional[Path]:
    """
    Find Node.js in system PATH
    
    Returns:
        Path to Node.js bin directory if found, None otherwise
    """
    node_path = shutil.which('node')
    
    if node_path:
        return Path(node_path).parent
    
    return None


def setup_node_path() -> bool:
    """
    Configure PATH to include Node.js from various sources
    
    Tries to find Node.js in this order:
    1. Already in PATH (system, conda, etc.)
    2. nvm installation (local development)
    3. Conda environment (Binder with environment.yml)
    
    Returns:
        bool: True if Node.js was found and configured, False otherwise
    """
    print("🔍 Buscando Node.js...")
    
    # Strategy 1: Check if already in PATH
    if shutil.which('node'):
        print("✅ Node.js ya está disponible en PATH")
        _verify_node_installation()
        return True
    
    # Strategy 2: Try nvm (local development)
    node_bin_path = _find_node_in_nvm()
    if node_bin_path:
        print(f"✅ Node.js encontrado en nvm")
        print(f"📍 Path: {node_bin_path}")
        _add_to_path(node_bin_path)
        _verify_node_installation()
        return True
    
    # Strategy 3: Try conda environment (Binder)
    node_bin_path = _find_node_in_conda()
    if node_bin_path:
        print(f"✅ Node.js encontrado en conda")
        print(f"📍 Path: {node_bin_path}")
        _add_to_path(node_bin_path)
        _verify_node_installation()
        return True
    
    # Strategy 4: Last resort - check common system paths
    common_paths = [
        Path("/usr/bin"),
        Path("/usr/local/bin"),
        Path.home() / ".local" / "bin"
    ]
    
    for path in common_paths:
        if (path / "node").exists():
            print(f"✅ Node.js encontrado en {path}")
            _add_to_path(path)
            _verify_node_installation()
            return True
    
    # Not found
    print("❌ Node.js no encontrado")
    print("\n💡 Para usar este notebook necesitas Node.js instalado:")
    print("   • Local: Instala nvm desde https://github.com/nvm-sh/nvm")
    print("   • Binder: Agrega 'nodejs' a apt.txt o environment.yml")
    return False


def _add_to_path(node_bin_path: Path) -> None:
    """Add directory to PATH environment variable"""
    current_path = os.environ.get('PATH', '')
    os.environ['PATH'] = f"{node_bin_path}:{current_path}"


def _verify_node_installation() -> Tuple[bool, str, str]:
    """
    Verify Node.js and npm are working
    
    Returns:
        Tuple of (success, node_version, npm_version)
    """
    try:
        node_result = subprocess.run(
            ['node', '--version'],
            capture_output=True,
            text=True,
            timeout=5
        )
        npm_result = subprocess.run(
            ['npm', '--version'],
            capture_output=True,
            text=True,
            timeout=5
        )
        
        if node_result.returncode == 0 and npm_result.returncode == 0:
            node_version = node_result.stdout.strip()
            npm_version = npm_result.stdout.strip()
            print(f"✅ Node.js: {node_version}")
            print(f"✅ npm: {npm_version}")
            return True, node_version, npm_version
        else:
            print("❌ Error verificando Node.js")
            return False, "", ""
            
    except (subprocess.TimeoutExpired, FileNotFoundError) as e:
        print(f"❌ Error ejecutando Node.js: {e}")
        return False, "", ""


def verify_environment() -> dict:
    """
    Verify that all required tools are available
    
    Returns:
        dict: Status of each required tool
    """
    status = {
        'python': True,  # Already running Python
        'node': False,
        'npm': False
    }
    
    try:
        # Check Node.js
        node_result = subprocess.run(
            ['node', '--version'],
            capture_output=True,
            text=True,
            timeout=5
        )
        status['node'] = node_result.returncode == 0
        
        # Check npm
        npm_result = subprocess.run(
            ['npm', '--version'],
            capture_output=True,
            text=True,
            timeout=5
        )
        status['npm'] = npm_result.returncode == 0
        
    except (subprocess.TimeoutExpired, FileNotFoundError):
        pass
    
    return status


if __name__ == "__main__":
    print("🔧 Configurando entorno...\n")
    success = setup_node_path()
    
    if success:
        print("\n📊 Estado del entorno:")
        status = verify_environment()
        for tool, available in status.items():
            icon = "✅" if available else "❌"
            state = 'Disponible' if available else 'No encontrado'
            print(f"{icon} {tool}: {state}")
    else:
        print("\n⚠️  Configuración incompleta")