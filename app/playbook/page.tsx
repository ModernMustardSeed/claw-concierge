"use client";

import Link from "next/link";
import { useState } from "react";

// Mini lobster for the playbook cover
const CoverLobster = ({ s = 80, flip = false }: { s?: number; flip?: boolean }) => (
  <svg
    viewBox="0 0 400 400"
    width={s}
    height={s}
    style={{
      filter: "drop-shadow(0 0 24px rgba(233,69,96,.55))",
      transform: flip ? "scaleX(-1)" : "none",
    }}
  >
    <defs>
      <linearGradient id={`clg${flip}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FF8C00" />
        <stop offset="100%" stopColor="#E94560" />
      </linearGradient>
    </defs>
    <ellipse cx="200" cy="220" rx="55" ry="80" fill={`url(#clg${flip})`} />
    <ellipse cx="200" cy="135" rx="42" ry="35" fill={`url(#clg${flip})`} />
    <circle cx="182" cy="118" r="6" fill="#0a1628" /><circle cx="218" cy="118" r="6" fill="#0a1628" />
    <circle cx="184" cy="116" r="2.5" fill="#fff" /><circle cx="220" cy="116" r="2.5" fill="#fff" />
    <line x1="182" y1="124" x2="178" y2="108" stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
    <line x1="218" y1="124" x2="222" y2="108" stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
    <path d="M178 108Q150 60 120 40" stroke="#FFD700" strokeWidth="3" fill="none" />
    <path d="M222 108Q250 60 280 40" stroke="#FFD700" strokeWidth="3" fill="none" />
    <path d="M155 160Q100 130 75 115" stroke={`url(#clg${flip})`} strokeWidth="14" fill="none" strokeLinecap="round" />
    <ellipse cx="62" cy="100" rx="25" ry="18" fill={`url(#clg${flip})`} transform="rotate(-30 62 100)" />
    <path d="M48 85Q30 70 25 62" stroke="#FF8C00" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M48 85Q38 95 32 105" stroke="#FF8C00" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M245 160Q300 130 325 115" stroke={`url(#clg${flip})`} strokeWidth="14" fill="none" strokeLinecap="round" />
    <ellipse cx="338" cy="100" rx="25" ry="18" fill={`url(#clg${flip})`} transform="rotate(30 338 100)" />
    <path d="M352 85Q370 70 375 62" stroke="#FF8C00" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M352 85Q362 95 368 105" stroke="#FF8C00" strokeWidth="10" fill="none" strokeLinecap="round" />
    {[200, 220, 240].map(y => (
      <g key={y}>
        <line x1="160" y1={y} x2={y === 200 ? 120 : y === 220 ? 115 : 118} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
        <line x1="240" y1={y} x2={y === 200 ? 280 : y === 220 ? 285 : 282} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
      </g>
    ))}
    <ellipse cx="200" cy="295" rx="45" ry="18" fill="#C13048" />
    <ellipse cx="200" cy="318" rx="38" ry="15" fill="#C13048" />
    <ellipse cx="200" cy="338" rx="30" ry="12" fill="#C13048" />
    <ellipse cx="200" cy="362" rx="35" ry="14" fill={`url(#clg${flip})`} />
    <path d="M188 142Q200 152 212 142" stroke="#0a1628" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

const chapters = [
  { n: "01", t: "The Case", sub: "Why 21,639 OpenClaw instances are exposed right now — and what that means for the market you're about to own." },
  { n: "02", t: "The Architecture", sub: "The 5-layer system that separates a weekend experiment from an enterprise AI deployment." },
  { n: "03", t: "The Offer Stack", sub: "How to price, package, and position $697 → $7,500+ setups that clients beg to pay." },
  { n: "04", t: "The Process", sub: "Your step-by-step delivery SOP — from discovery call to launch in under a week." },
  { n: "05", t: "The Voice Layer", sub: "Voice Staff integration: the moat no competitor can cross. Text + voice AI with shared memory." },
  { n: "06", t: "The Community", sub: "Building The Claw Collective — recurring revenue, raving advocates, and a defensible ecosystem." },
  { n: "07", t: "The Scale Play", sub: "Systems, templates, and certifications that let you do this for 10 clients at once." },
  { n: "08", t: "The Numbers", sub: "Financial model, client lifetime value, churn prevention, and the path to $1M ARR." },
];

export default function PlaybookPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{
      background: "#040c18",
      color: "white",
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>

      {/* Back nav */}
      <div style={{ padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,.04)" }}>
        <Link href="/" style={{ color: "rgba(255,255,255,.4)", fontSize: "13px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", transition: "color .2s" }}>
          ← Back to Claw Concierge
        </Link>
      </div>

      {/* ═══ MAGAZINE COVER ═══ */}
      <div style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(20,10,40,.9), #040c18)",
        padding: "60px 24px",
      }}>
        {/* Decorative corner rules */}
        <div style={{ position: "absolute", top: "40px", left: "40px", width: "60px", height: "60px", borderTop: "2px solid rgba(212,168,67,.3)", borderLeft: "2px solid rgba(212,168,67,.3)" }} />
        <div style={{ position: "absolute", top: "40px", right: "40px", width: "60px", height: "60px", borderTop: "2px solid rgba(212,168,67,.3)", borderRight: "2px solid rgba(212,168,67,.3)" }} />
        <div style={{ position: "absolute", bottom: "40px", left: "40px", width: "60px", height: "60px", borderBottom: "2px solid rgba(212,168,67,.3)", borderLeft: "2px solid rgba(212,168,67,.3)" }} />
        <div style={{ position: "absolute", bottom: "40px", right: "40px", width: "60px", height: "60px", borderBottom: "2px solid rgba(212,168,67,.3)", borderRight: "2px solid rgba(212,168,67,.3)" }} />

        {/* Volume line */}
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "6px", color: "rgba(212,168,67,.6)", textTransform: "uppercase", marginBottom: "32px" }}>
          VOLUME II  •  2026 EDITION  •  PROPRIETARY
        </div>

        {/* Full divider */}
        <div style={{ width: "min(700px, 90vw)", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,.4), transparent)", marginBottom: "32px" }} />

        {/* Brand */}
        <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "8px", color: "#E94560", textTransform: "uppercase", marginBottom: "20px" }}>
          CLAW CONCIERGE
        </div>

        {/* Duo lobsters */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", marginBottom: "24px" }}>
          <div style={{ animation: "float 5s ease-in-out infinite" }}>
            <CoverLobster s={100} />
          </div>
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            padding: "0 8px",
          }}>
            <div style={{ height: "2px", width: "40px", background: "linear-gradient(90deg, #D4A843, #E94560)" }} />
            <div style={{ height: "2px", width: "24px", background: "linear-gradient(90deg, #D4A843, #E94560)" }} />
          </div>
          <div style={{ animation: "float 5s ease-in-out infinite 0.5s" }}>
            <CoverLobster s={100} flip />
          </div>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 80px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          textAlign: "center",
          lineHeight: 1.0,
          marginBottom: "8px",
          background: "linear-gradient(135deg, #FFD700, #FFA500 40%, #FF6B6B 70%, #E94560)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 5s linear infinite",
          letterSpacing: "-1px",
        }}>
          The Billion Dollar
        </h1>
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 80px)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 900,
          textAlign: "center",
          lineHeight: 1.0,
          marginBottom: "28px",
          background: "linear-gradient(135deg, #FFD700, #FFA500 40%, #FF6B6B 70%, #E94560)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "shimmer 5s linear infinite",
          letterSpacing: "-1px",
        }}>
          Playbook
        </h1>

        {/* Divider */}
        <div style={{ width: "min(700px, 90vw)", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,.4), transparent)", marginBottom: "28px" }} />

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(14px, 1.8vw, 18px)",
          color: "rgba(255,255,255,.55)",
          textAlign: "center",
          maxWidth: "560px",
          lineHeight: 1.8,
          marginBottom: "20px",
          fontStyle: "italic",
          fontFamily: "'Playfair Display', serif",
        }}>
          How to build a white-glove AI concierge business on OpenClaw — from first client to scalable empire.
        </p>

        {/* Author */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <div style={{ width: "32px", height: "1px", background: "rgba(212,168,67,.4)" }} />
          <span style={{ fontSize: "12px", color: "#D4A843", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Sarah Scarano</span>
          <div style={{ width: "32px", height: "1px", background: "rgba(212,168,67,.4)" }} />
        </div>

        {/* Stats bar */}
        <div style={{
          display: "flex",
          gap: "0",
          border: "1px solid rgba(212,168,67,.15)",
          borderRadius: "14px",
          overflow: "hidden",
          background: "rgba(10,22,40,.8)",
          backdropFilter: "blur(20px)",
          marginBottom: "40px",
        }}>
          {[
            ["8", "Chapters"],
            ["$1M+", "ARR Blueprint"],
            ["v2.0", "Updated 2026"],
            ["🔒", "Proprietary"],
          ].map(([n, l], i) => (
            <div key={i} style={{
              padding: "16px 24px",
              textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(212,168,67,.1)" : "none",
              minWidth: "100px",
            }}>
              <div style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: "#D4A843" }}>{n}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Full divider */}
        <div style={{ width: "min(700px, 90vw)", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,168,67,.25), transparent)" }} />

        {/* Bottom stamp */}
        <div style={{ marginTop: "24px", fontSize: "10px", color: "rgba(255,255,255,.2)", letterSpacing: "3px", textTransform: "uppercase" }}>
          Modern Mustard Seed  •  Kalispell, Montana  •  theclawconcierge.com
        </div>
      </div>

      {/* ═══ TABLE OF CONTENTS ═══ */}
      <section style={{ padding: "80px 24px", background: "#050d1a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "5px", color: "#D4A843", marginBottom: "12px", textTransform: "uppercase" }}>
              Inside This Playbook
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontFamily: "'Playfair Display', serif", fontWeight: 800, lineHeight: 1.15 }}>
              Table of Contents
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {chapters.map((ch, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "20px 24px",
                  borderRadius: "14px",
                  background: hovered === i ? "rgba(212,168,67,.04)" : "transparent",
                  border: `1px solid ${hovered === i ? "rgba(212,168,67,.12)" : "rgba(255,255,255,.04)"}`,
                  cursor: "default",
                  transition: "all .2s",
                  marginBottom: "4px",
                }}
              >
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: hovered === i ? "#D4A843" : "rgba(212,168,67,.4)",
                  flexShrink: 0,
                  marginTop: "3px",
                  transition: "color .2s",
                }}>
                  {ch.n}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "17px", fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: "4px" }}>
                    {ch.t}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", lineHeight: 1.65 }}>
                    {ch.sub}
                  </div>
                </div>
                {hovered === i && (
                  <div style={{ color: "#D4A843", fontSize: "18px", flexShrink: 0, marginTop: "2px" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GATEKEEP NOTICE ═══ */}
      <section style={{ padding: "60px 24px", background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(233,69,96,.04), transparent 60%), #040c18" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            background: "rgba(10,22,40,.8)",
            border: "1px solid rgba(233,69,96,.15)",
            borderRadius: "20px",
            padding: "36px 32px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>🔐</div>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", marginBottom: "12px", textTransform: "uppercase" }}>
              Full Playbook Access
            </div>
            <h3 style={{ fontSize: "22px", fontFamily: "'Playfair Display', serif", fontWeight: 700, marginBottom: "14px" }}>
              This playbook is for our clients & community.
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,.45)", lineHeight: 1.8, marginBottom: "28px" }}>
              The architecture overview is free. The full playbook — pricing strategy, delivery SOPs, scale systems, and financial model — is reserved for Claw Concierge clients and Claw Collective members.
              <br /><br />
              <span style={{ color: "rgba(255,255,255,.6)" }}>The supersauce stays with our people. 🦞</span>
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#pricing" className="cta" style={{ textDecoration: "none" }}>
                Become a Client
              </Link>
              <Link href="/#pricing" style={{
                display: "inline-block", padding: "16px 32px",
                background: "transparent", color: "white", textDecoration: "none",
                border: "2px solid rgba(212,168,67,.3)", borderRadius: "60px",
                fontSize: "14px", fontWeight: 600, transition: "all .3s",
              }}>
                Join The Claw Collective
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FREE PREVIEW SECTION ═══ */}
      <section style={{ padding: "60px 24px 80px", background: "#050d1a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#66BB6A", marginBottom: "12px", textTransform: "uppercase" }}>
              Free Preview
            </div>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
              Chapter 01: <span style={{ color: "#FF6B6B" }}>The Case</span>
            </h2>
          </div>

          <div style={{ background: "rgba(10,22,40,.6)", border: "1px solid rgba(255,255,255,.06)", borderRadius: "18px", padding: "36px 32px" }}>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.95, marginBottom: "20px" }}>
              In early 2025, a security researcher ran a simple Shodan query. The results were alarming: <strong style={{ color: "white" }}>21,639 OpenClaw instances</strong> running on the public internet with default or no authentication.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.95, marginBottom: "20px" }}>
              Microsoft published a hardening guide. CrowdStrike released a threat advisory. SentinelOne built a monitoring tool called ClawSec. The mainstream security industry noticed — and panicked.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.95, marginBottom: "20px" }}>
              But here&apos;s what they missed: <strong style={{ color: "white" }}>this isn&apos;t a problem. It&apos;s a market.</strong>
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.95 }}>
              Every one of those 21,639 exposed instances is someone who tried to set this up themselves and got it wrong. Someone who has the <em style={{ color: "#D4A843" }}>desire</em> for a powerful AI assistant but not the expertise to deploy it safely. That&apos;s your client. That&apos;s the billion-dollar opportunity.
            </p>

            <div style={{ marginTop: "28px", padding: "20px 22px", background: "rgba(212,168,67,.04)", border: "1px solid rgba(212,168,67,.12)", borderRadius: "12px" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#D4A843", marginBottom: "8px", letterSpacing: "2px", textTransform: "uppercase" }}>The Insight</div>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,.65)", lineHeight: 1.75, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                &ldquo;The most dangerous position in tech isn&apos;t 'too early.' It&apos;s 'right on time but wrong person.' Be the right person.&rdquo;
              </p>
            </div>

            {/* Blurred rest */}
            <div style={{ marginTop: "28px", position: "relative" }}>
              <div style={{ filter: "blur(5px)", userSelect: "none", pointerEvents: "none" }}>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.95, marginBottom: "16px" }}>
                  The TAM (Total Addressable Market) for AI assistant setup services is conservatively $2.4B by 2027. But that number misses the real opportunity — which isn&apos;t just setup. It&apos;s the ongoing relationship. The management. The training. The evolution.
                </p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.95 }}>
                  In Chapter 2, we&apos;ll break down the exact 5-layer architecture that makes this service defensible, premium, and impossible to replicate without our approach...
                </p>
              </div>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
                background: "linear-gradient(transparent, rgba(10,22,40,1))",
                display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "16px",
              }}>
                <Link href="/#pricing" className="cta" style={{ textDecoration: "none", fontSize: "14px" }}>
                  Unlock Full Playbook →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,.04)", background: "#040c18", textAlign: "center" }}>
        <div style={{ fontSize: "10px", color: "rgba(255,255,255,.2)", letterSpacing: "2px", textTransform: "uppercase" }}>
          © 2026 Claw Concierge / Modern Mustard Seed • All Rights Reserved • Proprietary & Confidential
        </div>
      </footer>
    </div>
  );
}
