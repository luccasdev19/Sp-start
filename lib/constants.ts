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
    description: "Diagnóstico, migração para a nuvem, segurança e otimização de custos.",
    longDescription:
      "Transformamos desafios de tecnologia em decisões claras, com uma leitura completa do seu ambiente e um plano de evolução alinhado ao ritmo do seu negócio.",
    content: [
      "Toda decisão de TI tem impacto direto na continuidade e no crescimento da operação. Por isso, começamos entendendo o ambiente atual, os processos críticos e os objetivos que orientam o negócio.",
      "A partir desse diagnóstico, traduzimos necessidades técnicas em prioridades práticas. O resultado é um plano de ação claro, que reduz riscos, organiza investimentos e oferece segurança para cada próximo passo.",
    ],
    benefits: [
      "Diagnóstico completo da infraestrutura",
      "Planejamento seguro para nuvem e segurança",
      "Otimização de investimentos em tecnologia",
    ],
    href: "/servicos/consultoria",
    image: "/consultoria.jpg",
    whatsappMessage: "Olá, gostaria de agendar uma consultoria de TI com a SP START.",
  },
  {
    id: "projetos",
    title: "Projetos",
    description: "Redes, migração de dados e estruturação completa do parque de TI.",
    longDescription:
      "Planejamos e executamos cada etapa com método, comunicação e precisão para modernizar sua operação sem criar interrupções desnecessárias.",
    content: [
      "Projetos de infraestrutura exigem muito mais do que tecnologia: exigem planejamento, controle de impactos e uma execução que respeite a rotina de quem depende do ambiente todos os dias.",
      "Nossa equipe conduz cada etapa com transparência, da definição do escopo à validação final. Assim, sua empresa ganha um ambiente mais preparado, sem perder visibilidade sobre o que está acontecendo.",
    ],
    benefits: [
      "Implantação de redes e infraestrutura",
      "Migração de dados e e-mails com segurança",
      "Ambientes prontos para crescer com performance",
    ],
    href: "/servicos/projetos",
    image: "/projetos.jpg",
    whatsappMessage: "Olá, quero conversar sobre um projeto de infraestrutura de TI.",
  },
  {
    id: "gestao",
    title: "Gestão de TI",
    description: "Mais controle, menos problemas e melhores resultados.",
    longDescription:
      "Assumimos a visão contínua da sua TI para antecipar riscos, organizar prioridades e manter sua infraestrutura trabalhando a favor da empresa.",
    content: [
      "Uma operação estável não depende apenas de resolver incidentes. Ela precisa de acompanhamento constante, critérios bem definidos e uma visão que conecte o dia a dia aos objetivos da empresa.",
      "Com a gestão de TI da SP START, sua infraestrutura passa a ser acompanhada de forma ativa. Você tem mais clareza sobre prioridades, menos surpresas e apoio especializado para tomar decisões melhores.",
    ],
    benefits: [
      "Monitoramento proativo do ambiente",
      "Indicadores claros para decisões melhores",
      "Prevenção de falhas e redução de riscos",
    ],
    href: "/servicos/gestao",
    image: "/gestao-de-ti.jpg",
    whatsappMessage: "Olá, quero conhecer a gestão de TI da SP START.",
  },
  {
    id: "suporte",
    title: "Suporte Técnico",
    description: "Atendimento via WhatsApp, remoto ou presencial, com SLA definido.",
    longDescription:
      "Quando sua operação precisa seguir em frente, nosso time atua com agilidade, proximidade e processos claros para resolver o que importa.",
    content: [
      "Quando ocorre uma falha, cada minuto importa. Nosso suporte combina canais acessíveis, processos organizados e profissionais preparados para entender o impacto antes de propor a solução.",
      "Mais do que encerrar chamados, trabalhamos para que os problemas não se repitam. O acompanhamento contínuo oferece previsibilidade à sua equipe e mantém a tecnologia disponível para o trabalho seguir.",
    ],
    benefits: [
      "Atendimento remoto e presencial",
      "SLA definido e comunicação transparente",
      "Monitoramento contínuo e resposta rápida",
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
