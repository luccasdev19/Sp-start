export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    id: "gestao-de-ti",
    title: "Gestao de T.I",
    description:
      "Monitoramento continuo, prevencao de falhas e gestao inteligente da infraestrutura.",
    href: "/servicos/gestao-de-ti",
  },
  {
    id: "consultoria",
    title: "Consultoria de T.I",
    description:
      "Diagnostico, migracao para nuvem, seguranca e otimizacao de custos.",
    href: "/servicos",
  },
  {
    id: "suporte",
    title: "Suporte tecnico",
    description:
      "Atendimento via WhatsApp, remoto ou presencial, com SLA definido.",
    href: "/servicos",
  },
  {
    id: "projetos",
    title: "Projetos",
    description:
      "Redes, migracao de dados e estruturacao completa do parque de TI.",
    href: "/servicos",
  },
];

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "atendimentos", value: "+5.000", label: "atendimentos realizados" },
  { id: "resposta", value: "5 min", label: "tempo medio de resposta" },
  { id: "monitoramento", value: "24/7", label: "monitoramento continuo" },
];
