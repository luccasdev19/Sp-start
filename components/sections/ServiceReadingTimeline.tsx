"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, House } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const ENTRY_DURATION = 500;
type TimelineState = "hidden" | "entering" | "tracking" | "completed";

function ProgressRing({ progress }: { progress: MotionValue<number> }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" className="absolute inset-0 size-9 -rotate-90 text-border">
      <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <motion.circle
        cx="18"
        cy="18"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={1}
        className="text-accent"
        style={{ pathLength: progress }}
      />
    </svg>
  );
}

export function ServiceReadingTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineStateRef = useRef<TimelineState>("hidden");
  const highestProgressRef = useRef(0);
  const [timelineState, setTimelineState] = useState<TimelineState>("hidden");
  const [phase, setPhase] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 85%", "end 35%"],
  });
  const journeyProgress = useMotionValue(0);
  const firstProgress = useTransform(journeyProgress, [0, 0.5], [0, 1]);
  const middleProgress = useTransform(journeyProgress, [0.5, 0.85], [0, 1]);
  const lastProgress = useTransform(journeyProgress, [0.85, 1], [0, 1]);

  const transitionTo = (nextState: TimelineState) => {
    if (timelineStateRef.current === "completed" || timelineStateRef.current === nextState) return;
    timelineStateRef.current = nextState;
    setTimelineState(nextState);
  };

  const updateJourney = (value: number) => {
    if (timelineStateRef.current !== "tracking") return;

    const nextProgress = Math.max(highestProgressRef.current, value);
    if (nextProgress === highestProgressRef.current) return;

    highestProgressRef.current = nextProgress;
    journeyProgress.set(nextProgress);

    const nextPhase = nextProgress < 0.5 ? 0 : nextProgress < 0.85 ? 1 : 2;
    setPhase((current) => (current === nextPhase ? current : nextPhase));

    if (nextProgress >= 0.995) {
      journeyProgress.set(1);
      setPhase(2);
      transitionTo("completed");
    }
  };

  useEffect(() => {
    if (!isInView || timelineStateRef.current !== "hidden") return;

    transitionTo("entering");
    const timeout = window.setTimeout(() => {
      transitionTo("tracking");
      updateJourney(scrollYProgress.get());
    }, shouldReduceMotion ? 0 : ENTRY_DURATION);

    return () => window.clearTimeout(timeout);
  }, [isInView, shouldReduceMotion]);

  useMotionValueEvent(scrollYProgress, "change", updateJourney);

  const stepProgress = [firstProgress, middleProgress, lastProgress];
  const isVisible = timelineState !== "hidden";
  const isFinished = timelineState === "completed";

  return (
    <div ref={timelineRef} className="mb-10 mt-12 h-9 w-full">
      <motion.div
        role="status"
        aria-label="Progresso de leitura da página"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
      >
        <span className="sr-only">Progresso de leitura da página</span>
        <div className="relative flex items-center justify-between">
          <div aria-hidden="true" className="absolute left-[1.125rem] right-[1.125rem] top-1/2 h-px -translate-y-1/2 bg-border" />
          <motion.div
            aria-hidden="true"
            className="absolute left-[1.125rem] top-1/2 h-px origin-left -translate-y-1/2 bg-accent"
            style={{ width: "calc(100% - 2.25rem)", scaleX: journeyProgress }}
          />

          {["início", "progresso", "conclusão"].map((label, index) => {
            const isActive = phase === index;
            const isComplete = phase > index;
            const isFinalStep = index === 2;

            return (
              <span key={label} className="relative flex size-9 items-center justify-center rounded-full bg-background">
                <ProgressRing progress={stepProgress[index]} />
                <motion.span
                  animate={isFinalStep && isFinished && !shouldReduceMotion ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative flex size-7 items-center justify-center rounded-full border transition-colors duration-300 ${isActive || isComplete ? "border-accent bg-petrol text-accent" : "border-border bg-surface-1 text-foreground-muted"} ${isFinalStep && isFinished ? "shadow-[0_0_18px_rgba(28,67,86,0.7)]" : ""}`}
                >
                  {index === 0 ? <House size={14} aria-hidden="true" /> : isFinalStep ? <Building2 size={14} aria-hidden="true" /> : <span aria-hidden="true" className="size-1.5 rounded-full bg-foreground" />}
                </motion.span>
              </span>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
