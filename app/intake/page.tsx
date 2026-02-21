"use client";

import { useState } from "react";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
  website: string;
  teamSize: string;
  revenue: string;
  referral: string;
  // Pain
  biggestPain: string;
  manualTasks: string;
  missedLeads: string;
  // AI
  aiExperience: string;
  currentTools: string;
  // Dream
  dreamOutcome: string;
  topGoal: string;
  // Channels
  channels: string[];
  timeline: string;
  budget: string;
  questions: string;
}

const EMPTY: FormState = {
  firstName: "", lastName: "", email: "", phone: "",
  business: "", industry: "", website: "", teamSize: "", revenue: "", referral: "",
  biggestPain: "", manualTasks: "", missedLeads: "",
  aiExperience: "", currentTools: "",
  dreamOutcome: "", topGoal: "",
  channels: [], timeline: "", budget: "", questions: "",
};

const CHANNEL_OPTIONS = ["WhatsApp", "Telegram", "Email", "Slack", "SMS", "Voice/Phone"];
const TIMELINE_OPTIONS = ["ASAP — I'm ready now", "1–2 weeks", "This month", "Next month", "Just exploring"];
const BUDGET_OPTIONS = ["Personal Claw ($897)", "Business Pro ($2,997)", "Enterprise + Voice ($9,500+)", "VIP Day ($8,000)", "Not sure yet — let's talk"];
const TEAM_OPTIONS = ["Just me", "2–5 people", "6–15 people", "15+ people"];
const REVENUE_OPTIONS = ["Pre-revenue", "Under $10k/mo", "$10k–$50k/mo", "$50k–$200k/mo", "$200k+/mo"];

