// Alchemy API call using axios
// Run: npm install axios dotenv

const axios = require('axios');

require('dotenv').config({ path: __dirname + '/../.env', debug: false });

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

// Demo function
async function demo() {
    
    // CUIDADO, lo que se deja en log es lo que en el cuaderno Jupyter se recibe.

    console.log('eth_getBlockByNumber 46147');
    console.log();
    
    axios.post(ALCHEMY_URL, {
        jsonrpc: "2.0",
        id: 1,
        method: "eth_getBlockByNumber",
        params: [
            "0xb443", // block 46147
            true  // retrieve the full transaction object in transactions array
        ]
    })
    .then((response) => {
        if (response.data && response.data.result) {
            // Print result as JSON for Python to capture
            console.log("output:\n");
            console.log(JSON.stringify(response.data.result, null, 2));
        } else {
            console.error('❌ Error: No se recibió resultado válido del API');
            console.error('Respuesta completa:', JSON.stringify(response.data, null, 2));
            return null;
        }
    })
    .catch((error) => {
        console.error('❌ Error:', error.message);
        return null;
    });
}

// Run demo if executed directly
if (require.main === module) {
    demo();
}
