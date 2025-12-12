# creando un cryptoactivo

referencia:
    https://www.youtube.com/watch?v=fFaZT0NcFFQ
    https://www.youtube.com/watch?v=XN8DRtqH3IE&list=PLqkGNYZotw9SUu1cz1fvTimiMiXo0dp1d&index=31


en la BSC o PancakeSwap por el coste

el codigo de un token BEP20 en https://github.com/jklepatch/eattheblocks/blob/master/screencast/308-create-bep20-token-bsc/Toke


```solidity
// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.2;

contract Token {
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowance;
    uint public totalSupply = 10000 * 10 ** 18;
    string public name = "DemoVoidGan";
    string public symbol = "DVG";
    uint public decimals = 18;
    
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
    
    constructor() {
        balances[msg.sender] = totalSupply;
    }
    
   
    function balanceOf(address owner) view  public returns(uint) {
        return balances[owner];
    }
    function transfer(address to, uint value) public returns(bool) {
        require(balanceOf(msg.sender) >= value, 'balance too low');
        balances[to] += value;
        balances[msg.sender] -= value;
        emit Transfer(msg.sender, to, value);
        return true;
    }
    
    function transferFrom(address from, address to, uint value) public returns(bool) {
        require(balanceOf(from) >= value, 'balance too low');
        require(allowance[from][msg.sender] >= value, 'allowance too low');
        balances[to] += value;
        balances[from] -= value;
        emit Transfer(from, to, value);
        return true;   
    }
    
    function approve(address spender, uint value) public returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;   
    }
}
```
Usamos https://remix.ethereum.org/ para compilar el contrato y desplegarlo en la BSC

transacciones eth
- Transfer Transactions
- Contract Deployment Transactions
- Contract Interaction Transactions
fases
- Recepción y validación inicial
- Inclusión en bloque
- Consenso
- Ejecución
- Propagación
- Actualización del estado en nodos
consultas: calls al smart contract
eventos: de logs mediante webshockets al smart contract del servidor
caracteristicas
- Contract Size Limit: 24KBe

La especificación ERC-20 proporciona:
    Funciones básicas:
        totalSupply(): Retorna el total de tokens en circulación.
        balanceOf(address account): Retorna el balance de tokens de una cuenta.
        transfer(address to, uint256 amount): Transfiere tokens a otra cuenta.
        transferFrom(address from, address to, uint256 amount): Transfiere tokens desde una cuenta a otra.
        approve(address spender, uint256 amount): Aprueba a una cuenta para gastar tokens en nombre del propietario.
        allowance(address owner, address spender): Retorna la cantidad de tokens que un gastador puede gastar en nombre del propietario.
    Eventos:
        Transfer(address indexed from, address indexed to, uint256 value): Emite cuando se transfieren tokens.
        Approval(address indexed owner, address indexed spender, uint256 value): Emite cuando se aprueban tokens para gasto.

compilación
    Solidity a ABI y Bytecode, y luego, Bytecode a Opcodes durante la ejecución en la EVM.
    El ABI es el descriptor (json) para el cliente (instancia, llamadas <call> y eventos)

tipos de token
    estandar: sin ajustes dinámicos de suministro ni tarifas adicionales por transacciones
    rebase: ajustan la emisión para estabilizar el precio
    fee-on transfer (Tokens con tarifa de transferencia): token que en el propio contrato aplican una tarifa de transferencia, aparte del coste de gas
crear liquidez 
    en DEX con libro de ordenes, al mercado
    creando liquidez en un AMM inicialmente
        modelo tradicional con el par de token, el precio se determina por la cantidad de cada par
        liquidez concentrada, eliges rango de precios y adaptas a la cantidad a ingresar
        hay variaciones
        riesgo de perdida no permanente por variar el precio (inpermanent lose) donde el token de referencia sube o baja de valor
            - si sube habría sido más beneficioso no bloquer los token en una pool, en cualquier caso, te beneficias de cierta subida en el valor del token y de las fee
            - si baja, el token puede ser solido y mantener el valor pero aumentando el toktoken de referencia o desplomarse el precio ajustado, pero lo normal es que tengas perdida.
        como resultado el Liquidity Provider (LP) token con la participación en la pool
ganar (earn)
    en dos pasos: farmear o cosecharu  en una granja (farm) y luego recolectar (yield)
        incentivar para unificar los mismos pares en uno
    gano: el token nativo de la plataforma y fee de los token de par
        el token es inflaccionario emitido
            crear burn y bloqueo en VE
        y si demuestro fidelidad se incrementa el beneficio con VE
            Vote escrow, el fondo de garantia aplicado al voto, con bloqueo en base a tiempo para
                darte voto
                mas porcentaje de participacion en farm
                evitar la inflacción del token
staking de un token
    no solo para para la seguridad de un protocolo, también para la estabilidad de precios y el ecosistema del proyecto.
        como staking de CAKE en pancakeswap para controlar la inflacción
        o syrup pool para distribuir tokens del proyecto
    otros ecosistemas como wrapped de un token como ETH
        

    
    
    
