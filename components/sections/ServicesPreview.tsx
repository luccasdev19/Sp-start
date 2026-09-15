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
              className="group relative flex h-full scale-100 flex-col overflow-hidden rounded-card border border-border bg-surface-1 shadow-none transition-all duration-500 ease-out hover:z-10 hover:-translate-y-2 hover:scale-110 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20 active:z-10 active:-translate-y-2 active:scale-105 active:border-accent/60 active:shadow-2xl active:shadow-accent/20"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="brand-photo object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-active:scale-125"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 pt-6">
                <h3 className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent group-active:text-accent">
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
