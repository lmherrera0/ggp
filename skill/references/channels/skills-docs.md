# Skills & Plugin Documentation

## Goal
Enable developers to integrate, extend, and trust skills/plugins through complete specification, parameter documentation, and tested examples so they can use tools without reverse-engineering behaviour.

## Success Metrics (2025-2026)
- All skill parameters tested and documented (0% "I assume this works")
- 100% of tools execute as documented (no hidden parameter requirements)
- Integration time reduced to <30 minutes from documentation alone
- Breaking changes announced 2+ weeks in advance
- Plugin version compatibility matrix maintained and accurate

## Limits & Restrictions

### Technical
- All tool parameters must be tested against actual implementation
- Return values must match documented schema (tested with real invocations)
- Error handling documented with specific error codes and recovery steps
- Version compatibility matrix maintained and tested (which versions work together?)
- All examples must be executable; tested before publication

### Platform/Context
- Lives in plugin registries, API documentation, GitHub wikis, internal skill catalogs
- Primary audience: developers integrating plugins, platform engineers, community contributors
- Lifecycle: Updated with each release; breaking changes versioned prominently
- Discoverability: Indexed by tool name, capability, framework compatibility

### GGP Etiquette
- Never fabricate tool capabilities — only document what actually exists
- All parameter descriptions tested; don't guess behaviour based on code inspection
- Mark version-specific features as [INFERENCE] pending verification
- Flag breaking changes prominently; document migration path
- Deprecated tools marked with removal timeline (minimum 2 versions ahead)

## Template

```markdown
# Skill: [Name]

## Overview
[What does this skill do? What problems does it solve?]

## Quick Start
\`\`\`javascript
// Complete, executable example
const skill = require('@org/skill-name');
const result = await skill.doSomething({ param: 'value' });
console.log(result); // Expected output
\`\`\`

## Specification

**Version:** [Semantic version]
**Status:** [Active, Deprecated (removal: vX.Y.Z), Beta]
**Framework Compatibility:** [Framework version range]
**Dependencies:** [Required dependencies with versions]

## Tools

### \`toolName(options)\`
**Description:** [What does this tool do?]

**Parameters:**
| Name | Type | Required | Default | Description | Example |
|---|---|---|---|---|---|
| param1 | string | Yes | — | Description | "value" |
| param2 | number | No | 100 | Description | 50 |

**Returns:**
\`\`\`javascript
{
  success: boolean,
  data: {
    field1: string,
    field2: number
  },
  error?: string
}
\`\`\`

**Throws:**
- \`ErrorCode\` (HTTP 400): [Condition]. Recovery: [Step]
- \`ErrorCode\` (HTTP 500): [Condition]. Recovery: [Step]

**Example:**
\`\`\`javascript
const result = await skill.toolName({ param1: 'test' });
// Returns: { success: true, data: { field1: 'result' } }
\`\`\`

## Version Compatibility

| Skill Version | Node Version | Framework | Status |
|---|---|---|---|
| v2.x.x | 18.12.0+ | Framework 3.x | ✓ Active |
| v1.x.x | 16.13.0+ | Framework 2.x | [RISK] Deprecated (removal: v3.0.0) |

## Integration Guide

### Prerequisites
- [Framework version]
- [Dependency version]

### Installation
\`\`\`bash
npm install @org/skill-name@2.0.0
\`\`\`

### Setup
\`\`\`javascript
// Initialization code
\`\`\`

## Changelog
- v2.0.0: [Breaking changes]
- v1.0.0: Initial release
```

## Examples

