import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function AboutSection() {
  return (
    <section id="quem-somos" className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Quem somos"
          title="Experiencia real em infraestrutura de TI"
          description="
A SP START Soluções em TI nasceu com um propósito claro: garantir que empresas operem com tecnologia estável, segura e preparada para crescer.

Atuamos como parceiros estratégicos dos nossos clientes, assumindo a responsabilidade pela gestão completa de TI — desde o suporte técnico até a implementação de soluções avançadas em infraestrutura, redes, segurança da informação e ambientes em nuvem.

Nosso foco vai além de resolver problemas. Trabalhamos de forma preventiva e inteligente, monitorando ambientes, reduzindo riscos e assegurando que a tecnologia seja um pilar de crescimento, e não um obstáculo.

Contamos com uma equipe especializada, processos bem definidos e um atendimento ágil, sempre comprometidos em entregar eficiência, confiabilidade e tranquilidade para nossos clientes.

Seja qual for o tamanho do seu negócio, estamos preparados para levar sua operação a um novo nível de desempenho e segurança."
        />
      </FadeIn>
    </section>
  );
}
