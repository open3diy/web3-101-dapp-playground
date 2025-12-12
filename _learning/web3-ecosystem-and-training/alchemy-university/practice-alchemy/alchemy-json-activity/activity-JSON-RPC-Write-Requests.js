// Alchemy API call using axios
// Run: npm install axios dotenv

const axios = require('axios');
const { Alchemy, Network, Wallet, Utils } = require('alchemy-sdk');

require('dotenv').config({ path: __dirname + '/../.env', debug: false });

// Load from environment variable
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ALCHEMY_NETWORK = process.env.ALCHEMY_NETWORK || 'eth-sepolia';
const TEST_PRIVATE_KEY = process.env.PRIVATE_KEY;


const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(TEST_PRIVATE_KEY);

// Demo function
async function demo() {
 
  const nonce = await alchemy.core.getTransactionCount(
    wallet.address,
    'latest'
  );

  let transaction = {
    to: '0x9500b536fdb0aedba61b815a3e691c1b4a2e2521',
    value: Utils.parseEther('0.0001'), 
    gasLimit: '21000',
    maxPriorityFeePerGas: Utils.parseUnits('5', 'gwei'),
    maxFeePerGas: Utils.parseUnits('20', 'gwei'),
    nonce: nonce,
    type: 2,
    chainId: 11155111, // sepolia transaction
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  console.log('Raw tx: ', rawTransaction);
  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log(`https://sepolia.etherscan.io/tx/${tx.hash}`);
 
}

// Run demo if executed directly
if (require.main === module) {
    demo();
}
