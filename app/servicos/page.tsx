import { SectionHeading } from "@/components/shared/SectionHeading";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";

const blocks = [
  {
    id: "suporte-tecnico",
    title: "Suporte tecnico",
    description:
      "Placeholder: lista as 10 modalidades de suporte (WhatsApp, e-mail, chamados, remoto, presencial, SLA, monitoramento 24/7...).",
  },
  {
    id: "consultoria",
    title: "Consultoria de T.I",
    description:
      "Placeholder: diagnostico, migracao cloud, seguranca, gestao de licencas, otimizacao de custos.",
  },
  {
    id: "projetos",
    title: "Projetos",
    description:
      "Placeholder: rede sem fio/cabeada, migracao de dados/e-mails, estruturacao de parque de TI.",
  },
];

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Servicos"
        title="Tudo que sua empresa precisa em infraestrutura de TI"
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
