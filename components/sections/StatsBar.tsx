import { stats } from "@/lib/constants";

export function StatsBar() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.id} className="px-6 py-10 text-center">
            <p className="text-3xl font-medium text-foreground">{stat.value}</p>
            <p className="mt-2 text-sm text-foreground-subtle">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
