"use client";

// Two elegant lobsters under dramatic spotlights, bowing to each other
// Left one bows forward, right one (mirrored) bows in return — classy, theatrical, makes you smile
export default function DuoLobsters({ size = 320 }: { size?: number }) {
  return (
    <div style={{ position: "relative", width: size, height: size * 0.65, margin: "0 auto" }}>
      {/* Stage floor glow */}
      <div style={{
        position: "absolute",
        bottom: "0",
        left: "10%",
        width: "80%",
        height: "30px",
        background: "radial-gradient(ellipse at 50% 100%, rgba(233,69,96,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <svg
        viewBox="0 0 820 520"
        width={size}
        height={size * 0.65}
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Lobster gradient — left */}
          <linearGradient id="lbL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#E94560" />
          </linearGradient>
          {/* Lobster gradient — right */}
          <linearGradient id="lbR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8080" />
            <stop offset="100%" stopColor="#E94560" />
          </linearGradient>

          {/* Left spotlight cone */}
          <radialGradient id="spotL" cx="30%" cy="0%" r="80%" fx="30%" fy="0%">
            <stop offset="0%" stopColor="rgba(255,200,120,0.55)" />
            <stop offset="35%" stopColor="rgba(255,170,80,0.22)" />
            <stop offset="100%" stopColor="rgba(255,140,60,0)" />
          </radialGradient>

          {/* Right spotlight cone */}
          <radialGradient id="spotR" cx="70%" cy="0%" r="80%" fx="70%" fy="0%">
            <stop offset="0%" stopColor="rgba(255,200,120,0.55)" />
            <stop offset="35%" stopColor="rgba(255,170,80,0.22)" />
            <stop offset="100%" stopColor="rgba(255,140,60,0)" />
          </radialGradient>

          {/* Shadow gradient for floor */}
          <radialGradient id="shadowL" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(233,69,96,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <radialGradient id="shadowR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(233,69,96,0.25)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="glowF" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── LEFT SPOTLIGHT CONE ── */}
        <polygon
          points="200,0 80,520 320,520"
          fill="url(#spotL)"
          style={{ animation: "spotGlow 4s ease-in-out infinite" }}
        />
        {/* Bright center beam left */}
        <polygon
          points="200,0 160,520 240,520"
          fill="rgba(255,220,140,0.12)"
          style={{ animation: "spotGlow 4s ease-in-out infinite 0.5s" }}
        />

        {/* ── RIGHT SPOTLIGHT CONE ── */}
        <polygon
          points="620,0 500,520 740,520"
          fill="url(#spotR)"
          style={{ animation: "spotGlow 4s ease-in-out infinite 2s" }}
        />
        {/* Bright center beam right */}
        <polygon
          points="620,0 580,520 660,520"
          fill="rgba(255,220,140,0.12)"
          style={{ animation: "spotGlow 4s ease-in-out infinite 2.5s" }}
        />

        {/* ── FLOOR SHADOWS ── */}
        <ellipse cx="205" cy="505" rx="75" ry="14" fill="url(#shadowL)" />
        <ellipse cx="615" cy="505" rx="75" ry="14" fill="url(#shadowR)" />

        {/* ── LEFT LOBSTER (bowing forward, tilted toward right) ── */}
        <g
          transform="translate(205, 260) scale(0.72)"
          style={{
            transformOrigin: "0px 0px",
            animation: "bowLeft 5s ease-in-out infinite",
          }}
          filter="url(#glowF)"
        >
          <g transform="translate(-200, -220)">
            {/* Body */}
            <ellipse cx="200" cy="220" rx="55" ry="80" fill="url(#lbL)" />
            <ellipse cx="200" cy="135" rx="42" ry="35" fill="url(#lbL)" />
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
            {/* Left claw arm — extended toward right (like offering a claw) */}
            <path d="M155 160Q100 130 75 115" stroke="url(#lbL)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <ellipse cx="62" cy="100" rx="25" ry="18" fill="url(#lbL)" transform="rotate(-30 62 100)" />
            <path d="M48 85Q30 70 25 62" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M48 85Q38 95 32 105" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Right claw — reaching toward the other lobster */}
            <path d="M245 160Q330 110 370 90" stroke="url(#lbL)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <ellipse cx="385" cy="78" rx="25" ry="18" fill="url(#lbL)" transform="rotate(25 385 78)" />
            <path d="M398 65Q415 50 422 42" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M398 65Q410 78 418 88" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Legs */}
            {[200, 220, 240].map((y) => (
              <g key={y}>
                <line x1="160" y1={y} x2={y === 200 ? 120 : y === 220 ? 115 : 118} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
                <line x1="240" y1={y} x2={y === 200 ? 280 : y === 220 ? 285 : 282} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
              </g>
            ))}
            {/* Tail segments */}
            <ellipse cx="200" cy="295" rx="45" ry="18" fill="#C13048" />
            <ellipse cx="200" cy="318" rx="38" ry="15" fill="#C13048" />
            <ellipse cx="200" cy="338" rx="30" ry="12" fill="#C13048" />
            <ellipse cx="200" cy="362" rx="35" ry="14" fill="url(#lbL)" />
            {/* Smile */}
            <path d="M188 142Q200 155 212 142" stroke="#0a1628" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* ── RIGHT LOBSTER (mirrored, bowing back in return) ── */}
        <g
          transform="translate(615, 260) scale(0.72)"
          style={{
            transformOrigin: "0px 0px",
            animation: "bowRight 5s ease-in-out infinite 0.4s",
          }}
          filter="url(#glowF)"
        >
          <g transform="translate(-200, -220) scale(-1,1) translate(-400, 0)">
            {/* Body */}
            <ellipse cx="200" cy="220" rx="55" ry="80" fill="url(#lbR)" />
            <ellipse cx="200" cy="135" rx="42" ry="35" fill="url(#lbR)" />
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
            <path d="M155 160Q100 130 75 115" stroke="url(#lbR)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <ellipse cx="62" cy="100" rx="25" ry="18" fill="url(#lbR)" transform="rotate(-30 62 100)" />
            <path d="M48 85Q30 70 25 62" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M48 85Q38 95 32 105" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Right claw — reaching toward the other lobster */}
            <path d="M245 160Q330 110 370 90" stroke="url(#lbR)" strokeWidth="14" fill="none" strokeLinecap="round" />
            <ellipse cx="385" cy="78" rx="25" ry="18" fill="url(#lbR)" transform="rotate(25 385 78)" />
            <path d="M398 65Q415 50 422 42" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M398 65Q410 78 418 88" stroke="#FF6B6B" strokeWidth="10" fill="none" strokeLinecap="round" />
            {/* Legs */}
            {[200, 220, 240].map((y) => (
              <g key={y}>
                <line x1="160" y1={y} x2={y === 200 ? 120 : y === 220 ? 115 : 118} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
                <line x1="240" y1={y} x2={y === 200 ? 280 : y === 220 ? 285 : 282} y2={y + 30 + (y === 240 ? 8 : 0)} stroke="#C13048" strokeWidth="5" strokeLinecap="round" />
              </g>
            ))}
            {/* Tail segments */}
            <ellipse cx="200" cy="295" rx="45" ry="18" fill="#C13048" />
            <ellipse cx="200" cy="318" rx="38" ry="15" fill="#C13048" />
            <ellipse cx="200" cy="338" rx="30" ry="12" fill="#C13048" />
            <ellipse cx="200" cy="362" rx="35" ry="14" fill="url(#lbR)" />
            {/* Smile */}
            <path d="M188 142Q200 155 212 142" stroke="#0a1628" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* Stage line */}
        <line x1="60" y1="515" x2="760" y2="515" stroke="rgba(233,69,96,0.15)" strokeWidth="1" />
      </svg>
    </div>
  );
}