### Good Example
```markdown
# Skill: Stripe Payment Processor

## Overview
Process credit card payments through Stripe. Handles authorization, capture, refunds, and error recovery. Used in checkout, subscriptions, and billing systems.

## Quick Start
\`\`\`javascript
const stripe = require('@company/stripe-processor');
const payment = await stripe.charge({
  amount: 1050, // USD cents
  currency: 'USD',
  cardToken: 'tok_visa'
});
console.log(payment);
// { success: true, transactionId: 'txn_1A2B3C', status: 'succeeded' }
\`\`\`

## Specification

**Version:** 2.3.1
**Status:** Active (Production)
**Framework Compatibility:** Node 18.12.0+, Express 4.18+
**Dependencies:**
- stripe@13.10.0
- dotenv@16.3.1

## Tools

### \`charge(options)\`
**Description:** Process a one-time credit card charge. Validates card, handles Stripe communication, retries on transient failures.

**Parameters:**
| Name | Type | Required | Default | Description | Example |
|---|---|---|---|---|---|
| amount | number | Yes | — | USD cents (e.g., 1050 = $10.50). Min: 50 | 1050 |
| currency | string | No | "USD" | ISO 4217 code | "USD" |
| cardToken | string | Yes | — | Stripe token from Stripe.js | "tok_visa" |
| metadata | object | No | {} | Custom data (max 50 keys) | { orderId: "123" } |
| idempotencyKey | string | No | — | Unique key for retry safety (max 255 chars) | "order_123_attempt_1" |

**Returns:**
\`\`\`javascript
{
  success: boolean,
  transactionId: string,      // Stripe transaction ID
  status: 'succeeded' | 'requires_action' | 'declined',
  error?: {
    code: string,             // Stripe error code
    message: string,          // Human-readable message
    recoveryAction?: string   // Suggested next step
  }
}
\`\`\`

**Throws:**
- \`InvalidAmountError\` (HTTP 400): amount < 50 cents or > $99,999. Recovery: Validate amount before retry.
- \`InvalidTokenError\` (HTTP 400): card token expired or revoked. Recovery: Request new token from user.
- \`AuthenticationError\` (HTTP 401): Stripe API key invalid/missing. Recovery: Check env var STRIPE_API_KEY.
- \`RateLimitError\` (HTTP 429): Too many requests. Recovery: Exponential backoff (wait 1s, then 2s, then 4s).
- \`StripeServiceError\` (HTTP 500): Stripe API unreachable. Recovery: Retry up to 3 times; if still failing, queue for async processing.

**Examples:**

Success case:
\`\`\`javascript
const result = await stripe.charge({
  amount: 1050,
  currency: 'USD',
  cardToken: 'tok_visa',
  idempotencyKey: 'order_12345_v1'
});
// Returns:
// {
//   success: true,
//   transactionId: 'txn_1A2B3C4D5E6F7G8H',
//   status: 'succeeded'
// }
\`\`\`

Failure case (expired card):
\`\`\`javascript
const result = await stripe.charge({
  amount: 1050,
  cardToken: 'tok_chargeDeclined'
});
// Returns:
// {
//   success: false,
//   transactionId: null,
//   status: 'declined',
//   error: {
//     code: 'card_declined',
//     message: 'Your card was declined',
//     recoveryAction: 'Ask user for different payment method'
//   }
// }
\`\`\`

---

### \`refund(transactionId, options)\`
**Description:** Refund a previous charge (full or partial).

**Parameters:**
| Name | Type | Required | Default | Description | Example |
|---|---|---|---|---|---|
| transactionId | string | Yes | — | Stripe transaction ID from charge() | "txn_1A2B3C" |
| amount | number | No | — | USD cents to refund; if omitted, full refund | 500 |
| reason | string | No | — | Reason: 'duplicate', 'fraudulent', 'requested_by_customer' | "requested_by_customer" |

**Returns:**
\`\`\`javascript
{
  success: boolean,
  refundId: string,
  originalTransactionId: string,
  amountRefunded: number,  // USD cents
  status: 'succeeded' | 'pending',
  error?: string
}
\`\`\`

**Example:**
\`\`\`javascript
const refund = await stripe.refund('txn_1A2B3C', {
  amount: 500,  // Partial refund: $5.00
  reason: 'requested_by_customer'
});
// Returns:
// {
//   success: true,
//   refundId: 're_1X2Y3Z',
//   originalTransactionId: 'txn_1A2B3C',
//   amountRefunded: 500,
//   status: 'succeeded'
// }
\`\`\`

## Version Compatibility

| Skill Version | Node | Express | Stripe API | Status | Notes |
|---|---|---|---|---|---|
| v2.3.x | 18.12.0+ | 4.18+ | 2024-01 | ✓ Active | Latest; recommended |
| v2.2.x | 18.0.0+ | 4.18+ | 2023-11 | ✓ Supported | Security patches only |
| v2.0.x | 16.13.0+ | 4.16+ | 2023-08 | [RISK] Deprecated | Removal: v3.0.0 (2025-06-01) |
| v1.x.x | 14.0.0+ | 4.0+ | 2022-11 | [RISK] End of Life | No longer supported |

## Integration Guide

### Prerequisites
- Node 18.12.0 or later
- Express 4.18+ (if using middleware mode)
- Valid Stripe account with API key
- Environment variable: STRIPE_API_KEY

### Installation
\`\`\`bash
npm install @company/stripe-processor@2.3.1
\`\`\`

### Configuration
\`\`\`javascript
// .env
STRIPE_API_KEY=sk_live_51A2B3C4D5E6F7G8H9I0J

// index.js
const stripe = require('@company/stripe-processor');

stripe.init({
  apiKey: process.env.STRIPE_API_KEY,
  retryAttempts: 3,
  retryDelayMs: 1000,
  timeout: 30000
});
\`\`\`

### Testing
\`\`\`bash
# Run integration tests against Stripe sandbox
npm test -- --env=sandbox

# Test results should show:
# ✓ charge() succeeds with valid token
# ✓ charge() returns declined with invalid token
# ✓ refund() succeeds with valid transaction
# ✓ refund() fails with nonexistent transaction
\`\`\`

## Breaking Changes & Deprecations

### Deprecated in v2.2.0 (Removal: v3.0.0, ETA: 2025-06-01)
- \`chargeWithEmail()\` — Use \`charge({}, { customerEmail: 'x@y.com' })\` instead
- Direct Stripe API access via \`stripe.api\` — Removed; use documented methods only

**Migration Path:**
\`\`\`javascript
// Old (v2.1 and earlier)
const result = await stripe.chargeWithEmail({
  amount: 1050,
  email: 'customer@example.com'
});

// New (v2.2+)
const result = await stripe.charge({
  amount: 1050,
  metadata: { customerEmail: 'customer@example.com' }
});
\`\`\`

## Changelog

**v2.3.1 (2025-01-10)**
- Fix: Exponential backoff now uses correct jitter (was causing rate limit retries to pile up)
- Improvement: Idempotency key validation more permissive (allows underscores, hyphens)
- Security: Stripe API key no longer logged in debug mode

**v2.3.0 (2024-12-01)**
- Feature: Added \`refund()\` tool
- Improvement: Timeout reduced from 40s to 30s (most Stripe requests < 2s)
- Change: Error responses now include \`recoveryAction\` field

**v2.2.0 (2024-09-01)**
- Deprecation: \`chargeWithEmail()\` (removal: v3.0.0)
- Improvement: Retry logic with exponential backoff for transient failures
- Fix: Metadata handling now supports all Stripe-compatible types

**v2.0.0 (2024-01-15)** — BREAKING CHANGE
- Change: Return format restructured (was flat, now nested \`{success, data, error}\`)
- Change: Parameter name \`cardNumber\` → \`cardToken\` (requires Stripe.js)
- Migration: See Breaking Changes section above

**v1.0.0 (2023-06-01)**
- Initial release; basic charge functionality

## Troubleshooting

| Issue | Cause | Solution |
|---|---|---|
| "STRIPE_API_KEY not found" | Missing env var | Set STRIPE_API_KEY in .env |
| "rate_limit_error" after 1 request | Incorrect backoff logic | Upgrade to v2.3.1+ |
| "card_declined" on valid card | Test key used in production | Switch to live Stripe keys |
| "Invalid idempotency key" | Key contains invalid characters | Use alphanumeric, underscore, hyphen only |

## Support
- Issues: GitHub Issues or Slack #stripe-support
- API Reference: https://stripe.com/docs/api (Stripe official docs)
- Skill Questions: @stripe-integration-team
```

