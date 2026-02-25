# Messaging (WhatsApp, Teams, Slack)

## Goal

Rapid, informal but professional communication for urgent clarifications, quick decisions, and asynchronous team coordination. Clear enough to be context-standalone; confidential data stays off these platforms.

## Success Metrics (2025-2026)

- **Response Time**: 80%+ responses within 2 hours during business hours
- **Clarity**: Zero follow-up messages requesting clarification on intent
- **Escalation Accuracy**: 95%+ of escalations to email/call are appropriate (not over-communicating)
- **Archive Value**: Conversations can be understood 30 days later without original context
- **Confidentiality**: Zero breaches (confidential data never in messages)

## Limits & Restrictions

### Technical
- **Message length**: Keep under 200 characters for optimal mobile reading; use threads for longer items
- **Image/file sharing**: Avoid files >5MB; use cloud links for large documents
- **Threading**: Use platform threading (Slack threads, Teams replies) to keep channels clean
- **Reactions**: Platform-specific emoji reactions acceptable for quick acknowledgement
- **Mentions**: @mention only if urgent or directly relevant to recipient
- **Edit capability**: Edit within 1 hour if error; after 1 hour, send follow-up message

### Platform/Algorithm
- **Slack notification model**: @mention and threads trigger notifications; overuse causes muting
- **Teams threading**: Threaded replies prevent channel noise and improve findability
- **WhatsApp groups**: Limited to 256 members; notification fatigue at scale
- **Read receipts**: Different by platform; assume messages are seen within 4 hours during business hours
- **Search behaviour**: Slack/Teams are searchable; WhatsApp threads are ephemeral
- **Integration signals**: Platforms track app switching behaviour; quick replies favour active users

### GGP Etiquette
- **Confidentiality rule**: NO client names, pricing, contract terms, or internal strategy
- **Escalation threshold**: If discussion becomes complex (> 5 exchanges) or emotional, move to call
- **No off-hours urgency**: Respect boundaries; mark truly urgent with [URGENT] tag (rare)
- **No complaints**: Client frustrations, vendor criticism, interpersonal gripes → email or private call
- **Record expectation**: Assume messages may be forwarded; write accordingly
- **Professional tone**: Informal but not sloppy; complete sentences; no heavy slang
- **Attribution**: Cite source if sharing data or claims ("I read in X that Y" or "Per [source] Z")

## Template

### Quick Decision Request

```
[CONTEXT]
We need to confirm the client call time before sending calendar invites.

[QUESTION]
Options: Tuesday 10am, Wednesday 2pm, or Thursday 9am?
Can you confirm by EOD today?

[REFERENCE]
Slack thread above has the context.
```

### Status Update

```
[HEADLINE]
Design review wrapped. Phase 2 is approved.

[DETAILS]
Feedback: simplify the onboarding flow (3 steps → 2).
Timeline: Engineering can start Tuesday.

[NEXT]
I'll send full notes to email thread by EOH.
```

### Urgent Escalation

```
[URGENT] Client has blocked approval pending cost review.

Need your sign-off on one of these:
1. Authorise $15K budget increase
2. Extend timeline 4 weeks

Can we sync for 15 min?
```

## Examples

### Good Example

**Slack message (private channel with team):**

"Design review is 30 min delayed — client traffic jam. Moved to 3pm.

I'll send notes in a thread once we're done. CTA: Can engineering block off 30 min tomorrow to review any feedback?"

---

**Why this works:**
- Specific about what changed (delay, new time)
- Explains why (context, not excuse)
- Clear about next step (notes in thread)
- Specific CTA (30 min block, specific purpose)
- Tone is efficient but not curt
- No rambling or over-explanation

### Bad Example

**Slack message (public channel with external consultants):**

"Hey everyone! So the client meeting got delayed because of traffic or something, and then the budget got cut but I can't really say why. Anyway we need someone to help with the design review but I'm not sure who. Can everyone please let me know if you're available? Also the Q2 pricing model is in the shared drive but don't tell the client we're thinking about cutting costs. Thanks!"

