---
applyTo: "**"
---
# Project general coding standards

## Commit Message Guidelines
All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This ensures clarity and consistency in the project history. All commit messages must always be written in English.

**Format:**

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies
- ci: Changes to CI configuration files and scripts
- chore: Other changes that don't modify src or test files
- revert: Reverts a previous commit

**Examples:**
```
feat(auth): add login functionality

fix(api): handle null response from server

docs: update README with setup instructions
```

**Rules:**
- Each commit must represent a single atomic change (e.g., only one feat, fix, chore, etc.).
- Use the imperative mood in the description ("add" not "added" or "adds").
- Limit the subject line to 72 characters.
- Separate subject from body with a blank line.
- Reference issues and pull requests when relevant.
- All commit messages must always be written in English.

## Agent Mode Behavior
- ALWAYS ask for confirmation before making any file edits or changes
- When user asks for information (names, suggestions, examples), provide the answer WITHOUT making any file modifications
- Only use file editing tools when explicitly requested by the user
- Confirm the specific action before proceeding with any edit

## Naming Conventions
- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants
- All file names, class names, method names, and any type names must be in English, although comments can be in Spanish

## Directory Structure
- Use kebab-case for directory names
- Directory names must be in English
- Keep directory names short and descriptive

## Error Handling
- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information


