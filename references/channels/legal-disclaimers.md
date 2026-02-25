# Legal Disclaimers & IP Protection

## Goal
Protect organisational and user interests through clear, enforceable legal notices (authorship, usage rights, liability limits) while avoiding misrepresentation and ensuring compliance with applicable jurisdictions so disputes are prevented and liabilities are managed.

## Success Metrics (2025-2026)
- 100% of published work includes attribution and license statement
- All legal disclaimers reviewed by qualified legal counsel before publication
- Zero "surprise" IP disputes (terms clear upfront)
- Data protection notices accurate and aligned with actual practices
- Liability language enforceable in target jurisdictions (tested, not theoretical)

## Limits & Restrictions

### Technical
- All disclaimers must be approved by qualified legal counsel (not generated)
- Data practices described must match actual implementation (audit before publishing)
- Jurisdiction specified explicitly (disclaimers may not be enforceable globally)
- Retention periods stated must be achievable (not theoretical ideals)
- All regulatory references must be current (laws change; review annually)

### Platform/Context
- Lives in terms.html, privacy-policy.md, LICENSE files, footer notices, API docs, GitHub repos
- Primary audience: users, legal teams, regulators, IP holders
- Lifecycle: Reviewed quarterly; updated when practices change or laws evolve
- Discoverability: Prominently linked on every page; displayed at signup/first use

### GGP Etiquette
- **[INFERENCE] Mark all unreviewed disclaimers** — Never present legal language as fact if not reviewed by counsel
- Flag jurisdiction-specific claims (may not apply globally)
- Mark all regulatory references with review date (laws change)
- Never claim "legal advice" — disclaim that role clearly
- Document actual data practices, not aspirational privacy

## Template

```markdown
# [Disclaimer Type]

## Disclaimer Notice

**[INFERENCE]:** This document has not been reviewed by qualified legal counsel. For legal questions, consult a licensed attorney. This is not legal advice.

## Scope
[What does this disclaimer cover? What is excluded?]

## Authorship & Ownership
[Who created this work? Who owns it? Any third-party materials?]

## Permitted Uses
[What can users do with this work?]

### Restrictions
[What is explicitly prohibited?]

## Limitation of Liability
[What is your liability exposure? What is excluded?]

## Attribution
[If required, how must you be attributed?]

## Governing Law & Jurisdiction
[Which laws apply? Where can disputes be litigated?]

## Changes & Updates
[How often is this reviewed? When were last changes made?]

## Contact & Enforcement
[Who enforces these terms? How to report violations?]

## Plain Language Summary
[In simple terms, what are the key points?]
```

## Examples

### Good Example: Comprehensive Disclaimer

