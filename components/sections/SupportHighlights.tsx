import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { highlights } from "@/lib/constants";

export function SupportHighlights() {
  return (
    <section
      id="atendimento"
      className="relative bg-gradient-to-b from-transparent via-surface-1/30 to-transparent px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Atendimento"
            title="Um atendimento diferenciado, do primeiro contato ao suporte continuo"
          />
        </FadeIn>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface-1">
                <div className="relative aspect-video w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent" />
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
