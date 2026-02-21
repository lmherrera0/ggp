export default function Hero() {
  return (
    <section className="section-gap bg-wine text-ivory">
      <div className="section-container text-center">
        <p className="text-almond font-sans font-semibold text-sm tracking-widest uppercase mb-6">
          Open-Source Framework
        </p>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-ivory leading-tight mb-6">
          Grounded Gate Protocol
        </h1>
        <p className="text-xl sm:text-2xl text-almond max-w-3xl mx-auto mb-4">
          Anti-hallucination framework for AI-generated professional
          communications
        </p>
        <p className="text-clay font-serif font-semibold text-lg sm:text-xl italic mb-10">
          &ldquo;Nothing passes unverified.&rdquo;
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#quickstart" className="btn-primary">
            Get Started
          </a>
          <a
            href="https://github.com/lmherrera/ggp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-almond text-almond font-sans font-semibold rounded-bvvg transition-colors duration-200 hover:bg-almond/10 text-base"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
