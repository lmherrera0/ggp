# Stakeholder Analysis

## Purpose
Stakeholder analysis identifies and maps stakeholders in a project or initiative by their power (influence over outcomes), interest (level of concern), current attitude, and required engagement strategy. It answers "Who matters? What do they want? How do we influence them? Who might resist?" Use this when a brief asks to "plan change management," "build support for initiative," "identify risks," or "develop communication strategy."

## When to Use
- Change management planning (who must adopt this?)
- Transformation initiative planning (who are key influencers?)
- Project planning (who should be involved? Who might resist?)
- Organisational restructuring planning
- Technology implementation (who are the end users? Who controls budget?)
- Merger/acquisition due diligence
- Strategic initiative communication planning
- Risk identification (who could block us?)

---

## GGP Verification Requirements

**This is where stakeholder analysis hallucinates most:**

### Primary Fabrication Risks

1. **Assumed Organisational Structure Without Verification** — AI invents reporting lines
   - RULE: Org structure must be [CONFIRMED] verified from current org chart, not assumed
   - RULE: If org chart unavailable, interview key people to understand structure; mark as [INFERENCE]
   - RULE: Flag if org chart is outdated (common problem); get current version
   - Common fabrication: "VP of X reports to C-suite" (may be wrong after recent reorganisation)

2. **Invented Stakeholder Attitudes Without Interview** — AI assumes someone "will resist" or "supports"
   - RULE: Attitudes must be [CONFIRMED] based on interviews or past behaviour, not assumptions
   - RULE: If you haven't asked, mark attitude as [INFERENCE] and state the assumption
   - RULE: Never assume "people resist change"; actual resistance varies by person and context

3. **Missing Shadow Influencers** — AI identifies formal stakeholders but misses informal power brokers
   - RULE: Always ask "Who really influences this decision?" (not just formal authority)
   - RULE: Interview people to identify informal leaders, trusted advisors, blockers
   - RULE: Flag shadow stakeholders explicitly

4. **Overstated Influence or Underestimated Resistance** — AI doesn't dig into actual power dynamics
   - RULE: Power isn't just about title; assess actual influence
   - RULE: Resistance often comes from unexpected places (not just the obvious suspects)
   - RULE: Flag if [person] has veto power; don't underestimate their blocking potential

5. **Incomplete Stakeholder List** — AI misses critical stakeholders
   - RULE: Start broad; then filter by power and interest
   - RULE: Ask each stakeholder "Who else should be involved?"
   - RULE: [GAP] mark if key stakeholders are unknown or unreachable

6. **Unverified Political Sensitivities** — AI doesn't surface conflicts or tensions
   - RULE: Ask about relationships, rivalries, turf wars
   - RULE: Flag [RISK] where stakeholder conflicts could derail initiative
   - RULE: Don't ignore politics; it's real and affects outcomes

7. **Unrealistic Engagement Strategies** — AI proposes engagement without knowing what people care about
   - RULE: Strategy must be based on what each stakeholder values
   - RULE: If you don't know what motivates [stakeholder], mark as [INFERENCE] and note need to learn

### Source Tier Rules for Stakeholder Analysis
| Element | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Organisational structure | ✓ Current org chart | ✓ Direct manager confirmation | [INFERENCE] Inferred from interviews | ✗ Rumor/LinkedIn |
| Stakeholder attitudes | ✓ Direct interview | ✓ Manager feedback on person | [INFERENCE] Inferred from behaviour | ✗ Third-hand rumor |
| Influence/power | ✓ Demonstrated behaviour (decision outcomes) | ✓ Manager assessment | [INFERENCE] Inferred from role | ✗ Assumed from title |
| Interests/motivations | ✓ Direct conversation (person tells you) | ✓ Manager knowledge | [INFERENCE] Inferred from role | ✗ Assumed |
| Potential resistance | ✓ Person has stated concerns | ✓ Manager knows their views | [INFERENCE] Inferred from context | ✗ Assumed |

---

## Template

### Stakeholder Map & Analysis

```
# STAKEHOLDER ANALYSIS: [Initiative Name]

## Stakeholder Identification

**Purpose of Analysis:** [Why are we doing this? What decision/change are we planning?]

**Initiative Context:** [Brief description of what we're planning and why]

**Assessment Method:** Interviews with [#] people conducted [dates]

**Org Chart Verification:** [CONFIRMED] Current org chart reviewed (dated [date]); confirms [scope]

---

## Stakeholder Map & Power-Interest Grid

### Power-Interest Matrix

```
                High Interest
                     △
                     │
    Manage Closely   │    Keep Satisfied
    (High Power,     │    (High Power,
     High Interest)  │     Low Interest)
    ─────────────────┼─────────────────
    Keep Informed    │    Monitor Only
    (Low Power,      │    (Low Power,
     High Interest)  │     Low Interest)
                     │
                     ▼
                Low Interest