**Why this works:** Parameters tested and documented. Error codes specific and recoverable. Version compatibility matrix clear. Breaking changes announced and migration path provided. Examples are executable (tested). Deprecated methods flagged with removal date.

---

### Bad Example
```markdown
# Stripe Skill

Processes payments using Stripe.

\`\`\`javascript
const charge = stripe.charge(amount);
\`\`\`

Parameters: amount (the amount)

Returns: something successful or an error

Errors: might fail sometimes

Versions: Works with most Node versions

Deprecated: Some old methods might not work
```

**Why this fails:** Parameters ambiguous (amount in cents? dollars?). No error codes. No recovery steps. Return schema unclear. Version compatibility vague. No migration path. Examples not executable.

## Tactical Guidance

**Parameter Documentation:**
- Test every parameter combination before publishing
- Specify units (USD cents, not dollars; milliseconds, not seconds)
- Document constraints (min/max, valid values, length limits)
- Include data type explicitly (string, number, boolean, object)

**Error Handling:**
- List all possible error codes (don't say "might fail")
- Document trigger condition (when does this error occur?)
- Include recovery action (what should the caller do?)
- Test error path as thoroughly as success path

**Version Compatibility:**
- Maintain compatibility matrix (which versions work together?)
- Test upgrade path (can users safely upgrade from v1 → v2?)
- Document minimum versions (don't say "should work with")
- Pin versions in examples; don't use ^ or ~

**Breaking Changes:**
- Announce 2+ weeks before deployment
- Provide migration path (old code → new code)
- Support dual-write period (both APIs work simultaneously)
- Document removal timeline (minimum 2 major versions ahead)

**Examples:**
- Extract from test suite; must be copy-paste executable
- Include both success and failure paths
- Show error handling (try/catch, null checks)
- Verify output matches actual returns

## Pre-Publication Checklist
- [ ] All tool parameters tested against actual implementation
- [ ] Parameter descriptions complete: type, units, constraints, defaults
- [ ] Return values match documented schema (tested with real invocations)
- [ ] All error codes documented with trigger conditions and recovery steps
- [ ] Examples are executable and match actual behaviour
- [ ] Version compatibility matrix accurate and tested
- [ ] Breaking changes announced with migration path and removal date
- [ ] Deprecated features marked with removal timeline
- [ ] Integration guide tested by new developer (should take <30 min)
- [ ] Dependency versions pinned to exact patch (18.12.0, not ^18)
- [ ] Framework compatibility tested in actual environment
- [ ] Changelog updated for every version
- [ ] GGP markers applied: [CONFIRMED] for verified behaviour, [INFERENCE] for version-specific features, [GAP] for gaps

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

