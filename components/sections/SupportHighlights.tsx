import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

const highlights = [
  {
    title: "Sistema de chamados",
    description: "Placeholder: descricao do sistema de abertura e acompanhamento de chamados.",
  },
  {
    title: "Atendimento humanizado",
    description: "Placeholder: descricao do diferencial no atendimento ao cliente.",
  },
  {
    title: "Prevencao de falhas",
    description: "Placeholder: descricao da abordagem preventiva de monitoramento.",
  },
  {
    title: "Gestao inteligente",
    description: "Placeholder: descricao da gestao centralizada da infraestrutura.",
  },
];

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
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="rounded-card border border-border p-8">
                <h3 className="text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-subtle">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