```

### Stakeholder Positioning

| Stakeholder | Role | Power | Interest | Quadrant | Attitude | Strategy |
|---|---|---|---|---|---|---|
| **[Name]** | [Role/title] | High | High | Manage Closely | [CONFIRMED] Supportive | [Engagement strategy] |
| **[Name]** | [Role/title] | High | Low | Keep Satisfied | [INFERENCE] Neutral | [Strategy to maintain support] |
| **[Name]** | [Role/title] | Low | High | Keep Informed | [GAP] Resistant | [Mitigation strategy] |
| **[Name]** | [Role/title] | Low | Low | Monitor | [INFERENCE] Neutral | [Minimal engagement] |

---

## Detailed Stakeholder Profiles

### Stakeholder 1: [Name, Role]

**Demographics:**
- [CONFIRMED] Title: [Title] reporting to [Manager]
- [CONFIRMED] Organisation: [Department]
- [CONFIRMED] Tenure: [Years at company]
- [CONFIRMED] Key responsibilities: [What do they own?]

**Power Assessment (1-5 scale):**
- **Authority:** [Level] — Can make/block decisions related to [scope]
- **Influence:** [Level] — Respected by [peers/team]; sways opinions
- **Resources:** [Level] — Controls [budget/people/timeline]
- **Overall Power Score:** [INFERENCE] [4/5]

**Justification:** [CONFIRMED] [Person] controls budget for [initiative]; reports to CEO; serves on [committee]. Has demonstrated blocking power when they disagreed with [past decision]. Assumption: Power likely to continue.

**Interest Level (1-5 scale):**
- **Organisational impact:** Does this initiative affect their area? [CONFIRMED] Yes — affects [their metric]
- **Personal impact:** Does this affect their role/career? [INFERENCE] Possibly — could enhance their credibility or create work
- **Overall Interest Score:** [INFERENCE] [4/5]

**Current Attitude (Supportive / Neutral / Resistant):**
- [CONFIRMED]: Supportive
- **Evidence:** [Interview conducted Dec 2025] "I think this is essential. We've been asking for [capability] for years."
- **Why supportive:** [INFERENCE] [They believe initiative solves their problem / enhances their area / aligns with their goals]

**Key Interests & Motivations:**
- [CONFIRMED] [What they want from this initiative]
- [CONFIRMED] [What success means to them]
- [INFERENCE] [What concerns them (assumptions)]

**Potential Concerns:**
- [INFERENCE] [Possible resistance point 1] — Assumption: They may worry about [issue]
- [INFERENCE] [Possible resistance point 2]

**Engagement Strategy:**
- **Involvement level:** Core team member (decision-making authority)
- **Communication frequency:** Weekly steering committee
- **Key messages:** [What do they need to hear? What matters to them?]
- **How to influence (if resistant):** [If they were to resist, what would change their mind?]
- **Risk mitigation:** [If they withdraw support, initiative is at risk. Plan to maintain engagement.]

**Shadow Influence:**
- [INFERENCE] [Who else do they influence? Who influences them?]

---

### Stakeholder 2: [Name, Role]

**Power Score: [INFERENCE] [3/5]** (Manager, controls process decisions)

**Interest Score: [INFERENCE] [2/5]** (Implementation affects their team; they have medium interest)

**Current Attitude:**
- [INFERENCE]: Neutral (not yet engaged)
- **Evidence:** [Informal conversation] Seemed willing but not enthusiastic

**Engagement Strategy:**
- Inform them of decisions; request input on [specific aspect]
- Link initiative benefits to their metrics (efficiency, quality)
- Engage them in [phase] when their team is most affected

**Resistance Risk:**
- [INFERENCE] [Possible resistance point]: Implementation may require their team to change process
- **Mitigation:** Involve them in design; show benefits; provide training

---

### Stakeholder 3: [Name, Role]

**Power Score: [INFERENCE] [2/5]** (No formal authority; influential within their team)

**Interest Score: [INFERENCE] [4/5]** (Directly affected by initiative)

**Current Attitude:**
- [GAP] [RESISTANT]
- **Evidence:** [CONFIRMED] Direct quote from interview: "[Concern about initiative]"

**Key Concerns:**
- [CONFIRMED] [Specific concern 1 — stated directly]
- [CONFIRMED] [Specific concern 2]
- [INFERENCE] [Possible underlying concern — not stated but inferred]

**Why Resistant:**
- [CONFIRMED] [Initiative threatens their role / creates extra work / contradicts their beliefs / etc.]

**Engagement Strategy:**
- **Goal:** Move from Resistant to Neutral or Supportive
- **Approach:**
  - 1. Listen to their concerns (show you understand)
  - 2. Address specific concerns with data/plan
  - 3. Involve them in [phase] to build ownership
  - 4. Link to something they care about (e.g., "This will reduce [their pain point]")

- **Key messages:** [Craft message specifically for them, not generic]

- **Risk:** [INFERENCE] If they remain resistant, could influence their team to resist. Shadow influencer effect.

**Decision:** How critical is moving this person to supporter?
- If critical: Invest in engagement; may need to address specific concerns
- If not critical: Monitor; keep informed; don't force alignment

---

### Stakeholder 4: [Name, Role]

**Unknown/Shadow Stakeholder**
- [GAP]: [Person] was mentioned as influential but haven't interviewed them
- **Action:** Schedule interview before next phase
- **Risk:** If they're a hidden blocker, could derail initiative

---

## Stakeholder Summary Table

| Stakeholder | Power | Interest | Attitude | Priority | Engagement | Risk |
|---|---|---|---|---|---|---|
| [Name 1] | High | High | Supportive | P1 | Steer committee | Low |
| [Name 2] | High | Low | Neutral | P1 | Keep updated; maintain support | Medium |
| [Name 3] | Medium | High | Resistant | P1 | Intensive engagement; address concerns | High |
| [Name 4] | Low | High | Neutral | P2 | Keep informed; involve in execution | Low |
| [Name 5] | Low | Low | — | P3 | Minimal | Low |

**Key Findings:**
- [CONFIRMED] [Stakeholder 1] is a strong champion; leverage their support
- [RISK] [Stakeholder 3] is high-risk; resistance could cascade to team
- [GAP] [Unknown shadower] needs engagement before they become a problem

---

## Communication & Engagement Plan

### Phase 1: Initiative Approval (Month 1)

| Stakeholder | Message | Channel | Frequency | Owner |
|---|---|---|---|---|
| [Name 1] | "We need your leadership on steering committee" | Direct meeting | Weekly | Project sponsor |
| [Name 2] | "[Initiative] impacts your area; need your perspective" | Meeting + email | 2x/month | Project sponsor |
| [Name 3] | "Your team's concerns matter; let's work through this together" | 1:1 meeting | Bi-weekly | Change lead |
| [Name 4+] | Project overview; invitation to [meeting] | Email + optional call | As-needed | Project comms |

### Phase 2: Design & Scoping (Months 2-3)

| Stakeholder | Involvement | Message | Frequency |
|---|---|---|---|
| [Name 1] | Steering committee; final approval | Progress updates | Weekly |
| [Name 2] | Design review; input on [aspect] | Design drafts + decision requests | Bi-weekly |
| [Name 3] | Design working group (address concerns) | "We've incorporated your feedback on [point]" | Weekly |
| [Name 4+] | Informed; survey for input | "What questions do you have?" | Monthly |

### Phase 3: Implementation (Months 4+)

| Stakeholder | Involvement | Message |
|---|---|---|
| [Name 1] | Governance; escalation point | Regular updates |
| [Name 2] | Sponsor of their team's change | "Here's what's happening with your team" |
| [Name 3] | Change ambassador or co-designer | "You're shaping how this works for your team" |
| [Name 4+] | End user; training + support | Training; Q&A; feedback loops |

---

## RACI Matrix (Responsibility)

### For Key Decisions/Activities

| Decision / Activity | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Initiative scope approval | Project team | Steering sponsor ([Name 1]) | [Name 2], [Name 3] | [Name 4+] |
| Budget allocation | Finance | Sponsor | [Name 2], [Name 3] | Project team |
| Design approval | Project team | [Name 1] | [Name 2], [Name 3] | [Name 4+] |
| Implementation plan | Project team | [Name 1], [Name 2] | [Name 3] | [Name 4+] |
| Training program | Change lead | [Name 1] | [Name 3] | All staff |
| Go-live decision | Project team | [Name 1], [Name 2] | [Name 3], operations | All staff |

**Key:** R=Responsible (does work), A=Accountable (final say), C=Consulted (input), I=Informed (FYI)

---

## Resistance & Risk Mitigation

### Potential Resistance Points

| Resistance Source | Stakeholder | Form of Resistance | Impact | Mitigation |
|---|---|---|---|---|
| **Process change** | [Name 3] | "My team won't follow new process" | Adoption slow; benefits delayed | Design process WITH them; show benefits |
| **Budget impact** | [Name 2] | "This costs too much" | Project may be defunded | Align on ROI; show payback |
| **Turf/politics** | [Unknown] | "This threatens my department's scope" | Coalition against initiative | Early engagement; clarify roles |
| **Fatigue** | All | "We're doing too much change" | Low adoption; burnout risk | Sequence change; provide support |

### Influence Strategy (How to Get Support)

**For Each Resistant Stakeholder:**

| Stakeholder | Current Attitude | Why Resistant | Influence Lever | Action |
|---|---|---|---|---|
| [Name 3] | Resistant | Fears workload increase | Show efficiency gains outweigh burden | 1. Data on time savings for their work. 2. Pilot with small team first. 3. Training to reduce learning curve |
| [Unknown] | Unknown | [TBD] | [TBD] | Engage first to understand; then tailor approach |

**General Influence Principles:**
- [INFERENCE] Assumption: People support things that benefit them or align with their values
- Address concerns specifically (not generically)
- Involve them in solution design
- Show early wins
- Make adoption "easy" (training, tools, support)

---

## Organisational Change Readiness

**Assessment Question:** Is the organisation ready to change?

| Factor | Status | Assessment |
|---|---|---|
| Executive sponsorship | [CONFIRMED] Strong | [Name 1] is executive champion; visible support |
| Stakeholder buy-in | [INFERENCE] Partial | [Name 1] & [2] supportive; [3] resistant; [others] undecided |
| Resource availability | [INFERENCE] Uncertain | Depends on [dependency] |
| Competing initiatives | [INFERENCE] Risk | [Other change] happening in parallel; could compete for attention |
| Organisational appetite | [INFERENCE] Medium | Company has done [previous change]; people are change-fatigued |

**Readiness Score: [INFERENCE] MODERATE**
- Positive: Executive sponsorship + some key supporters
- Risk: Resistance from [stakeholder]; competing change; fatigue
- Mitigation: Strong change plan + early wins + visible progress

---

## Stakeholder Governance

**Steering Committee:**
- Members: [Name 1] (sponsor), [Name 2] (financial), [Name 3] (operations), [Name 4] (legal)
- Frequency: [Weekly / Bi-weekly]
- Decision authority: Approve scope, budget, timeline changes

**Escalation:**
- Issues escalated to Steering when [conditions]
- Unresolved conflicts escalated to [Executive]

**Feedback Mechanisms:**
- Monthly town hall for all-hands (Q&A)
- Anonymous feedback survey (monthly)
- Office hours (Project lead available for questions)

---

## Risks & Contingencies

### Key Stakeholder Risks

| Risk | Stakeholder | Impact | Probability | Mitigation |
|---|---|---|---|---|
| [RISK] [Name 1] loses support | Sponsor | Project could be cancelled | Low (strong alignment currently) | Keep momentum; show progress |
| [RISK] [Name 3] coalition against | Key resistor | Adoption drops; initiative at risk | Medium (they influence others) | Early intensive engagement; address concerns |
| [RISK] Key stakeholder departs | [Role] | Loss of institutional knowledge; support | Low | Cross-train backup; document decisions |
| [RISK] Political conflict | [Departments] | Initiative becomes weapon in turf war | Medium (history of tensions) | Clarify roles; get both sides aligned upfront |

---

## Monitoring & Course Correction

**Stakeholder Health Metrics (Monthly):**
- Steering committee attendance rate (measure of engagement)
- Stakeholder sentiment (survey or informal check-ins)
- Team adoption rate (measure of change cascade)
- Issue backlog related to stakeholder concerns (trending up = problem)

**Review Questions (Monthly):**
- Are we maintaining support from [Name 1]?
- Is [Name 3]'s resistance decreasing or increasing?
- Are we hearing concerns from unexpected stakeholders? (identifies shadow issues)
- What unexpected alliance or conflict has emerged?

**Decision Gates:**
- If [Name 1] becomes unsupportive → escalate immediately
- If [Name 3]'s team adoption <50% → intensify engagement
- If new stakeholder emerges as blocker → assess power/interest; adjust strategy

---

```

