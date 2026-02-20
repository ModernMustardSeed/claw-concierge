"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  answers: Record<number, string | string[]>;
}

const questions = [
  { n: 1, q: "What's your business or role?", h: "e.g. Real estate agent, agency owner, solopreneur, content creator...", type: "text" },
  { n: 2, q: "What tasks eat most of your time?", h: "e.g. Email, scheduling, lead follow-up, content creation, research...", type: "text" },
  { n: 3, q: "Which messaging platforms do you use daily?", opts: ["WhatsApp", "Telegram", "Slack", "Discord", "iMessage", "Signal", "Email", "Teams"], multi: true },
  { n: 4, q: "Do you need AI to handle phone calls?", opts: ["Yes — I miss calls all the time", "Maybe — tell me more about Voice Staff", "No — text/chat only for now"] },
  { n: 5, q: "How technical are you?", opts: ["Not at all — just make it work", "I can follow instructions", "Somewhat technical", "I'm a developer"] },
  { n: 6, q: "What's your monthly AI budget?", opts: ["Under $150/mo", "$150–$500/mo", "$500–$1,000/mo", "Whatever it takes"] },
  { n: 7, q: "Do you want to manage it yourself eventually?", opts: ["Yes — teach me everything", "Maybe later — manage it for now", "No — just handle it forever"] },
  { n: 8, q: "What would your dream AI assistant do in its first week?", h: "Dream big. What would change your daily life?", type: "textarea" },
];

export default function AuditForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", answers: {} });

  const setAnswer = (n: number, val: string, multi = false) => {
    setForm(prev => {
      if (multi) {
        const current = (prev.answers[n] as string[]) || [];
        const updated = current.includes(val) ? current.filter(v => v !== val) : [...current, val];
        return { ...prev, answers: { ...prev.answers, [n]: updated } };
      }
      return { ...prev, answers: { ...prev.answers, [n]: val } };
    });
  };

  const isSelected = (n: number, val: string) => {
    const ans = form.answers[n];
    if (Array.isArray(ans)) return ans.includes(val);
    return ans === val;
  };

  const handleSubmit = () => {
    // TODO: wire to Supabase/email service
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "white",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color .2s",
  };

  return (
    <div style={{
      background: "rgba(10,22,40,.6)",
      border: "1px solid rgba(233,69,96,.1)",
      borderRadius: "20px",
      overflow: "hidden",
    }}>
      {/* Header toggle */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "22px 28px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: open ? "rgba(233,69,96,.03)" : "transparent",
          transition: "all .3s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "24px" }}>📋</span>
          <div>
            <div style={{ fontSize: "16px", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
              {open ? "Complete Your Audit" : "Take the 2-Minute Claw Readiness Audit"}
            </div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", marginTop: "2px" }}>
              {open ? "Answer below, then book your free call" : "Click to expand → 8 questions → book your free discovery call"}
            </div>
          </div>
        </div>
        <span style={{
          fontSize: "22px",
          color: "#E94560",
          transform: open ? "rotate(180deg)" : "none",
          transition: "transform .3s",
          flexShrink: 0,
        }}>▾</span>
      </div>

      {open && (
        <div style={{ padding: "0 28px 36px", borderTop: "1px solid rgba(255,255,255,.04)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🦞</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
                You&apos;re in the claw!
              </h3>
              <p style={{ color: "rgba(255,255,255,.5)", fontSize: "14px", lineHeight: 1.8 }}>
                We&apos;ve received your audit. Check your inbox — we&apos;ll send you a personalized recommendation
                and a link to book your free 15-minute discovery call.
              </p>
            </div>
          ) : (
            <>
              {/* ── Contact Info ── */}
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  marginBottom: "4px",
                }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#E94560", fontFamily: "'JetBrains Mono', monospace" }}>00</span>
                  <span style={{ fontSize: "14px", fontWeight: 700 }}>Your contact details</span>
                </div>
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle}
                />
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={form.phone}
                  onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  style={inputStyle}
                />
              </div>

              {/* ── Questions ── */}
              {questions.map((item, i) => (
                <div key={i} style={{ marginTop: "28px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline", marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#E94560", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                      {String(item.n).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 700 }}>{item.q}</span>
                  </div>

                  {item.type === "text" && (
                    <input
                      type="text"
                      placeholder={item.h}
                      value={(form.answers[item.n] as string) || ""}
                      onChange={e => setAnswer(item.n, e.target.value)}
                      style={inputStyle}
                    />
                  )}
                  {item.type === "textarea" && (
                    <textarea
                      placeholder={item.h}
                      value={(form.answers[item.n] as string) || ""}
                      onChange={e => setAnswer(item.n, e.target.value)}
                      style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                    />
                  )}
                  {item.opts && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                      {item.opts.map((opt, oi) => {
                        const sel = isSelected(item.n, opt);
                        return (
                          <span
                            key={oi}
                            onClick={() => setAnswer(item.n, opt, item.multi)}
                            style={{
                              padding: "7px 14px",
                              borderRadius: "30px",
                              border: sel ? "1px solid #E94560" : "1px solid rgba(255,255,255,.1)",
                              fontSize: "12px",
                              color: sel ? "white" : "rgba(255,255,255,.5)",
                              background: sel ? "rgba(233,69,96,.15)" : "transparent",
                              cursor: "pointer",
                              transition: "all .2s",
                              userSelect: "none",
                            }}
                          >
                            {opt}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Submit */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: "22px", marginTop: "28px", textAlign: "center" }}>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,.35)", marginBottom: "16px" }}>
                  Submit your audit → we&apos;ll review it → then book your free 15-minute discovery call with a personalized recommendation.
                </p>
                <button
                  className="cta"
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email}
                  style={{
                    padding: "14px 48px",
                    opacity: (!form.name || !form.email) ? 0.5 : 1,
                    cursor: (!form.name || !form.email) ? "not-allowed" : "pointer",
                  }}
                >
                  Submit Audit & Book Call →
                </button>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,.2)", marginTop: "12px" }}>
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
