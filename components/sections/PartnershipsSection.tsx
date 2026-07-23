import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { partners } from "@/lib/constants";

export function PartnershipsSection() {
  const loop = [...partners, ...partners];

  return (
    <section id="parcerias" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Parcerias"
          title="Parcerias estrategicas com os principais fornecedores do mercado"
          description="Trabalhamos com marcas de referencia global em tecnologia, garantindo solucoes robustas, atualizadas e com suporte de ponta para a infraestrutura dos nossos clientes."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="relative mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-16">
            {loop.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-card bg-surface-1 px-4"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={96}
                  height={40}
                  className="h-auto max-h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
