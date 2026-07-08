const items = [
  {
    title: "Missao",
    description: "Placeholder: texto da missao da empresa.",
  },
  {
    title: "Visao",
    description: "Placeholder: texto da visao da empresa.",
  },
  {
    title: "Valores",
    description: "Placeholder: texto dos valores da empresa.",
  },
];

export function MissionVisionValues() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-card border border-border bg-surface-1 p-8"
          >
            <h3 className="text-lg font-medium text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-subtle">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
