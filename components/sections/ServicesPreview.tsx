import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/constants";

export function ServicesPreview() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Servicos"
        title="Solucoes completas para sua infraestrutura"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className="group rounded-card border border-border bg-surface-1 p-8 transition-colors hover:border-foreground-subtle"
          >
            <h3 className="text-lg font-medium text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-subtle">
              {service.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm text-accent">
              Saiba mais
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
