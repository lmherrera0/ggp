export default function QuickStart() {
  return (
    <section className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          File Structure
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          GGP is a self-contained skill folder. Drop it into your project and
          start using it.
        </p>

        <div className="card max-w-3xl mx-auto">
          <pre className="font-mono text-sm text-wine/80 leading-relaxed overflow-x-auto">
            {`skills/ggp/
\u251C\u2500\u2500 SKILL.md                          # Main orchestrator (entry point)
\u251C\u2500\u2500 README.md                         # Getting started guide
\u251C\u2500\u2500 examples/
\u2502   \u251C\u2500\u2500 _style-learning.md            # Style extraction framework
\u2502   \u2514\u2500\u2500 [channel]/                    # Your past examples (22 folders)
\u2514\u2500\u2500 references/
    \u251C\u2500\u2500 general-guidelines/
    \u2502   \u251C\u2500\u2500 QUICK_REFERENCE.md        # Compact rules card (Fast Mode)
    \u2502   \u251C\u2500\u2500 1.source-analysis.md      # Source tiers, citations
    \u2502   \u251C\u2500\u2500 2.consulting-etiquette.md # 7 golden rules
    \u2502   \u251C\u2500\u2500 3.reputation-protection.md# Devil\u2019s Advocate, 3 tests
    \u2502   \u251C\u2500\u2500 4.data-analytics-expertise.md
    \u2502   \u2514\u2500\u2500 5.success-metrics.md      # KPIs and auditing
    \u251C\u2500\u2500 channels/                     # 22 channel templates
    \u251C\u2500\u2500 analysis-templates/           # 7 analysis templates
    \u251C\u2500\u2500 platforms/                    # Claude, ChatGPT, Copilot, Gems
    \u2514\u2500\u2500 about-ggp/
        \u251C\u2500\u2500 introduction.md           # Executive summary
        \u2514\u2500\u2500 LEGAL.md                  # Licence and attribution`}
          </pre>
        </div>
      </div>
    </section>
  );
}
