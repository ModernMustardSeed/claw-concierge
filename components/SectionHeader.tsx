import { ReactNode } from "react";

interface SectionHeaderProps {
  tag?: string;
  title: ReactNode;
  sub?: string;
}

export default function SectionHeader({ tag, title, sub }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "48px" }}>
      {tag && (
        <div style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "5px",
          color: "#E94560",
          marginBottom: "12px",
          textTransform: "uppercase",
        }}>
          {tag}
        </div>
      )}
      <h2 style={{
        fontSize: "clamp(26px, 4.5vw, 46px)",
        fontFamily: "'Playfair Display', serif",
        fontWeight: 800,
        lineHeight: 1.15,
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,.45)",
          maxWidth: "620px",
          margin: "16px auto 0",
          lineHeight: 1.75,
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}
