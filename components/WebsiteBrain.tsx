"use client";

import { useState, useRef, useEffect } from "react";

const LOULOU_SYSTEM = `You are LouLou — the AI concierge at The Claw Concierge. You're warm, a little witty, and genuinely helpful. Think: brilliant best friend who happens to know everything about AI and can sell ice to a polar bear without being pushy.

## Your personality
- Warm and disarming — never salesy, always genuinely helpful
- Occasionally funny (a sharp, well-timed quip > trying to be funny)
- Direct — give real answers, not corporate fluff
- You use "🦞" occasionally — we're lobster people here

## Your goals
1. Answer any question about The Claw Concierge and OpenClaw
2. Help visitors figure out which tier is right for their life
3. Get them excited about booking a free audit (it's free, 30 minutes, zero pressure)
4. When someone seems ready → guide them to the audit form (#audit) or Client Portal (/clientportal)

## The Claw Concierge
- White-glove OpenClaw AI setup + ongoing management service
- Founded by Sarah Scarano, Kalispell, Montana
- 12-point security hardening protocol — nobody else does this
- SOUL.md personalization — their AI sounds EXACTLY like them
- Voice Staff: text AI + voice AI sharing the same brain (the only service offering this)
- Build software with natural language — no coding needed, ever. Tell it what you want. It builds it.

## Pricing
- Personal Claw: $897 setup + $197/mo management (optional)
- Business Pro: $2,997 setup + $497/mo management
- Enterprise + Voice: $9,500+ setup + $1,297/mo
- VIP Day: $8,000 (full-day intensive with Sarah)
- Workshop: $247/seat (2x/month, 90 min)

## Key objections + responses
- "Too expensive" → "What does missing one client a week cost you? Most clients make it back in 30 days."
- "I'm not technical" → "Perfect. That's literally why we exist. You just talk. Your AI works."
- "I can DIY it" → "Most people try. Security hardening alone takes 4+ hours if you know what you're doing. One mistake and you're exposed. We do it right in 2 hours."
- "Let me think about it" → "What's the one thing that would need to be true for this to be a yes? Let's just talk about that."

## Booking appointments
When someone is ready or asks how to get started:
- Ask: their name, business type, and when they'd like to connect
- Then: "Perfect! Head to the audit form at the bottom of the page — mention you chatted with me and Sarah will personally reach out within 24 hours. 🦞"

## Response style
KEEP IT SHORT. 2-4 sentences usually. Be conversational — sound like a clever human, not a chatbot. No bullet points unless they ask for a breakdown. When in voice mode, never use markdown.`;

interface Msg { role: "user" | "assistant"; content: string; }

const STARS = [
  { t: 15, l: 8, s: 2 }, { t: 32, l: 92, s: 1.5 }, { t: 68, l: 6, s: 1 },
  { t: 78, l: 85, s: 2 }, { t: 45, l: 55, s: 1 }, { t: 22, l: 70, s: 1.5 },
  { t: 88, l: 35, s: 1 }, { t: 55, l: 18, s: 2 }, { t: 10, l: 48, s: 1 },
];