### RACI Matrix Template (Detailed)

```
# RACI MATRIX: [Initiative]

## Key Decision/Activity Matrix

| Decision/Activity | Owner/Responsible | Accountable (Final Authority) | Consulted (Input) | Informed (FYI) |
|---|---|---|---|---|
| Initiative charter | Project manager | Sponsor | Steering members | All staff |
| Scope definition | Project team | [Name 1] | [Name 2], [3] | [Name 4+] |
| Budget | Finance | CFO + Sponsor | Project lead | Team leads |
| Vendor selection | Procurement | [Name 2] | [Name 1], Project lead | [Name 3] |
| System design | Tech architect | [Name 2] | Project team, [Name 3] | All users |
| Implementation plan | Project team | [Name 1], [Name 2] | [Name 3], operations | [Name 4+] |
| Training curriculum | Learning + SMEs | Change lead | Project lead | All staff |
| Change communication | Change lead | [Name 1] | Project team | All staff |
| Risk escalation | Project manager | Steering | Affected teams | [Depends] |

---

```

---

## Methodology

### Step 1: Identify All Stakeholders
1. **Start broad:** Who touches this initiative? Who is affected? Who controls resources?
2. **Categories:** Executives, managers, team members, end users, customers, external parties
3. **Snowball:** Ask each stakeholder "Who else should I talk to?"
4. **Missing data:** Mark [GAP] if key stakeholders are unknown or unreachable

