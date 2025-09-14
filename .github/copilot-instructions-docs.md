---
applyTo: "docs/**/*.md"
---
# Documentation Guidelines for Markdown Files

## Language and Content Standards

- All explanations, descriptions, and texts must be written in Spanish (project's native language)
- Use technical terms in English when they are industry standard (e.g., "smart contracts", "blockchain", "stack")
- Maintain consistency between Spanish explanations and English technical terminology
- File names must be in English and use kebab-case format (e.g., `smart-contracts-guide.md`, `installation-troubleshooting.md`)
- Folder names should also follow kebab-case convention in English

## Formatting Standards

- Avoid using bold formatting (**text**) to maintain clean and minimal documentation style
- Use proper heading hierarchy (# ## ### ####)
- Use code blocks with specific language identifiers when applicable:

  ```bash
  # For terminal commands
  ```

  ```solidity
  // For smart contract code
  ```

  ```json
  // For configuration files
  ```

## Structure Guidelines

### For Stack Documentation (docs/stacks/**)

- Follow the structure: Concepto → Instalación → Configuración → Uso → Ejemplos
- Separate required tools from optional ones clearly
- Include verification commands after installation steps
- Provide troubleshooting sections when relevant
- Link to official documentation when referencing external tools

### For Installation Guides

- Provide specific commands for Ubuntu (the project's target OS)
- Include version verification steps after each installation
- Group related installations logically
- Explain what each tool does before installation instructions
- Include common troubleshooting scenarios

### For Best Practices Documentation

- Focus on security implications for blockchain development
- Include concrete code examples, not just theoretical explanations
- Reference official standards (ERC-20, ERC-721, etc.) when applicable
- Explain the "why" behind each recommendation

## Code Examples Standards

- Always specify the context where code should be executed
- Include file paths when showing configuration files
- Use realistic examples that match the project's tech stack
- Provide complete command sequences, not partial snippets

## Links and References

- Use relative paths for internal documentation links
- Always verify external links are working and official
- Prefer official documentation over third-party tutorials
- Include link descriptions in Spanish even if the target content is in English

## Technical Accuracy

- Verify all commands work on Ubuntu before documenting them
- Test installation procedures in clean environments when possible
- Keep tool versions current and note when specific versions are required
- Include compatibility information when relevant

## Maintenance Guidelines

- Update documentation immediately when underlying tools change
- Mark deprecated practices clearly and provide migration paths
- Keep examples aligned with the current project structure
- Review and update external links periodically
