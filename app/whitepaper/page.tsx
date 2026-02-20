"use client";

import { useState } from "react";

const TOC = [
  { id: "executive", label: "Executive Summary" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "The Solution" },
  { id: "what-is", label: "What Is OpenClaw?" },
  { id: "security", label: "Security Protocol" },
  { id: "soul", label: "The SOUL.md System" },
  { id: "voice", label: "Voice Staff" },
  { id: "software", label: "Build Software — No Code" },
  { id: "delivery", label: "9-Phase Delivery" },
  { id: "tiers", label: "Service Tiers" },
  { id: "market", label: "Market Opportunity" },
  { id: "founder", label: "The Founder" },
];

function Section({ id, tag, title, children }: { id: string; tag: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ marginBottom: "60px", scrollMarginTop: "80px" }}>
      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", textTransform: "uppercase", marginBottom: "8px" }}>{tag}</div>
      <h2 style={{ fontSize: "clamp(22px,3.5vw,32px)", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>{title}</h2>
      <div style={{ fontSize: "15px", color: "rgba(255,255,255,.6)", lineHeight: 1.9 }}>{children}</div>
    </section>
  );
}

function Callout({ color = "#E94560", children }: { color?: string; children: React.ReactNode }) {
  return (
    <div style={{ background: `${color}08`, border: `1px solid ${color}20`, borderRadius: "14px", padding: "20px 24px", margin: "24px 0", fontSize: "14px", color: "rgba(255,255,255,.75)", lineHeight: 1.8, borderLeft: `4px solid ${color}` }}>
      {children}
    </div>
  );
}

function Stat({ value, label, color = "#E94560" }: { value: string; label: string; color?: string }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 16px", background: `${color}08`, border: `1px solid ${color}15`, borderRadius: "14px" }}>
      <div style={{ fontSize: "32px", fontWeight: 900, fontFamily: "'Playfair Display', serif", color, marginBottom: "6px" }}>{value}</div>
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: "1.5px", lineHeight: 1.5 }}>{label}</div>
    </div>
  );
}

function Phase({ n, icon, name, desc, time }: { n: number; icon: string; name: string; desc: string; time: string }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,.05)" }}>
      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(233,69,96,.1)", border: "1px solid rgba(233,69,96,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,.25)", letterSpacing: "1px" }}>PHASE {n}</span>
          <span style={{ fontSize: "9px", fontWeight: 700, color: "#D4A843", background: "rgba(212,168,67,.1)", padding: "2px 8px", borderRadius: "4px" }}>{time}</span>
        </div>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "4px" }}>{name}</div>
        <div style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>{desc}</div>
      </div>
    </div>
  );
}

