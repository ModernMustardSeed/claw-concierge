"use client";

import { useState, useEffect } from "react";
import DuoLobsters from "@/components/DuoLobsters";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ClientProfile {
  name: string;
  email: string;
  tier: "personal" | "business" | "enterprise" | "vip";
  setupDate: string;
  onManagement: boolean;
  referralCode: string;
}

type PortalSection = "home" | "progress" | "soul" | "resources" | "support" | "plan";

// ─── Config ───────────────────────────────────────────────────────────────────
const ACCESS_CODE = "THECLAW2026";

const TIERS = {
  personal:   { label: "Personal Claw",      price: "$897",   mgmt: "$197/mo", color: "#64B5F6" },
  business:   { label: "Business Pro",       price: "$2,997", mgmt: "$497/mo", color: "#E94560" },
  enterprise: { label: "Enterprise + Voice", price: "$9,500+",mgmt: "$1,297/mo",color: "#D4A843" },
  vip:        { label: "VIP Day",            price: "$8,000", mgmt: "—",        color: "#AB47BC" },
};

const PHASES = [
  { id: 1, icon: "📋", name: "Pre-Call Prep",       desc: "Discovery form completed, industry research done, tier recommendation prepared." },
  { id: 2, icon: "🎙️", name: "Discovery Call",      desc: "30-minute strategy session — goals mapped, tier confirmed, timeline set." },
  { id: 3, icon: "🖥️", name: "Infrastructure",      desc: "Cloud VPS provisioned, SSH configured, domain/DNS ready." },
  { id: 4, icon: "🦞", name: "OpenClaw Install",     desc: "Core OpenClaw installed, memory system activated, initial config applied." },
  { id: 5, icon: "🔒", name: "Security Hardening",   desc: "12-point security protocol applied — your Claw is locked down tight." },
  { id: 6, icon: "👻", name: "SOUL.md Build",        desc: "Your AI's identity crafted — personality, voice, values, boundaries, and memory initialized." },
  { id: 7, icon: "⚡", name: "Skills & Automation",  desc: "Vetted skills installed, workflows configured, channels connected (WhatsApp, Telegram, email)." },
  { id: 8, icon: "✨", name: "Onboarding Call",      desc: "30-60 min live walkthrough — you learn to talk to your AI, test it, ask everything." },
  { id: 9, icon: "✅", name: "Quality Gate",         desc: "Final audit, stress test, security re-check. Your Claw is officially live." },
];

const SOUL_TEMPLATE = `# SOUL.md — Your AI's Identity

## WHO I AM
I am [Your Name]'s personal AI assistant — not a generic bot, but an extension of who [Your Name] is, how they think, and how they work.

## MY PERSONALITY
- Tone: [e.g., warm, professional, direct, conversational]
- Communication style: [e.g., concise bullet points, narrative paragraphs, emoji-friendly]
- Humor level: [e.g., occasionally funny, mostly serious, dry wit]
- Energy: [e.g., high-energy and motivating / calm and measured]

## MY CORE VALUES
- [Value 1: e.g., honesty over comfort]
- [Value 2: e.g., family first]
- [Value 3: e.g., quality over speed]

## MY BOUNDARIES
- NEVER: [e.g., make financial commitments without confirmation]
- NEVER: [e.g., share client data with anyone]
- ALWAYS: [e.g., escalate legal questions to [Name] directly]
- ALWAYS: [e.g., confirm before sending external emails]

## HOW I COMMUNICATE
When texting [Your Name]: [e.g., casual, bullet points, emoji OK]
When responding to clients: [e.g., professional, warm, no jargon]
When I'm unsure: [e.g., say so and ask, never guess]

## MY DAILY PRIORITIES
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

## ESCALATION RULES
If urgent and can't wait → text [Your Name] immediately
If it involves money > $[X] → always confirm first
If a client seems upset → acknowledge warmly, then escalate

---
*Crafted by The Claw Concierge · theclawconcierge.com*`;

