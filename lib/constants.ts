import { Clock, Users, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  content: string[];
  benefits: string[];
  benefitsHighlight?: string;
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
      "Redução de custos\nIdentificação de gastos desnecessários, contratos, licenças e equipamentos que podem ser otimizados antes de novos investimentos.",
      "Mais segurança\nIdentificação de vulnerabilidades, riscos de segurança e pontos que podem comprometer os dados e a operação da empresa.",
      "Menos imprevistos\nA empresa passa a conhecer os principais riscos da infraestrutura e pode agir antes que um problema se transforme em uma parada ou prejuízo.",
      "Decisões mais assertivas\nEm vez de comprar equipamentos ou contratar soluções por tentativa e erro, o cliente sabe o que realmente precisa e por quê.",
      "Planejamento de TI\nA empresa deixa de trabalhar apenas “apagando incêndios” e passa a ter um plano de evolução da tecnologia.",
      "Tecnologia alinhada ao negócio\nA TI passa a acompanhar as necessidades e o crescimento da empresa, em vez de se tornar um obstáculo para a operação.",
      "Maior produtividade\nProcessos, infraestrutura e ferramentas mais adequados ajudam os colaboradores a trabalhar com menos interrupções e dificuldades.",
    ],
    benefitsHighlight: "Sua empresa ganha clareza para decidir, segurança para crescer e controle para investir melhor em tecnologia.",
    href: "/servicos/consultoria",
    image: "/highlight-consultoria_claro.png",
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
      "Menos interrupções na operação\nAs mudanças são planejadas para causar o menor impacto possível no funcionamento da empresa.",
      "Redução do risco de perda de dados\nA execução planejada e as validações ajudam a reduzir riscos durante migrações, mudanças de servidores, redes e infraestrutura.",
      "Infraestrutura mais moderna e eficiente\nA empresa passa a contar com uma estrutura preparada para as necessidades atuais e para o crescimento futuro.",
      "Mais previsibilidade de custos\nCom escopo e planejamento definidos antes da execução, diminuem as chances de surpresas e gastos inesperados.",
      "Organização e documentação\nA infraestrutura fica documentada, facilitando futuras manutenções, expansões e atendimentos.",
      "Mais segurança nas mudanças\nO cliente não precisa “arriscar” uma alteração importante na TI. Existe planejamento, execução, acompanhamento e validação.",
      "Escalabilidade\nA infraestrutura é pensada não apenas para resolver o problema atual, mas para acompanhar o crescimento da empresa.",
    ],
    benefitsHighlight: "Modernize sua infraestrutura com segurança, reduza riscos e prepare sua empresa para crescer sem deixar a operação parar.",
    href: "/servicos/projetos",
    image: "/highlight-projetos_claro.png",
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
      "Mais controle sobre a TI\nO cliente passa a saber o que está acontecendo no ambiente, quais problemas existem e quais precisam de atenção.",
      "Menos problemas inesperados\nO acompanhamento contínuo permite identificar sinais de falhas antes que elas causem grandes impactos na operação.",
      "Redução de custos inesperados\nCom planejamento e acompanhamento, a empresa consegue se antecipar a problemas e investimentos urgentes.",
      "Mais previsibilidade\nEm vez de descobrir um problema somente quando ele acontece, a empresa passa a ter uma visão das necessidades futuras da TI.",
      "Maior disponibilidade dos sistemas\nMonitoramento e manutenção preventiva ajudam a reduzir interrupções que prejudicam os colaboradores e a operação.",
      "Decisões mais estratégicas\nO empresário deixa de decidir sobre tecnologia apenas quando surge uma emergência e passa a ter critérios para definir onde investir.",
      "TI alinhada ao crescimento da empresa\nA tecnologia acompanha a evolução do negócio, evitando que a infraestrutura fique defasada ou se torne um gargalo.",
      "Mais tranquilidade para o gestor\nA empresa passa a contar com uma equipe acompanhando a TI continuamente, sem que o gestor precise resolver cada problema técnico sozinho.",
    ],
    benefitsHighlight: "Mais controle, menos imprevistos e uma TI preparada para acompanhar o crescimento da sua empresa.",
    href: "/servicos/gestao",
    image: "/highlight-gestao_claro.png",
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
      "Menos tempo perdido\nProblemas de computador, internet, sistemas ou acessos são resolvidos mais rapidamente, evitando que colaboradores fiquem parados.",
      "Mais produtividade\nA equipe consegue se concentrar no trabalho, enquanto a SP START cuida dos problemas de TI.",
      "Atendimento rápido e organizado\nAs solicitações são registradas, priorizadas e acompanhadas de acordo com a urgência e o impacto no negócio.",
      "Menor impacto na operação\nUma falha que poderia parar um setor inteiro recebe a prioridade adequada para reduzir seus efeitos sobre a empresa.",
      "Facilidade para solicitar suporte\nO cliente conta com canais simples para pedir ajuda, como WhatsApp, acesso remoto ou atendimento presencial.",
      "Mais transparência\nO cliente sabe o que está acontecendo com o chamado e acompanha a evolução até a solução.",
      "Previsibilidade no atendimento\nCom processos e SLA definidos, a empresa sabe como suas demandas serão tratadas.",
      "Menos preocupação para o gestor\nO responsável pela empresa não precisa ficar intermediando cada problema técnico. A equipe de TI assume essa responsabilidade.",
    ],
    benefitsHighlight: "Sua equipe trabalha. A SP START cuida dos problemas de TI.",
    href: "/servicos/suporte",
    image: "/highlight-suporte_claro.png",
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
    image: "/highlight-chamados_claro.png",
  },
  {
    id: "atendimento",
    title: "Atendimento humanizado",
    description:
      "Tecnologia e inteligência artificial potencializam nossos processos, mas são as pessoas que fazem a diferença. Nosso atendimento é 100% humanizado, garantindo análise precisa, decisões assertivas e soluções realmente eficazes para cada cliente.",
    image: "/highlight-atendimento_claro.png",
  },
  {
    id: "prevencao",
    title: "Prevenção de falhas",
    description:
      "Atuamos com o modelo MSP (Managed Service Provider), oferecendo gestão completa e contínua da infraestrutura de TI. Esse formato garante monitoramento proativo, suporte especializado e prevenção de falhas, reduzindo riscos e aumentando a eficiência operacional.",
    image: "/highlight-prevencao_claro.png",
  },
  {
    id: "gestao",
    title: "Gestão inteligente",
    description:
      "Centralizamos toda a gestão da sua infraestrutura de TI em uma visão única e integrada, com relatórios claros e indicadores em tempo real. Isso permite decisões mais rápidas e assertivas, otimização de recursos e total visibilidade sobre o desempenho do seu ambiente tecnológico.",
    image: "/highlight-gestaointeligente_claro.png",
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
