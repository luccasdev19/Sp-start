type RingAccentProps = {
  className?: string;
};

export function RingAccent({ className = "" }: RingAccentProps) {
  const rings = Array.from({ length: 10 }, (_, i) => 40 + i * 45);

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      width="900"
      height="900"
      viewBox="0 0 900 900"
    >
      {rings.map((r) => (
        <circle
          key={r}
          cx="450"
          cy="450"
          r={r}
          fill="none"
          stroke="#3a4a54"
          strokeWidth="1"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}
