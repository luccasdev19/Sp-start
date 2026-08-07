interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string | string[];
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <span className="mb-3 block text-sm font-medium text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-medium text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground-muted">
          {(Array.isArray(description) ? description : [description]).map((paragraph, index) => (
            <p key={`${index}-${paragraph}`}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
