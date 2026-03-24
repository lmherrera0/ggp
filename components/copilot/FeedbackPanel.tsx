"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const MESSAGE_TYPES = ["Feedback", "Feature Request", "Bug Report", "Collaboration", "General Question"];
const PLATFORMS = ["M365 Copilot", "ChatGPT", "Google Gems", "Claude", "Other"];

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
      <div className="max-w-lg mx-auto text-center py-16">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-serif font-bold text-2xl text-wine mb-3">Thank You</h3>
        <p className="font-sans text-wine/60">Your feedback has been received.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <p className="font-sans text-[11px] font-bold tracking-widest uppercase text-terracotta mb-2">
        Feedback
      </p>
      <h3 className="font-serif font-bold text-2xl sm:text-3xl text-wine mb-3">
        Share your thoughts
      </h3>
      <p className="font-sans text-wine/60 mb-8 leading-relaxed">
        Tried the agent? Have ideas for improvements, new channels, or use cases?
        All feedback is welcome.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-sans text-[11px] font-bold tracking-wider uppercase text-wine/40 block mb-1">
              Name <span className="normal-case font-normal text-wine/25">(optional)</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-sm text-wine outline-none focus:border-terracotta transition-colors"
            />
          </div>
          <div>
            <label className="font-sans text-[11px] font-bold tracking-wider uppercase text-wine/40 block mb-1">
              Email <span className="normal-case font-normal text-wine/25">(optional)</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-sm text-wine outline-none focus:border-terracotta transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-sans text-[11px] font-bold tracking-wider uppercase text-wine/40 block mb-1">
              Message type
            </label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-sm text-wine outline-none focus:border-terracotta transition-colors"
            >
              {MESSAGE_TYPES.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="font-sans text-[11px] font-bold tracking-wider uppercase text-wine/40 block mb-1">
              Platform
            </label>
            <select
              value={form.platform}
              onChange={(e) => setForm({ ...form, platform: e.target.value })}
              className="w-full bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-sm text-wine outline-none focus:border-terracotta transition-colors"
            >
              {PLATFORMS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="font-sans text-[11px] font-bold tracking-wider uppercase text-wine/40 block mb-1">
            Your message <span className="text-terracotta">*</span>
          </label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={5}
            placeholder="Tell us what you think..."
            className="w-full bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-sm text-wine outline-none focus:border-terracotta transition-colors resize-none"
          />
        </div>

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
      </form>
    </div>
  );
}