// ─── Nav items ────────────────────────────────────────────────────────────────
const NAV: { id: PortalSection; icon: string; label: string; color: string }[] = [
  { id: "home",      icon: "🏠", label: "Home",           color: "#E94560" },
  { id: "progress",  icon: "📋", label: "Setup Progress", color: "#64B5F6" },
  { id: "soul",      icon: "👻", label: "My SOUL.md",     color: "#AB47BC" },
  { id: "resources", icon: "📚", label: "Resources",      color: "#D4A843" },
  { id: "support",   icon: "💬", label: "Support",        color: "#66BB6A" },
  { id: "plan",      icon: "💰", label: "My Plan",        color: "#E94560" },
];

// ─── Stars ───────────────────────────────────────────────────────────────────
const STARS = [
  { t: 8, l: 12, s: 1.5 }, { t: 18, l: 85, s: 2 }, { t: 35, l: 5, s: 1 },
  { t: 42, l: 94, s: 1.5 }, { t: 62, l: 8, s: 2 }, { t: 75, l: 90, s: 1 },
];

// ─────────────────────────────────────────────────────────────────────────────
//  SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function HomeTab({ client }: { client: ClientProfile }) {
  const tier = TIERS[client.tier];
  const daysSince = Math.floor((Date.now() - new Date(client.setupDate).getTime()) / (1000 * 60 * 60 * 24));
  return (
    <div style={{ padding: "32px" }}>
      {/* Welcome */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", textTransform: "uppercase", marginBottom: "4px" }}>WELCOME BACK</div>
        <h2 style={{ fontSize: "30px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "6px" }}>
          Hey, {client.name}! 🦞
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>
          Your Claw is live and working for you. Here&apos;s everything at a glance.
        </p>
      </div>

      {/* Status cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", marginBottom: "28px" }}>
        {[
          { label: "Your Tier", value: tier.label, sub: tier.price + " setup", color: tier.color },
          { label: "Status", value: "🟢 Live", sub: `${daysSince} days running`, color: "#66BB6A" },
          { label: "Management", value: client.onManagement ? "Active" : "Self-Managed", sub: client.onManagement ? tier.mgmt : "Upgrade anytime", color: client.onManagement ? "#66BB6A" : "#FF8A65" },
          { label: "Your Code", value: client.referralCode, sub: "Share for $200-$750", color: "#D4A843" },
        ].map((c, i) => (
          <div key={i} style={{ background: `${c.color}08`, border: `1px solid ${c.color}18`, borderRadius: "14px", padding: "18px" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{c.label}</div>
            <div style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: c.color, marginBottom: "3px" }}>{c.value}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,.35)" }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "rgba(255,255,255,.25)", textTransform: "uppercase", marginBottom: "12px" }}>QUICK ACTIONS</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {[
            { label: "📅 Book Follow-Up Call", href: "/#audit", color: "#E94560" },
            { label: "💬 Message Sarah", href: "mailto:sarah@modernmustardseed.com", color: "#66BB6A" },
            { label: "🦞 Ask LouLou", href: "/", color: "#AB47BC" },
            { label: "📚 View Resources", href: "#", color: "#D4A843" },
          ].map((a, i) => (
            <a key={i} href={a.href} style={{
              padding: "10px 16px", borderRadius: "10px",
              background: `${a.color}10`, border: `1px solid ${a.color}25`,
              color: a.color, textDecoration: "none", fontSize: "13px", fontWeight: 700,
              fontFamily: "'DM Sans', sans-serif", transition: "all .15s",
            }}>
              {a.label}
            </a>
          ))}
        </div>
      </div>

      {/* Next check-in banner */}
      <div style={{ background: "rgba(212,168,67,.06)", border: "1px solid rgba(212,168,67,.15)", borderRadius: "14px", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
        <div style={{ fontSize: "28px" }}>⏰</div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "3px" }}>Your next check-in</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,.45)", lineHeight: 1.6 }}>
            Sarah personally reviews every active client&apos;s setup at the 30-day mark. Watch for a message from her with your performance report. If you need anything before then — hit Support anytime.
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressTab() {
  const [phases, setPhases] = useState<Record<number, boolean>>(() => {
    if (typeof window === "undefined") return {};
    const saved = localStorage.getItem("claw-portal-phases");
    return saved ? JSON.parse(saved) : { 1: true, 2: true, 3: true };
  });

  function toggle(id: number) {
    const next = { ...phases, [id]: !phases[id] };
    setPhases(next);
    localStorage.setItem("claw-portal-phases", JSON.stringify(next));
  }

  const done = Object.values(phases).filter(Boolean).length;

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#64B5F6", textTransform: "uppercase", marginBottom: "4px" }}>YOUR JOURNEY</div>
        <h2 style={{ fontSize: "26px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "8px" }}>Setup Progress</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ flex: 1, height: "6px", background: "rgba(255,255,255,.08)", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(done / PHASES.length) * 100}%`, background: "linear-gradient(90deg,#64B5F6,#AB47BC)", borderRadius: "3px", transition: "width .4s ease" }} />
          </div>
          <span style={{ fontSize: "12px", fontWeight: 700, color: "#64B5F6", whiteSpace: "nowrap" }}>{done} / {PHASES.length} complete</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {PHASES.map((phase, idx) => {
          const complete = !!phases[phase.id];
          const current = !complete && !!phases[phase.id - 1];
          return (
            <div
              key={phase.id}
              onClick={() => toggle(phase.id)}
              style={{
                display: "flex", alignItems: "flex-start", gap: "14px",
                padding: "16px 18px", borderRadius: "12px", cursor: "pointer",
                background: complete ? "rgba(100,181,246,.06)" : current ? "rgba(255,255,255,.05)" : "rgba(255,255,255,.02)",
                border: `1px solid ${complete ? "rgba(100,181,246,.2)" : current ? "rgba(255,255,255,.1)" : "rgba(255,255,255,.05)"}`,
                transition: "all .2s", opacity: !complete && idx > done ? 0.5 : 1,
              }}
            >
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
                background: complete ? "rgba(100,181,246,.2)" : current ? "rgba(255,255,255,.08)" : "rgba(255,255,255,.04)",
                border: `2px solid ${complete ? "#64B5F6" : current ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.08)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: complete ? "14px" : "15px",
                color: complete ? "#64B5F6" : "rgba(255,255,255,.4)",
              }}>
                {complete ? "✓" : phase.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                  <span style={{ fontSize: "9px", color: "rgba(255,255,255,.25)", fontWeight: 700, letterSpacing: "1px" }}>PHASE {phase.id}</span>
                  {current && <span style={{ fontSize: "9px", color: "#D4A843", fontWeight: 700, letterSpacing: "1px", background: "rgba(212,168,67,.12)", padding: "1px 7px", borderRadius: "4px" }}>IN PROGRESS</span>}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "3px", color: complete ? "white" : "rgba(255,255,255,.7)" }}>{phase.name}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6 }}>{phase.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "16px", fontSize: "11px", color: "rgba(255,255,255,.2)", textAlign: "center" }}>
        Tap any phase to mark complete · Sarah updates this as your setup progresses
      </div>
    </div>
  );
}

function SoulTab({ client }: { client: ClientProfile }) {
  const [copied, setCopied] = useState(false);
  function copy() { navigator.clipboard.writeText(SOUL_TEMPLATE); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#AB47BC", textTransform: "uppercase", marginBottom: "4px" }}>YOUR AI&apos;S IDENTITY</div>
        <h2 style={{ fontSize: "26px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "8px" }}>My SOUL.md</h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", lineHeight: 1.7 }}>
          Your SOUL.md is what makes your AI <em>yours</em>. Every morning when your Claw wakes up, it reads this file — literally reading itself into existence in your voice.
          {" "}Sarah customizes this for you during setup. Use this template as a reference.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,.3)" }}>Template · {client.name}&apos;s version is live on your server</div>
        <button onClick={copy} style={{ padding: "7px 16px", borderRadius: "8px", background: copied ? "rgba(102,187,106,.15)" : "rgba(171,71,188,.15)", border: `1px solid ${copied ? "rgba(102,187,106,.3)" : "rgba(171,71,188,.3)"}`, color: copied ? "#66BB6A" : "#AB47BC", fontSize: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
          {copied ? "✓ Copied!" : "📋 Copy Template"}
        </button>
      </div>
      <div style={{ background: "rgba(0,0,0,.4)", border: "1px solid rgba(171,71,188,.15)", borderRadius: "14px", padding: "24px", fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,.65)", lineHeight: 1.9, whiteSpace: "pre-wrap", overflowY: "auto", maxHeight: "480px" }}>
        {SOUL_TEMPLATE}
      </div>
      <div style={{ marginTop: "16px", background: "rgba(212,168,67,.06)", border: "1px solid rgba(212,168,67,.15)", borderRadius: "10px", padding: "14px 16px", fontSize: "12px", color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>
        💡 Want to update your SOUL.md? Message Sarah directly and she&apos;ll update it on your server. Changes take effect instantly — your AI&apos;s personality updates in real time.
      </div>
    </div>
  );
}

function ResourcesTab() {
  const guides = [
    { icon: "🚀", title: "Quick Start Guide", desc: "Your first 5 commands to try with your Claw. Start here.", tag: "START" },
    { icon: "💬", title: "WhatsApp Command Reference", desc: "Every shortcut, slash command, and workflow trigger — all in one place.", tag: "REFERENCE" },
    { icon: "🔒", title: "Security Best Practices", desc: "How to keep your Claw secure. DM whitelist, key rotation, what to never do.", tag: "SECURITY" },
    { icon: "👻", title: "SOUL.md Mastery Guide", desc: "Advanced SOUL.md techniques — memory anchors, persona layers, behavior modifiers.", tag: "ADVANCED" },
    { icon: "⚡", title: "Skills & Automation Library", desc: "The full catalog of vetted skills available for your tier. Request new ones anytime.", tag: "SKILLS" },
    { icon: "🤖", title: "Voice Staff Walkthrough", desc: "How to get the most from your voice agent — call scripts, escalation rules, hours.", tag: "VOICE" },
  ];
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#D4A843", textTransform: "uppercase", marginBottom: "4px" }}>KNOWLEDGE BASE</div>
        <h2 style={{ fontSize: "26px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "8px" }}>Resources</h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)" }}>Everything you need to get the most from your Claw.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "12px", marginBottom: "28px" }}>
        {guides.map((g, i) => (
          <div key={i} style={{ background: "rgba(212,168,67,.04)", border: "1px solid rgba(212,168,67,.1)", borderRadius: "12px", padding: "18px", cursor: "pointer", transition: "all .15s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(212,168,67,.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(212,168,67,.04)")}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "20px" }}>{g.icon}</span>
              <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#D4A843", background: "rgba(212,168,67,.12)", padding: "2px 8px", borderRadius: "4px" }}>{g.tag}</span>
            </div>
            <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "5px" }}>{g.title}</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6 }}>{g.desc}</div>
            <div style={{ marginTop: "10px", fontSize: "11px", color: "#D4A843", fontWeight: 700 }}>Coming soon →</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div style={{ background: "rgba(233,69,96,.06)", border: "1px solid rgba(233,69,96,.15)", borderRadius: "12px", padding: "18px" }}>
          <div style={{ fontSize: "18px", marginBottom: "8px" }}>🦞</div>
          <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "5px" }}>The Claw Collective</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6, marginBottom: "10px" }}>Join the private community of Claw operators. Templates, workshops, peer support.</div>
          <div style={{ fontSize: "11px", color: "#E94560", fontWeight: 700 }}>Launching Q3 2026</div>
        </div>
        <div style={{ background: "rgba(102,187,106,.06)", border: "1px solid rgba(102,187,106,.15)", borderRadius: "12px", padding: "18px" }}>
          <div style={{ fontSize: "18px", marginBottom: "8px" }}>📅</div>
          <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "5px" }}>Monthly Workshops</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6, marginBottom: "10px" }}>Live sessions 2x/month. Deep dives on advanced use cases, new skills, strategies.</div>
          <div style={{ fontSize: "11px", color: "#66BB6A", fontWeight: 700 }}>$247/seat — coming soon</div>
        </div>
      </div>
    </div>
  );
}

function SupportTab({ client }: { client: ClientProfile }) {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#66BB6A", textTransform: "uppercase", marginBottom: "4px" }}>WE&apos;VE GOT YOU</div>
        <h2 style={{ fontSize: "26px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "8px" }}>Support</h2>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)" }}>Sarah personally responds to every client. You&apos;re never handed off to a bot. (Well... LouLou is a bot, but she&apos;s different. 🦞)</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "24px" }}>
        {[
          { icon: "📧", title: "Email Sarah", desc: "sarah@modernmustardseed.com", label: "Send Email", href: `mailto:sarah@modernmustardseed.com?subject=Client Support - ${client.name}&body=Hi Sarah,` },
          { icon: "📅", title: "Book a Follow-Up Call", desc: "Free 30-min strategy session for all active clients", label: "Book Call →", href: "/#audit" },
        ].map((c, i) => (
          <a key={i} href={c.href} style={{
            padding: "18px", borderRadius: "12px",
            background: "rgba(102,187,106,.05)", border: "1px solid rgba(102,187,106,.12)",
            textDecoration: "none", color: "white", display: "block", transition: "all .15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(102,187,106,.09)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(102,187,106,.05)")}
          >
            <div style={{ fontSize: "22px", marginBottom: "8px" }}>{c.icon}</div>
            <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "4px" }}>{c.title}</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", marginBottom: "10px", lineHeight: 1.6 }}>{c.desc}</div>
            <div style={{ fontSize: "12px", color: "#66BB6A", fontWeight: 700 }}>{c.label}</div>
          </a>
        ))}
      </div>

      {!sent ? (
        <div style={{ background: "rgba(10,22,40,.5)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "14px", padding: "20px" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "14px" }}>Quick Message to Sarah</div>
          <textarea
            value={msg}
            onChange={e => setMsg(e.target.value)}
            placeholder="What's going on? Question, issue, idea, win to share — anything goes..."
            rows={4}
            style={{ width: "100%", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "10px", padding: "12px 14px", color: "white", fontSize: "13px", fontFamily: "'DM Sans', sans-serif", resize: "none", outline: "none", lineHeight: 1.6, boxSizing: "border-box" }}
          />
          <button
            onClick={() => { if (msg.trim()) { window.location.href = `mailto:sarah@modernmustardseed.com?subject=Portal Message from ${client.name}&body=${encodeURIComponent(msg)}`; setSent(true); }}}
            disabled={!msg.trim()}
            style={{ marginTop: "12px", padding: "11px 22px", background: msg.trim() ? "linear-gradient(135deg,#66BB6A,#4CAF50)" : "rgba(255,255,255,.08)", border: "none", borderRadius: "10px", color: "white", fontSize: "13px", fontWeight: 700, cursor: msg.trim() ? "pointer" : "not-allowed", fontFamily: "'DM Sans', sans-serif" }}
          >
            Send Message →
          </button>
        </div>
      ) : (
        <div style={{ background: "rgba(102,187,106,.08)", border: "1px solid rgba(102,187,106,.2)", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
          <div style={{ fontSize: "28px", marginBottom: "8px" }}>✓</div>
          <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>Message sent!</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,.4)" }}>Sarah typically responds within a few hours. 🦞</div>
          <button onClick={() => { setMsg(""); setSent(false); }} style={{ marginTop: "14px", padding: "8px 18px", borderRadius: "8px", background: "transparent", border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.4)", fontSize: "12px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
            Send Another
          </button>
        </div>
      )}
    </div>
  );
}

function PlanTab({ client, setClient }: { client: ClientProfile; setClient: (c: ClientProfile) => void }) {
  const tier = TIERS[client.tier];
  const [copied, setCopied] = useState(false);
  const refLink = `https://theclawconcierge.com?ref=${client.referralCode}`;

  function copyRef() { navigator.clipboard.writeText(refLink); setCopied(true); setTimeout(() => setCopied(false), 2000); }

  return (
    <div style={{ padding: "32px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", textTransform: "uppercase", marginBottom: "4px" }}>YOUR INVESTMENT</div>
        <h2 style={{ fontSize: "26px", fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>My Plan</h2>
      </div>

      {/* Current tier */}
      <div style={{ background: `${tier.color}08`, border: `1px solid ${tier.color}25`, borderRadius: "16px", padding: "22px", marginBottom: "18px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
          <div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>Current Tier</div>
            <div style={{ fontSize: "20px", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: tier.color }}>{tier.label}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: tier.color }}>{tier.price}</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,.3)" }}>setup</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: client.onManagement ? "#66BB6A" : "rgba(255,255,255,.2)" }} />
          <span style={{ fontSize: "13px", color: client.onManagement ? "#66BB6A" : "rgba(255,255,255,.4)", fontWeight: client.onManagement ? 700 : 400 }}>
            {client.onManagement ? `Management Active — ${tier.mgmt}` : `No management plan · Upgrade for ${tier.mgmt}`}
          </span>
          {!client.onManagement && (
            <button
              onClick={() => { const u = { ...client, onManagement: true }; setClient(u); localStorage.setItem("claw-portal-client", JSON.stringify(u)); }}
              style={{ marginLeft: "auto", padding: "5px 12px", borderRadius: "6px", background: "rgba(102,187,106,.12)", border: "1px solid rgba(102,187,106,.25)", color: "#66BB6A", fontSize: "11px", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
            >
              + Add Management
            </button>
          )}
        </div>
      </div>

      {/* Tier selector */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", fontWeight: 700 }}>Change Tier</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
          {(Object.entries(TIERS) as [ClientProfile["tier"], typeof TIERS.personal][]).map(([k, v]) => (
            <button key={k} onClick={() => { const u = { ...client, tier: k }; setClient(u); localStorage.setItem("claw-portal-client", JSON.stringify(u)); }}
              style={{ padding: "12px", borderRadius: "10px", border: `1px solid ${client.tier === k ? v.color + "50" : "rgba(255,255,255,.07)"}`, background: client.tier === k ? `${v.color}12` : "rgba(255,255,255,.02)", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left", transition: "all .15s" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: client.tier === k ? v.color : "rgba(255,255,255,.5)", marginBottom: "2px" }}>{v.label}</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,.25)" }}>{v.price} setup</div>
            </button>
          ))}
        </div>
      </div>

      {/* Referral */}
      <div style={{ background: "rgba(212,168,67,.06)", border: "1px solid rgba(212,168,67,.15)", borderRadius: "14px", padding: "20px" }}>
        <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "4px" }}>🤝 Your Referral Link</div>
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,.4)", marginBottom: "14px", lineHeight: 1.6 }}>
          Every person you refer who signs up pays you back. Personal = $200 · Business Pro = $350 · Enterprise = $750. No cap.
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ flex: 1, background: "rgba(0,0,0,.3)", border: "1px solid rgba(212,168,67,.2)", borderRadius: "8px", padding: "9px 12px", fontSize: "12px", color: "rgba(255,255,255,.5)", fontFamily: "'JetBrains Mono', monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {refLink}
          </div>
          <button onClick={copyRef} style={{ padding: "9px 16px", borderRadius: "8px", background: copied ? "rgba(102,187,106,.15)" : "rgba(212,168,67,.15)", border: `1px solid ${copied ? "rgba(102,187,106,.3)" : "rgba(212,168,67,.3)"}`, color: copied ? "#66BB6A" : "#D4A843", fontSize: "12px", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>
            {copied ? "✓ Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function ClientPortal() {
  const [view, setView] = useState<"login" | "portal">("login");
  const [section, setSection] = useState<PortalSection>("home");
  const [collapsed, setCollapsed] = useState(false);
  const [client, setClient] = useState<ClientProfile>({
    name: "", email: "", tier: "business",
    setupDate: new Date().toISOString().slice(0, 10),
    onManagement: false,
    referralCode: "",
  });

  // Login form state
  const [form, setForm] = useState({ name: "", email: "", code: "" });
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // Restore session
  useEffect(() => {
    const saved = localStorage.getItem("claw-portal-client");
    if (saved) {
      const c = JSON.parse(saved) as ClientProfile;
      setClient(c);
      setView("portal");
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    if (!form.name.trim() || !form.email.trim() || !form.code.trim()) {
      setLoginError("Please fill in all fields.");
      return;
    }
    if (form.code.trim().toUpperCase() !== ACCESS_CODE) {
      setLoginError("Access code incorrect. Check your welcome email from Sarah.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const referralCode = form.name.toUpperCase().replace(/\s+/g, "") + Math.floor(1000 + Math.random() * 9000);
      const c: ClientProfile = {
        name: form.name.trim(),
        email: form.email.trim(),
        tier: "business",
        setupDate: new Date().toISOString().slice(0, 10),
        onManagement: false,
        referralCode,
      };
      setClient(c);
      localStorage.setItem("claw-portal-client", JSON.stringify(c));
      setView("portal");
      setLoading(false);
    }, 800);
  }

  function signOut() {
    localStorage.removeItem("claw-portal-client");
    localStorage.removeItem("claw-portal-phases");
    setView("login");
    setForm({ name: "", email: "", code: "" });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)",
    borderRadius: "12px", padding: "13px 16px", color: "white", fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif", outline: "none", boxSizing: "border-box",
  };

  // ── LOGIN SCREEN ──────────────────────────────────────────────────────────
  if (view === "login") {
    return (
      <div style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,50,100,.4) 0%, transparent 60%), linear-gradient(180deg, #050d1a 0%, #0a1e3d 40%, #050d1a 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif", color: "white",
        position: "relative", overflow: "hidden", padding: "40px 20px",
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

        {/* Moon */}
        <div style={{ position: "absolute", top: "8%", left: "6%", width: "140px", height: "140px", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, rgba(230,240,255,.25) 0%, transparent 70%)", border: "1px solid rgba(200,220,255,.1)", pointerEvents: "none" }} />
        {STARS.map((s, i) => (
          <div key={i} style={{ position: "absolute", top: `${s.t}%`, left: `${s.l}%`, width: `${s.s}px`, height: `${s.s}px`, borderRadius: "50%", background: "white", opacity: 0.12, pointerEvents: "none" }} />
        ))}

        <a href="/" style={{ position: "absolute", top: "24px", left: "24px", fontSize: "12px", color: "rgba(255,255,255,.3)", textDecoration: "none" }}
          onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.3)")}
        >← Back to site</a>

        <div style={{ textAlign: "center", position: "relative", zIndex: 10, width: "100%", maxWidth: "420px" }}>
          <div style={{ marginBottom: "16px" }}>
            <DuoLobsters size={220} />
          </div>
          <div style={{ background: "rgba(5,13,26,.88)", backdropFilter: "blur(24px)", border: "1px solid rgba(233,69,96,.2)", borderRadius: "24px", padding: "40px 32px 36px", boxShadow: "0 30px 80px rgba(0,0,0,.5)" }}>
            <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "5px", color: "#E94560", textTransform: "uppercase", marginBottom: "8px" }}>VIP CLIENT PORTAL</div>
            <h1 style={{ fontSize: "30px", fontFamily: "'Playfair Display', serif", fontWeight: 900, marginBottom: "6px" }}>Enter the Claw</h1>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,.3)", marginBottom: "28px", lineHeight: 1.6 }}>Your AI. Your progress. Your brain. All here.</p>

            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input type="text" placeholder="Your first name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "rgba(233,69,96,.4)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,.1)")} />
              <input type="email" placeholder="Email address" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "rgba(233,69,96,.4)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,.1)")} />
              <input type="text" placeholder="Access code (from your welcome email)" value={form.code} onChange={e => setForm(p => ({ ...p, code: e.target.value }))} required style={inputStyle}
                onFocus={e => (e.target.style.borderColor = "rgba(233,69,96,.4)")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,.1)")} />
              {loginError && <div style={{ fontSize: "12px", color: "#FF6B6B", textAlign: "left", lineHeight: 1.5 }}>{loginError}</div>}
              <button type="submit" disabled={loading} style={{ padding: "15px", background: loading ? "rgba(255,255,255,.1)" : "linear-gradient(135deg,#E94560,#FF6B6B)", border: "none", borderRadius: "12px", color: "white", fontSize: "14px", fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: "4px" }}>
                {loading ? "Opening..." : "🦞 Enter the Claw"}
              </button>
            </form>

            <div style={{ marginTop: "18px", fontSize: "12px", color: "rgba(255,255,255,.2)", lineHeight: 1.7 }}>
              Don&apos;t have an access code?{" "}
              <a href="/#audit" style={{ color: "#E94560", textDecoration: "none", fontWeight: 600 }}>Book your free audit →</a>
              <br />
              <span style={{ fontSize: "11px" }}>Sarah sends login details after your setup is complete.</span>
            </div>
          </div>

          <div style={{ marginTop: "28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", fontSize: "13px", color: "rgba(255,255,255,.2)" }}>
            <span style={{ color: "#E94560", fontSize: "16px" }}>♥</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "14px" }}>Lobster LouLou</span>
          </div>
        </div>
      </div>
    );
  }

  // ── PORTAL DASHBOARD ──────────────────────────────────────────────────────
  return (
    <div style={{ display: "flex", height: "100vh", background: "#050d1a", color: "white", fontFamily: "'DM Sans', sans-serif", overflow: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* SIDEBAR */}
      <div style={{ width: collapsed ? "60px" : "210px", flexShrink: 0, background: "rgba(5,10,22,.98)", borderRight: "1px solid rgba(255,255,255,.06)", display: "flex", flexDirection: "column", transition: "width .25s ease", overflow: "hidden" }}>
        {/* Logo */}
        <div style={{ padding: collapsed ? "16px 12px" : "20px 18px", borderBottom: "1px solid rgba(255,255,255,.05)", display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/lobster.svg" alt="The Claw" width={26} height={26} style={{ display: "block", flexShrink: 0 }} />
          {!collapsed && (
            <div>
              <div style={{ fontSize: "11px", fontWeight: 800, fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}>Client Portal</div>
              <div style={{ fontSize: "9px", color: "#E94560", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>THE CLAW</div>
            </div>
          )}
        </div>

        {/* Welcome chip */}
        {!collapsed && (
          <div style={{ padding: "12px 18px 0" }}>
            <div style={{ background: "rgba(233,69,96,.08)", border: "1px solid rgba(233,69,96,.15)", borderRadius: "8px", padding: "8px 12px" }}>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: "1px" }}>Welcome back</div>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>{client.name}</div>
            </div>
          </div>
        )}

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
          {NAV.map(item => {
            const active = section === item.id;
            return (
              <button key={item.id} onClick={() => setSection(item.id)} title={collapsed ? item.label : undefined}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: collapsed ? "11px" : "10px 12px", borderRadius: "10px", border: "none", cursor: "pointer", background: active ? `${item.color}15` : "transparent", borderLeft: active ? `3px solid ${item.color}` : "3px solid transparent", marginBottom: "2px", transition: "all .15s", textAlign: "left", justifyContent: collapsed ? "center" : "flex-start", fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.04)"; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                <span style={{ fontSize: "15px", flexShrink: 0 }}>{item.icon}</span>
                {!collapsed && <span style={{ fontSize: "12.5px", fontWeight: active ? 700 : 500, color: active ? "white" : "rgba(255,255,255,.45)", whiteSpace: "nowrap" }}>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div style={{ padding: "10px 8px", borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <a href="/" title={collapsed ? "Back to website" : undefined} style={{ display: "flex", alignItems: "center", gap: "10px", padding: collapsed ? "10px" : "9px 12px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.07)", color: "rgba(255,255,255,.35)", textDecoration: "none", fontSize: "12px", fontWeight: 600, marginBottom: "6px", justifyContent: collapsed ? "center" : "flex-start", transition: "all .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.35)"; }}
          >
            <span>🌐</span>{!collapsed && <span style={{ whiteSpace: "nowrap" }}>Main Site ↗</span>}
          </a>
          <button onClick={signOut} title={collapsed ? "Sign Out" : undefined} style={{ width: "100%", padding: collapsed ? "10px" : "9px 12px", borderRadius: "9px", border: "1px solid rgba(255,255,255,.06)", background: "rgba(255,255,255,.02)", color: "rgba(255,255,255,.25)", fontSize: "12px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", justifyContent: collapsed ? "center" : "flex-start", fontFamily: "'DM Sans', sans-serif", marginBottom: "6px", transition: "all .2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#FF6B6B"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.25)"; }}
          >
            <span>↩</span>{!collapsed && <span>Sign Out</span>}
          </button>
          <button onClick={() => setCollapsed(!collapsed)} style={{ width: "100%", padding: "7px", borderRadius: "8px", background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.05)", cursor: "pointer", color: "rgba(255,255,255,.2)", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans', sans-serif" }}>
            {collapsed ? "→" : "← Collapse"}
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, overflowY: "auto", position: "relative" }}>
        <div style={{ position: "fixed", top: 0, right: 0, width: "40%", height: "40%", background: "radial-gradient(ellipse at 100% 0%, rgba(233,69,96,.02), transparent 60%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, minHeight: "100%" }}>
          {section === "home"      && <HomeTab client={client} />}
          {section === "progress"  && <ProgressTab />}
          {section === "soul"      && <SoulTab client={client} />}
          {section === "resources" && <ResourcesTab />}
          {section === "support"   && <SupportTab client={client} />}
          {section === "plan"      && <PlanTab client={client} setClient={c => { setClient(c); localStorage.setItem("claw-portal-client", JSON.stringify(c)); }} />}
        </div>
      </div>
    </div>
  );
}
