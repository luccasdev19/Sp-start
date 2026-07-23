export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div
        className="animate-aurora-a absolute left-[-10%] top-[-15%] h-[70%] w-[70%] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #1c4356 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-aurora-b absolute bottom-[-15%] right-[-10%] h-[65%] w-[65%] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #8a6d3a 0%, transparent 70%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>
    </div>
  );
}
