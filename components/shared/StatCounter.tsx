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
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 639px)").matches);
  }, []);

  useEffect(() => {
    if (isMobile === null) return;

    if (isMobile) {
      setDisplay(value);
      return;
    }

    if (!isInView) return;

    const start = performance.now();
    const durationMs = duration * 1000;
    let frame: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isMobile, isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("pt-BR")}
    </span>
  );
}
