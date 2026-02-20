"use client";

import { useRef, useState, useEffect, CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

export default function ScrollReveal({ children, delay = 0, style = {} }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: `all 0.7s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