### Step 2: Map Power & Interest
1. **Power:** Can they influence outcomes? Do they control budget/decisions/resources?
2. **Interest:** Does initiative affect them? How much do they care?
3. **Place on matrix:** High power + high interest = "Manage Closely"
4. **Prioritise:** Focus engagement on high power/interest stakeholders

### Step 3: Assess Current Attitudes (Via Interview)
1. **Direct conversation:** Don't assume; ask "What do you think about [initiative]?"
2. **Evidence:** Quote what they said; note their tone
3. **Confidence:** If you haven't asked, mark [INFERENCE]
4. **Follow-up:** "What would make you supportive?" or "What are your concerns?"

### Step 4: Identify Interests & Motivations
1. **What matters to them?** Career advancement? Team success? Their metrics?
2. **How does initiative help/hurt?** What do they gain or lose?
3. **What's their pain point?** What problem could this solve for them?

### Step 5: Build Engagement Strategy (Tailored)
1. **For supporters:** How to maintain/strengthen support? How to leverage?
2. **For neutral:** How to move to supporter? What would change their mind?
3. **For resistors:** What are core concerns? Is it addressable? Who else do they influence?
4. **For unknowns:** How to engage and assess?

### Step 6: Create Communication Plan
1. **Who needs what info?** Different stakeholders need different messages
2. **When/how often?** Frequency varies by involvement level
3. **Message:** Tailor to what they care about
4. **Channel:** How do they prefer to communicate?

