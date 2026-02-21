"use client";

import { useState } from "react";

// TODO: Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

export default function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="feedback" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          Share Your Feedback
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          Help us improve GGP. Tell us how you use it, what works, and what you
          would like to see next.
        </p>

        {submitted ? (
          <div className="card max-w-2xl mx-auto text-center">
            <p className="font-serif font-semibold text-xl text-sage mb-2">
              Thank you!
            </p>
            <p className="text-wine/70">
              Your feedback helps us make GGP better for everyone.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card max-w-2xl mx-auto space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fb-name"
                  className="block text-sm font-sans font-semibold text-wine mb-1"
                >
                  Name
                </label>
                <input
                  id="fb-name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="fb-email"
                  className="block text-sm font-sans font-semibold text-wine mb-1"
                >
                  Email
                </label>
                <input
                  id="fb-email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:border-terracotta transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="fb-platform"
                className="block text-sm font-sans font-semibold text-wine mb-1"
              >
                Platform
              </label>
              <select
                id="fb-platform"
                name="platform"
                className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:border-terracotta transition-colors"
              >
                <option value="">Select your platform</option>
                <option value="Claude Projects">Claude Projects</option>
                <option value="ChatGPT">ChatGPT</option>
                <option value="Copilot">Microsoft Copilot</option>
                <option value="Google Gems">Google Gems</option>
                <option value="Claude Code">Claude Code</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fb-message"
                className="block text-sm font-sans font-semibold text-wine mb-1"
              >
                Feedback &amp; Recommendations
              </label>
              <textarea
                id="fb-message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:border-terracotta transition-colors resize-y"
                placeholder="What works well? What could be improved? Any feature ideas?"
              />
            </div>

            <input type="hidden" name="_subject" value="GGP Website Feedback" />

            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {sending ? "Sending\u2026" : "Send Feedback"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
