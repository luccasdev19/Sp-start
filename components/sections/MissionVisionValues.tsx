import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { AccentBeam } from "@/components/shared/AccentBeam";

const items = [
  {
    title: "Missão",
    description: "Fornecer soluções completas em tecnologia da informação que garantam segurança, eficiência e continuidade operacional, permitindo que nossos clientes foquem no crescimento de seus negócios com tranquilidade e alta performance.",
    image: "/mission.jpg",
  },
  {
    title: "Visão",
    description: "Ser reconhecida como uma empresa de referência em serviços de TI, destacando-se pela excelência no atendimento, inovação constante e geração de valor estratégico, tornando-se parceira essencial na evolução tecnológica dos nossos clientes.",
    image: "/vision.jpg",
  },
  {
    title: "Valores",
    description: "Comprometimento com o cliente, excelência na execução, segurança da informação, inovação constante, ética nas relações e proatividade para antecipar e resolver desafios.",
    image: "/values.jpg",
  },
];

export function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_30%_20%,_#141a1f_0%,_#090c0f_70%)] px-6 py-24">
      <AccentBeam flip />
      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="O que nos move"
            title="Por trás de cada infraestrutura estável, existe um propósito."
          />
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1} className="h-full">
              <div className="group relative flex h-full scale-100 flex-col overflow-hidden rounded-card border border-border bg-surface-1 shadow-none transition-all duration-500 ease-out hover:z-10 hover:-translate-y-2 hover:scale-110 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/20">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-125"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <h3 className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
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
