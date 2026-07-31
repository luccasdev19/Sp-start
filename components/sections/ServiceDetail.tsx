import { Check } from "lucide-react";
import type { Service } from "@/lib/constants";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { ServiceReadingTimeline } from "@/components/sections/ServiceReadingTimeline";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article className="pb-24">
      <section className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <FadeIn>
          <SectionHeading eyebrow="Serviços SP START" title={service.title} description={service.longDescription} />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="space-y-6 text-base leading-relaxed text-foreground-muted">
            {service.content.slice(0, 1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="space-y-6 text-base leading-relaxed text-foreground-muted">
            {service.content.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-12 border-y border-border py-8">
            <h2 className="text-lg font-medium text-foreground">O que sua empresa ganha</h2>
            <ul className="mt-6 space-y-4" aria-label={`Benefícios de ${service.title}`}>
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-foreground-muted">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <ServiceReadingTimeline />

        <FadeIn delay={0.24}>
          <div><WhatsAppButton label="Fale com um especialista" message={service.whatsappMessage} /></div>
        </FadeIn>
      </section>
    </article>
  );
}
