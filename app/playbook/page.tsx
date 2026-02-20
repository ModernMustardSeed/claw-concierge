"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Mini lobster ─────────────────────────────────────────────────
const Lob = ({ s = 22 }: { s?: number }) => (
  <svg viewBox="0 0 400 400" width={s} height={s} style={{ display: "inline-block", verticalAlign: "middle" }}>
    <defs>
      <linearGradient id="pl" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" /><stop offset="100%" stopColor="#E94560" />
      </linearGradient>
    </defs>
    <ellipse cx="200" cy="220" rx="55" ry="80" fill="url(#pl)" />
    <ellipse cx="200" cy="135" rx="42" ry="35" fill="url(#pl)" />
    <circle cx="182" cy="118" r="6" fill="#0a1628" /><circle cx="218" cy="118" r="6" fill="#0a1628" />
    <circle cx="184" cy="116" r="2.5" fill="#fff" /><circle cx="220" cy="116" r="2.5" fill="#fff" />
    <path d="M155 160Q100 130 75 115" stroke="url(#pl)" strokeWidth="14" fill="none" strokeLinecap="round" />
    <ellipse cx="62" cy="100" rx="25" ry="18" fill="url(#pl)" transform="rotate(-30 62 100)" />
    <path d="M245 160Q300 130 325 115" stroke="url(#pl)" strokeWidth="14" fill="none" strokeLinecap="round" />
    <ellipse cx="338" cy="100" rx="25" ry="18" fill="url(#pl)" transform="rotate(30 338 100)" />
    <ellipse cx="200" cy="295" rx="45" ry="18" fill="#C13048" />
    <ellipse cx="200" cy="338" rx="30" ry="12" fill="#C13048" />
    <ellipse cx="200" cy="362" rx="35" ry="14" fill="url(#pl)" />
    <path d="M188 142Q200 152 212 142" stroke="#0a1628" strokeWidth="2.5" fill="none" strokeLinecap="round" />
  </svg>
);

