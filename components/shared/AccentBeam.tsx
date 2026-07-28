type AccentBeamProps = {
  className?: string;
  flip?: boolean;
};

export function AccentBeam({ className = "", flip = false }: AccentBeamProps) {
  const angle = flip ? -115 : 115;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, transparent 40%, rgba(212,162,78,0.08) 50%, transparent 62%)`,
      }}
    />
  );
}