export default function WebsiteBrain() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recogRef = useRef<any>(null);
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;

  useEffect(() => {
    if (open && !greeted) {
      setGreeted(true);
      setMessages([{
        role: "assistant",
        content: "Hey! I'm LouLou 🦞 — your Claw Concierge guide. Ask me anything: pricing, how it works, which tier fits your life, or just start with 'what even is this?' I won't judge.",
      }]);
    }
  }, [open, greeted]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Load voices after page load
  useEffect(() => {
    if (synth && synth.getVoices().length === 0) {
      synth.addEventListener("voiceschanged", () => {});
    }
  }, [synth]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const newMsgs: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/brain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs, systemOverride: LOULOU_SYSTEM }),
      });
      const data = await res.json();
      const reply = data.text || "Little brain blip — try again! 🦞";
      setMessages(p => [...p, { role: "assistant", content: reply }]);
      if (voiceMode || speaking) speakText(reply);
    } catch {
      setMessages(p => [...p, { role: "assistant", content: "Network hiccup. Try again in a sec! 🦞" }]);
    }
    setLoading(false);
  }

  function speakText(text: string) {
    if (!synth) return;
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(text.replace(/[🦞🎙️📅✓→●]/g, "").replace(/\*/g, ""));
    const voices = synth.getVoices();
    const pick = voices.find(v =>
      v.name.includes("Samantha") ||
      v.name.includes("Google US English") ||
      v.name.includes("Karen") ||
      v.name.includes("Serena") ||
      (v.lang === "en-US" && v.name.toLowerCase().includes("female"))
    ) || voices.find(v => v.lang === "en-US") || voices[0];
    if (pick) utt.voice = pick;
    utt.rate = 1.08;
    utt.pitch = 1.1;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => {
      setSpeaking(false);
      if (voiceMode) startListening();
    };
    synth.speak(utt);
  }

  function startListening() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const SR = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SR) { alert("Voice not supported in this browser. Try Chrome!"); return; }
    const recog = new SR();
    recogRef.current = recog;
    recog.continuous = false;
    recog.interimResults = false;
    recog.lang = "en-US";
    recog.onstart = () => setListening(true);
    recog.onend = () => setListening(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recog.onresult = (e: any) => {
      const t = e.results[0][0].transcript;
      if (t) send(t);
    };
    recog.onerror = () => setListening(false);
    recog.start();
  }

  function stopListening() { recogRef.current?.stop(); setListening(false); }

  function toggleVoice() {
    if (voiceMode) {
      synth?.cancel();
      stopListening();
      setVoiceMode(false);
    } else {
      setVoiceMode(true);
      startListening();
    }
  }

  const pulse = `@keyframes lb-pulse{0%,100%{opacity:.4;transform:scale(.9)}50%{opacity:1;transform:scale(1)}}`;
  const dot = (delay: number) => ({
    width: "5px", height: "5px", borderRadius: "50%", background: "#E94560",
    animation: `lb-pulse 1.2s ease-in-out ${delay}s infinite`,
    display: "inline-block",
  } as React.CSSProperties);

  return (
    <>
      <style>{pulse}</style>

      {/* Floating button + label */}
      <div style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 1000, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
        {!open && (
          <div style={{
            background: "rgba(5,13,26,.9)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(233,69,96,.2)", borderRadius: "20px",
            padding: "4px 12px", fontSize: "11px", fontWeight: 700,
            color: "rgba(255,255,255,.7)", letterSpacing: ".5px",
            fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap",
            boxShadow: "0 2px 12px rgba(0,0,0,.3)",
          }}>
            Talk to LouLou 🦞
          </div>
        )}
        <button
          onClick={() => setOpen(p => !p)}
          aria-label="Chat with LouLou"
          style={{
            width: "60px", height: "60px", borderRadius: "50%",
            background: "white", border: "2px solid rgba(233,69,96,.25)",
            cursor: "pointer",
            boxShadow: open ? "0 0 0 4px rgba(233,69,96,.15), 0 6px 30px rgba(233,69,96,.3)" : "0 4px 20px rgba(233,69,96,.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "28px", transition: "all .2s",
          }}
        >
          {open ? <span style={{ fontSize: "20px", color: "#E94560", fontWeight: 700 }}>✕</span> : <img src="/lobster.svg" alt="LouLou" width={32} height={32} style={{ display: "block" }} />}
        </button>
      </div>

      {/* Chat panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: "112px", right: "28px", zIndex: 999,
          width: "min(370px, calc(100vw - 40px))", maxHeight: "560px",
          background: "rgba(5,13,26,.97)", backdropFilter: "blur(24px)",
          border: "1px solid rgba(233,69,96,.18)", borderRadius: "20px",
          display: "flex", flexDirection: "column",
          boxShadow: "0 24px 70px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.04)",
          fontFamily: "'DM Sans', sans-serif", overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            padding: "14px 18px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            display: "flex", alignItems: "center", gap: "10px",
            background: "rgba(233,69,96,.04)",
          }}>
            <img src="/lobster.svg" alt="LouLou" width={28} height={28} style={{ display: "block", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>LouLou</div>
              <div style={{
                fontSize: "10px",
                color: speaking ? "#66BB6A" : listening ? "#D4A843" : "rgba(255,255,255,.3)",
                transition: "color .3s",
              }}>
                {speaking ? "● Speaking..." : listening ? "● Listening..." : "● Ask me anything"}
              </div>
            </div>
            <button
              onClick={toggleVoice}
              title={voiceMode ? "Turn off voice mode" : "Switch to voice mode"}
              style={{
                padding: "5px 11px", borderRadius: "8px",
                border: `1px solid ${voiceMode ? "rgba(212,168,67,.5)" : "rgba(255,255,255,.1)"}`,
                background: voiceMode ? "rgba(212,168,67,.12)" : "transparent",
                color: voiceMode ? "#D4A843" : "rgba(255,255,255,.35)",
                fontSize: "11px", fontWeight: 700, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap",
              }}
            >
              {voiceMode ? "🎙️ Voice ON" : "🎙️ Voice"}
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px",
            display: "flex", flexDirection: "column", gap: "10px",
          }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "9px 13px",
                  borderRadius: m.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: m.role === "user"
                    ? "linear-gradient(135deg,#E94560,#FF6B6B)"
                    : "rgba(255,255,255,.07)",
                  fontSize: "13px", color: "rgba(255,255,255,.9)", lineHeight: 1.65,
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", gap: "5px", paddingLeft: "2px", alignItems: "center" }}>
                <div style={dot(0)} /><div style={dot(0.2)} /><div style={dot(0.4)} />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Voice mode overlay indicator */}
          {voiceMode && (
            <div style={{
              padding: "10px 18px",
              background: "rgba(212,168,67,.06)",
              borderTop: "1px solid rgba(212,168,67,.12)",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: listening ? "#D4A843" : speaking ? "#66BB6A" : "rgba(212,168,67,.3)",
                animation: (listening || speaking) ? "lb-pulse 1s ease-in-out infinite" : "none",
              }} />
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,.4)" }}>
                {listening ? "Listening... speak now" : speaking ? "LouLou is speaking" : "Tap mic or type to continue"}
              </span>
              {!listening && !speaking && (
                <button
                  onClick={startListening}
                  style={{
                    marginLeft: "auto", padding: "3px 10px", borderRadius: "6px",
                    background: "rgba(212,168,67,.15)", border: "1px solid rgba(212,168,67,.3)",
                    color: "#D4A843", fontSize: "11px", fontWeight: 700,
                    cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  🎤 Speak
                </button>
              )}
            </div>
          )}

          {/* Input bar */}
          <div style={{
            padding: "12px 14px",
            borderTop: "1px solid rgba(255,255,255,.06)",
            display: "flex", gap: "8px", alignItems: "center",
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send(input))}
              placeholder={voiceMode ? "Or type here..." : "Ask anything..."}
              style={{
                flex: 1, background: "rgba(255,255,255,.06)",
                border: "1px solid rgba(255,255,255,.09)",
                borderRadius: "10px", padding: "9px 13px",
                color: "white", fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif", outline: "none",
              }}
            />
            {!voiceMode && (
              <button
                onClick={() => listening ? stopListening() : startListening()}
                title="Tap to speak"
                style={{
                  width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                  background: listening ? "rgba(212,168,67,.15)" : "rgba(255,255,255,.05)",
                  border: `1px solid ${listening ? "rgba(212,168,67,.5)" : "rgba(255,255,255,.09)"}`,
                  color: listening ? "#D4A843" : "rgba(255,255,255,.4)",
                  cursor: "pointer", fontSize: "15px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                🎤
              </button>
            )}
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              style={{
                width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                background: input.trim() && !loading
                  ? "linear-gradient(135deg,#E94560,#FF6B6B)"
                  : "rgba(255,255,255,.05)",
                border: "none", color: "white",
                cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
