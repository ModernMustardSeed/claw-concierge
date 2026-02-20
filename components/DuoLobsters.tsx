"use client";

// Two lobsters doing a jig side-by-side under a single spotlight
// Simple, clear, delightful — classy but makes you smile
export default function DuoLobsters({ size = 300 }: { size?: number }) {
  const lobWidth = Math.round(size * 0.45);

  return (
    <div style={{
      position: "relative",
      display: "inline-flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: `${Math.round(size * 0.06)}px`,
      paddingTop: `${Math.round(size * 0.22)}px`, // room above for the spotlight + antennae
    }}>

      {/* ── Left lobster — jig animation ── */}
      <div style={{
        animation: "jigLeft 1.6s ease-in-out infinite",
        transformOrigin: "center bottom",
        filter: "drop-shadow(0 0 18px rgba(233,69,96,.45))",
        lineHeight: 0,
      }}>
        <svg viewBox="0 0 400 400" width={lobWidth} height={lobWidth}>
          <defs>
            <linearGradient id="lgDL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#E94560" />
            </linearGradient>
          </defs>
          {/* Body */}
          <ellipse cx="200" cy="220" rx="55" ry="80" fill="url(#lgDL)" />
          <ellipse cx="200" cy="135" rx="42" ry="35" fill="url(#lgDL)" />
          {/* Eyes */}
          <circle cx="182" cy="118" r="6" fill="#0a1628" />
          <circle cx="218" cy="118" r="6" fill="#0a1628" />
          <circle cx="184" cy="116" r="2.5" fill="#fff" />
          <circle cx="220" cy="116" r="2.5" fill="#fff" />
          {/* Eye stalks */}
          <line x1="182" y1="124" x2="178" y2="108" stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
          <line x1="218" y1="124" x2="222" y2="108" stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
          {/* Antennae */}
          <path d="M178 108Q150 60 120 40" stroke="#FF6B6B" strokeWidth="3" fill="none" />
          <path d="M222 108Q250 60 280 40" stroke="#FF6B6B" strokeWidth="3" fill="none" />
          <path d="M178 108Q160 70 140 55" stroke="#FF6B6B" strokeWidth="2.5" fill="none" />
          <path d="M222 108Q240 70 260 55" stroke="#FF6B6B" strokeWidth="2.5" fill="none" />
          {/* Left claw arm */}
          <path d="M155 160Q100 130 75 115" stroke="url(#lgDL)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <ellipse cx="62" cy="100" rx="25" ry="18" fill="url(#lgDL)" transform="rotate(-30 62 100)" />
          <path d="M48 85Q30 70 25 62" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M48 85Q38 95 32 105" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Right claw arm */}
          <path d="M245 160Q300 130 325 115" stroke="url(#lgDL)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <ellipse cx="338" cy="100" rx="25" ry="18" fill="url(#lgDL)" transform="rotate(30 338 100)" />
          <path d="M352 85Q370 70 375 62" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M352 85Q362 95 368 105" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* Legs */}
          {[200, 220, 240].map(y => (
            <g key={y}>
              <line x1="160" y1={y} x2={y === 200 ? 120 : y === 220 ? 115 : 118} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
              <line x1="240" y1={y} x2={y === 200 ? 280 : y === 220 ? 285 : 282} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
            </g>
          ))}
          {/* Tail */}
          <ellipse cx="200" cy="295" rx="45" ry="18" fill="#C13048" />
          <ellipse cx="200" cy="318" rx="38" ry="15" fill="#C13048" />
          <ellipse cx="200" cy="338" rx="30" ry="12" fill="#C13048" />
          <ellipse cx="200" cy="362" rx="35" ry="14" fill="url(#lgDL)" />
          {/* Smile */}
          <path d="M186 142Q200 155 214 142" stroke="#0a1628" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── Right lobster — offset jig, mirrored ── */}
      <div style={{
        animation: "jigRight 1.6s ease-in-out infinite",
        transformOrigin: "center bottom",
        filter: "drop-shadow(0 0 18px rgba(233,69,96,.45))",
        lineHeight: 0,
      }}>
        <svg viewBox="0 0 400 400" width={lobWidth} height={lobWidth}>
          <defs>
            <linearGradient id="lgDR" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF8080" />
              <stop offset="100%" stopColor="#E94560" />
            </linearGradient>
          </defs>
          {/* Mirrored via transform */}
          <g transform="translate(400,0) scale(-1,1)">
            {/* Body */}
            <ellipse cx="200" cy="220" rx="55" ry="80" fill="url(#lgDR)" />
            <ellipse cx="200" cy="135" rx="42" ry="35" fill="url(#lgDR)" />
            {/* Eyes */}
            <circle cx="182" cy="118" r="6" fill="#0a1628" />
            <circle cx="218" cy="118" r="6" fill="#0a1628" />
            <circle cx="184" cy="116" r="2.5" fill="#fff" />
            <circle cx="220" cy="116" r="2.5" fill="#fff" />
            {/* Eye stalks */}
            <line x1="182" y1="124" x2="178" y2="108" stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
            <line x1="218" y1="124" x2="222" y2="108" stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
            {/* Antennae */}
            <path d="M178 108Q150 60 120 40" stroke="#FF8080" strokeWidth="3" fill="none" />
            <path d="M222 108Q250 60 280 40" stroke="#FF8080" strokeWidth="3" fill="none" />
            <path d="M178 108Q160 70 140 55" stroke="#FF8080" strokeWidth="2.5" fill="none" />
            <path d="M222 108Q240 70 260 55" stroke="#FF8080" strokeWidth="2.5" fill="none" />
            {/* Left claw arm */}
            <path d="M155 160Q100 130 75 115" stroke="url(#lgDR)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <ellipse cx="62" cy="100" rx="25" ry="18" fill="url(#lgDR)" transform="rotate(-30 62 100)" />
            <path d="M48 85Q30 70 25 62" stroke="#FF8080" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M48 85Q38 95 32 105" stroke="#FF8080" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Right claw arm */}
            <path d="M245 160Q300 130 325 115" stroke="url(#lgDR)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <ellipse cx="338" cy="100" rx="25" ry="18" fill="url(#lgDR)" transform="rotate(30 338 100)" />
            <path d="M352 85Q370 70 375 62" stroke="#FF8080" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M352 85Q362 95 368 105" stroke="#FF8080" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Legs */}
            {[200, 220, 240].map(y => (
              <g key={y}>
                <line x1="160" y1={y} x2={y === 200 ? 120 : y === 220 ? 115 : 118} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
                <line x1="240" y1={y} x2={y === 200 ? 280 : y === 220 ? 285 : 282} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
              </g>
            ))}
            {/* Tail */}
            <ellipse cx="200" cy="295" rx="45" ry="18" fill="#C13048" />
            <ellipse cx="200" cy="318" rx="38" ry="15" fill="#C13048" />
            <ellipse cx="200" cy="338" rx="30" ry="12" fill="#C13048" />
            <ellipse cx="200" cy="362" rx="35" ry="14" fill="url(#lgDR)" />
            {/* Smile */}
            <path d="M186 142Q200 155 214 142" stroke="#0a1628" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {/* Floor glow */}
      <div style={{
        position: "absolute",
        bottom: "-4px",
        left: "50%",
        transform: "translateX(-50%)",
        width: `${Math.round(size * 0.85)}px`,
        height: "20px",
        background: "radial-gradient(ellipse at 50% 100%, rgba(233,69,96,0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}
