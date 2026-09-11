"""
Node.js script runner for Jupyter Notebooks
Allows executing Node.js scripts directly from Python cells
"""
import subprocess
import json
import os
from pathlib import Path
from typing import Optional, Dict, Any


class NodeRunner:
    """Execute Node.js scripts from Python"""
    
    def __init__(self, working_dir: Optional[str] = None):
        """
        Initialize Node runner
        
        Args:
            working_dir: Working directory for Node.js scripts (default: current dir)
        """
        self.working_dir = working_dir or os.getcwd()
        self._check_node_installed()
    
    def _check_node_installed(self):
        """Check if Node.js is installed"""
        try:
            result = subprocess.run(
                ["node", "--version"],
                capture_output=True,
                text=True,
                timeout=5
            )
            if result.returncode == 0:
                print(f"✅ Node.js version: {result.stdout.strip()}")
            else:
                print("⚠️  Node.js no está instalado o no está en el PATH")
        except FileNotFoundError:
            print("⚠️  Node.js no encontrado. Instálalo desde https://nodejs.org/")
        except Exception as e:
            print(f"⚠️  Error verificando Node.js: {e}")
    
    def run_script(self, script_path: str, timeout: int = 30) -> Dict[str, Any]:
        """
        Run a Node.js script file
        
        Args:
            script_path: Path to the .js file
            timeout: Timeout in seconds
            
        Returns:
            Dict with stdout, stderr, return_code
        """
        script_full_path = Path(self.working_dir) / script_path
        
        if not script_full_path.exists():
            return {
                "success": False,
                "stdout": "",
                "stderr": f"Script no encontrado: {script_full_path}",
                "return_code": 1
            }
        
        print(f"🚀 Ejecutando: {script_path}")
        print("=" * 60)
        
        try:
            result = subprocess.run(
                ["node", str(script_full_path)],
                cwd=self.working_dir,
                capture_output=True,
                text=True,
                timeout=timeout
            )
            
            # Print output
            if result.stdout:
                print(result.stdout)
            
            if result.stderr:
                print("❌ STDERR:")
                print(result.stderr)
            
            print("=" * 60)
            
            return {
                "success": result.returncode == 0,
                "stdout": result.stdout,
                "stderr": result.stderr,
                "return_code": result.returncode
            }
            
        except subprocess.TimeoutExpired:
            print(f"⏱️  Timeout: El script excedió {timeout} segundos")
            return {
                "success": False,
                "stdout": "",
                "stderr": f"Timeout después de {timeout} segundos",
                "return_code": -1
            }
        except Exception as e:
            print(f"❌ Error ejecutando script: {e}")
            return {
                "success": False,
                "stdout": "",
                "stderr": str(e),
                "return_code": -1
            }
    
    def run_script_debug(self, script_path: str, port: int = 9229) -> Dict[str, Any]:
        """
        Run a Node.js script in debug mode with --inspect-brk
        Script will pause at start waiting for debugger to attach
        
        Args:
            script_path: Path to the .js file
            port: Debug port (default: 9229)
            
        Returns:
            Dict with process info and instructions
        """
        script_full_path = Path(self.working_dir) / script_path
        
        if not script_full_path.exists():
            return {
                "success": False,
                "stdout": "",
                "stderr": f"Script no encontrado: {script_full_path}",
                "return_code": 1
            }
        
        print(f"🐛 Iniciando script en modo debug: {script_path}")
        print(f"📍 Puerto de debug: {port}")
        print("=" * 60)
        print("⏸️  El script está PAUSADO esperando el debugger")
        print("\n📋 Para adjuntar el debugger en VS Code:")
        print("   1. Ve al panel de Debug (Ctrl+Shift+D)")
        print("   2. Selecciona 'Attach to Node Process'")
        print("   3. Presiona F5")
        print("\n💡 Tip: Pon breakpoints en tu código antes de adjuntar")
        print("=" * 60 + "\n")
        
        try:
            # Start process with --inspect-brk (pauses at start)
            process = subprocess.Popen(
                ["node", f"--inspect-brk={port}", str(script_full_path)],
                cwd=self.working_dir,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            
            # Wait for process to complete
            stdout, stderr = process.communicate()
            
            # Print output
            if stdout:
                print(stdout)
            
            if stderr and process.returncode != 0:
                print("❌ STDERR:")
                print(stderr)
            
            print("=" * 60)
            print(f"✅ Debug session finalizada (return code: {process.returncode})")
            
            return {
                "success": process.returncode == 0,
                "stdout": stdout,
                "stderr": stderr,
                "return_code": process.returncode
            }
            
        except Exception as e:
            print(f"❌ Error ejecutando script en modo debug: {e}")
            return {
                "success": False,
                "stdout": "",
                "stderr": str(e),
                "return_code": -1
            }

    def run_code(self, code: str, timeout: int = 30) -> Dict[str, Any]:
        """
        Run Node.js code directly (creates temporary file)
        
        Args:
            code: JavaScript/Node.js code to execute
            timeout: Timeout in seconds
            
        Returns:
            Dict with stdout, stderr, return_code
        """
        import tempfile
        
        print("🚀 Ejecutando código Node.js...")
        print("=" * 60)
        
        try:
            # Create temporary file with UTF-8 encoding
            with tempfile.NamedTemporaryFile(
                mode='w',
                suffix='.js',
                delete=False,
                dir=self.working_dir,
                encoding='utf-8'
            ) as tmp_file:
                tmp_file.write(code)
                tmp_path = tmp_file.name
            
            try:
                result = subprocess.run(
                    ["node", tmp_path],
                    cwd=self.working_dir,
                    capture_output=True,
                    text=True,
                    timeout=timeout
                )
                
                # Print output
                if result.stdout:
                    print(result.stdout)
                
                if result.stderr:
                    print("❌ STDERR:")
                    print(result.stderr)
                
                print("=" * 60)
                
                return {
                    "success": result.returncode == 0,
                    "stdout": result.stdout,
                    "stderr": result.stderr,
                    "return_code": result.returncode
                }
                
            finally:
                # Clean up temp file
                if os.path.exists(tmp_path):
                    os.remove(tmp_path)
                    
        except subprocess.TimeoutExpired:
            print(f"⏱️  Timeout: El código excedió {timeout} segundos")
            return {
                "success": False,
                "stdout": "",
                "stderr": f"Timeout después de {timeout} segundos",
                "return_code": -1
            }
        except Exception as e:
            print(f"❌ Error ejecutando código: {e}")
            return {
                "success": False,
                "stdout": "",
                "stderr": str(e),
                "return_code": -1
            }
    
    def install_packages(self, *packages: str) -> bool:
        """
        Install npm packages in current directory
        
        Args:
            packages: Package names to install
            
        Returns:
            True if successful
        """
        if not packages:
            print("⚠️  No se especificaron paquetes")
            return False
        
        print(f"📦 Instalando paquetes npm: {', '.join(packages)}")
        
        try:
            result = subprocess.run(
                ["npm", "install", *packages],
                cwd=self.working_dir,
                capture_output=True,
                text=True,
                timeout=120
            )
            
            if result.returncode == 0:
                print(f"✅ Paquetes instalados correctamente")
                return True
            else:
                print(f"❌ Error instalando paquetes:")
                print(result.stderr)
                return False
                
        except Exception as e:
            print(f"❌ Error: {e}")
            return False


def node(code: str, timeout: int = 30):
    """
    Shortcut function to run Node.js code
    
    Args:
        code: JavaScript/Node.js code to execute
        timeout: Timeout in seconds
    """
    runner = NodeRunner()
    return runner.run_code(code, timeout)


def node_script(script_path: str, timeout: int = 30):
    """
    Shortcut function to run a Node.js script file
    
    Args:
        script_path: Path to .js file
        timeout: Timeout in seconds
    """
    runner = NodeRunner()
    result = runner.run_script(script_path, timeout)

    if result['success']:
        output = result['stdout']
        
        # Look for nodeRunner marker
        marker = "output:"
        if marker in output:
            # Get everything after the marker
            parts = output.split(marker, 1)
            if len(parts) > 1:
                return parts[1].strip()
        
        # If no marker, return full output
        return output.strip()
    else:
        if result['stderr']:
            print("❌ Error en el script:")
            print(result['stderr'])
        return None
       
def node_script_debug(script_path: str, port: int = 9229):
    """
    Shortcut function to run a Node.js script in debug mode
    Script will pause at start waiting for debugger to attach
    
    Args:
        script_path: Path to .js file
        port: Debug port (default: 9229)
    """
    runner = NodeRunner()
    result = runner.run_script_debug(script_path, port)
    
    if result['success']:
        output = result['stdout']
        
        # Look for nodeRunner marker
        marker = "output:"
        if marker in output:
            # Get everything after the marker
            parts = output.split(marker, 1)
            if len(parts) > 1:
                return parts[1].strip()
        
        # If no marker, return full output
        return output.strip()
    else:
        if result['stderr']:
            print("❌ Error en el script:")
            print(result['stderr'])
        return None

if __name__ == "__main__":
    # Test
    print("🧪 Testing NodeRunner\n")
    
    # Test 1: Simple code
    print("Test 1: Código simple")
    node("console.log('Hello from Node.js!');")
    
    print("\n" + "=" * 60 + "\n")
    
    # Test 2: More complex code
    print("Test 2: Código con cálculos")
    node("""
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((a, b) => a + b, 0);
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${sum / numbers.length}`);
    """)
