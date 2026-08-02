# SP Start Website

Site institucional da SP Start, desenvolvido com Next.js, TypeScript e Tailwind CSS. O projeto reúne uma landing page completa, páginas de serviços, blog em MDX e componentes reutilizáveis para apresentação da marca e conversão de leads.

## Visão geral

Este projeto foi criado para representar a SP Start como uma empresa especializada em soluções em TI, com foco em:

- apresentação institucional e identidade visual;
- páginas detalhadas de serviços;
- navegação simples para contato via WhatsApp;
- conteúdo editorial com blog em MDX;
- estrutura responsiva e pronta para crescimento.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- MDX para blog
- Framer Motion para animações sutis
- Lucide React e React Icons

## Funcionalidades principais

- Landing page com hero, sobre, missão/visão/valores, serviços, parcerias e CTA final;
- página de serviços com acesso às principais soluções;
- páginas individuais para Consultoria, Projetos, Gestão de TI e Suporte Técnico;
- conteúdo compartilhado para home, listagem e páginas detalhadas;
- timeline de leitura nas páginas de serviço;
- botão de WhatsApp com mensagens contextualizadas;
- estrutura responsiva para desktop e mobile.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd spstart-website
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo .env.local na raiz com as variáveis necessárias:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

> O valor deve seguir o formato internacional, sem espaços e sem caracteres especiais.

## Execução local

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estrutura do projeto

```text
app/              # rotas e páginas do Next.js
components/       # componentes reutilizáveis do site
content/          # conteúdo do blog em MDX
lib/              # constantes, utilidades e integrações
public/           # imagens e arquivos estáticos
```

## Implantação

O projeto pode ser publicado em plataformas como Vercel, que possuem excelente compatibilidade com Next.js.

## Observações

Este repositório está em evolução e pode receber melhorias futuras em conteúdo, SEO, performance e conversão.