export default function Whitepaper() {
  const [activeSection, setActiveSection] = useState("executive");

  return (
    <div style={{ background: "#050d1a", color: "white", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,400&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "rgba(5,13,26,.95)", borderBottom: "1px solid rgba(255,255,255,.06)", padding: "0 28px", height: "58px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(20px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="/" style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", textDecoration: "none", transition: "color .2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}
          >← Back</a>
          <span style={{ color: "rgba(255,255,255,.1)" }}>|</span>
          <span style={{ fontSize: "13px", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>The Claw Concierge</span>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,.25)", letterSpacing: "2px", textTransform: "uppercase" }}>Whitepaper</span>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/#audit" style={{ fontSize: "12px", fontWeight: 700, color: "white", background: "linear-gradient(135deg,#E94560,#FF6B6B)", textDecoration: "none", padding: "7px 16px", borderRadius: "8px" }}>
            Book Free Audit →
          </a>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* TOC sidebar */}
        <aside style={{ width: "220px", flexShrink: 0, paddingTop: "48px", position: "sticky", top: "58px", height: "calc(100vh - 58px)", overflowY: "auto", paddingRight: "24px" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "3px", color: "rgba(255,255,255,.2)", textTransform: "uppercase", marginBottom: "14px" }}>CONTENTS</div>
          {TOC.map(item => (
            <a key={item.id} href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              style={{ display: "block", padding: "7px 12px", borderRadius: "8px", fontSize: "12.5px", color: activeSection === item.id ? "white" : "rgba(255,255,255,.35)", fontWeight: activeSection === item.id ? 700 : 400, background: activeSection === item.id ? "rgba(233,69,96,.1)" : "transparent", borderLeft: `2px solid ${activeSection === item.id ? "#E94560" : "transparent"}`, textDecoration: "none", marginBottom: "2px", transition: "all .15s" }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ marginTop: "24px", padding: "14px", background: "rgba(233,69,96,.06)", border: "1px solid rgba(233,69,96,.12)", borderRadius: "10px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, marginBottom: "6px" }}>Ready to start?</div>
            <a href="/#audit" style={{ fontSize: "11px", color: "#E94560", textDecoration: "none", fontWeight: 700 }}>Book your free audit →</a>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, paddingTop: "48px", paddingBottom: "80px", paddingLeft: "48px", maxWidth: "760px" }}>

          {/* Cover */}
          <div style={{ marginBottom: "60px", paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", textTransform: "uppercase", marginBottom: "16px" }}>OFFICIAL WHITEPAPER · 2026</div>
            <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1.05, marginBottom: "20px", background: "linear-gradient(135deg,#fff,#e0e8f0 50%,#FF6B6B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto" }}>
              The Claw Concierge
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,.5)", lineHeight: 1.75, maxWidth: "600px", marginBottom: "28px" }}>
              White-glove OpenClaw AI setup, security hardening, and management — so you get the most powerful personal AI assistant ever built, without the risk.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[["Sarah Scarano", "Founder"], ["Modern Mustard Seed", "Kalispell, Montana"], ["theclawconcierge.com", ""]].map(([v, l], i) => (
                <div key={i} style={{ fontSize: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,.6)", fontWeight: 600 }}>{v}</span>
                  {l && <span style={{ color: "rgba(255,255,255,.3)", marginLeft: "6px" }}>· {l}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "60px" }}>
            <Stat value="21,639" label="Exposed OpenClaw Instances Found" color="#E94560" />
            <Stat value="12" label="Security Hardening Steps — Every Setup" color="#D4A843" />
            <Stat value="180K+" label="GitHub Stars" color="#64B5F6" />
            <Stat value="24/7" label="AI Coverage — Never Off" color="#66BB6A" />
          </div>

          <Section id="executive" tag="Overview" title="Executive Summary">
            <p>The Claw Concierge is a premium white-glove service that sets up, secures, and manages <strong style={{ color: "white" }}>OpenClaw</strong> — the most powerful open-source personal AI assistant ever built — for individuals and businesses who want the transformative power of a true AI assistant without the complexity, risk, or time investment of doing it themselves.</p>
            <p style={{ marginTop: "16px" }}>OpenClaw connects to your WhatsApp, email, calendar, file system, phone calls, and more. It remembers everything, acts autonomously, and — when set up properly — becomes the most valuable member of your team. When set up poorly, it becomes a security liability.</p>
            <p style={{ marginTop: "16px" }}>We close that gap. Every client receives a fully secured, deeply personalized AI assistant, delivered in a single session. No technical knowledge required. No risk. Just results.</p>
            <Callout>
              <strong style={{ color: "white" }}>The core insight:</strong> OpenClaw is extraordinarily powerful — and extraordinarily dangerous if misconfigured. 21,639 instances have been found exposed on the public internet with no authentication. We built the gold standard for safe, elite-tier deployment.
            </Callout>
          </Section>

          <Section id="problem" tag="The Problem" title="OpenClaw Is Powerful. It's Also a Security Nightmare Without Expert Help.">
            <p>OpenClaw gives an AI assistant access to your computer, files, email, calendar, messaging apps, and the ability to browse the web, write and execute code, manage your schedule, and contact people on your behalf. This is unprecedented personal AI capability.</p>
            <p style={{ marginTop: "16px" }}>It also means that a misconfigured OpenClaw installation is an open door into your entire digital life.</p>
            <div style={{ margin: "24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { t: "21,639 exposed instances", d: "Found on the public internet with zero authentication — complete system access, no password.", c: "#E94560" },
                { t: "CrowdStrike threat advisory", d: "Security researchers have published active exploitation warnings for misconfigured OpenClaw.", c: "#D4A843" },
                { t: "SentinelOne ClawSec report", d: "Leading security firms have classified poorly configured OpenClaw as an enterprise-grade threat vector.", c: "#FF8A65" },
                { t: "6+ hours to do it right", d: "Security hardening alone — done correctly — takes a skilled professional 4-6 hours. Most users skip it entirely.", c: "#64B5F6" },
              ].map((p, i) => (
                <div key={i} style={{ background: `${p.c}08`, border: `1px solid ${p.c}18`, borderRadius: "12px", padding: "16px" }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: p.c, marginBottom: "6px" }}>{p.t}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>{p.d}</div>
                </div>
              ))}
            </div>
            <p>Beyond security, OpenClaw requires deep technical configuration to unlock its true potential. SOUL.md personalization, memory system initialization, multi-channel setup, skill installation, and automation workflows — each requires expertise to do well. Most users spend days or weeks getting a fraction of the capability our clients get on day one.</p>
          </Section>

          <Section id="solution" tag="The Solution" title="White-Glove Setup. Elite Security. Lifetime Results.">
            <p>The Claw Concierge delivers a complete, secured, deeply personalized OpenClaw installation — in a single session. We handle everything from infrastructure provisioning to security hardening to SOUL.md personalization to channel connections to skill installation and ongoing management.</p>
            <p style={{ marginTop: "16px" }}>Our clients don&apos;t touch a command line. They don&apos;t read documentation. They show up to a 30-minute onboarding call and leave with an AI assistant that knows who they are, sounds like them, and works for them around the clock.</p>
            <Callout color="#66BB6A">
              <strong style={{ color: "white" }}>The result:</strong> A fully operational, 12-point secured, SOUL.md personalized AI assistant — live and working within hours of your setup call. Personal clients are up in 2-3 hours. Business Pro clients in 4-6 hours. Enterprise in 1-2 weeks for full multi-agent architecture.
            </Callout>
          </Section>

          <Section id="what-is" tag="Foundation" title="What Is OpenClaw?">
            <p>OpenClaw is an open-source AI assistant framework that runs on your own infrastructure — a cloud server, your personal machine, or a dedicated device. Unlike ChatGPT or Claude, which are cloud-based chatbots, OpenClaw is an <strong style={{ color: "white" }}>autonomous agent</strong> that connects to your real tools and takes real actions.</p>
            <div style={{ margin: "24px 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
              {[
                { icon: "🧠", t: "Persistent Memory", d: "Remembers everything across every conversation, forever. Compounds like interest." },
                { icon: "📱", t: "Multi-Channel", d: "WhatsApp, Telegram, email, SMS, voice — one AI across all your channels." },
                { icon: "⚡", t: "Autonomous Action", d: "Sends emails, books meetings, updates CRMs, writes code, browses the web." },
                { icon: "👻", t: "SOUL.md Identity", d: "A personality file that makes your AI sound exactly like you — not generic AI." },
                { icon: "🔒", t: "Your Infrastructure", d: "Runs on your server. Your data never leaves your control." },
                { icon: "🛠️", t: "Extensible Skills", d: "700+ community skills. Add any capability with a simple install command." },
              ].map((f, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "12px", padding: "16px" }}>
                  <div style={{ fontSize: "20px", marginBottom: "8px" }}>{f.icon}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "5px" }}>{f.t}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6 }}>{f.d}</div>
                </div>
              ))}
            </div>
            <p>OpenClaw has 180,000+ GitHub stars and 1.5 million agents created. It is the fastest-growing open-source AI project of 2026. We are the elite deployment service for this technology — the white-glove layer that makes it safe, powerful, and personalized.</p>
          </Section>

          <Section id="security" tag="Security" title="The 12-Point Hardening Protocol">
            <p>Our security protocol was designed using guidance from Microsoft, CrowdStrike, SentinelOne, and the OpenClaw security team&apos;s own published guidelines. Every client receives all 12 points — non-negotiable, regardless of tier.</p>
            <div style={{ margin: "20px 0" }}>
              {[
                ["Localhost-only gateway binding", "The OpenClaw gateway is bound exclusively to 127.0.0.1 — inaccessible from external networks."],
                ["64-character auth tokens", "Cryptographically secure tokens replace default credentials. Rotated on a defined schedule."],
                ["Docker sandboxing", "The OpenClaw process runs inside an isolated Docker container. Breach containment by design."],
                ["DM pairing whitelist", "Only explicitly whitelisted phone numbers and accounts can interact with your AI."],
                ["High-risk tools disabled by default", "File deletion, code execution, and network access tools are disabled unless explicitly needed."],
                ["Vetted skills only", "No unverified community skills. Every installed skill is reviewed before deployment."],
                ["API key isolation and rotation", "All API keys isolated per service, stored in environment variables, with rotation schedule set."],
                ["Comprehensive logging and alerts", "Every action logged. Anomalies trigger immediate alerts to the owner."],
                ["Dedicated isolated machine", "Your AI runs on a machine dedicated exclusively to OpenClaw — no shared compute risk."],
                ["Claude/injection-resistant model as primary", "The primary AI model is selected specifically for prompt injection resistance."],
                ["mDNS disabled", "Local network discovery disabled — your AI cannot be detected or targeted by network scanners."],
                ["Outbound connection monitoring", "All outbound connections logged and flagged for review. Nothing leaves without a trace."],
              ].map(([name, desc], i) => (
                <div key={i} style={{ display: "flex", gap: "14px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,.04)" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(233,69,96,.12)", border: "1px solid rgba(233,69,96,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 800, color: "#E94560", flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "white", marginBottom: "3px" }}>{name}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="soul" tag="Personalization" title="The SOUL.md System — Your AI's Identity">
            <p>Every OpenClaw installation reads three core identity files on startup. This is what separates a generic AI assistant from one that feels like a true extension of you.</p>
            <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { file: "SOUL.md", color: "#D4A843", who: "WHO IT IS", desc: "Your AI's personality, values, communication style, humor level, tone, boundaries, and escalation rules. Edit this file and your AI's personality changes instantly — it literally reads itself into existence each morning." },
                { file: "USER.md", color: "#64B5F6", who: "WHO YOU ARE", desc: "Your business, goals, key contacts, preferences, recurring projects, important dates, and context. Your AI always has complete knowledge of your world." },
                { file: "AGENTS.md", color: "#66BB6A", who: "WHAT IT CAN DO", desc: "The permission manifest — which tools are enabled, which external services can be accessed, escalation rules, safety boundaries, and action confirmation requirements." },
              ].map((f, i) => (
                <div key={i} style={{ background: `${f.color}06`, border: `1px solid ${f.color}18`, borderRadius: "12px", padding: "18px 20px", display: "flex", gap: "16px" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", fontWeight: 700, color: f.color, whiteSpace: "nowrap", paddingTop: "2px" }}>{f.file}</div>
                  <div>
                    <div style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "5px" }}>{f.who}</div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,.55)", lineHeight: 1.7 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p>We build these files for you during setup, using industry-specific templates refined across dozens of real client deployments — then personalize them to your exact voice, workflow, and preferences during the SOUL customization phase.</p>
          </Section>

          <Section id="voice" tag="Exclusive" title="Voice Staff — Text + Voice AI Sharing the Same Brain">
            <p>No other service offers this. Voice Staff is our AI voice agent platform that handles inbound phone calls — qualifying leads, booking appointments, handling inquiries — while sharing memory, context, and identity with your OpenClaw text assistant.</p>
            <Callout color="#D4A843">
              <strong style={{ color: "white" }}>The result:</strong> A prospect calls your business at 11pm. Voice Staff answers with your warmth, your knowledge, your voice. Qualifies them. Books a call for Tuesday. The transcript flows into OpenClaw&apos;s memory. Tuesday morning, you wake up to a fully briefed calendar — the lead already feels known.
            </Callout>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", margin: "24px 0" }}>
              {[
                { icon: "📞", t: "Inbound Calls", d: "Answers, qualifies, books — 24/7" },
                { icon: "🧠", t: "Shared Memory", d: "Call transcripts flow into OpenClaw context" },
                { icon: "🌙", t: "24/7 Coverage", d: "Never miss a call, lead, or opportunity" },
                { icon: "📅", t: "Auto-Booking", d: "Books directly into your calendar" },
                { icon: "🎭", t: "Your Voice", d: "SOUL.md applied to every conversation" },
                { icon: "💰", t: "ROI in Days", d: "One recovered lead covers the cost" },
              ].map((f, i) => (
                <div key={i} style={{ background: "rgba(212,168,67,.04)", border: "1px solid rgba(212,168,67,.1)", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>{f.icon}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, marginBottom: "3px" }}>{f.t}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,.35)", lineHeight: 1.5 }}>{f.d}</div>
                </div>
              ))}
            </div>
            <p>Voice Staff is available as an add-on ($499/mo) with Business Pro and above, and is included in the Enterprise + Voice tier.</p>
          </Section>

          <Section id="software" tag="Capability" title="Build Software With Natural Language — No Coding Ever">
            <p>One of the most powerful — and least understood — capabilities of a properly configured OpenClaw is the ability to build custom software, tools, and automations using plain English.</p>
            <Callout color="#66BB6A">
              <strong style={{ color: "white" }}>Tell your AI what you want built. It builds it.</strong> "Create a client intake form that saves responses to my Google Sheet." "Build a daily revenue dashboard that pulls from Stripe." "Make an automation that posts my content to Instagram every Tuesday at 9am." No developer. No code. No waiting.
            </Callout>
            <p>This capability is available to all tiers. The complexity and scale of what can be built scales with tier — Business Pro and Enterprise clients have access to multi-agent build teams and enterprise-grade automation infrastructure.</p>
            <div style={{ margin: "20px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                "Custom client intake forms and CRM workflows",
                "Revenue dashboards pulling live data from Stripe, Shopify, or spreadsheets",
                "Content scheduling and distribution automations",
                "Lead tracking pipelines with automatic follow-up",
                "Internal tools and team dashboards",
                "Document generation — proposals, contracts, reports",
                "Email and SMS campaign automations",
                "Custom reporting systems — daily, weekly, monthly",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", color: "rgba(255,255,255,.55)" }}>
                  <span style={{ color: "#66BB6A", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="delivery" tag="Process" title="9-Phase Delivery — From Zero to Live">
            <p>Every Claw Concierge setup follows our proprietary 9-phase delivery process. No phase is skipped. No shortcuts taken. The result is a fully operational, elite-tier AI assistant every time.</p>
            <div style={{ margin: "20px 0" }}>
              <Phase n={1} icon="📋" name="Pre-Call Preparation" time="Before session" desc="Industry research, SOUL.md template selection, tier confirmation, infrastructure pre-provisioning. You show up to a prepared session — not an exploratory one." />
              <Phase n={2} icon="🎙️" name="Discovery Call" time="30 min" desc="Goals mapped, pain points captured, AI personality sketched, workflow documented. Everything needed to build your perfect SOUL.md." />
              <Phase n={3} icon="🖥️" name="Infrastructure Setup" time="30 min" desc="Cloud VPS provisioned (DigitalOcean or Hetzner, $4-6/mo), SSH configured, environment secured, DNS set. Your AI gets a dedicated, isolated home." />
              <Phase n={4} icon="🦞" name="OpenClaw Installation" time="45 min" desc="Core OpenClaw installed, memory system initialized, persistence configured, initial health check completed." />
              <Phase n={5} icon="🔒" name="Security Hardening" time="30 min" desc="All 12 security points applied. Gateway locked, auth tokens generated, Docker sandbox configured, mDNS disabled, monitoring activated." />
              <Phase n={6} icon="👻" name="SOUL.md Build" time="30 min" desc="Your AI's identity crafted from scratch — personality, values, communication style, knowledge base, escalation rules, industry expertise loaded." />
              <Phase n={7} icon="⚡" name="Skills & Automation" time="30 min" desc="Vetted skills installed for your specific use case. Channels connected (WhatsApp, Telegram, email). Automations configured. Cron jobs scheduled." />
              <Phase n={8} icon="✨" name="Onboarding Call" time="30-60 min" desc="Live walkthrough with you. Test every workflow. Ask every question. We don't close the session until you're comfortable and confident." />
              <Phase n={9} icon="✅" name="Quality Gate" time="After session" desc="Final security re-audit, stress test, documentation delivered. Your Claw officially passes quality gate and is marked live." />
            </div>
          </Section>

          <Section id="tiers" tag="Investment" title="Service Tiers">
            <p>Every tier includes the complete 9-phase delivery process and 12-point security protocol. Tiers differ in scope, complexity, channels, and ongoing management.</p>
            <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { tier: "Personal Claw", price: "$897", mgmt: "+ $197/mo management (optional)", color: "#64B5F6", includes: ["Full install + 12-point security hardening", "Custom SOUL.md + USER.md identity build", "1-2 channels (WhatsApp + Telegram)", "5 vetted skills installed", "Persistent memory activated", "30-min onboarding call", "Claw Collective community access"] },
                { tier: "Business Pro", price: "$2,997", mgmt: "+ $497/mo management", color: "#E94560", includes: ["Everything in Personal", "3-5 channels (email, CRM, calendar, SMS)", "Docker deployment + cron jobs", "10+ skills including RAG knowledge base", "Multi-workflow automations", "60-min strategy onboarding", "30-day check-in + optimization session"] },
                { tier: "Enterprise + Voice", price: "$9,500+", mgmt: "+ $1,297/mo management", color: "#D4A843", includes: ["Everything in Business Pro", "Voice Staff AI voice agent included ($499/mo value)", "Multi-agent architecture — dedicated agents per function", "Elite RAG system — full document ingestion", "Custom command center dashboard", "Priority support + dedicated account manager", "Quarterly strategy reviews"] },
                { tier: "VIP Day", price: "$8,000", mgmt: "Full-day intensive", color: "#AB47BC", includes: ["8-hour dedicated in-person or remote intensive", "Complete enterprise-grade setup in one day", "Sarah personally leads every session", "Everything built, tested, and optimized", "One month of dedicated support included", "Ideal for executives and complex deployments"] },
              ].map((t, i) => (
                <div key={i} style={{ background: `${t.color}06`, border: `1px solid ${t.color}20`, borderRadius: "14px", padding: "22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: t.color, marginBottom: "3px" }}>{t.tier}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)" }}>{t.mgmt}</div>
                    </div>
                    <div style={{ fontSize: "24px", fontWeight: 900, fontFamily: "'Playfair Display', serif", color: t.color }}>{t.price}</div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    {t.includes.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: "8px", fontSize: "12.5px", color: "rgba(255,255,255,.5)" }}>
                        <span style={{ color: t.color, flexShrink: 0 }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="market" tag="Opportunity" title="The Market Opportunity">
            <p>The personal AI assistant market is in the earliest innings of a generational shift. OpenClaw — and the broader category of autonomous AI agents — represents the next wave after chatbots: AI that doesn&apos;t just answer questions but acts, remembers, and operates independently on your behalf.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", margin: "24px 0" }}>
              <Stat value="$184B" label="AI Market by 2030 (Grand View Research)" color="#E94560" />
              <Stat value="180K+" label="OpenClaw GitHub Stars — Fastest Growing" color="#D4A843" />
              <Stat value="65%" label="SMBs with No AI Strategy Yet" color="#64B5F6" />
            </div>
            <p>The white-glove services layer is the highest-margin, highest-trust segment of this market. Every business that deploys AI will need someone to set it up correctly. We are building the brand that owns &quot;done right&quot; in this space.</p>
            <p style={{ marginTop: "16px" }}>Our Year 1 revenue target is $650,000-$850,000, scaling to $2M+ by Year 2 through management ARR, the Claw Collective community, workshop programs, and strategic partnership channels.</p>
          </Section>

          <Section id="founder" tag="The Team" title="The Founder">
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: "80px", height: "80px", borderRadius: "20px", background: "linear-gradient(135deg,rgba(233,69,96,.2),rgba(212,168,67,.1))", border: "1px solid rgba(233,69,96,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px" }}>🦞</div>
              <div>
                <h3 style={{ fontSize: "20px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "4px" }}>Sarah Scarano</h3>
                <div style={{ fontSize: "12px", color: "#E94560", fontWeight: 700, letterSpacing: "1px", marginBottom: "14px", textTransform: "uppercase" }}>Founder · The Claw Concierge & Modern Mustard Seed</div>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>Sarah is an operator, not a theorist. She builds AI-powered business tools that work in the real world — not in a pitch deck. Based in Kalispell, Montana, near Flathead Lake, she founded Modern Mustard Seed to help creators and businesses build systems that serve both ambition and quality of life.</p>
                <p style={{ marginTop: "12px", fontSize: "14px", color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>The Claw Concierge was born from direct experience: setting up OpenClaw for herself, realizing how powerful it was, then realizing how many people were getting it dangerously wrong. She built the service she wished existed when she started.</p>
                <div style={{ marginTop: "16px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {[
                    { label: "𝕏 @sarahmscarano", href: "https://x.com/sarahmscarano" },
                    { label: "𝕏 @clawconcierge", href: "https://x.com/clawconcierge" },
                    { label: "modernmustardseed.com", href: "https://modernmustardseed.com" },
                  ].map((l, i) => (
                    <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12px", color: "#E94560", textDecoration: "none", fontWeight: 700, padding: "5px 12px", borderRadius: "8px", background: "rgba(233,69,96,.08)", border: "1px solid rgba(233,69,96,.15)" }}>
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg,rgba(233,69,96,.08),rgba(212,168,67,.04))", border: "1px solid rgba(233,69,96,.2)", borderRadius: "20px", padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", textTransform: "uppercase", marginBottom: "12px" }}>READY TO START</div>
            <h2 style={{ fontSize: "28px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "12px" }}>Book Your Free Claw Readiness Audit</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,.45)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 24px" }}>
              30 minutes. No obligation. We&apos;ll map your exact situation, recommend a tier, and answer every question. If it&apos;s not right for you, we&apos;ll tell you honestly.
            </p>
            <a href="/#audit" style={{ display: "inline-block", padding: "16px 32px", background: "linear-gradient(135deg,#E94560,#FF6B6B)", borderRadius: "12px", color: "white", textDecoration: "none", fontSize: "15px", fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>
              🦞 Book Free Audit →
            </a>
          </div>

        </main>
      </div>
    </div>
  );
}