export default function IntakePage() {
  const [form, setForm] = useState<FormState>({ ...EMPTY });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);

  function set(key: keyof FormState, val: string) {
    setForm(p => ({ ...p, [key]: val }));
  }

  function toggleChannel(ch: string) {
    setForm(p => ({
      ...p,
      channels: p.channels.includes(ch) ? p.channels.filter(c => c !== ch) : [...p.channels, ch],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Format for email / copy
    setSubmitted(true);
  }

  const STEPS = [
    { title: "About You", icon: "👋" },
    { title: "Your Business", icon: "🏢" },
    { title: "The Problem", icon: "🔥" },
    { title: "Your Dream", icon: "✨" },
    { title: "Details", icon: "📋" },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.12)", borderRadius: "10px",
    padding: "12px 16px", color: "white", fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box",
    outline: "none", transition: "border-color .2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
    color: "rgba(255,255,255,.4)", textTransform: "uppercase", marginBottom: "7px", display: "block",
  };

  if (submitted) {
    const text = Object.entries(form).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n");
    return (
      <div style={{ minHeight: "100vh", background: "#050d1a", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", fontFamily: "'DM Sans', sans-serif", color: "white" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <div style={{ maxWidth: "560px", width: "100%", textAlign: "center" }}>
          <div style={{ fontSize: "56px", marginBottom: "20px" }}>🦞🎉</div>
          <h1 style={{ fontSize: "32px", fontFamily: "'Playfair Display', serif", fontWeight: 900, marginBottom: "12px", color: "#E94560" }}>
            You&apos;re in the Claw!
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,.55)", lineHeight: 1.8, marginBottom: "28px" }}>
            Sarah personally reviews every intake. You&apos;ll hear back within 24 hours to schedule your free Claw Readiness Audit.
          </p>
          <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "14px", padding: "20px", marginBottom: "24px", textAlign: "left" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#E94560", marginBottom: "12px" }}>YOUR INTAKE (copy this to send Sarah)</div>
            <pre style={{ fontSize: "11px", color: "rgba(255,255,255,.5)", lineHeight: 1.8, whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0, fontFamily: "'JetBrains Mono', monospace" }}>
              {text}
            </pre>
          </div>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => { navigator.clipboard.writeText(text); }}
              style={{ padding: "12px 24px", background: "rgba(233,69,96,.15)", border: "1px solid rgba(233,69,96,.25)", borderRadius: "10px", color: "#E94560", fontSize: "13px", fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
            >
              Copy Intake Data
            </button>
            <a href="/" style={{ padding: "12px 24px", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "10px", color: "rgba(255,255,255,.5)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              Back to site
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#050d1a", color: "white", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ background: "rgba(5,13,26,.95)", borderBottom: "1px solid rgba(255,255,255,.06)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontSize: "13px", fontWeight: 800, fontFamily: "'Playfair Display', serif", color: "white", textDecoration: "none" }}>
          🦞 The Claw Concierge
        </a>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,.3)", fontWeight: 600, letterSpacing: "2px" }}>CLIENT INTAKE FORM</div>
      </div>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "48px 24px 32px", maxWidth: "640px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "5px", color: "#E94560", textTransform: "uppercase", marginBottom: "12px" }}>
          CLAW READINESS INTAKE
        </div>
        <h1 style={{ fontSize: "clamp(28px,5vw,44px)", fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1.1, marginBottom: "14px" }}>
          Tell us about yourself.<br />
          <span style={{ color: "#E94560" }}>We&apos;ll do the rest.</span>
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,.45)", lineHeight: 1.8 }}>
          Takes about 5 minutes. Sarah reviews every intake personally and reaches out within 24 hours.
        </p>
      </div>

      {/* Progress */}
      <div style={{ maxWidth: "640px", margin: "0 auto 32px", padding: "0 24px" }}>
        <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ flex: 1, height: "3px", borderRadius: "3px", background: i <= step ? "#E94560" : "rgba(255,255,255,.1)", transition: "background .3s" }} />
          ))}
        </div>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,.35)", fontWeight: 600 }}>
          Step {step + 1} of {STEPS.length} — {STEPS[step].icon} {STEPS[step].title}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: "640px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: "20px", padding: "32px 28px", marginBottom: "20px" }}>

          {/* STEP 0: About You */}
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={labelStyle}>First Name *</label>
                  <input required style={inputStyle} placeholder="Jane" value={form.firstName} onChange={e => set("firstName", e.target.value)} />
                </div>
                <div>
                  <label style={labelStyle}>Last Name *</label>
                  <input required style={inputStyle} placeholder="Smith" value={form.lastName} onChange={e => set("lastName", e.target.value)} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Email Address *</label>
                <input required type="email" style={inputStyle} placeholder="jane@example.com" value={form.email} onChange={e => set("email", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input style={inputStyle} placeholder="(406) 555-0100" value={form.phone} onChange={e => set("phone", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>How did you hear about us?</label>
                <input style={inputStyle} placeholder="YouTube, referral from _____, social media, etc." value={form.referral} onChange={e => set("referral", e.target.value)} />
              </div>
            </div>
          )}

          {/* STEP 1: Your Business */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={labelStyle}>Business / Brand Name *</label>
                <input required style={inputStyle} placeholder="Jane's Studio" value={form.business} onChange={e => set("business", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Industry *</label>
                <input required style={inputStyle} placeholder="Real estate, e-commerce, coaching, legal, etc." value={form.industry} onChange={e => set("industry", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Website (if any)</label>
                <input style={inputStyle} placeholder="https://yoursite.com" value={form.website} onChange={e => set("website", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Team Size</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {TEAM_OPTIONS.map(o => (
                    <button key={o} type="button" onClick={() => set("teamSize", o)} style={{ padding: "8px 16px", borderRadius: "20px", border: `1px solid ${form.teamSize === o ? "rgba(233,69,96,.5)" : "rgba(255,255,255,.1)"}`, background: form.teamSize === o ? "rgba(233,69,96,.15)" : "transparent", color: form.teamSize === o ? "#E94560" : "rgba(255,255,255,.5)", fontSize: "12px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                      {o}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Monthly Revenue (approx.)</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {REVENUE_OPTIONS.map(o => (
                    <button key={o} type="button" onClick={() => set("revenue", o)} style={{ padding: "8px 16px", borderRadius: "20px", border: `1px solid ${form.revenue === o ? "rgba(233,69,96,.5)" : "rgba(255,255,255,.1)"}`, background: form.revenue === o ? "rgba(233,69,96,.15)" : "transparent", color: form.revenue === o ? "#E94560" : "rgba(255,255,255,.5)", fontSize: "12px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: The Problem */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={labelStyle}>What is your biggest pain right now? *</label>
                <textarea required rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="Be honest — the more specific you are, the better we can help." value={form.biggestPain} onChange={e => set("biggestPain", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>What tasks do you do manually that drive you crazy?</label>
                <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="e.g. Answering the same emails, data entry, following up on leads, scheduling..." value={form.manualTasks} onChange={e => set("manualTasks", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Are you missing leads or opportunities right now?</label>
                <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="e.g. After-hours inquiries, slow follow-up, leads falling through the cracks..." value={form.missedLeads} onChange={e => set("missedLeads", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Current tools you use (CRM, email, etc.)</label>
                <input style={inputStyle} placeholder="HubSpot, Notion, Gmail, Calendly, etc." value={form.currentTools} onChange={e => set("currentTools", e.target.value)} />
              </div>
            </div>
          )}

          {/* STEP 3: Your Dream */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={labelStyle}>Describe your dream scenario. What does life look like with a perfect AI? *</label>
                <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} placeholder="Paint the picture — what happens when you wake up in the morning? What's off your plate? What's working automatically?" value={form.dreamOutcome} onChange={e => set("dreamOutcome", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>What&apos;s your #1 goal for the next 90 days?</label>
                <input style={inputStyle} placeholder="e.g. Book 10 new clients, stop working nights, launch a new product..." value={form.topGoal} onChange={e => set("topGoal", e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>AI experience so far</label>
                <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="Have you tried ChatGPT, Claude, etc.? What worked? What frustrated you?" value={form.aiExperience} onChange={e => set("aiExperience", e.target.value)} />
              </div>
            </div>
          )}

          {/* STEP 4: Details */}
          {step === 4 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={labelStyle}>Preferred communication channels</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {CHANNEL_OPTIONS.map(ch => (
                    <button key={ch} type="button" onClick={() => toggleChannel(ch)} style={{ padding: "8px 16px", borderRadius: "20px", border: `1px solid ${form.channels.includes(ch) ? "rgba(233,69,96,.5)" : "rgba(255,255,255,.1)"}`, background: form.channels.includes(ch) ? "rgba(233,69,96,.15)" : "transparent", color: form.channels.includes(ch) ? "#E94560" : "rgba(255,255,255,.5)", fontSize: "12px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                      {form.channels.includes(ch) ? "✓ " : ""}{ch}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>When do you want to get started?</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  {TIMELINE_OPTIONS.map(o => (
                    <button key={o} type="button" onClick={() => set("timeline", o)} style={{ padding: "10px 16px", borderRadius: "10px", border: `1px solid ${form.timeline === o ? "rgba(233,69,96,.4)" : "rgba(255,255,255,.08)"}`, background: form.timeline === o ? "rgba(233,69,96,.1)" : "transparent", color: form.timeline === o ? "#E94560" : "rgba(255,255,255,.5)", fontSize: "13px", fontWeight: form.timeline === o ? 700 : 400, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left" }}>
                      {form.timeline === o ? "● " : "○ "}{o}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Investment range you&apos;re considering</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  {BUDGET_OPTIONS.map(o => (
                    <button key={o} type="button" onClick={() => set("budget", o)} style={{ padding: "10px 16px", borderRadius: "10px", border: `1px solid ${form.budget === o ? "rgba(233,69,96,.4)" : "rgba(255,255,255,.08)"}`, background: form.budget === o ? "rgba(233,69,96,.1)" : "transparent", color: form.budget === o ? "#E94560" : "rgba(255,255,255,.5)", fontSize: "13px", fontWeight: form.budget === o ? 700 : 400, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", textAlign: "left" }}>
                      {form.budget === o ? "● " : "○ "}{o}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Any questions or anything else Sarah should know?</label>
                <textarea rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="Ask away — nothing is off limits." value={form.questions} onChange={e => set("questions", e.target.value)} />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "12px" }}>
          {step > 0 && (
            <button type="button" onClick={() => setStep(s => s - 1)} style={{ padding: "14px 24px", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: "12px", color: "rgba(255,255,255,.6)", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              ← Back
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button type="button" onClick={() => setStep(s => s + 1)} style={{ flex: 1, padding: "14px", background: "linear-gradient(135deg,#E94560,#FF6B6B)", border: "none", borderRadius: "12px", color: "white", fontSize: "14px", fontWeight: 800, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Continue → {STEPS[step + 1].icon} {STEPS[step + 1].title}
            </button>
          ) : (
            <button type="submit" style={{ flex: 1, padding: "14px", background: "linear-gradient(135deg,#E94560,#FF6B6B)", border: "none", borderRadius: "12px", color: "white", fontSize: "15px", fontWeight: 800, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              🦞 Submit My Intake
            </button>
          )}
        </div>

        <p style={{ textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,.2)", marginTop: "16px" }}>
          Your info is private and only shared with Sarah. No spam, ever.
        </p>
      </form>
    </div>
  );
}
