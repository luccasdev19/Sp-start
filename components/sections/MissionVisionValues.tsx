import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

const items = [
  {
    title: "Missao",
    description: "Fornecer soluções completas em Tecnologia da Informação que garantam segurança, eficiência e continuidade operacional, permitindo que nossos clientes foquem no crescimento de seus negócios com tranquilidade e alta performance.",
    image: "/mission.jpg",
  },
  {
    title: "Visao",
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
    <section className="relative bg-gradient-to-b from-transparent via-surface-1/30 to-transparent px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface-1">
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <h3 className="text-lg font-medium text-foreground">
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
