"use client";

import { useState } from "react";

interface FAQItemProps {
  q: string;
  a: string;
}

export default function FAQItem({ q, a }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,.07)", padding: "18px 0" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "15px", fontWeight: 600, color: "white", paddingRight: "16px" }}>{q}</span>
        <span style={{
          fontSize: "20px",
          color: "#E94560",
          transform: open ? "rotate(45deg)" : "none",
          transition: "transform .3s",
          flexShrink: 0,
        }}>+</span>
      </div>
      {open && (
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.45)", lineHeight: 1.8, paddingTop: "12px" }}>
          {a}
        </p>
      )}
    </div>
  );
}
