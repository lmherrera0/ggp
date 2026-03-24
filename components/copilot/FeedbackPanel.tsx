"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const MESSAGE_TYPES = ["Feedback", "Feature Request", "Bug Report", "Collaboration", "General Question"];
const PLATFORMS     = ["M365 Copilot", "ChatGPT", "Google Gems", "Claude", "Other"];

const inputClass =
  "w-full bg-ivory border border-almond rounded-lg px-3.5 py-2.5 font-sans text-sm text-wine placeholder:text-wine/25 outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta/20 transition-all";

export default function FeedbackPanel() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Feedback",
    platform: "M365 Copilot",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwpwqnv", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `GGP Copilot feedback — ${form.type}` }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(127,139,114,0.15)", border: "1px solid rgba(127,139,114,0.3)" }}
        >
          <span className="font-sans text-xl text-sage font-bold">✓</span>
        </div>
        <h3 className="font-serif font-bold text-2xl text-wine mb-2">Thank you.</h3>
        <p className="font-sans text-wine/50 text-sm leading-relaxed">
          Your message has been received. We read everything.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg">

      {/* Heading */}
      <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-terracotta mb-2">
        Feedback
      </p>
      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-wine mb-3 leading-tight">
        Share your thoughts.
      </h3>
      <p className="font-sans text-wine/55 text-sm mb-8 leading-relaxed max-w-sm">
        Tried the agent? Have ideas for new channels, improvements, or use cases?
        All feedback is welcome and read personally.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 block mb-1.5">
              Name <span className="normal-case font-normal text-wine/25">(optional)</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 block mb-1.5">
              Email <span className="normal-case font-normal text-wine/25">(optional)</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Type + Platform */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 block mb-1.5">
              Message type
            </label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className={inputClass}
            >
              {MESSAGE_TYPES.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 block mb-1.5">
              Platform
            </label>
            <select
              value={form.platform}
              onChange={(e) => setForm({ ...form, platform: e.target.value })}
              className={inputClass}
            >
              {PLATFORMS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40 block mb-1.5">
            Your message <span className="text-terracotta">*</span>
          </label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            placeholder="Tell us what you think..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-almond/60" />

        {status === "error" && (
          <p className="font-sans text-xs text-terracotta">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary w-full justify-center disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send feedback"}
        </button>

        <p className="font-sans text-[10px] text-wine/30 text-center leading-snug">
          Responses go directly to the GGP maintainer. No mailing list, no automation.
        </p>
      </form>
    </div>
  );
}
