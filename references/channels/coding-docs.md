# Coding Documentation

## Goal
Provide complete, tested, and verifiable code documentation (READMEs, API docs, ADRs, code comments) that developers can trust without running unverified code.

## Success Metrics (2025-2026)
- 100% of code examples compile/run successfully on first attempt (no "this should work" code)
- API documentation matches actual endpoint signatures (tested against running service)
- All dependency versions pinned to tested releases (no floating versions)
- Developer setup time reduced to <30 minutes from documentation alone
- Zero "API endpoint does not exist" issues from documentation

## Limits & Restrictions

### Technical
- Code examples must be extracted from or executed against running code, never fabricated
- All API endpoints must be verified against actual service (curl, Postman, or integration test)
- Dependency versions must include exact patch versions (e.g., `2.4.1`, not `^2.4.0`)
- URLs must be tested as valid (no placeholder domains like `api.example.com` unless explicitly marked)
- Markdown must render correctly; use code blocks with language tags

### Platform/Context
- Lives in repository root (`README.md`), `/docs/api/`, `/docs/adr/`, inline in source files
- Primary audience: developers integrating, extending, or maintaining the codebase
- Lifecycle: Updated with each release; deprecated methods marked with timeline
- Discoverability: Indexed in docs site; READMEs GitHub-searchable

### GGP Etiquette
- Never invent API endpoints, parameters, or response schemas
- Flag deprecated methods with removal date ([INFERENCE] if uncertain)
- Mark breaking changes in **bold** in examples and changelogs
- Declare assumptions about runtime environment (Node 18+, Python 3.9+, etc.)
- Code snippets must include error handling; don't omit `try/catch`, null checks

## Template

```markdown
# Project Name

## Overview
[One sentence purpose. What does this do?]

## Installation
\`\`\`bash
npm install package-name
# OR
pip install package-name
\`\`\`

### Requirements
- [Language] [exact version, e.g., Node 18.12.0+]
- [Dependency] [version]

## Quick Start
\`\`\`javascript
// Tested code sample (not pseudocode)
const lib = require('package-name');
const result = await lib.method();
console.log(result);
\`\`\`

## API Reference

### `method(options)`
- **Parameters:**
  - `options.field` (string, required): Description. Default: none.
  - `options.timeout` (number): Milliseconds. Default: 5000.
- **Returns:** Promise<Object> — See response schema below.
- **Throws:** `ErrorCode` if [specific condition].

**Example:**
\`\`\`javascript
await method({ field: 'value' });
// Returns: { success: true, data: {...} }
\`\`\`

## Architecture Decision Record (ADR-001)
**Status:** Accepted | Deprecated | Superseded by ADR-002

**Context:** Why did we face this decision?

**Decision:** What did we choose and why?

**Consequences:** What are the trade-offs?

## Contributing
[Guidelines for PRs, code style, testing requirements]

## License
[SPDX identifier, e.g., MIT, Apache-2.0]
```

## Examples

### Good Example
```markdown
# PaymentGateway SDK

## API Reference

### \`charge(options)\`
- **Parameters:**
  - \`options.amount\` (number, required): USD cents (e.g., 1050 = $10.50)
  - \`options.currency\` (string): ISO code. Default: 'USD'
- **Returns:** \`Promise<{transactionId: string, status: 'succeeded'|'declined'}>\`
- **Throws:** \`PaymentError\` if amount < 50 cents or network failure

**Example (tested against Stripe sandbox v2024-01-15):**
\`\`\`javascript
const gateway = new PaymentGateway({ apiKey: process.env.PG_KEY });
const result = await gateway.charge({ amount: 1050, currency: 'USD' });
// ✓ Sandbox test: returns { transactionId: 'txn_1A2B3C', status: 'succeeded' }
\`\`\`

**Error Handling:**
\`\`\`javascript
try {
  await gateway.charge({ amount: 10 }); // Too low
} catch (err) {
  if (err.code === 'INVALID_AMOUNT') console.log('Minimum $0.50');
}
\`\`\`
```

**Why this works:** Code is extracted from actual test suite. API response matches real service. Error codes are documented with triggers. No placeholders.

---

### Bad Example
```markdown
# PaymentGateway SDK

## How to charge
\`\`\`javascript
gateway.charge(amount);  // This should work
\`\`\`

Returns something like `{ success: true, id: 'xxx' }`.

Throws an error if payment fails (we think).
```

**Why this fails:** Fabricated example. Missing parameters. No error handling. Ambiguous return type. "I think" language indicates untested knowledge. No version pinning.

## Tactical Guidance

**Code Examples:**
- Extract from actual test files or execute in CI before publishing
- Include setup code (imports, initialization) so snippets are copy-paste-runnable
- Show both success and failure paths
- Pin exact versions: `npm install react@18.2.1`, not `react@^18`

**API Docs:**
- Generate from schema when possible (OpenAPI, GraphQL introspection, TypeScript interfaces)
- Test every endpoint/parameter combo before publishing
- Document all error codes with their HTTP status and recovery steps
- Example payloads must match actual production responses

**ADRs:**
- Store in `/docs/adr/` with sequential numbering
- Mark status at top (Accepted/Deprecated/Superseded)
- Link to related ADRs and PRs
- Update when implementation changes

**Deprecation:**
- Announce in CHANGELOG with removal date (minimum 2 major versions ahead)
- Mark in code with deprecation warning
- Document replacement method

**Review Process:**
1. [CONFIRMED] — Code runs; endpoints tested; versions pinned
2. [GAP] — Missing error handling, untested endpoints, placeholder URLs
3. [INFERENCE] — Assumed behaviour pending test run
4. [UNVERIFIED] — From legacy docs; needs verification before publishing

## Pre-Publication Checklist
- [ ] All code examples compile/run without modification
- [ ] API endpoints tested against actual service (not mocked)
- [ ] All dependency versions pinned to exact patch (18.2.1, not ^18)
- [ ] External URLs verified as accessible (no `example.com` placeholders)
- [ ] Error codes documented with example triggers
- [ ] README setup instructions followed to reproduce
- [ ] Deprecated methods marked with removal date
- [ ] Breaking changes highlighted in changelog
- [ ] GGP markers applied: [CONFIRMED] for verified, [GAP] for gaps, [INFERENCE] for assumptions
- [ ] Code comments explain *why*, not just *what*

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

