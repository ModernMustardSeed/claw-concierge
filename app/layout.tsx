import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claw Concierge — Your AI Assistant, Done Right 🦞",
  description:
    "We set up, secure, and manage OpenClaw — the most powerful personal AI assistant ever built — so you get the magic without the risk. White-glove AI concierge service + Voice Staff voice agents.",
  keywords: ["AI assistant", "OpenClaw", "AI setup", "Voice Staff", "AI concierge", "Claw Concierge"],
  openGraph: {
    title: "Claw Concierge — Your AI Assistant, Done Right 🦞",
    description:
      "White-glove OpenClaw setup, security hardening, and management. Voice Staff AI voice agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