### Step 7: Identify Shadow Stakeholders & Power Dynamics
1. **Who really has power?** (Informal influencers, trusted advisors)
2. **What relationships matter?** (Who influences whom?)
3. **What conflicts exist?** (Turf wars, rivalries, past tensions?)
4. **Political landscape:** What makes this complicated?

---

## Common Hallucination Traps

### Trap 1: Assumed Organisational Structure
**[FABRICATION]:** "[Person] reports to [Boss]" (without checking org chart)
✓ **GROUNDED:** "[CONFIRMED] [Org chart dated Nov 2025] confirms [Person] reports to [Boss]. [INFERENCE] Assumption: This structure hasn't changed recently; verify with [Boss] directly."

### Trap 2: Invented Attitudes Without Interview
**[FABRICATION]:** "[Person] will likely resist because they prefer the status quo"
✓ **GROUNDED:** "[INFERENCE] [Person] may resist based on [past behaviour / their role]. NOT YET VERIFIED. Action: Schedule interview to understand their actual stance."

### Trap 3: Missing Shadow Influencers
**[FABRICATION]:** Stakeholder map lists [formal authority figures] only
✓ **GROUNDED:** "[INFERENCE] Identified informal leaders: [Name] (respected by technical team; influences adoption), [Name] (trusted advisor to [executive]). These informal influencers may matter as much as formal authority."

### Trap 4: Ignoring Political Context
**[FABRICATION]:** Engagement plan treats all stakeholders the same way
✓ **GROUNDED:** "[RISK] [Department A] and [Department B] have turf conflict. If initiative seen as favoring one side, other side may actively resist. Mitigation: Clarify roles upfront; involve both in design."

### Trap 5: Unrealistic Engagement Strategy
**[FABRICATION]:** "Engagement: Communicate to [Name] that this is good for them"
✓ **GROUNDED:** "[Name] may resist because it increases their workload. Mitigation: (1) Data showing net time savings, (2) Pilot with small team first, (3) Extra training/support in first 90 days, (4) Link to their metric (efficiency/quality)."

### Trap 6: Overstating Adoption Potential
**[FABRICATION]:** "All stakeholders will adopt this change"
✓ **GROUNDED:** "[INFERENCE] Based on interviews and change history, expect: 40% enthusiastic, 40% willing, 20% resistant. Mitigation: Intensive engagement with resistors; address specific concerns; provide extra support."

### Trap 7: Not Planning for Resistance
**[FABRICATION]:** Stakeholder plan includes no contingencies if someone blocks
✓ **GROUNDED:** "If [Name] withdraws support, project has [specific impact]. Contingency: Escalate to [higher authority]; emphasize [strategic importance]; involve [Name] in [aspect] to rebuild relationship."

