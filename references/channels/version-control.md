# Version Control & Release Documentation

## Goal
Enable users to understand changes, upgrade safely, and troubleshoot regressions through transparent changelogs, clear release notes, and tested migration paths so they can make informed decisions about adopting updates.

## Success Metrics (2025-2026)
- 100% of releases documented within 24 hours of deployment
- All breaking changes announced 2+ weeks in advance with migration paths
- Deprecation timeline always 2+ major versions ahead (e.g., deprecated in v1, removed in v3)
- Migration steps tested and reproducible (not theoretical)
- Zero "unexpected breaking change" support tickets due to clear release notes

## Limits & Restrictions

### Technical
- Changelog versions must match actual git tags (no fabricated versions)
- All migration steps tested in staging environment before publication
- Deprecation timelines must be realistic and honoured (don't move deadlines without notice)
- Semantic versioning applied consistently (MAJOR.MINOR.PATCH)
- Breaking changes explicitly flagged and linked to migration guide

### Platform/Context
- Lives in CHANGELOG.md, GitHub Releases, release notes wiki, upgrade guides
- Primary audience: users considering upgrades, operations teams, developers troubleshooting
- Lifecycle: Updated with each release; deprecations honoured as published
- Discoverability: Linked from docs homepage, displayed in CLI upgrade checks

### GGP Etiquette
- Never hide breaking changes in "improvements" section
- Never move deprecation deadlines without notice (breaks trust)
- Mark all assumed compatibility as [INFERENCE] (e.g., "should upgrade safely")
- Provide exact before-after code for migrations
- Document security fixes prominently; flag CVE numbers

## Template

```markdown
# Changelog

All notable changes to this project documented here.

## [Unreleased]

### Added
- [New feature]

### Changed
- [Changed feature]

### Deprecated
- [Deprecated feature] — Removal: v[X].[Y].[Z]

### Removed
- [Removed feature]

### Fixed
- [Bug fix]

### Security
- [Security patch]

---

## [Version] — YYYY-MM-DD

### Added
- [New feature] ([#PR](link))

### Changed
- [Changed feature] ([#PR](link))

### Deprecated
- [Deprecated feature] — Removal: v[X].[Y].[Z]
- **Migration Path:** [Link to upgrade guide]

### Removed
- [RISK] **BREAKING:** [Removed feature] ([#PR](link))
- **Migration:** [Before code] → [After code]
- **Impact:** [What breaks, why, severity]

### Fixed
- [Bug fix] ([#Issue](link), [#PR](link))

### Security
- CVE-YYYY-XXXXX: [Vulnerability description, severity, patch]
```

## Examples

### Good Example
```markdown
# Changelog

All notable changes documented here. Follows Semantic Versioning.

## [Unreleased]

### Added
- Support for OAuth2 PKCE flow (improved security for SPAs)
- New \`--dry-run\` flag for safer deployments

### Deprecated
- Direct environment variable authentication — Use \`--auth-file\` instead. Removal: v3.0.0

---

## [2.3.1] — 2025-01-15

### Fixed
- Database connection timeout on slow networks (fixes #2847)
- Incorrect error message for invalid config files

### Security
- CVE-2025-1234: Insufficient input validation in config parser (CVSS 6.5, Medium)
  - Impact: Possible code injection in config files from untrusted sources
  - Fix: All config values now escaped; no code execution allowed
  - Upgrade: Recommended for all users handling untrusted configs

---

## [2.3.0] — 2024-12-01

### Added
- \`--format json\` flag for CLI output (machine-readable)
- Streaming API support (new \`stream()\` method)
- Health check endpoint at \`/health\`

### Changed
- Default retry policy increased from 2 → 3 attempts (better reliability on flaky networks)
- Response timeout increased from 5s → 30s (accommodates slower backends)
- Error messages now include suggestion for recovery

### Deprecated
- Environment variable \`CONFIG_OLD_STYLE\` — Use \`--config-file\` instead. Removal: v3.0.0
  - **Why:** Environment variables hard to audit in production; config files more secure
  - **Migration:** \`export CONFIG_OLD_STYLE=value\` → \`echo "key: value" > config.yaml && app --config-file config.yaml\`
  - **Timeline:** Feb 1, 2025 (v2.4), May 1, 2025 (v2.5), Aug 1, 2025 (v3.0 removal)

### Removed
- [RISK] **BREAKING: Removed support for Python 2.7** ([#2650](https://github.com/org/repo/pull/2650))
  - **Impact:** v2.3.0 requires Python 3.8+; existing Python 2.7 environments will not run
  - **Why:** Python 2.7 end-of-life (Jan 2020); security support ended; codebase maintenance burden
  - **Migration Steps:**
    1. Check current Python version: \`python --version\`
    2. If Python 2.7: Install Python 3.8+: \`brew install python@3.8\` (macOS) or apt install python3.8 (Linux)
    3. Verify new version: \`python3.8 --version\`
    4. Upgrade package: \`pip3.8 install app==2.3.0\`
    5. Test: \`python3.8 -m app --version\` should show v2.3.0
  - **Fallback:** Stay on v2.2.x if Python 2.7 support required (security patches available until 2025-06-01)

- [RISK] **BREAKING: Removed legacy API endpoint \`/api/v1/data\`** ([#2651](https://github.com/org/repo/pull/2651))
  - **Impact:** Clients calling \`GET /api/v1/data\` will receive HTTP 404; use \`/api/v2/query\` instead
  - **Why:** v1 API performance poor, hard to maintain; v2 API available since v1.5.0 (12+ months)
  - **Migration Steps:**
    1. Update client code: \`GET /api/v1/data?id=123\` → \`GET /api/v2/query?id=123\`
    2. Update response parsing: Response format unchanged (\`{ data: [...] }\`)
    3. Test in staging: Verify response parsing still works
    4. Deploy: \`npm install app@2.3.0\` and restart
  - **Verification:** \`curl https://api.example.com/api/v2/query?id=123\` should return data

### Fixed
- Memory leak in connection pooling (resolves out-of-memory crashes after 48h uptime)
- Incorrect timestamp formatting in logs (was showing UTC+0 only; now respects TZ env var)
- Config file parsing failed on Windows paths (backslashes now handled correctly)

### Performance
- Query latency reduced 35% through caching optimisation ([#2640](https://github.com/org/repo/pull/2640))
- Startup time reduced from 4.2s → 2.1s (faster cold starts)

---

## [2.2.0] — 2024-09-01

### Added
- Streaming output mode (\`--stream\` flag)
- Configuration file support (\`--config-file\` flag)
- Health check endpoint

### Changed
- Improved error messages with recovery suggestions
- Retry logic now uses exponential backoff (was linear)

### Deprecated
- \`--verbose\` flag — Use \`--log-level debug\` instead. Removal: v3.0.0
  - Migration: \`app --verbose\` → \`app --log-level debug\`

### Fixed
- Crash when input file missing (now returns helpful error message)

---

## [2.0.0] — 2024-01-15 — MAJOR VERSION RELEASE

### [RISK] BREAKING CHANGES

All breaking changes require code updates. This is a major version; extensive testing recommended.

1. **API Response Format Changed**
   - Old: \`{ status: 'ok', result: {...} }\`
   - New: \`{ success: true, data: {...}, error: null }\`
   - Reason: Consistency with REST conventions; easier error handling
   - Migration: [Update response parsing in 3 steps](https://docs.example.com/upgrade-v1-to-v2)

2. **Database Schema Updated**
   - Old table \`users\` → New schema: \`users_v2\`
   - Migration required: [Automatic migration script available](https://docs.example.com/migrate-schema)
   - Downtime: ~30 minutes (expect service unavailable during migration)
   - Rollback: Script provided to revert schema if needed

3. **Authentication Changed from Basic Auth → OAuth2**
   - Old: \`Authorization: Basic base64(user:pass)\`
   - New: \`Authorization: Bearer <access_token>\`
   - Migration: [OAuth2 setup guide](https://docs.example.com/oauth2-setup)

### Added
- OAuth2 authentication support
- Streaming API endpoints
- GraphQL support (experimental)

### Removed
- Basic authentication (HTTP 401 if attempted)
- \`/api/v1\` endpoints (use \`/api/v2\` instead)
- Python 2 support

### Fixed
- Critical memory leak in long-running processes
- Database connection handling under high load

### Migration Guide
[Detailed step-by-step upgrade guide available →](https://docs.example.com/upgrade-v1-to-v2)

Estimated time: 1-2 hours for typical deployment (includes testing, backups, rollback verification)

---

## [1.5.0] — 2023-09-01

### Added
- New endpoint: \`GET /api/v2/query\` (faster, recommended for new integrations)

### Deprecated
- \`GET /api/v1/data\` — Use \`/api/v2/query\` instead. Removal: v2.0.0

---

## [1.0.0] — 2023-01-15

Initial release.
```

**Why this works:** Breaking changes flagged with [RISK]. Migration steps are exact (code before/after). Deprecation timeline clear (2+ versions ahead). Security issues have CVE numbers and severity. Removal reasons explained. Estimated migration time provided.

---

### Bad Example
```markdown
# Changes

v2.3 - Improvements and fixes
v2.2 - Updates
v2.1 - Some breaking changes
v2.0 - Major update, many changes

See GitHub for details.
```

**Why this fails:** No dates. No details of breaking changes. No migration paths. No security information. Can't tell what changed or how to upgrade.

## Tactical Guidance

**Semantic Versioning:**
- MAJOR: Breaking changes (increment on incompatible API changes)
- MINOR: New features, backward compatible
- PATCH: Bug fixes, backward compatible
- Pre-release: Use tags like v1.0.0-beta.1, v2.0.0-rc.1

**Changelog Sections:**
- **Added:** New features (backward compatible)
- **Changed:** Existing feature improvements (backward compatible)
- **Deprecated:** Features marked for removal (keep working, timeline announced)
- **Removed:** Features deleted ([RISK] breaking change, migration required)
- **Fixed:** Bug fixes
- **Security:** CVEs, security patches

**Breaking Changes:**
- Flag with [RISK] **BREAKING**
- Include: what changed, why, impact, migration steps
- Provide code examples: before code → after code
- Announce 2+ major versions in advance via deprecation warning
- Honour announced deadlines (breaking trust is costly)

**Deprecation Warnings:**
- Announce in deprecation note (Removal: v[X.Y.Z])
- Provide migration path (old code → new code)
- Print runtime warning when deprecated feature used
- Keep working for ≥2 versions before removal

**Release Notes:**
- Date and version number at top
- Highlights section for major changes
- Full changelog grouped by type (Added, Changed, etc.)
- Known issues section
- Upgrade instructions (if non-trivial)

**Migration Guides:**
- Step-by-step numbered instructions
- Code examples showing before/after
- Testing instructions (how to verify upgrade successful)
- Rollback procedure (in case something goes wrong)
- Estimated time to complete

## Pre-Publication Checklist
- [ ] Version number matches git tag exactly (no fabricated versions)
- [ ] All breaking changes flagged with [RISK] **BREAKING** and marked as removed
- [ ] Migration steps tested in staging environment
- [ ] Deprecation timeline realistic (≥2 major versions ahead for removal)
- [ ] All security fixes include CVE number and severity
- [ ] Changelog organised by type: Added, Changed, Deprecated, Removed, Fixed, Security
- [ ] Pull request and issue links included (traceability)
- [ ] Major changes highlighted in release notes summary
- [ ] Known issues documented (don't hide problems)
- [ ] Upgrade instructions provided (especially for breaking changes)
- [ ] Rollback procedure tested (can users revert if update fails?)
- [ ] Estimated migration time provided (developer planning)
- [ ] Previous deprecation deadlines met (don't move goalposts)
- [ ] GGP markers applied: [CONFIRMED] for verified dates/versions, [INFERENCE] for estimated timelines, [GAP] for gaps

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

