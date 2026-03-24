"use client";

import { useState } from "react";

export default function CopyBtn({
  text,
  small = false,
}: {
  text: string;
  small?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handle = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handle}
      className={`inline-flex items-center gap-1 font-sans font-semibold rounded-bvvg transition-colors duration-200 flex-shrink-0 ${
        small ? "text-[11px] px-2.5 py-1" : "text-xs px-3 py-1.5"
      } ${copied ? "bg-sage text-ivory" : "bg-terracotta text-ivory hover:bg-clay"}`}
    >
      {copied ? "✓ Copied" : "⎘ Copy"}
    </button>
  );
}
