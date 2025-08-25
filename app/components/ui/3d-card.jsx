"use client";
import React, { useRef } from "react";

export default function Card3D({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Calculate rotation (-15deg .. 15deg)
    const rotateY = ((x - midX) / midX) * 15;
    const rotateX = ((midY - y) / midY) * 15;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div className="perspective-1000">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="transition-transform duration-200 will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
