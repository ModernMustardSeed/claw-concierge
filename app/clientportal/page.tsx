"use client";

import { useState } from "react";
import DuoLobsters from "@/components/DuoLobsters";

const STARS = [
  { t: 8, l: 12, s: 1.5, o: 0.15 }, { t: 18, l: 85, s: 2, o: 0.12 },
  { t: 35, l: 5, s: 1, o: 0.18 }, { t: 42, l: 94, s: 1.5, o: 0.14 },
  { t: 62, l: 8, s: 2, o: 0.1 }, { t: 75, l: 90, s: 1, o: 0.16 },
  { t: 85, l: 22, s: 1.5, o: 0.12 }, { t: 90, l: 72, s: 2, o: 0.1 },
  { t: 25, l: 50, s: 1, o: 0.08 }, { t: 55, l: 38, s: 1.5, o: 0.1 },
  { t: 12, l: 65, s: 1, o: 0.14 }, { t: 70, l: 55, s: 2, o: 0.08 },
];

export default function ClientPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Portal auth coming soon — for now show message
    setTimeout(() => setLoading(false), 1500);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,.06)",
    border: "1px solid rgba(255,255,255,.1)",
    borderRadius: "12px",
    padding: "13px 16px",
    color: "white",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color .2s",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,50,100,.4) 0%, transparent 60%), linear-gradient(180deg, #050d1a 0%, #0a1e3d 40%, #0d2847 70%, #050d1a 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif", color: "white",
      position: "relative", overflow: "hidden", padding: "40px 20px",
    }}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Moon */}
      <div style={{
        position: "absolute", top: "8%", left: "6%",
        width: "140px", height: "140px", borderRadius: "50%",
        background: "radial-gradient(circle at 50% 50%, rgba(230,240,255,.25) 0%, rgba(180,205,255,.12) 30%, transparent 70%)",
        border: "1px solid rgba(200,220,255,.1)",
        pointerEvents: "none",
      }} />

      {/* Stars */}
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: "absolute", top: `${s.t}%`, left: `${s.l}%`,
          width: `${s.s}px`, height: `${s.s}px`, borderRadius: "50%",
          background: "white", opacity: s.o, pointerEvents: "none",
        }} />
      ))}

      {/* Background glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
        width: "500px", height: "300px",
        background: "radial-gradient(ellipse at 50% 50%, rgba(233,69,96,.05), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Back link */}
      <a href="/" style={{
        position: "absolute", top: "24px", left: "24px",
        fontSize: "12px", color: "rgba(255,255,255,.3)", textDecoration: "none",
        display: "flex", alignItems: "center", gap: "6px",
        transition: "color .2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,.7)")}
        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.3)")}
      >
        ← Back to site
      </a>

      <div style={{ textAlign: "center", position: "relative", zIndex: 10, width: "100%", maxWidth: "420px" }}>

        {/* Hugging lobsters */}
        <div style={{ marginBottom: "16px", filter: "drop-shadow(0 20px 40px rgba(233,69,96,.15))" }}>
          <DuoLobsters size={220} />
        </div>

        {/* Login card */}
        <div style={{
          background: "rgba(5,13,26,.88)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(233,69,96,.2)",
          borderRadius: "24px",
          padding: "44px 32px 36px",
          boxShadow: "0 30px 80px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.06)",
        }}>
          {/* Label */}
          <div style={{
            fontSize: "9px", fontWeight: 700, letterSpacing: "5px",
            color: "#E94560", textTransform: "uppercase", marginBottom: "8px",
            animation: "none",
          }}>
            VIP CLIENT PORTAL
          </div>

          <h1 style={{
            fontSize: "30px", fontFamily: "'Playfair Display', serif",
            fontWeight: 900, marginBottom: "6px", lineHeight: 1.1,
          }}>
            Enter the Claw
          </h1>

          <p style={{
            fontSize: "13px", color: "rgba(255,255,255,.3)",
            marginBottom: "30px", lineHeight: 1.6,
          }}>
            Your AI. Your progress. Your brain. All here.
          </p>

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = "rgba(233,69,96,.4)")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,.1)")}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = "rgba(233,69,96,.4)")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,.1)")}
            />

            <button
              type="submit"
              disabled={loading || !email || !password}
              style={{
                width: "100%", padding: "15px",
                background: loading || !email || !password
                  ? "rgba(255,255,255,.1)"
                  : "linear-gradient(135deg,#E94560,#FF6B6B)",
                border: "none", borderRadius: "12px", color: "white",
                fontSize: "14px", fontWeight: 700, cursor: loading || !email || !password ? "not-allowed" : "pointer",
                fontFamily: "'DM Sans', sans-serif", marginTop: "4px",
                transition: "all .2s",
              }}
            >
              {loading ? "Entering..." : "🦞 Enter the Claw"}
            </button>
          </form>

          <div style={{
            marginTop: "20px", fontSize: "12px",
            color: "rgba(255,255,255,.2)", lineHeight: 1.6,
          }}>
            Not a client yet?{" "}
            <a href="/#audit" style={{ color: "#E94560", textDecoration: "none", fontWeight: 600 }}>
              Book your free audit →
            </a>
            <br />
            <span style={{ fontSize: "11px" }}>Full portal coming soon. Sarah will send you login details after setup.</span>
          </div>
        </div>

        {/* Heart signature */}
        <div style={{
          marginTop: "28px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
          fontSize: "13px", color: "rgba(255,255,255,.2)",
        }}>
          <span style={{ color: "#E94560", fontSize: "16px" }}>♥</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "14px" }}>
            Lobster LouLou
          </span>
        </div>
      </div>
    </div>
  );
}
