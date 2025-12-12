// Alchemy API call using axios
// Run: npm install axios dotenv

const axios = require('axios');

require('dotenv').config({ path: __dirname + '/../.env' });

// Load from environment variable
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ALCHEMY_NETWORK = process.env.ALCHEMY_NETWORK || 'eth-sepolia';

if (!ALCHEMY_API_KEY || ALCHEMY_API_KEY === 'YOUR_API_KEY') {
    console.error('❌ Error: ALCHEMY_API_KEY no configurada');
    console.error('📝 Crea un archivo .env con:');
    console.error('   ALCHEMY_API_KEY=your_api_key_here');
    console.error('   ALCHEMY_NETWORK=eth-sepolia');
    process.exit(1);
}

const ALCHEMY_URL = `https://${ALCHEMY_NETWORK}.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

/**
 * Make a JSON-RPC call to Alchemy using axios
 */
async function alchemyCall(method, params = []) {
    try {
        const response = await axios.post(ALCHEMY_URL, {
            jsonrpc: "2.0",
            id: 1,
            method: method,
            params: params
        });
        
        if (response.data.error) {
            throw new Error(response.data.error.message);
        }
        
        return response.data.result;
    } catch (error) {
        if (error.response) {
            throw new Error(`HTTP ${error.response.status}: ${error.response.statusText}`);
        }
        throw error;
    }
}

/**
 * Get current block number
 */
async function getBlockNumber() {
    const hexBlock = await alchemyCall('eth_blockNumber');
    return parseInt(hexBlock, 16);
}

/**
 * Get block by number
 */
async function getBlockByNumber(blockNumber = 'latest', fullTransactions = false) {
    return await alchemyCall('eth_getBlockByNumber', [blockNumber, fullTransactions]);
}

/**
 * Get balance
 */
async function getBalance(address, block = 'latest') {
    const hexBalance = await alchemyCall('eth_getBalance', [address, block]);
    return parseInt(hexBalance, 16);
}

/**
 * Get transaction count (nonce)
 */
async function getTransactionCount(address, block = 'latest') {
    const hexCount = await alchemyCall('eth_getTransactionCount', [address, block]);
    return parseInt(hexCount, 16);
}

// Demo function
async function demo() {
    console.log('=' .repeat(60));
    console.log('🚀 Alchemy JSON-RPC Demo with Axios');
    console.log('=' .repeat(60));
    console.log();
    
    try {
        // Demo 1: Block number
        console.log('📊 Demo 1: Número de bloque actual');
        const blockNumber = await getBlockNumber();
        console.log(`✅ Bloque: ${blockNumber} (0x${blockNumber.toString(16)})`);
        console.log();
        
        // Demo 2: Block info
        console.log('📊 Demo 2: Información del bloque');
        const block = await getBlockByNumber('latest', false);
        console.log(`📦 Bloque #${parseInt(block.number, 16)}`);
        console.log(`   Hash: ${block.hash}`);
        console.log(`   Timestamp: ${new Date(parseInt(block.timestamp, 16) * 1000).toISOString()}`);
        console.log(`   Transacciones: ${block.transactions.length}`);
        console.log(`   Gas: ${parseInt(block.gasUsed, 16).toLocaleString()}`);
        console.log();
        
        // Demo 3: Balance
        console.log('📊 Demo 3: Consultar balance');
        const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
        const balanceWei = await getBalance(address);
        const balanceEth = balanceWei / 1e18;
        console.log(`💰 ${address}`);
        console.log(`   Balance: ${balanceEth.toFixed(6)} ETH`);
        console.log();
        
        // Demo 4: Transaction count
        console.log('📊 Demo 4: Contador de transacciones');
        const nonce = await getTransactionCount(address);
        console.log(`🔐 Nonce: ${nonce}`);
        console.log();
        
        console.log('✅ Todas las demos completadas exitosamente');
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

// Run demo if executed directly
if (require.main === module) {
    demo();
}

// Export functions
module.exports = {
    alchemyCall,
    getBlockNumber,
    getBlockByNumber,
    getBalance,
    getTransactionCount
};