```markdown
# Standard Disclaimer & IP Protection Notice

**[INFERENCE]:** This document has NOT been reviewed by legal counsel. This is not legal advice. For legal questions specific to your situation, consult a licensed attorney in your jurisdiction.

---

## Scope

This notice applies to:
- All code in this repository
- Documentation and examples
- Issue discussions and pull requests
- User-generated contributions

Excluded: External libraries (see LICENSE files in each dependency)

---

## Authorship & Ownership

**[CONFIRMED] Copyright & Ownership:** *(Verified against corporate registration records.)*
- Copyright © [Current Year] [Organisation Name]. All rights reserved. *(Update year annually or use dynamic generation.)*
- Owner: [Legal Entity Name], [Address]
- Contact: [legal@organisation.com](mailto:legal@organisation.com)

**Third-Party Materials:**
- Uses Bootstrap 5.3.0 (MIT License)
- Uses Font Awesome 6.4.0 (Creative Commons License)
- See LICENSES/ directory for complete attributions

**User Contributions:**
- By contributing code/issues, you grant [Organisation] a perpetual, worldwide, non-exclusive license to use your contributions
- You retain copyright to your original work
- Contributors: [Link to CONTRIBUTORS.md]

---

## Permitted Uses

### For Developers
You may:
- ✓ Download, install, and use in commercial and non-commercial projects
- ✓ Fork, modify, and distribute under the same license (Apache 2.0)
- ✓ Reference in documentation with attribution
- ✓ Create derivative works (mention original source)

### For Users
You may:
- ✓ View and read all documentation
- ✓ Report bugs and request features
- ✓ Use public APIs for integration

### Restrictions
You may NOT:
- ✗ Claim authorship of work you didn't create
- ✗ Remove copyright or license notices
- ✗ Use our trademarks (logo, name) without permission
- ✗ Misrepresent the software's origin or capabilities
- ✗ Use for illegal purposes or violation of terms

---

## Limitation of Liability

**NO WARRANTY PROVIDED.**

This software is provided "AS IS" without warranty of any kind, express or implied, including but not limited to:
- Merchantability (fitness for a particular purpose)
- Non-infringement
- Accuracy, reliability, completeness

**LIABILITY CAP:**

In no event shall [Organisation] be liable for:
- Direct damages (loss of data, cost of replacement)
- Indirect damages (lost profits, business interruption, reputation harm)
- Consequential or punitive damages
- Any claim arising from use of this software

**Exception:** If any jurisdiction limits liability waivers, liability shall be limited to $100 USD or the amount paid for this software (whichever is greater).

**User Responsibility:** You assume all risk from your use of this software. Perform your own testing and due diligence.

---

## Data Protection & Privacy

**[INFERENCE]:** This describes our actual practices (as of 2025-01-15). These practices may change. Review this document quarterly. This is NOT a GDPR-compliant privacy policy; for GDPR compliance, see [Privacy Policy](privacy-policy.md).

### Data Collected
- **What:** User account data (email, name, optional profile info)
- **How:** Voluntary submission via web form
- **Purpose:** User identification, notification delivery, service improvement
- **Retention:** 30 days after account deletion (for compliance audits); then deleted

### Your Rights
- **Access:** Request your data via [privacy@organisation.com](mailto:privacy@organisation.com)
- **Deletion:** Request deletion; we will comply within 30 days
- **Opt-out:** Unsubscribe from communications via account settings
- **GDPR:** If you are in EU, see [GDPR Data Protection Notice](gdpr-notice.md)

### Data Sharing
- **NOT shared** with third parties without consent (except as required by law)
- **Shared with:** Cloud hosting provider (AWS, encrypted) and analytics platform (Mixpanel, anonymised)
- **Law enforcement:** Disclosure only if legally required (warrant, subpoena)

---

## Attribution Requirements

If you use this software, you MUST:
1. Include this license text with your distribution
2. State changes made to the original code
3. Display attribution: "Based on [Project Name] © [Current Year] [Organisation]"

### Example Attribution
\`\`\`
This project uses code from ExampleLib (https://github.com/org/examplelib)
Licensed under Apache 2.0 (https://opensource.org/licenses/Apache-2.0)
Original copyright © [Current Year] Example Organisation. Used under license.
\`\`\`

---

## Governing Law & Jurisdiction

This notice is governed by the laws of [Country/State], without regard to conflicts of law.

**Jurisdiction:** Any dispute arising from this software shall be litigated exclusively in [Specific Court], unless prohibited by applicable law.

**[INFERENCE]:** If you are in EU or another jurisdiction with mandatory governing law, local laws may apply regardless of this clause.

---

## Changes & Updates

**Last Updated:** February 2026
**Next Review:** 2025-04-15 (quarterly review scheduled)
**Changelog:** See [LEGAL-CHANGELOG.md](LEGAL-CHANGELOG.md)

We may update this notice periodically. Material changes will be communicated via [changelog](CHANGELOG.md) and, where required by applicable law (e.g., GDPR), through direct notification. Continued use after notification constitutes acceptance.

---

## Security & Compliance

**Security Issues:** Report via [security@organisation.com](mailto:security@organisation.com) (not public GitHub issues)

**Compliance:**
- GDPR (EU): See [GDPR Notice](gdpr-notice.md)
- CCPA (California): See [CCPA Notice](ccpa-notice.md)
- SOC 2 Type II: [Certification link] (expires [YYYY-MM-DD]) **[GAP]** *(Verify current certification expiry date before publishing. Replace placeholder with actual date.)*
- HIPAA: NOT compliant; do not use for PHI/healthcare data

---

## Plain Language Summary

**In simple terms:**

1. **You own your contributions.** If you submit code/feedback, we can use it, but you keep your copyright.

2. **We own our code.** Our copyright and Apache 2.0 license apply. You can use it free of charge, including commercially, if you:
   - Keep our copyright notice visible
   - List any changes you made
   - Use the same license for your derivative works

3. **No promises, but we care.** We provide the software as-is (no guarantees). If it breaks, we're not liable for damages. But we try hard to keep it reliable.

4. **Your data is safe.** We collect minimal data, keep it encrypted, and don't sell it. You can request, edit, or delete your data anytime.

5. **Ask a lawyer for legal advice.** This notice is not a substitute for legal counsel specific to your situation.

---

## Contact

**Legal Questions:** [legal@organisation.com](mailto:legal@organisation.com)
**Security Issues:** [security@organisation.com](mailto:security@organisation.com)
**Privacy Questions:** [privacy@organisation.com](mailto:privacy@organisation.com)
**General Support:** [support@organisation.com](mailto:support@organisation.com)

**[INFERENCE]:** This notice represents our best understanding of legal requirements and practices as of 2025-01-15. Laws and regulations change. This notice is updated quarterly. For questions specific to your jurisdiction, consult a qualified attorney.
```

**Why this works:** Marked as [INFERENCE] (not legal advice). Jurisdiction specified. Actual data practices described. Liability cap explicit. Attribution requirements clear. Organized by topic.

