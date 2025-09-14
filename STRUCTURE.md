# Web3 Playground - Estructura de repositorio

## Estructura de carpeta

```text
web3-101-playground/
├── .github/                    # GitHub configuration
│   ├── workflows/             # CI/CD workflows
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── copilot-instructions.md
├── contracts/                 # Smart contracts
│   ├── src/                   # Contract source files
│   │   ├── tokens/           # Token contracts (ERC20, ERC721, etc.)
│   │   ├── defi/             # DeFi protocols
│   │   ├── governance/       # DAO and governance contracts
│   │   └── utils/            # Utility contracts
│   ├── test/                 # Contract tests
│   ├── scripts/              # Deployment and utility scripts
│   └── foundry.toml          # Foundry configuration
├── frontend/                  # DApp frontend
│   ├── public/               # Static assets
│   ├── src/                  # React/Next.js source
│   │   ├── components/       # React components
│   │   ├── hooks/            # Custom hooks
│   │   ├── pages/            # Page components
│   │   ├── styles/           # CSS/styled-components
│   │   ├── utils/            # Frontend utilities
│   │   └── web3/             # Web3 integration
│   ├── package.json
│   └── next.config.js
├── backend/                   # Optional backend services
│   ├── api/                  # REST API endpoints
│   ├── graphql/              # GraphQL resolvers
│   ├── services/             # Business logic
│   └── middleware/           # Express middleware
├── integration/               # Contract integration layer
│   ├── src/                  # Integration source files
│   │   ├── viemClient.ts     # Viem client configuration
│   │   ├── contracts/        # Contract interaction functions
│   │   │   └── MyContract.ts # Read/write contract functions
│   │   └── scripts/          # Execution scripts
│   │       └── runStuff.ts   # Script to call contract functions
│   ├── abis/                 # Contract ABIs from Foundry
│   │   └── MyContract.json   # Exported ABI files
│   ├── package.json          # Integration dependencies
│   └── tsconfig.json         # TypeScript configuration
├── docs/                      # Documentation
│   ├── getting-started.md    # Setup guide
│   ├── architecture.md       # System architecture
│   ├── contracts/            # Contract documentation
│   │   ├── tokens.md
│   │   ├── defi.md
│   │   └── governance.md
│   ├── frontend/             # Frontend documentation
│   │   ├── components.md
│   │   └── web3-integration.md
│   ├── tutorials/            # Step-by-step tutorials
│   │   ├── 01-setup.md
│   │   ├── 02-first-contract.md
│   │   └── 03-frontend-integration.md
│   └── api/                  # API documentation
├── scripts/                   # Global utility scripts
│   ├── setup.sh             # Project setup
│   ├── deploy.sh             # Deployment scripts
│   └── test.sh               # Test runner
├── environments/             # Environment configurations
│   ├── local.env
│   ├── testnet.env
│   └── mainnet.env
├── .gitignore
├── .env.example
├── package.json              # Root package.json for workspace
├── README.md
└── LICENSE
```
