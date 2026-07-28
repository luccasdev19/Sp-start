"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
interface StatCounterProps {
  value: number;
  prefix?: string;
  duration?: number;
}
export function StatCounter({
  value,
  prefix = "",
  duration = 1.6,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const durationMs = duration * 1000;
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);
  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("pt-BR")}
    </span>
  );
}