---

**Why this fails:**
- Vague about timing (when is the meeting now?)
- Confidential data disclosed (budget cut, pricing model, client sensitivity)
- Unclear CTA (who should step up?)
- Assumes context knowledge others don't have
- Asks people to keep secrets (unprofessional)
- Too much casual tone for a mixed audience
- Rambling structure; hard to extract action items

## Tactical Guidance

**Messaging Norms by Platform:**

| Platform | Tone | Use Case | Archive? | Confidential? |
|----------|------|----------|----------|---------------|
| **Slack** | Informal, emoji OK | Team coordination, quick decisions | Yes (searchable) | No; public default |
| **Teams** | Professional, structured | Corporate comms, documented decisions | Yes (searchable) | Some channels private |
| **WhatsApp** | Conversational, brief | Urgent clarifications, 1:1s | No; ephemeral | No; assume shared |

**Response Time Expectations:**

- **Urgent**: [URGENT] tag = respond within 30 min or acknowledge delay
- **Standard**: Respond within 2 hours during business hours
- **Async-OK**: No tag = can respond same day or next morning
- **Off-hours**: No expectation of response; don't send work messages after 7pm or before 8am

**When to Escalate to Email:**

- Discussion requires documentation (contract detail, legal term, budget approval)
- More than 5 exchanges required (move to call or email)
- Emotional/interpersonal tension rising (move to private call immediately)
- Message length would exceed 300 characters
- Confidential client data required in explanation
- Needs timestamp/signature accountability

**Threading Discipline:**

- **Slack**: Use thread replies to keep channel readable
- **Teams**: Thread replies preferred; whole-channel notifications only if urgent
- **WhatsApp**: Groups have no threading; use separate DMs for sensitive/complex
- **Benefit**: Threads reduce notification fatigue and improve findability by 3x

**Tone Calibration:**

```
Internal team chat (Slack):
"Got client feedback on the prototype. Simplify the flow. I'll send notes in a sec."

Cross-company with client liaisons (Teams):
"Client review completed. Key feedback: streamline the onboarding flow. Detailed notes will be shared via email for documentation."

Executive request (WhatsApp DM):
"Hi [Name], ready to discuss Q2 plan whenever works. Have 30 min slots Tues 10am or Wed 2pm. Let me know."
```

**Confidentiality Boundaries:**

```
✓ SAFE: "We had client feedback on the interface"
✗ UNSAFE: "[Client name] says the interface is ugly"

✓ SAFE: "Budget constraints mean we need to scope down"
✗ UNSAFE: "Client cut budget from $500K to $350K"

✓ SAFE: "I'll send strategy notes to email for record"
✗ UNSAFE: "Here's our margin model for the project"
```

## Pre-Publication Checklist

- [ ] Message is under 200 characters (or appropriately threaded)
- [ ] No client names, pricing, contract terms, or internal strategy
- [ ] No complaints about people, clients, or vendors
- [ ] CTA is specific: "Confirm by EOD Thursday" not "let me know soon"
- [ ] Tone is informal but professional (complete sentences, no slang)
- [ ] Context is self-contained (reader doesn't need to hunt previous messages)
- [ ] If urgent, tagged [URGENT] only (rare usage; every tag dilutes the signal)
- [ ] [URGENT] messages have explicit deadline: "Need response by 3pm today"
- [ ] If sharing data/claims, source is cited or apparent ("I read in Slack that..." OK, "everyone knows..." NOT OK)
- [ ] Tone matches platform and audience (Slack team ≠ WhatsApp with vendor)
- [ ] Willing to have conversation move to call/email if needed (not forcing async resolution)
- [ ] GGP markers check: Are claims attributed? Is context clear enough for archive reading?
- [ ] Pass the "read in 30 days" test: Will this message make sense without original context?

---

**Last Updated**: February 2026

---

## GGP Mandatory Validation — Return to SKILL.md

After completing this channel's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load channel → Create content → Channel checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

