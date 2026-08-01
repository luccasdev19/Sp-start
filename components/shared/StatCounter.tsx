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
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 639px)").matches);
  }, []);

  useEffect(() => {
    if (isMobile === null) return;

    const element = ref.current;
    if (!element) return;

    const updateValue = (nextValue: number) => {
      element.textContent = `${prefix}${nextValue.toLocaleString("pt-BR")}`;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updateValue(value);
      return;
    }

    if (!isMobile && !isInView) return;

    const start = performance.now();
    const durationMs = duration * 1000;
    const mobileFrameInterval = 1000 / 24;
    let lastUpdate = -Infinity;
    let frame: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const shouldUpdate = !isMobile || now - lastUpdate >= mobileFrameInterval || progress === 1;

      if (shouldUpdate) {
        updateValue(Math.round(eased * value));
        lastUpdate = now;
      }

      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isMobile, isInView, value, prefix, duration]);

  return (
    <span ref={ref}>{prefix}0</span>
  );
}
