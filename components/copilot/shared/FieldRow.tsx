"use client";

import { useState } from "react";
import CopyBtn from "./CopyBtn";

export default function FieldRow({
  label,
  value,
  mono = false,
  expandable = false,
  charLimit,
}: {
  label: string;
  value: string;
  mono?: boolean;
  expandable?: boolean;
  charLimit?: number;
}) {
  const [open, setOpen] = useState(false);
  const charCount = value.length;
  const overLimit = charLimit && charCount > charLimit * 0.875;

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-sans text-[11px] font-bold tracking-wider uppercase text-wine/50">
          {label}
        </span>
        <div className="flex items-center gap-2">
          {charLimit && (
            <span
              className={`font-mono text-[10px] ${
                overLimit ? "text-terracotta" : "text-wine/30"
              }`}
            >
              {charCount.toLocaleString()} / {charLimit.toLocaleString()}
            </span>
          )}
          <CopyBtn text={value} small />
        </div>
      </div>
      <div className="relative">
        <div
          className={`bg-ivory border border-almond rounded-bvvg p-3 ${
            mono ? "font-mono text-[11px]" : "font-sans text-sm"
          } text-wine/80 leading-relaxed whitespace-pre-wrap overflow-hidden transition-[max-height] duration-300 ${
            expandable && !open ? "max-h-44" : "max-h-none"
          }`}
        >
          {value}
        </div>
        {expandable && !open && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-ivory to-transparent pointer-events-none rounded-b-bvvg" />
        )}
      </div>
      {expandable && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-1 font-sans text-[11px] font-semibold text-terracotta hover:text-clay transition-colors"
        >
          {open ? "▲ Collapse" : "▼ Show full instructions"}
        </button>
      )}
    </div>
  );
}