// ─── Collapsible section ──────────────────────────────────────────
function Section({ title, accent = "#E94560", tag, children, defaultOpen = false }: {
  title: string; accent?: string; tag?: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderRadius: "14px", border: `1px solid ${accent}18`, marginBottom: "12px", overflow: "hidden" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "16px 20px", cursor: "pointer",
          background: open ? `${accent}08` : "rgba(10,22,40,.6)",
          transition: "background .2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {tag && (
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: accent, textTransform: "uppercase", background: `${accent}15`, padding: "3px 8px", borderRadius: "4px" }}>
              {tag}
            </span>
          )}
          <span style={{ fontSize: "15px", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>{title}</span>
        </div>
        <span style={{ fontSize: "16px", color: accent, transform: open ? "rotate(180deg)" : "none", transition: "transform .25s", flexShrink: 0 }}>▾</span>
      </div>
      {open && (
        <div style={{ padding: "20px 24px", background: "rgba(5,13,26,.7)", borderTop: `1px solid ${accent}10` }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Checklist item ───────────────────────────────────────────────
function Check({ label, done = false, note }: { label: string; done?: boolean; note?: string }) {
  const [checked, setChecked] = useState(done);
  return (
    <div
      onClick={() => setChecked(!checked)}
      style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "8px 0", cursor: "pointer", borderBottom: "1px solid rgba(255,255,255,.04)" }}
    >
      <div style={{
        width: "18px", height: "18px", borderRadius: "5px", flexShrink: 0, marginTop: "1px",
        border: checked ? "none" : "2px solid rgba(255,255,255,.2)",
        background: checked ? "linear-gradient(135deg,#66BB6A,#4CAF50)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all .2s",
      }}>
        {checked && <span style={{ fontSize: "11px", color: "white", fontWeight: 700 }}>✓</span>}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "13px", color: checked ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.75)", textDecoration: checked ? "line-through" : "none", lineHeight: 1.5 }}>
          {label}
        </div>
        {note && <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", marginTop: "2px" }}>{note}</div>}
      </div>
    </div>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────
function Stat({ label, value, color = "#E94560" }: { label: string; value: string; color?: string }) {
  return (
    <div style={{ background: `${color}0a`, border: `1px solid ${color}20`, borderRadius: "10px", padding: "12px 16px", flex: 1, minWidth: "110px" }}>
      <div style={{ fontSize: "20px", fontWeight: 800, fontFamily: "'Playfair Display', serif", color }}>{value}</div>
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,.4)", marginTop: "2px", lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

// ─── Note block ───────────────────────────────────────────────────
function Note({ children, color = "#D4A843" }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ background: `${color}08`, border: `1px solid ${color}20`, borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: "rgba(255,255,255,.65)", lineHeight: 1.75 }}>
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────
export default function PlaybookPage() {
  return (
    <div style={{ background: "#050d1a", color: "white", fontFamily: "'DM Sans', sans-serif", minHeight: "100vh" }}>

      {/* ── Header ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,.06)", padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(10,22,40,.8)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Lob s={24} />
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#D4A843" }}>Claw Concierge</span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,.2)" }}>/</span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,.5)" }}>Project Playbook</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,.25)" }}>Last updated Feb 20, 2026</span>
          <Link href="/" style={{ fontSize: "12px", color: "rgba(255,255,255,.4)", textDecoration: "none", padding: "6px 12px", border: "1px solid rgba(255,255,255,.1)", borderRadius: "6px" }}>
            ← Website
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* ── Title block ── */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "4px", color: "#E94560", textTransform: "uppercase", marginBottom: "8px" }}>
            Personal Source of Truth
          </div>
          <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1.1, marginBottom: "12px" }}>
            Claw Concierge <span style={{ color: "#D4A843" }}>Playbook</span>
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,.4)", lineHeight: 1.7, maxWidth: "580px" }}>
            My complete project bible — strategy, offers, process, metrics, and notes. This is the doc I come back to. Living, evolving, always in progress.
          </p>
        </div>

        {/* ── Quick stats ── */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
          <Stat label="Website" value="Live 🟢" color="#66BB6A" />
          <Stat label="Target MRR" value="$10K" color="#D4A843" />
          <Stat label="Offer Range" value="$897–9.5K" color="#E94560" />
          <Stat label="Clients" value="0 → 5" color="#64B5F6" />
          <Stat label="Phase" value="Launch" color="#AB47BC" />
        </div>

        {/* ── 1. Vision ── */}
        <Section title="Vision & Why This Exists" accent="#FF6B6B" tag="NORTH STAR" defaultOpen>
          <Note>
            OpenClaw is genuinely powerful and genuinely dangerous when set up wrong. The market is enormous — 21K+ exposed instances, zero trusted white-glove services. I&apos;m building the Genius Bar for AI assistants. Not a tutorial. Not a course. Done-for-you, secured, personalized, ongoing.
          </Note>
          <div style={{ marginTop: "14px", fontSize: "13px", color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>
            <p style={{ marginBottom: "8px" }}><strong style={{ color: "white" }}>The big idea:</strong> Most people who want a powerful AI assistant will never get one set up correctly — or safely. I do that for them. And then I stay with them.</p>
            <p style={{ marginBottom: "8px" }}><strong style={{ color: "white" }}>The moat:</strong> The combination of white-glove setup + Voice Staff voice agents + Claw Collective community. Nobody else offers all three.</p>
            <p><strong style={{ color: "white" }}>The mission:</strong> Technology that brings people closer to their lives, not further from them. More lake trips. More family time. Less overwhelm.</p>
          </div>
        </Section>

        {/* ── 2. Offer Stack ── */}
        <Section title="Offer Stack & Pricing" accent="#D4A843" tag="OFFERS" defaultOpen>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { name: "Personal Claw", price: "$897 setup + $197/mo", emoji: "🦞", desc: "Layers 1-4. Full secure install, SOUL.md, USER.md, 1-2 channels, 5 skills, memory. 30-min onboarding. Community access.", color: "#64B5F6" },
              { name: "Business Pro", price: "$2,997 setup + $497/mo", emoji: "🦞🦞", desc: "Everything + multi-channel, Docker sandbox, custom skills, cron jobs, VPS, AGENTS.md, 60-min strategy, 30 days priority.", color: "#E94560" },
              { name: "Enterprise + Voice", price: "$9,500+ setup + $1,297/mo", emoji: "🦞🦞🦞", desc: "Everything + Voice Staff, multi-agent, Elite RAG, Command Center, full security assessment, white-glove 3-session onboarding.", color: "#D4A843" },
              { name: "VIP Day", price: "$8,000 flat", emoji: "⚡", desc: "Intensive 1-day build. Deep custom. Great for business owners who want me in their systems hands-on.", color: "#AB47BC" },
              { name: "Live Workshop", price: "$247/seat", emoji: "🎓", desc: "Group teach. Show the system, show the possibilities. Lead gen for Personal + Business installs.", color: "#66BB6A" },
              { name: "Self-Paced Course", price: "$497", emoji: "📚", desc: "DIY with my frameworks. Gatekeep the actual config — sell the methodology. Funnel into managed clients.", color: "#26C6DA" },
            ].map((o, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", padding: "14px 16px", background: `${o.color}08`, border: `1px solid ${o.color}18`, borderRadius: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>{o.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline", marginBottom: "4px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700 }}>{o.name}</span>
                    <span style={{ fontSize: "12px", color: o.color, fontFamily: "'JetBrains Mono', monospace" }}>{o.price}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.45)", lineHeight: 1.65 }}>{o.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "14px" }}>
            <Note color="#D4A843">
              💡 Management retainer is the real LTV play. Setup is a one-time win. Retainer is the recurring revenue engine. Price management to be irresistible relative to the value — clients who self-manage leave, clients on retainer compound.
            </Note>
          </div>
        </Section>

        {/* ── 3. Delivery SOP ── */}
        <Section title="Delivery Process (Client SOP)" accent="#66BB6A" tag="PROCESS">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
            {[
              ["Discovery call (15 min)", "Audit their situation. Which tier? What are their pain points? What would change their life?"],
              ["Proposal + agreement", "Custom proposal based on audit. Risk disclosure. Signed service agreement before any work."],
              ["Kickoff intake form", "Deep intake: business details, communication style, channels, goals, existing tools."],
              ["Build day 1 — Foundation", "VPS provision, Docker setup, OpenClaw install, SecureClaw hardening, 12-point protocol."],
              ["Build day 2 — Identity", "SOUL.md, USER.md, AGENTS.md. Write the personality. Test it. Refine."],
              ["Build day 3 — Skills & Channels", "Connect WhatsApp/Telegram, install vetted skills, configure cron jobs, test flows."],
              ["Onboarding call", "Live demo, walkthrough, teach client how to interact. Set expectations for first 30 days."],
              ["Week 2 check-in", "Anything broken? Anything to tune? Quick 15-min async video or call."],
              ["Monthly retainer check-in (if managed)", "Review memory, update skills, check security, tune personality from learnings."],
            ].map(([step, note], i) => (
              <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,.04)" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: "rgba(102,187,106,.15)", border: "1px solid rgba(102,187,106,.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "11px", fontWeight: 700, color: "#66BB6A", fontFamily: "'JetBrains Mono', monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}>{step}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
          <Note color="#66BB6A">
            ⏱ Personal: ~2-3 hrs build time. Business Pro: ~4-6 hrs. Enterprise: spread over 1-2 weeks. Batch clients on same day types to stay in a rhythm.
          </Note>
        </Section>

        {/* ── 4. Tech Stack ── */}
        <Section title="Tech Infrastructure" accent="#64B5F6" tag="STACK">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
            {[
              ["VPS", "DigitalOcean or Hetzner ($4-6/mo per client)", "#64B5F6"],
              ["OpenClaw", "Latest stable release — check GitHub", "#E94560"],
              ["SecureClaw", "12-point hardening protocol (proprietary checklist)", "#FF6B6B"],
              ["Voice Staff", "voicestaff.pro — $399/mo — shared calendar + memory", "#D4A843"],
              ["Channels", "WhatsApp (primary), Telegram (backup)", "#66BB6A"],
              ["AI Models", "Codex $20/mo default, Claude API for premium tasks", "#AB47BC"],
              ["Command Center", "~/command-center — Next.js 16 dashboard", "#26C6DA"],
              ["RAG (Elite)", "Vector DB — Supabase pgvector or Qdrant", "#FF8C00"],
              ["Website", "claw-concierge-pi.vercel.app → theclawconcierge.com", "#64B5F6"],
            ].map(([cat, val, c], i) => (
              <div key={i} style={{ background: `${c}08`, border: `1px solid ${c}15`, borderRadius: "8px", padding: "10px 12px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: c, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>{cat}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,.55)", lineHeight: 1.5 }}>{val}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 5. Launch Checklist ── */}
        <Section title="Launch Checklist" accent="#AB47BC" tag="TODO" defaultOpen>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#66BB6A", textTransform: "uppercase", marginBottom: "8px", marginTop: "4px" }}>✅ Done</div>
            <Check done label="Website built and deployed (Vercel)" />
            <Check done label="GitHub repo created (ModernMustardSeed/claw-concierge)" />
            <Check done label="Playbook page — personal source of truth" />
            <Check done label="Lead magnet — Blueprint PDF capture" />
            <Check done label="Audit form — name, email, phone + 8 questions" />

            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#D4A843", textTransform: "uppercase", margin: "16px 0 8px" }}>🔜 Next Up</div>
            <Check label="Connect Cal.com or Calendly to discovery call buttons" note="Update href on 'Book Free Discovery Call' buttons in page.tsx" />
            <Check label="Connect domain theclawconcierge.com in Vercel dashboard" note="Settings → Domains → Add → theclawconcierge.com" />
            <Check label="Set up email service (Resend recommended)" note="Wire AuditForm.tsx handleSubmit + LeadMagnet.tsx handleSubmit" />
            <Check label="Connect Supabase — store audit submissions" note="lib/supabase.ts → insert to audit_submissions table" />
            <Check label="Write SOUL.md for first client template" />
            <Check label="Draft service agreement / risk disclosure doc" />
            <Check label="Set up Stripe for payment collection" />

            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#64B5F6", textTransform: "uppercase", margin: "16px 0 8px" }}>💡 Later</div>
            <Check label="Build Blueprint PDF (actual downloadable asset)" />
            <Check label="Claw Collective community platform (Skool / Circle)" />
            <Check label="Workshop landing page" />
            <Check label="SecureClaw internal checklist document" />
            <Check label="Client portal / onboarding portal" />
          </div>
        </Section>

        {/* ── 6. Revenue Model ── */}
        <Section title="Revenue Model & Targets" accent="#E94560" tag="MONEY">
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,.55)", lineHeight: 2, marginBottom: "14px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
              {[
                ["5 Personal clients", "$985/mo retainer (5×$197)"],
                ["3 Business Pro clients", "$1,491/mo retainer (3×$497)"],
                ["1 Enterprise client", "$1,297/mo retainer"],
                ["Total retainer MRR", "~$3,773/mo (conservative)"],
                ["+ Setup revenue", "5×$897 + 3×$2,997 + 1×$9,500 = ~$23K"],
                ["Month 3 MRR target", "$6,000+"],
              ].map(([k, v], i) => (
                <div key={i} style={{ background: "rgba(255,255,255,.03)", borderRadius: "8px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", marginBottom: "2px" }}>{k}</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <Note color="#E94560">
            🎯 Goal: 10 clients on retainer by end of Month 3 = $5K+ MRR. Path to $10K MRR: mix of Business Pro (5 clients) + Enterprise (2) + Personal (10). All achievable with 1 good discovery call / day.
          </Note>
        </Section>

        {/* ── 7. Marketing & Distribution ── */}
        <Section title="Marketing & Channels" accent="#FF6B6B" tag="GROWTH">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { ch: "X / Twitter", play: "Post the real stuff. Security angle. The 21K exposed instances story. Personal AI wins. Tag OpenClaw community.", priority: "HIGH" },
              { ch: "LinkedIn", play: "B2B angle. Real estate, law, agencies. ROI framing. Case studies once clients start.", priority: "HIGH" },
              { ch: "TikTok / IG / FB", play: "Show it working. Screen recordings of the AI doing things. Shock and delight.", priority: "MED" },
              { ch: "OpenClaw Community", play: "Show up in their forums/Discord. Not selling — teaching. Build trust, then mention services.", priority: "HIGH" },
              { ch: "AI Newsletter Circuit", play: "Get featured. The security angle is genuinely newsworthy.", priority: "MED" },
              { ch: "The Blueprint Lead Magnet", play: "Captures DIY crowd. Nurtures toward paid. 5-day email sequence after download.", priority: "HIGH" },
            ].map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "10px 14px", background: "rgba(255,255,255,.02)", borderRadius: "8px", border: "1px solid rgba(255,255,255,.05)" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700 }}>{m.ch}</span>
                    <span style={{
                      fontSize: "9px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase",
                      color: m.priority === "HIGH" ? "#66BB6A" : "#D4A843",
                      background: m.priority === "HIGH" ? "rgba(102,187,106,.12)" : "rgba(212,168,67,.12)",
                      padding: "2px 6px", borderRadius: "3px",
                    }}>{m.priority}</span>
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,.4)", lineHeight: 1.6 }}>{m.play}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 8. Positioning & Messaging ── */}
        <Section title="Positioning & Key Messages" accent="#26C6DA" tag="MESSAGING">
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Note color="#26C6DA">
              <strong style={{ color: "white" }}>One-liner:</strong> We set up, secure, and manage OpenClaw — the most powerful personal AI assistant ever built — so you get the magic without the risk.
            </Note>
            <Note color="#26C6DA">
              <strong style={{ color: "white" }}>The security angle:</strong> Lead with honesty. This tool is powerful AND risky if done wrong. We address it head-on. That transparency builds trust faster than any marketing.
            </Note>
            <Note color="#26C6DA">
              <strong style={{ color: "white" }}>The differentiation:</strong> Text AI + Voice AI + shared memory. Nobody else does this combination. It&apos;s not a feature — it&apos;s the whole thing.
            </Note>
            <Note color="#26C6DA">
              <strong style={{ color: "white" }}>The emotional hook:</strong> More lake trips. More family time. Less overwhelm. This isn&apos;t about efficiency — it&apos;s about getting your life back.
            </Note>
          </div>
        </Section>

        {/* ── 9. Personal Notes ── */}
        <Section title="My Notes & Thinking" accent="#D4A843" tag="NOTES" defaultOpen>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,.6)", lineHeight: 1.9, background: "rgba(212,168,67,.04)", border: "1px solid rgba(212,168,67,.1)", borderRadius: "8px", padding: "16px" }}>
              <p style={{ marginBottom: "10px" }}>🦞 This project feels right. The market is real. The problem is real. The solution is something I literally live every day — I use OpenClaw for my own work. That authenticity matters.</p>
              <p style={{ marginBottom: "10px" }}>The pricing is elite and justified. $897 positions us as premium from day one. $2,997 is serious money for a business but the ROI is obvious — one booked appointment pays for the whole setup. Enterprise is completely defensible at $9,500 — we&apos;re delivering a full AI operation center.</p>
              <p style={{ marginBottom: "10px" }}>The Voice Staff angle is the real moat. Nobody else is combining text + voice AI for the same client. That&apos;s genuinely novel and I should lead with it more aggressively to premium buyers.</p>
              <p>Focus for the next 30 days: get 3 clients through the door. Even at $697 each. Real case studies beat any marketing I can write.</p>
            </div>

            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,.3)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px" }}>Quick Links</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {[
                ["Website", "https://claw-concierge-pi.vercel.app"],
                ["GitHub Repo", "https://github.com/ModernMustardSeed/claw-concierge"],
                ["Vercel Dashboard", "https://vercel.com"],
                ["Voice Staff", "https://voicestaff.pro"],
                ["OpenClaw Docs", "https://github.com/anthropics/claude-code"],
              ].map(([label, href], i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: "12px", color: "#D4A843", textDecoration: "none",
                  background: "rgba(212,168,67,.06)", border: "1px solid rgba(212,168,67,.15)",
                  borderRadius: "6px", padding: "6px 12px", transition: "all .2s",
                }}>
                  {label} →
                </a>
              ))}
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
