"use client";

import { useState } from "react";
import CopyBtn from "./CopyBtn";

export interface Starter {
  title: string;
  message: string;
}

export default function StarterCard({
  starter,
  index,
}: {
  starter: Starter;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-almond rounded-bvvg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-ivory hover:bg-almond/20 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-wine/30 font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-sans text-sm font-semibold text-wine">
            {starter.title}
          </span>
        </div>
        <span className="text-wine/30 text-sm">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-2 bg-ivory border-t border-almond space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40">
                Title
              </span>
              <CopyBtn text={starter.title} small />
            </div>
            <div className="bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-xs text-wine/70">
              {starter.title}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-[10px] font-bold tracking-wider uppercase text-wine/40">
                Message
              </span>
              <CopyBtn text={starter.message} small />
            </div>
            <div className="bg-ivory border border-almond rounded-bvvg px-3 py-2 font-sans text-xs text-wine/70 leading-relaxed">
              {starter.message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
