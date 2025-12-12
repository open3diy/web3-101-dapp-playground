// Mini HTTP server for Alchemy API testing
// Run: npm install dotenv && node mini-server.js

const http = require('http');
const https = require('https');
const url = require('url');

require('dotenv').config({ path: __dirname + '/../.env' });

// Configuration
const PORT = 8001;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const ALCHEMY_NETWORK = process.env.ALCHEMY_NETWORK || 'eth-sepolia';

if (!ALCHEMY_API_KEY || ALCHEMY_API_KEY === 'YOUR_API_KEY') {
    console.error('❌ Error: ALCHEMY_API_KEY no configurada');
    console.error('📝 Crea un archivo .env en demo-node-assets/ con tu API key');
    process.exit(1);
}

const ALCHEMY_URL = `https://${ALCHEMY_NETWORK}.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

/**
 * Make Alchemy API call
 */
function alchemyCall(method, params = []) {
    return new Promise((resolve, reject) => {
        const apiUrl = new URL(ALCHEMY_URL);
        
        const payload = JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: method,
            params: params
        });
        
        const options = {
            hostname: apiUrl.hostname,
            path: apiUrl.pathname + apiUrl.search,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': payload.length
            }
        };
        
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    resolve(response.error ? { error: response.error.message } : response.result);
                } catch (error) {
                    reject(error);
                }
            });
        });
        
        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

/**
 * Serve HTML homepage
 */
function serveHomepage(res) {
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Alchemy Mini Server</title>
    <meta charset="utf-8">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 40px auto;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        h1 { color: #667eea; margin-bottom: 10px; }
        .subtitle { color: #666; margin-bottom: 30px; }
        .section {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border-left: 4px solid #667eea;
        }
        h2 { color: #333; margin-bottom: 15px; font-size: 1.3em; }
        button {
            background: #667eea;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s;
        }
        button:hover {
            background: #5568d3;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        input {
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 6px;
            width: 400px;
            font-size: 14px;
            margin-right: 10px;
        }
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        .result {
            background: #2d3748;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            white-space: pre-wrap;
            word-wrap: break-word;
            display: none;
            max-height: 400px;
            overflow-y: auto;
        }
        .emoji { font-size: 1.5em; margin-right: 8px; }
        .loading { color: #667eea; }
    </style>
</head>
<body>
    <div class="container">
        <h1><span class="emoji">⚡</span>Alchemy Mini Server</h1>
        <p class="subtitle">Node.js server for Ethereum JSON-RPC calls</p>
        
        <div class="section">
            <h2><span class="emoji">📦</span>Block Information</h2>
            <button onclick="getBlock()">Get Latest Block</button>
            <div id="blockResult" class="result"></div>
        </div>
        
        <div class="section">
            <h2><span class="emoji">💰</span>Account Balance</h2>
            <input type="text" id="addressInput" 
                   placeholder="Enter Ethereum address (0x...)" 
                   value="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045">
            <button onclick="getBalance()">Check Balance</button>
            <div id="balanceResult" class="result"></div>
        </div>
        
        <div class="section">
            <h2><span class="emoji">🔢</span>Block Number</h2>
            <button onclick="getBlockNumber()">Get Current Block</button>
            <div id="blockNumberResult" class="result"></div>
        </div>
    </div>
    
    <script>
        async function apiCall(endpoint, query = '') {
            const res = await fetch(endpoint + query);
            return await res.json();
        }
        
        function showResult(elementId, data) {
            const el = document.getElementById(elementId);
            el.textContent = JSON.stringify(data, null, 2);
            el.style.display = 'block';
        }
        
        function showLoading(elementId) {
            const el = document.getElementById(elementId);
            el.textContent = 'Loading...';
            el.style.display = 'block';
            el.className = 'result loading';
        }
        
        async function getBlock() {
            showLoading('blockResult');
            try {
                const data = await apiCall('/api/block');
                showResult('blockResult', data);
            } catch (error) {
                showResult('blockResult', { error: error.message });
            }
        }
        
        async function getBalance() {
            const address = document.getElementById('addressInput').value.trim();
            if (!address) {
                alert('Please enter an address');
                return;
            }
            showLoading('balanceResult');
            try {
                const data = await apiCall('/api/balance?address=' + encodeURIComponent(address));
                showResult('balanceResult', data);
            } catch (error) {
                showResult('balanceResult', { error: error.message });
            }
        }
        
        async function getBlockNumber() {
            showLoading('blockNumberResult');
            try {
                const data = await apiCall('/api/blocknumber');
                showResult('blockNumberResult', data);
            } catch (error) {
                showResult('blockNumberResult', { error: error.message });
            }
        }
    </script>
</body>
</html>
    `;
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
}

/**
 * Create HTTP server
 */
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    try {
        if (pathname === '/') {
            serveHomepage(res);
        } else if (pathname === '/api/block') {
            const block = await alchemyCall('eth_getBlockByNumber', ['latest', false]);
            const response = {
                block_number: parseInt(block.number, 16),
                block_hash: block.hash,
                timestamp: parseInt(block.timestamp, 16),
                transactions_count: block.transactions.length,
                gas_used: parseInt(block.gasUsed, 16)
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response, null, 2));
        } else if (pathname === '/api/balance') {
            const address = parsedUrl.query.address;
            if (!address) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Address parameter required' }));
                return;
            }
            const hexBalance = await alchemyCall('eth_getBalance', [address, 'latest']);
            const balanceWei = parseInt(hexBalance, 16);
            const balanceEth = balanceWei / 1e18;
            const response = {
                address: address,
                balance_wei: balanceWei,
                balance_eth: balanceEth,
                balance_formatted: `${balanceEth.toFixed(6)} ETH`
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response, null, 2));
        } else if (pathname === '/api/blocknumber') {
            const hexBlock = await alchemyCall('eth_blockNumber');
            const blockNumber = parseInt(hexBlock, 16);
            const response = {
                block_number: blockNumber,
                block_hex: hexBlock
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response, null, 2));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Not found' }));
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
    }
});

// Start server
server.listen(PORT, () => {
    console.log('=' .repeat(60));
    console.log(`🚀 Mini server running on http://localhost:${PORT}`);
    console.log('=' .repeat(60));
    console.log('Press Ctrl+C to stop');
    console.log();
});
