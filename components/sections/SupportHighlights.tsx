import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { AccentBeam } from "@/components/shared/AccentBeam";
import { highlights } from "@/lib/constants";

export function SupportHighlights() {
  return (
    <section
      id="atendimento"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_70%_80%,_#171e24_0%,_#0d1216_70%)] px-6 py-16 sm:py-20"
    >
      <AccentBeam />
      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Atendimento"
            title="Um atendimento diferenciado, do primeiro contato ao suporte contínuo."
            description="Atendimento ágil, humanizado e focado em manter sua operação em movimento."
          />
        </FadeIn>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface-1">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <h3 className="text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-subtle">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