---

### Mediocre Example: Partial Compliance
```markdown
# Terms of Use

© 2025 Acme Corp. All rights reserved.

This software is provided as-is. We make no warranties. You may use it under the MIT License.

We collect some user data for analytics. See our privacy page for details.

For legal questions, contact legal@acme.com.
```

**Why this is mediocre:** Has a copyright notice and license reference (good), but: no `[INFERENCE]` marker (unreviewed by counsel), no jurisdiction specified, vague data practices ("some user data"), no liability cap, no attribution requirements, no plain language summary, no review schedule. Would score ~4/16 on the Pre-Publication Checklist.

---

### Bad Example
```markdown
# Legal Notice

This software is protected. You probably can't use it for much. We're not responsible if something goes wrong.

By using this, you agree to everything. Check the law in your country maybe.

© Us. All rights reserved or something.

For questions: just ask.
```

**Why this fails:** No clear permission/restrictions. Liability language vague and possibly unenforceable. No jurisdiction stated. Doesn't disclose data practices. Not professional or enforceable. Would score 0/16 on the Pre-Publication Checklist.

## Tactical Guidance

**Disclaimers vs. Policies:**
- **Disclaimer:** "What we're NOT responsible for" (liability cap, no warranty)
- **Policy:** "What we DO" (data practices, how we use your info)
- **License:** "What you can DO" (permitted uses, requirements)
- Use all three; they serve different purposes

**Legal Review:**
- Have qualified attorney review before publication
- Mark unreviewed language as [INFERENCE]
- Review annually (laws change, practices evolve)
- Document review date in notice

**Jurisdiction Matters:**
- Liability waivers enforceable in some jurisdictions, not others
- GDPR overrides disclaimers (EU residents have rights regardless)
- Specify governing law explicitly (may not be enforceable globally)
- Consider your target audience's jurisdiction

**Data Practices Accuracy:**
- Audit actual practices before claiming privacy
- Document retention periods (must be achievable)
- Disclose all third parties who access data
- Align privacy notice with GDPR/CCPA if applicable

**Attribution Requirements:**
- Specify what must be included (copyright, license, link)
- Provide template or example
- Make it easy to comply (copy-paste ready)
- Enforce consistently (pursue violations)

**Multi-Language Considerations:**
- For multi-jurisdiction audiences (EU, Latam), provide translations in relevant languages
- State which language version prevails in case of conflict (e.g., "The English version of this notice governs in case of discrepancy")
- Ensure translated versions are reviewed by legal counsel fluent in both languages
- GDPR may require notices in the user's local language for consumer-facing products
- Consider maintaining a translation matrix: language, last reviewed date, reviewer

**Accessibility (WCAG):**
- Legal notices must be accessible to screen readers (semantic HTML, proper heading hierarchy)
- Ensure sufficient colour contrast (WCAG 2.1 AA minimum: 4.5:1 for body text)
- Avoid using images of text for legal content (use actual text)
- Provide a plain language summary alongside formal legal language
- Test readability score (aim for grade 8-10 reading level for plain language sections)
- Ensure all links are descriptive (not "click here")

**Common Mistakes:**
- Making promises you can't keep (warranties, liability caps that don't hold up in court)
- Claiming GDPR compliance without actual compliance
- Hiding terms in fine print (use clear, prominent placement)
- Not updating when practices change
- Claiming legal advice (it's not; disclaim that role)

## Pre-Publication Checklist
- [ ] **[INFERENCE] Marked:** All disclaimers marked as unreviewed if no legal counsel approval
- [ ] **Legal Review:** Reviewed by qualified attorney in target jurisdiction
- [ ] **Jurisdiction Specified:** Governing law and jurisdiction explicitly stated
- [ ] **Enforceable Language:** Liability caps and warranties appropriate to jurisdiction
- [ ] **Data Practices Accurate:** Audited against actual implementation (not aspirational)
- [ ] **Retention Periods Achievable:** Data deletion procedures documented and executable
- [ ] **PII Handling Clear:** Who accesses data, how it's encrypted, third-party sharing disclosed
- [ ] **Attribution Requirements:** Template provided; easy to comply
- [ ] **Compliance Flags:** GDPR, CCPA, HIPAA status clearly marked
- [ ] **Contact Points:** Legal, security, privacy contact emails available
- [ ] **Plain Language Summary:** Non-lawyers can understand key points
- [ ] **Review Schedule:** Documented; next review date set (quarterly minimum)
- [ ] **Trademarks Protected:** Logo, name usage restrictions stated
- [ ] **Third-Party Licenses:** All dependencies attributed with license terms
- [ ] **Changelog Maintained:** Legal-changelog.md updated with each revision
- [ ] **GGP Markers Applied:** [INFERENCE] for unreviewed content, [GAP] for gaps, [CONFIRMED] for legally verified

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

