import type { Metadata } from "next";
import { Noto_Serif_Display, Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-display",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto-sans-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grounded Gate Protocol (GGP) — Anti-Hallucination Framework",
  description:
    "Open-source anti-hallucination framework for AI-generated professional communications. Visual markers, source verification, and risk screening.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSerifDisplay.variable} ${notoSans.variable} ${notoSansMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