---

## Examples

### Good Example: Stakeholder Analysis (Properly Grounded)

```
# STAKEHOLDER ANALYSIS: Automation Initiative

## Stakeholder Identification

**Initiative:** Implement RPA (Robotic Process Automation) in Finance Operations
**Scope:** Automate invoice processing, expense approvals, cash posting
**Assessment Period:** November-December 2025 (12 interviews conducted)

---

## Stakeholder Power-Interest Matrix

```
                    High Interest
                         ▲
                         │
    [CFO]              [VP Finance]     [Chief Accountant]
    [Controller]         │
─────────────────────────┼─────────────────────────
    [Accounting Mgr]     │              [CEO]
    [AP Supervisor]      │
                         │
                         ▼
                    Low Interest
     Low Power ◀─────────┼─────────▶ High Power
```

---

## Stakeholder Profiles

### Stakeholder 1: CFO (Chief Financial Officer)

**Power Assessment: [INFERENCE] [5/5] — Highest power**
- [CONFIRMED] Controls finance budget; reports to CEO
- [CONFIRMED] Authority over all finance operations
- [CONFIRMED] Has demonstrated blocking power on past initiatives

**Interest Assessment: [INFERENCE] [5/5] — Highest interest**
- [CONFIRMED] Direct responsibility for cost efficiency and audit compliance
- [CONFIRMED] RPA directly impacts their KPIs (cost per transaction, cycle time)

**Current Attitude:**
- [CONFIRMED]: Strong supporter
- **Evidence:** [Interview, Dec 2025] "This is a top priority. We've been looking for ways to improve our cost structure. RPA is the right answer."
- **Why:** Initiative directly supports their strategic goal: "Reduce cost per transaction by 25% in 2 years"

**Key Interests:**
- [CONFIRMED] Cost reduction (primary driver)
- [CONFIRMED] Competitive positioning (our cost structure vs. peers)
- [CONFIRMED] Audit readiness (better controls, fewer manual errors)

**Engagement Strategy:**
- **Involvement:** Executive sponsor; steering committee chair
- **Frequency:** Weekly steering updates
- **Key messages:** Progress toward 25% cost reduction goal; cost savings tracking
- **How to maintain support:** Monthly ROI update; escalation of any budget impacts immediately

**Risk:** If we miss timeline or budget, could lose support. Keep communication tight.

---

### Stakeholder 2: VP Finance Operations

**Power: [4/5]** (Manages the finance operations team; controls day-to-day decisions)
**Interest: [5/5]** (Their team will be most affected)

**Current Attitude:**
- [INFERENCE] [SUPPORTIVE BUT CAUTIOUS]
- **Evidence:** [Interview] "I see the benefits, but I'm concerned about how this affects my team. Will anyone lose their job? How do we manage the transition?"

**Key Interests:**
- [CONFIRMED] Team stability (no layoffs)
- [CONFIRMED] Success of automation (doesn't fail and make them look bad)
- [INFERENCE] Career impact (could this enhance their reputation?)

**Concerns:**
- [CONFIRMED] Job security concerns from their team ("Will RPA replace people?")
- [INFERENCE] Implementation risk (automation often fails; doesn't want to be blamed)
- [INFERENCE] Change management burden (their team will resist; they'll have to manage it)

**Engagement Strategy:**
- **Involvement:** Core team member; design decisions
- **Frequency:** Bi-weekly design reviews
- **Key messages:**
  - "RPA will eliminate tedious work; your team will do higher-value work"
  - "No layoffs; redeployment to [areas of need]"
  - "We're designing this together to ensure success"
- **How to move to strong supporter:**
  - 1. Guarantee no involuntary layoffs (in writing)
  - 2. Involve in design to build ownership
  - 3. Assign them success metrics (adoption rate, error reduction)
  - 4. Early wins (pilot success) to build confidence

**Risk:** If they feel threatened, could passively resist (slow team adoption). Mitigation: Early clarity + involvement.

---

### Stakeholder 3: Accounts Payable Supervisor

**Power: [2/5]** (Manages AP team; no budget authority)
**Interest: [4/5]** (Their process will change dramatically)

**Current Attitude:**
- [GAP] [RESISTANT]
- **Evidence:** [Interview] "I don't know much about automation, but this sounds risky. What if it breaks? We have invoices to pay; we can't afford downtime."
- **Tone:** Anxious, defensive

**Key Concerns:**
- [CONFIRMED] System reliability (fear of automation breaking and causing backlog)
- [CONFIRMED] Job security (will she be replaced?)
- [INFERENCE] Loss of control (used to direct the work; automation may bypass her)
- [INFERENCE] Technical intimidation (doesn't understand RPA; feels vulnerable)

**Engagement Strategy:**
- **Involvement:** Co-design team (AP process expert)
- **Frequency:** Weekly design sessions + 1:1 check-ins
- **Key messages:**
  - "You're the expert on AP. We need your knowledge to make this work."
  - "Your role will shift from processing transactions to managing the automation and handling exceptions."
  - "You'll have more time for strategic work (vendor management, cost optimisation)."
- **How to move to supporter:**
  - 1. Involve her in process design (show her we value her expertise)
  - 2. Training on RPA + new tools (reduce technical intimidation)
  - 3. Pilot with small volume first (reduce anxiety about reliability)
  - 4. New job description (clarify her future role; not elimination)
  - 5. Assign her a success metric (she owns AP automation success)

**Risk:** HIGH. If she remains resistant, her team will resist. She's influential with her staff. Invest heavily in moving her to supporter.

---

### Stakeholder 4: Chief Accountant

**Power: [4/5]** (Controls accounting standards; has CFO's ear)
**Interest: [2/5]** (Finance ops not their primary area, but compliance is)

**Current Attitude:**
- [INFERENCE] [NEUTRAL/WAIT AND SEE]
- **Evidence:** [Interview] "I need to understand how this affects our audit trail and compliance. If it's compliant, I'm okay with it."

**Key Interests:**
- [CONFIRMED] Audit compliance (SOX, external audit requirements)
- [CONFIRMED] Controls documentation (must be audit-ready)

**Engagement Strategy:**
- **Involvement:** Design review (compliance perspective only)
- **Frequency:** Monthly check-in
- **Key messages:** "RPA actually improves our control environment (better audit trail, fewer manual errors)"
- **Action:** Early technical review to confirm RPA system is audit-compliant

**Risk:** LOW. If we address compliance early, they'll support. Not a blocker.

---

### Stakeholder 5: CEO

**Power: [5/5]** (Ultimate authority)
**Interest: [1/5]** (Finance operations not their day-to-day focus)

**Current Attitude:**
- [INFERENCE] [SUPPORTIVE (If CFO supports)]
- **Evidence:** [Indirect] CEO mentioned cost reduction in annual strategy

**Engagement Strategy:**
- **Involvement:** Approve charter; quarterly updates
- **Frequency:** As-needed (don't over-communicate)
- **Key message:** Keep simple: "We're improving cost structure and competitiveness"
- **Risk:** If CFO loses support, CEO will likely follow

---

## Summary & Action Plan

### High-Priority Stakeholders to Engage

| Stakeholder | Priority | Action | Timeline |
|---|---|---|---|
| CFO | Maintain support | Weekly steering; ROI tracking | Ongoing |
| VP Finance Ops | Move to strong supporter | Involve in design; guarantee no layoffs | Weeks 1-4 |
| AP Supervisor | Move to supporter (critical) | Intensive engagement; assign ownership | Weeks 1-6 |
| Chief Accountant | Confirm compliance OK | Technical review; address concerns | Week 2 |

### Resistance Mitigation

**Main Resistance:** [AP Supervisor] and her team

**Root Causes:** Job security fears + change anxiety + lack of technical confidence

**Mitigation Strategy:**
1. **Early clarity:** Communicate no involuntary layoffs (week 1)
2. **Involvement:** Include AP Supervisor in design (weeks 2+)
3. **Training:** RPA technical overview + hands-on practice (month 2)
4. **Pilot:** Start with 20% of volume; build confidence (month 3)
5. **Quick wins:** Celebrate early successes publicly (month 3+)
6. **Ownership:** AP Supervisor owns KPIs (adoption rate, accuracy)

### Communication Calendar

**Week 1:** Kick-off meeting with CFO, VP Ops, AP Supervisor (frame & roles)
**Weeks 2-4:** 1:1 conversations with resistors (understand concerns; build trust)
**Month 2:** Design workshop (all stakeholders; co-create solution)
**Month 3:** Pilot launch + success celebration
**Ongoing:** Weekly steering (CFO) + bi-weekly operational updates (VP Ops, AP)

---

## Risk Assessment

[RISK] **Critical Risk:** AP Supervisor resistance cascades to team → slow adoption → benefits delayed

**Mitigation:** Invest in relationship; address concerns; involve in design; assign ownership

[INFERENCE] **Secondary Risk:** VP Finance Ops becomes overwhelmed by change management burden

**Mitigation:** Provide change management support; clear communication plan; celebrate progress

---

```

