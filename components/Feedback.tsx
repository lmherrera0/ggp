"use client";

import { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

const FORMSPREE_URL = "https://formspree.io/f/mwvnykyz";

export default function Feedback() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="feedback" className="section-gap">
      <div className="section-container">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl text-terracotta text-center mb-4">
          {t.feedback.title}
        </h2>
        <p className="text-center text-wine/70 max-w-2xl mx-auto mb-12">
          {t.feedback.subtitle}
        </p>

        {submitted ? (
          <div className="card max-w-2xl mx-auto text-center">
            <p className="font-serif font-semibold text-xl text-sage mb-2">
              {t.feedback.thankTitle}
            </p>
            <p className="text-wine/70">
              {t.feedback.thankMessage}
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
                  {t.feedback.nameLabel}{" "}
                  <span className="font-normal text-wine/60">{t.feedback.optional}</span>
                </label>
                <input
                  type="text"
                  id="fb-name"
                  name="name"
                  className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-1 transition-colors"
                  placeholder={t.feedback.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="fb-email"
                  className="block text-sm font-sans font-semibold text-wine mb-1"
                >
                  {t.feedback.emailLabel}{" "}
                  <span className="font-normal text-wine/60">{t.feedback.optional}</span>
                </label>
                <input
                  type="email"
                  id="fb-email"
                  name="email"
                  className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-1 transition-colors"
                  placeholder={t.feedback.emailPlaceholder}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fb-type"
                  className="block text-sm font-sans font-semibold text-wine mb-1"
                >
                  {t.feedback.typeLabel}
                </label>
                <select
                  id="fb-type"
                  name="message_type"
                  className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-1 transition-colors"
                >
                  {t.feedback.typeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="fb-platform"
                  className="block text-sm font-sans font-semibold text-wine mb-1"
                >
                  {t.feedback.platformLabel}
                </label>
                <select
                  id="fb-platform"
                  name="platform"
                  className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-1 transition-colors"
                >
                  <option value="">{t.feedback.platformPlaceholder}</option>
                  {t.feedback.platformOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="fb-message"
                className="block text-sm font-sans font-semibold text-wine mb-1"
              >
                {t.feedback.messageLabel}
              </label>
              <textarea
                id="fb-message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2.5 border border-almond rounded-bvvg bg-ivory text-wine font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-offset-1 transition-colors resize-y"
                placeholder={t.feedback.messagePlaceholder}
              />
            </div>

            <input type="hidden" name="_subject" value="GGP Website Feedback" />
            <input type="hidden" name="_replyto" value="lizherrerajara+ggp@gmail.com" />

            {error && (
              <p className="text-sm text-terracotta font-semibold text-center">
                {t.feedback.errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {sending ? t.feedback.sendingBtn : t.feedback.sendBtn}
            </button>

            <p className="text-xs text-wine/60 text-center">
              {t.feedback.footnote}
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
