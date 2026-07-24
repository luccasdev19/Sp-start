import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
export function AboutSection() {
  return (
    <section id="quem-somos" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0">
        <Image
          src="/about-bg.jpg"
          alt=""
          fill
          className="scale-110 object-cover object-center opacity-25 blur-2xl"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <SectionHeading
            eyebrow="Quem somos"
            title="Experiencia real em infraestrutura de TI"
            description="
A SP START Soluções em TI nasceu com um propósito claro: garantir que empresas operem comtecnologia estável, segura e preparada para crescer.
Atuamos como parceiros estratégicos dos nossos clientes, assumindo a responsabilidade pela gestão completa de TI — desde o suporte técnico até a implementação de soluções avançadas em infraestrutura, redes, segurança da informação e ambientes em nuvem.
Nosso foco vai além de resolver problemas. Trabalhamos de forma preventiva e inteligente,monitorando ambientes, reduzindo riscos e assegurando que a tecnologia seja um pilar de crescimento, e não um obstáculo.
Contamos com uma equipe especializada, processos bem definidos e um atendimento ágil, sempre comprometidos em entregar eficiência, confiabilidade e tranquilidade para nossos clientes.
Seja qual for o tamanho do seu negócio, estamos preparados para levar sua operação a um novo nível de desempenho e segurança."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-border">
            <Image
              src="/about-team.jpg"
              alt="Equipe da SP START analisando infraestrutura de TI"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