### Bad Example: Stakeholder Analysis (Common Fabrications)

```
# STAKEHOLDER ANALYSIS FAIL PROBLEMS BELOW

## Stakeholder List

"Key stakeholders: CFO, VP Finance, AP Manager, CEO"
- FAIL No assessment of their power/interest
- FAIL No interviews mentioned
- FAIL May be missing other key people

## Attitudes

"CFO: Supportive. VP Finance: Willing. AP Manager: Neutral."
- FAIL Based on what? Interviews? Assumptions?
- FAIL No evidence cited
- FAIL "Neutral" doesn't explain what they actually think

## Engagement Strategy

"Strategy: Communicate benefits and gain buy-in"
- FAIL Too vague; not tailored to each stakeholder
- FAIL Doesn't address concerns
- FAIL No specific actions

## Risks

"Risk: Low adoption by staff"
- FAIL Too vague; doesn't name who might resist or why
- FAIL No mitigation plan

## Problems

- No power/interest assessment
- No interviews; assumptions only
- Attitudes without evidence
- Generic engagement plan (not tailored)
- Risks identified but not explained
- No RACI matrix
- No consideration of informal influencers or political dynamics

```

---

## Quality Checklist

Before submitting stakeholder analysis:

**Stakeholder Identification**
- [ ] Comprehensive list created (started broad, then prioritised)
- [ ] "Snowball method" used (each stakeholder asked "who else?")
- [ ] Org chart verified (not assumed)
- [ ] [GAP] items noted if stakeholders unknown/unreachable
- [ ] Both formal and informal leaders identified

