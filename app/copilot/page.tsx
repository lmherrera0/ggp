import type { Metadata } from "next";
import CopilotPage from "@/components/CopilotPage";

export const metadata: Metadata = {
  title: "GGP — Grounded Gate Protocol · Anti-Hallucination for Professional AI",
  description:
    "Grounded Gate Protocol: an anti-hallucination framework that tags every AI claim, runs reputation risk checks, and keeps you in control before anything reaches a client. Configure on M365 Copilot, ChatGPT, Claude, and Google Gems.",
  openGraph: {
    title: "GGP — Nothing Passes Unverified",
    description:
      "Anti-hallucination framework for professional AI. Tags every claim, runs 8-dimension risk checks, delivers marked drafts. Configure on any major AI platform.",
    url: "/ggp/copilot",
    siteName: "Grounded Gate Protocol",
    type: "website",
  },
};

export default function CopilotRoute() {
  return <CopilotPage />;
}
