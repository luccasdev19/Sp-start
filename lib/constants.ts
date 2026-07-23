import { Clock, Users, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "gestao-de-ti",
    title: "Gestao de T.I",
    description: "Mais controle, menos problemas, melhores resultados.",
    href: "/servicos/gestao-de-ti",
    image: "/gestao-de-ti.jpg",
  },
  {
    id: "consultoria",
    title: "Consultoria de T.I",
    description:
      "Diagnostico, migracao para nuvem, segurança e otimizacao de custos.",
    href: "/servicos",
    image: "/consultoria.jpg",
  },
  {
    id: "suporte",
    title: "Suporte tecnico",
    description:
      "Atendimento via WhatsApp, remoto ou presencial, com SLA definido.",
    href: "/servicos",
    image: "/suporte.jpg",
  },
  {
    id: "projetos",
    title: "Projetos",
    description:
      "Redes, migracao de dados e estruturacao completa do parque de TI.",
    href: "/servicos",
    image: "/projetos.jpg",
  },
];

export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const highlights: Highlight[] = [
  {
    id: "chamados",
    title: "Sistema de chamados",
    description:
      "Investimos em uma plataforma de gestão de chamados de alta performance, assegurando respostas rápidas, SLA bem definidos e monitoramento contínuo. Isso garante controle eficiente, organização dos atendimentos e total transparência em cada demanda, proporcionando uma experiência de suporte ágil e confiável para nossos clientes.",
    image: "/highlight-chamados.png",
  },
  {
    id: "atendimento",
    title: "Atendimento humanizado",
    description:
      "Tecnologia e Inteligência Artificial potencializam nossos processos, mas são as pessoas que fazem a diferença. Nosso atendimento é 100% humanizado, garantindo análise precisa, decisões assertivas e soluções realmente eficazes para cada cliente.",
    image: "/highlight-atendimento.png",
  },
  {
    id: "prevencao",
    title: "Prevenção de falhas",
    description:
      "Atuamos com o modelo MSP (Managed Service Provider), oferecendo gestão completa e contínua da infraestrutura de TI. Esse formato garante monitoramento proativo, suporte especializado e prevenção de falhas, reduzindo riscos e aumentando a eficiência operacional.",
    image: "/highlight-prevencao.png",
  },
  {
    id: "gestao",
    title: "Gestão inteligente",
    description:
      "Centralizamos toda a gestão da sua infraestrutura de TI em uma visão única e integrada, com relatórios claros e indicadores em tempo real. Isso permite decisões mais rápidas e assertivas, otimização de recursos e total visibilidade sobre o desempenho do seu ambiente tecnológico.",
    image: "/highlight-gestao.png",
  },
];

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { id: "resposta", value: "5min", label: "Tempo de resposta", icon: Clock },
  { id: "atendimentos", value: "+5.000", label: "Atendimentos realizados", icon: Users },
  { id: "monitoramento", value: "24/7", label: "Monitoramento", icon: ShieldCheck },
];

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const partners: Partner[] = [
  { id: "oracle", name: "Oracle", logo: "/partner-oracle.svg" },
  { id: "advanced", name: "Advanced", logo: "/partner-advanced.svg" },
  { id: "microsoft", name: "Microsoft", logo: "/partner-microsoft.svg" },
  { id: "intelbras", name: "Intelbras", logo: "/partner-intelbras.svg" },
];