**Power & Interest Assessment**
- [ ] Power rated on consistent 1-5 scale (justified)
- [ ] Interest rated on consistent 1-5 scale (justified)
- [ ] Positioned on power-interest matrix (4 quadrants)
- [ ] Rationale provided for each rating
- [ ] Shadow influencers identified (informal power brokers)

**Attitude Assessment**
- [ ] Current attitudes based on [CONFIRMED] interviews, not assumptions
- [ ] Direct quotes provided (evidence)
- [ ] If not interviewed, marked [INFERENCE]
- [ ] If unknown, marked [GAP]
- [ ] Tone/sentiment captured (not just "supportive/resistant")

**Interests & Motivations**
- [ ] What matters to each stakeholder is explicit
- [ ] How initiative helps/hurts them identified
- [ ] Personal and organisational interests separated
- [ ] Underlying concerns surfaced (not just surface objections)

**Engagement Strategy**
- [ ] Tailored to each stakeholder (not generic)
- [ ] Based on what they care about
- [ ] For resistors: specific mitigation strategy (not just "manage closely")
- [ ] For supporters: strategy to maintain/leverage
- [ ] Frequency and channel appropriate to involvement level

**Communication Plan**
- [ ] Specific messages for each stakeholder (not one-size-fits-all)
- [ ] Frequency appropriate to involvement level
- [ ] Channel appropriate (how they prefer to communicate)
- [ ] Calendar provided (when will communication occur?)

**RACI Matrix** (if applicable)
- [ ] Key decisions/activities listed
- [ ] Responsible, Accountable, Consulted, Informed roles assigned
- [ ] No ambiguity (clear who has final say)

**Risk & Resistance**
- [ ] Potential resistance identified and sourced
- [ ] Root causes of resistance understood (not assumed)
- [ ] Impact if resistance occurs quantified
- [ ] Specific mitigation for each resistance point
- [ ] Escalation plan if resistance emerges
- [ ] Political/organisational dynamics surfaced (not ignored)

**Organisational Context**
- [ ] Change readiness assessed (ready to change or fatigued?)
- [ ] Competing initiatives identified
- [ ] Historical context provided (past successes/failures with change)
- [ ] Power dynamics and relationships documented

**GGP Compliance**
- [ ] Every stakeholder attitude claim marked [CONFIRMED]/[INFERENCE]/[GAP]
- [ ] No assumed attitudes (all evidenced by interview or marked [INFERENCE])
- [ ] Org structure verified as [CONFIRMED] (not assumed)
- [ ] Power & interest ratings justified (not arbitrary)
- [ ] Unknown/shadow stakeholders marked [GAP]
- [ ] Assumptions disclosed (not hidden in narrative)
- [ ] Political sensitivities and risks marked [RISK]


---

## GGP Mandatory Validation — Return to SKILL.md

After completing this template's checklist, you MUST return to SKILL.md and execute:

- **3f. Devil's Advocate** (8 dimensions scored 1-3: Hostile Reader, Screenshot, CEO)
- **3g. Validation Gate** (8-point checklist — must score 8/8)
- **3h. Refinement + Clean Output** (present gaps/inferences for user decision)

**Flow**: Load template → Create analysis → Template checklist → **Return to SKILL.md 3f-3h** → Validate → Deliver.

**NEVER deliver content without completing the full GGP Validation Gate.**

