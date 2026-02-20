"use client";

import { useState } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  teaser: string;
  accent?: string;
  bullets: string[];
  example?: string;
  exampleLabel?: string;
}

export default function FeatureCard({
  icon, title, teaser, accent = "#E94560", bullets, example, exampleLabel = "Real Example",
}: FeatureCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderRadius: "16px",
        border: `1px solid ${open ? accent + "30" : "rgba(255,255,255,.07)"}`,
        background: open ? `${accent}06` : "rgba(10,22,40,.5)",
        transition: "all .3s ease",
        overflow: "hidden",
      }}
    >
      {/* Header row — always visible */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", gap: "16px",
          padding: "20px 24px", cursor: "pointer",
        }}
      >
        <div style={{
          width: "52px", height: "52px", borderRadius: "14px", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "26px",
          background: `${accent}12`, border: `1px solid ${accent}22`,
          transition: "all .3s",
          boxShadow: open ? `0 0 18px ${accent}25` : "none",
        }}>
          {icon}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "16px", fontWeight: 700, fontFamily: "'Playfair Display', serif", marginBottom: "3px" }}>
            {title}
          </div>
          <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,.4)", lineHeight: 1.5 }}>
            {teaser}
          </div>
        </div>

        <div style={{
          width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: open ? `${accent}18` : "rgba(255,255,255,.04)",
          border: `1px solid ${open ? accent + "35" : "rgba(255,255,255,.08)"}`,
          transition: "all .3s",
        }}>
          <span style={{
            fontSize: "13px", color: open ? accent : "rgba(255,255,255,.4)",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform .3s",
            display: "block", lineHeight: 1,
          }}>▾</span>
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div style={{
          padding: "0 24px 24px",
          borderTop: `1px solid ${accent}12`,
        }}>
          {/* Bullet points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "18px" }}>
            {bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: accent, flexShrink: 0, marginTop: "7px",
                }} />
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,.65)", lineHeight: 1.75 }}>{b}</span>
              </div>
            ))}
          </div>

          {/* Real example block */}
          {example && (
            <div style={{
              marginTop: "18px",
              background: `${accent}08`,
              border: `1px solid ${accent}18`,
              borderRadius: "10px",
              padding: "14px 16px",
            }}>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: accent, textTransform: "uppercase", marginBottom: "6px" }}>
                {exampleLabel}
              </div>
              <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,.55)", lineHeight: 1.8, fontStyle: "italic" }}>
                &ldquo;{example}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
