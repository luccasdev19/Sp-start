import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";

const blocks = [
  {
    id: "suporte-tecnico",
    title: "Suporte técnico",
    description:
      "Oferecemos suporte ágil por WhatsApp, e-mail, chamados, atendimento remoto e presencial, com SLA claro, monitoramento 24/7 e resposta rápida para manter sua operação sempre ativa.",
  },
  {
    id: "consultoria",
    title: "Consultoria de TI",
    description:
      "Ajudamos sua empresa a tomar decisões mais seguras com diagnóstico de infraestrutura, migração para a nuvem, fortalecimento da segurança e otimização de custos de tecnologia.",
  },
  {
    id: "projetos",
    title: "Projetos",
    description:
      "Planejamos e executamos projetos de rede, migração de dados e e-mails, modernização de ambientes e estruturação completa do parque de TI com foco em performance e confiabilidade.",
  },
];

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Serviços"
        title="Tudo o que sua empresa precisa em infraestrutura de TI."
      />

      <div className="flex flex-col gap-16">
        {blocks.map((block) => (
          <div key={block.id} id={block.id}>
            <h2 className="text-2xl font-medium text-foreground">
              {block.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              {block.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <WhatsAppButton message={whatsappMessages.consultoria} />
      </div>
    </div>
  );
}
