---
applyTo: "contracts/**/*.sol"
---
# Smart Contracts Coding Standards (Solidity)

## General Solidity Guidelines

- Follow the [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- Use exact Solidity version (e.g., `pragma solidity 0.8.20;`) instead of floating ranges (`^0.8.0`)
- Always specify exact compiler version in contracts for production
- Use meaningful and descriptive names for contracts, functions, and variables
- Include SPDX license identifier in all source files

## Naming Conventions

- **Contracts**: PascalCase (e.g., `TokenContract`, `VotingSystem`)
- **Functions**: camelCase (e.g., `transferTokens`, `getUserBalance`)
- **Variables**: camelCase (e.g., `totalSupply`, `userAddress`)
- **Constants**: ALL_CAPS with underscores (e.g., `MAX_SUPPLY`, `DECIMALS`)
- **Events**: PascalCase (e.g., `Transfer`, `Approval`)
- **Modifiers**: camelCase (e.g., `onlyOwner`, `nonReentrant`)

## Code Structure

### Import Order

1. Third-party imports (OpenZeppelin, etc.)
2. Local contract imports
3. Interface imports

### Contract Layout

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ExampleContract {
    // Type declarations
    // State variables
    // Events
    // Errors
    // Modifiers
    // Functions (in order: constructor, receive, fallback, external, public, internal, private)
}
```

## Security Best Practices

- **Use OpenZeppelin contracts** when possible for standard implementations
- **Implement access control** using `Ownable` or `AccessControl`
- **Add reentrancy protection** with `ReentrancyGuard` for functions that transfer funds
- **Use `SafeMath`** for Solidity versions < 0.8.0 (built-in for 0.8.0+)
- **Validate all inputs** with require statements
- **Use custom errors** instead of string messages for gas efficiency

## Documentation Standards

- Use NatSpec comments for all public functions
- Document complex logic with inline comments
- Include @param and @return tags for function documentation

```solidity
/**
 * @title Example Contract
 * @dev This contract demonstrates coding standards
 */
contract ExampleContract {
    /**
     * @notice Transfers tokens to a specified address
     * @param to The address to transfer tokens to
     * @param amount The amount of tokens to transfer
     * @return success Whether the transfer was successful
     */
    function transfer(address to, uint256 amount) external returns (bool success) {
        // Implementation
    }
}
```

## Testing Requirements

- Write comprehensive unit tests for all functions
- Include edge cases and failure scenarios
- Use descriptive test names that explain the scenario
- Aim for 100% code coverage
- Test gas consumption for critical functions

## Gas Optimization

- Use `uint256` instead of smaller uints when possible
- Pack struct variables efficiently
- Use `external` instead of `public` for functions not called internally
- Implement batch operations for multiple transactions
- Cache storage reads in memory variables

## Error Handling

- Define custom errors for specific failure cases
- Use descriptive error messages
- Prefer `revert` with custom errors over `require` with strings

```solidity
error InsufficientBalance(uint256 available, uint256 required);
error InvalidAddress();

function transfer(address to, uint256 amount) external {
    if (to == address(0)) revert InvalidAddress();
    if (balanceOf[msg.sender] < amount) {
        revert InsufficientBalance(balanceOf[msg.sender], amount);
    }
    // Transfer logic
}
```

## Deployment Standards

- Use deployment scripts with proper network configuration
- Verify contracts on block explorers using `forge verify-contract`
- Document constructor parameters and deployment process
- Include upgrade mechanisms when necessary (using proxies)
- Perform security audits before mainnet deployment

## Transparency and Publishing Standards

- Include LICENSE file in repository and SPDX identifier in contracts
- Publish and verify source code on block explorers (Etherscan, etc.)
- Include all source files and dependencies for reproducible compilation
- Document architecture and design decisions in README.md
- Include flow diagrams for complex logic using Mermaid
- Maintain CHANGELOG.md with version history and updates
- Use semantic versioning (SemVer) and git tags for releases
- Provide usage examples and integration scripts
- Document access control roles and permissions clearly

## Security and Audit Practices

- Run automated analysis tools (Slither, Mythril) before deployment
- Implement proper access control patterns (Ownable, AccessControl)
- Consider renouncing ownership or using multisig for critical functions
- Use timelock mechanisms for sensitive administrative functions
- Plan for formal verification when handling significant value
- Document known vulnerabilities and mitigation strategies
