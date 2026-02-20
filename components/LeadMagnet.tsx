"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email service (ConvertKit, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <section style={{
      padding: "90px 24px",
      background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,168,67,.05), transparent 60%), #050d1a",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "5px", color: "#D4A843", marginBottom: "12px", textTransform: "uppercase" }}>
              Free Blueprint
            </div>
            <h2 style={{
              fontSize: "clamp(26px, 4.5vw, 46px)",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "16px",
            }}>
              Want to DIY it? We&apos;ll show you <span style={{ color: "#D4A843" }}>how far you can go.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,.45)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75 }}>
              Get our free <strong style={{ color: "white" }}>OpenClaw Architecture Blueprint</strong> — the 5-layer framework,
              model comparison guide, and platform overview. Enough to get started. Just enough to realize you might want us to do it right. 😉
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "stretch", justifyContent: "center" }}>
          {/* Blueprint preview card */}
          <ScrollReveal delay={0.1} style={{ flex: 1, minWidth: "260px", maxWidth: "380px" }}>
            <div style={{
              background: "rgba(10,22,40,.8)",
              border: "1px solid rgba(212,168,67,.2)",
              borderRadius: "20px",
              padding: "28px 24px",
              height: "100%",
            }}>
              {/* Blueprint cover mockup */}
              <div style={{
                background: "linear-gradient(135deg, #0a1628, #0d2847)",
                border: "1px solid rgba(212,168,67,.3)",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "20px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #D4A843, #E94560)" }} />
                <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "3px", color: "#D4A843", marginBottom: "8px", textTransform: "uppercase" }}>
                  🦞 Free Blueprint
                </div>
                <div style={{ fontSize: "18px", fontFamily: "'Playfair Display', serif", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
                  OpenClaw Architecture Blueprint
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    { icon: "🏗️", label: "5-Layer Architecture", unlocked: true },
                    { icon: "🤖", label: "Model Comparison Guide", unlocked: true },
                    { icon: "🌐", label: "Platform Overview", unlocked: true },
                    { icon: "🔒", label: "SOUL.md Templates", unlocked: false },
                    { icon: "🔒", label: "Security Configs", unlocked: false },
                    { icon: "🔒", label: "Skill Setup Scripts", unlocked: false },
                  ].map(({ icon, label, unlocked }, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      background: unlocked ? "rgba(212,168,67,.06)" : "rgba(0,0,0,.2)",
                      border: `1px solid ${unlocked ? "rgba(212,168,67,.12)" : "rgba(255,255,255,.04)"}`,
                    }}>
                      <span style={{ fontSize: "14px" }}>{icon}</span>
                      <span style={{ fontSize: "11px", color: unlocked ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.2)", fontWeight: 500 }}>
                        {label}
                      </span>
                      {unlocked && <span style={{ marginLeft: "auto", fontSize: "9px", color: "#D4A843", fontWeight: 700 }}>FREE</span>}
                      {!unlocked && <span style={{ marginLeft: "auto", fontSize: "9px", color: "rgba(255,255,255,.2)" }}>CLIENTS ONLY</span>}
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", lineHeight: 1.6, textAlign: "center" }}>
                The blueprint gives you the map. We&apos;ve built the territory.
              </p>
            </div>
          </ScrollReveal>

          {/* Email capture */}
          <ScrollReveal delay={0.15} style={{ flex: 1, minWidth: "260px", maxWidth: "380px" }}>
            {submitted ? (
              <div style={{
                background: "rgba(10,22,40,.8)",
                border: "1px solid rgba(102,187,106,.2)",
                borderRadius: "20px",
                padding: "40px 28px",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🦞</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>
                  Blueprint incoming!
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,.45)", lineHeight: 1.8 }}>
                  Check your inbox. The blueprint is on its way — including the architecture diagram, model comparison, and everything you need to understand the system.
                </p>
              </div>
            ) : (
              <div style={{
                background: "rgba(10,22,40,.8)",
                border: "1px solid rgba(212,168,67,.15)",
                borderRadius: "20px",
                padding: "32px 28px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", color: "#D4A843", marginBottom: "8px", textTransform: "uppercase" }}>
                  Get it free
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, marginBottom: "8px", lineHeight: 1.2 }}>
                  Send me the Blueprint
                </h3>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", lineHeight: 1.7, marginBottom: "24px" }}>
                  Enter your email and we&apos;ll send it instantly. No fluff. Just the architecture framework and enough context to get started — or get excited to have us do it.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input
                    type="text"
                    placeholder="First name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    style={{
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "white",
                      fontFamily: "'DM Sans', sans-serif",
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={{
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontSize: "14px",
                      color: "white",
                      fontFamily: "'DM Sans', sans-serif",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    className="cta"
                    style={{ padding: "14px 28px", background: "linear-gradient(135deg, #D4A843, #E8C060)" }}
                  >
                    Send Me the Blueprint →
                  </button>
                </form>

                <p style={{ fontSize: "11px", color: "rgba(255,255,255,.2)", marginTop: "14px", textAlign: "center" }}>
                  No spam. Unsubscribe anytime. The supersauce stays with our clients. 🔒
                </p>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
