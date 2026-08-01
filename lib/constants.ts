import { Clock, Users, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  content: string[];
  benefits: string[];
  href: string;
  image: string;
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    id: "consultoria",
    title: "Consultoria de TI",
    description: "Estratégia de TI para reduzir riscos, otimizar custos e preparar sua empresa para crescer.",
    longDescription:
      "Analisamos o cenário atual da sua TI, identificamos riscos e oportunidades e definimos um plano de ação alinhado às prioridades do seu negócio.",
    content: [
      "Antes de investir em novas soluções, é essencial entender o que realmente precisa mudar. Nossa consultoria avalia a infraestrutura, os processos, a segurança e os custos do ambiente para construir uma visão clara da situação atual.",
      "Com base nessa análise, organizamos as prioridades e recomendamos os próximos passos de forma prática. Sua empresa recebe um direcionamento seguro para reduzir riscos, evitar investimentos desnecessários e preparar a tecnologia para acompanhar o crescimento do negócio.",
    ],
    benefits: [
      "Mapeamento do ambiente e dos principais riscos",
      "Plano de ação claro e organizado por prioridades",
      "Otimização de licenças e condições diferenciadas em soluções Microsoft",
    ],
    href: "/servicos/consultoria",
    image: "/consultoria.jpg",
    whatsappMessage: "Olá, gostaria de agendar uma consultoria de TI com a SP START.",
  },
  {
    id: "projetos",
    title: "Projetos",
    description: "Projetos de TI planejados para modernizar sua infraestrutura com segurança e continuidade.",
    longDescription:
      "Planejamos e executamos projetos de infraestrutura, redes e migração de dados com segurança, organização e o menor impacto possível na rotina da sua empresa.",
    content: [
      "Mudanças na infraestrutura de TI exigem planejamento cuidadoso para evitar indisponibilidade, perda de dados e custos inesperados. Por isso, cada projeto começa com o levantamento do ambiente, a definição do escopo e a identificação dos possíveis impactos na operação.",
      "Nossa equipe acompanha todas as etapas, da preparação à implantação e validação final. Com uma execução organizada e comunicação transparente, sua empresa recebe uma infraestrutura moderna, documentada e pronta para atender às necessidades atuais e futuras.",
    ],
    benefits: [
      "Escopo, cronograma e custos definidos com clareza",
      "Implantação e migração com segurança e mínimo impacto",
      "Infraestrutura documentada e preparada para crescer",
    ],
    href: "/servicos/projetos",
    image: "/projetos.jpg",
    whatsappMessage: "Olá, quero conversar sobre um projeto de infraestrutura de TI.",
  },
  {
    id: "gestao",
    title: "Gestão de TI",
    description: "Gestão especializada de TI para prevenir falhas, organizar prioridades e manter sua operação estável.",
    longDescription:
      "Acompanhamos continuamente sua TI e transformamos informações técnicas em ações que oferecem mais controle, previsibilidade e segurança para o negócio.",
    content: [
      "Cuidar da TI apenas quando um problema acontece gera interrupções, custos inesperados e falhas recorrentes. Uma gestão eficiente exige visão do ambiente, acompanhamento das demandas e planejamento para que a tecnologia evolua junto com a empresa.",
      "Com a gestão de TI da SP START, sua empresa conta com acompanhamento especializado para analisar o desempenho da infraestrutura, definir prioridades e orientar melhorias. Assim, as decisões deixam de ser reativas e passam a fazer parte de uma estratégia contínua.",
    ],
    benefits: [
      "Visibilidade contínua sobre o ambiente e as demandas",
      "Prevenção de falhas recorrentes e riscos operacionais",
      "Planejamento de melhorias e investimentos em TI",
    ],
    href: "/servicos/gestao",
    image: "/gestao-de-ti.jpg",
    whatsappMessage: "Olá, quero conhecer a gestão de TI da SP START.",
  },
  {
    id: "suporte",
    title: "Suporte Técnico",
    description: "Suporte remoto e presencial com agilidade, organização e SLA definido.",
    longDescription:
      "Atendemos as demandas da sua equipe com rapidez e processos bem definidos, reduzindo o impacto dos problemas de TI na rotina da empresa.",
    content: [
      "Quando uma falha impede o trabalho, é importante contar com um suporte fácil de acionar e preparado para entender a urgência de cada situação. Nossa equipe recebe e organiza as solicitações para que os chamados sejam atendidos de acordo com o impacto e o SLA estabelecido.",
      "O atendimento pode ser realizado via WhatsApp, acesso remoto ou presencialmente, conforme a necessidade. Durante todo o processo, sua equipe recebe informações claras sobre o andamento do chamado até que a solução seja concluída.",
    ],
    benefits: [
      "Atendimento via WhatsApp, remoto e presencial",
      "Chamados priorizados de acordo com o impacto e o SLA",
      "Comunicação clara do início à conclusão",
    ],
    href: "/servicos/suporte",
    image: "/suporte.jpg",
    whatsappMessage: "Olá, preciso de suporte técnico e quero conhecer os planos da SP START.",
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
      "Tecnologia e inteligência artificial potencializam nossos processos, mas são as pessoas que fazem a diferença. Nosso atendimento é 100% humanizado, garantindo análise precisa, decisões assertivas e soluções realmente eficazes para cada cliente.",
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
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { id: "resposta", value: 5, suffix: "min", label: "Tempo de resposta", icon: Clock },
  { id: "atendimentos", value: 5000, prefix: "+", label: "Atendimentos realizados", icon: Users },
  { id: "monitoramento", value: 24, suffix: "/7", label: "Monitoramento", icon: ShieldCheck },
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
