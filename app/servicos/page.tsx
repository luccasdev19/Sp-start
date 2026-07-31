import { SectionHeading } from "@/components/shared/SectionHeading";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
      <header>
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas para sua infraestrutura."
          description="Escolha o serviço que melhor atende ao momento da sua empresa e conheça como podemos apoiar sua operação."
        />
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <Link key={service.id} href={service.href} className="group rounded-card border border-border bg-surface-1 p-7 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background">
            <h2 className="text-lg font-medium text-foreground">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-subtle">{service.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
              Conheça o serviço
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
