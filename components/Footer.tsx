export default function Footer() {
  return (
    <footer className="bg-wine text-almond py-12">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-serif font-semibold text-ivory text-lg mb-1">
              Grounded Gate Protocol
            </p>
            <p className="text-sm text-pearl">
              Originally created by Liz Magaly Herrera Jara
            </p>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-sm text-pearl mb-2">
              Licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-clay hover:text-ivory transition-colors underline"
              >
                CC BY-NC-SA 4.0
              </a>
            </p>
            <a
              href="https://github.com/lmherrera/ggp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-clay hover:text-ivory transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-mahogany/40 flex items-center justify-between">
          <p className="text-xs text-pearl/70">
            GGP v4.5-public &middot; &ldquo;Nothing passes unverified.&rdquo;
          </p>
          <a
            href="#hero"
            className="text-sm text-clay hover:text-ivory transition-colors"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
