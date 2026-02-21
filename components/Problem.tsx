const stakes = [
  {
    level: "Embarrassing",
    example: "A client email with a fabricated statistic",
    color: "text-yellow-600",
  },
  {
    level: "Career-limiting",
    example: "Made-up data in a leadership presentation",
    color: "text-orange-600",
  },
  {
    level: "Potentially illegal",
    example: "False information in a regulatory submission",
    color: "text-red-600",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          The Problem
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          AI sometimes makes things up. It sounds confident, uses proper
          grammar, and presents &ldquo;facts&rdquo; that turn out to be
          completely fabricated.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto mb-12">
          {stakes.map((s) => (
            <div key={s.level} className="card text-center">
              <p
                className={`font-serif font-bold text-lg mb-2 ${s.color}`}
              >
                {s.level}
              </p>
              <p className="text-sm text-wine/70">{s.example}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-wine/80 max-w-2xl mx-auto font-serif text-lg">
          GGP makes those mistakes visible so you can catch them before they
          matter.
        </p>
      </div>
    </section>
  );
}
