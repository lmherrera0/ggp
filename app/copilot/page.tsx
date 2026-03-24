import type { Metadata } from "next";
import CopilotPage from "@/components/CopilotPage";

export const metadata: Metadata = {
  title: "GGP for Copilot — Grounded Gate Protocol on M365 Copilot Agent Builder",
  description:
    "Set up the Grounded Gate Protocol anti-hallucination framework on Microsoft 365 Copilot Agent Builder. Copy-ready fields: name, description, instructions, knowledge files, and conversation starters.",
  openGraph: {
    title: "GGP for Copilot — Anti-Hallucination on M365",
    description:
      "Set up the Grounded Gate Protocol on Microsoft 365 Copilot Agent Builder. Nothing passes unverified.",
    url: "/ggp/copilot",
    siteName: "Grounded Gate Protocol",
    type: "website",
  },
};

export default function CopilotRoute() {
  return <CopilotPage />;
}
