import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { services } from "@/lib/constants";

export function ServicesPreview() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Serviços"
          title="Soluções completas para sua infraestrutura."
          description="Soluções sob medida para reduzir falhas, aumentar produtividade e dar mais previsibilidade ao seu negócio."
        />
      </FadeIn>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.id} delay={index * 0.1} className="h-full">
            <Link
              href={service.href}
              className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface-1 transition-colors hover:border-foreground-subtle"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 pt-6">
                <h3 className="text-lg font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-subtle">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm text-accent">
                  Saiba mais.
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
