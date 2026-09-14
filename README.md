# SP START Website

Site institucional da SP START Soluções em TI. A aplicação apresenta a empresa, seus serviços de tecnologia, diferenciais de atendimento, parceiros e canais de contato. Também possui uma área editorial com posts escritos em MDX.

O projeto usa o App Router do Next.js. As páginas são compostas por Server Components por padrão e os poucos componentes interativos ficam isolados nos componentes que precisam de animação, contadores ou interação no navegador.

## Stack

- Next.js `16.3.5` com App Router e Turbopack;
- React `19` e TypeScript;
- Tailwind CSS `3.4` com tokens de cor próprios;
- Framer Motion para animações de entrada e contadores;
- Lucide React e React Icons para ícones;
- `next/image` para imagens otimizadas;
- `next-mdx-remote`, `gray-matter` e `remark-gfm` para o blog;
- ESLint com `eslint-config-next`;
- PostCSS e Autoprefixer.

## Como a aplicação funciona

### Layout global

O arquivo `app/layout.tsx` é o layout raiz. Ele:

1. configura o idioma `pt-BR`;
2. carrega a fonte Inter por `next/font/google`;
3. define metadados globais de título e descrição;
4. aplica os estilos globais;
5. renderiza `Header`, o conteúdo da rota atual e `Footer`.

O `next.config.mjs` adiciona cabeçalhos de segurança em todas as rotas, incluindo Content Security Policy, `X-Frame-Options`, `X-Content-Type-Options`, política de referrer e proteção contra conteúdo misto.

### Página inicial

`app/page.tsx` compõe a Home nesta ordem:

1. `Hero`: apresentação principal, estatísticas e CTA para contato;
2. `AboutSection`: apresentação institucional da SP START;
3. `MissionVisionValues`: missão, visão e valores;
4. `ServicesPreview`: resumo dos quatro serviços;
5. `SupportHighlights`: diferenciais de atendimento;
6. `PartnershipsSection`: faixa animada com os parceiros;
7. `FinalCTA`: chamada final para contato via WhatsApp.

O Hero usa atualmente `public/hero-monitoramento.png`. As fotos de conteúdo recebem a classe `brand-photo`, definida em `app/globals.css`, que aplica uma correção visual leve para aproximar os assets da identidade petrol e dourada da marca.

### Serviços

`app/servicos/page.tsx` lista os serviços definidos em `lib/constants.ts`. Cada serviço possui:

- identificador e título;
- descrição curta e descrição longa;
- conteúdo detalhado em parágrafos;
- benefícios;
- imagem;
- URL própria;
- mensagem específica para WhatsApp.

As rotas individuais são geradas por `app/servicos/[slug]/page.tsx`. O componente `ServiceDetail` renderiza o conteúdo, benefícios, timeline de leitura e CTA de contato.

Serviços disponíveis:

- `/servicos/consultoria`
- `/servicos/projetos`
- `/servicos/gestao`
- `/servicos/suporte`

O `generateStaticParams` usa os IDs do arquivo de constantes para gerar essas páginas estaticamente durante o build.

### Blog em MDX

O blog fica em `content/blog` e é lido no servidor por `lib/mdx.ts`. O fluxo é:

1. `getAllPosts()` encontra arquivos `.mdx`, lê o frontmatter e ordena por data;
2. `app/blog/page.tsx` exibe a listagem;
3. `getAllSlugs()` alimenta o `generateStaticParams`;
4. `app/blog/[slug]/page.tsx` busca o post pelo slug;
5. `MDXRemote` renderiza o conteúdo com suporte a GitHub Flavored Markdown.

Cada arquivo deve conter frontmatter semelhante a este:

```md
---
title: "Título do post"
excerpt: "Resumo exibido na listagem."
date: "2026-09-14"
tag: "Segurança"
---

Texto do artigo em Markdown.
```

Os slugs aceitos seguem o padrão `a-z`, números e hífens. O leitor de posts também valida o caminho antes de acessar o arquivo.

### WhatsApp

`lib/whatsapp.ts` centraliza a criação de links para `wa.me`. O número não fica hardcoded no código: ele é lido de `NEXT_PUBLIC_WHATSAPP_NUMBER`.

Os botões podem usar a mensagem geral ou uma mensagem definida no serviço. Se a variável não estiver configurada em desenvolvimento, o código avisa no console e gera um link sem número.

## Identidade visual

Os principais tokens estão definidos em `tailwind.config.ts` e `app/globals.css`:

- fundo: `#10161b`;
- superfícies: `#151b20` e `#212a30`;
- accent dourado: `#d4a24e`;
- petrol: `#0f2b38` e `#1c4356`;
- bordas: `#2a3840` e `#3a4a54`.

Além dos tokens, o CSS global define a classe `brand-photo` para manter uma aparência visual consistente entre fotos de origens diferentes. Logos de parceiros não recebem esse filtro.

## Estrutura de diretórios

```text
app/
	layout.tsx                 Layout global, metadata e shell do site
	page.tsx                   Página inicial
	globals.css                Reset, tokens CSS e tratamento das fotos
	servicos/page.tsx          Listagem de serviços
	servicos/[slug]/page.tsx   Página individual de serviço
	blog/page.tsx              Listagem do blog
	blog/[slug]/page.tsx       Página individual de post
components/
	layout/                    Header e Footer
	sections/                  Seções da Home e detalhes de serviços
	shared/                    Elementos reutilizáveis e animações
content/blog/                Posts em MDX
lib/
	constants.ts               Serviços, estatísticas, destaques e parceiros
	mdx.ts                     Leitura segura do conteúdo do blog
	utils.ts                   Utilitários compartilhados
	whatsapp.ts                Links e mensagens de WhatsApp
public/                      Imagens e logos estáticos
```

## Requisitos

- Node.js 18 ou superior; Node.js 20+ é recomendado;
- npm;
- acesso ao número de WhatsApp usado pelo projeto, caso os CTAs sejam testados.

## Configuração local

Clone o repositório e instale as dependências:

```bash

cd spstart-website
npm install
```

Crie `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

O número deve estar no formato internacional, sem espaços, parênteses, hífens ou o sinal de `+`.

## Comandos

Servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

Verificação de lint:

```bash
npm run lint
```

Build de produção:

```bash
npm run build
```

O build executa a compilação TypeScript, coleta os dados das páginas e gera as rotas estáticas, incluindo os slugs de serviços e blog.

Execução do build produzido:

```bash
npm run start
```

## Imagens e assets

Os arquivos estáticos ficam em `public` e são referenciados por caminho absoluto, por exemplo `/spstart-logo.png`. Ao adicionar uma imagem:

1. coloque o arquivo em `public`;
2. use `next/image` nos componentes React;
3. informe `alt`, `sizes` e `fill` ou dimensões explícitas;
4. aplique `brand-photo` somente a fotografias, nunca a logos ou ícones;
5. confirme o enquadramento em desktop e mobile.

Assets que não possuem referência no código devem ser removidos somente após confirmar que não são usados por links externos ou ferramentas fora do repositório.

## Deploy

O projeto é compatível com Vercel e outras plataformas que suportem Next.js. Para produção:

1. configure `NEXT_PUBLIC_WHATSAPP_NUMBER` no ambiente de produção;
2. instale as dependências com `npm install`;
3. execute `npm run lint`;
4. execute `npm run build`;
5. publique o resultado usando a plataforma escolhida.

Não commite `.env.local` nem valores reais de credenciais no repositório.

## Manutenção

Antes de abrir uma alteração, valide pelo menos:

```bash
npm run lint
npm run build
```

Ao alterar rotas, serviços ou posts, confira também os links gerados e os estados de conteúdo vazio. Ao alterar imagens, verifique o contraste dos overlays, o foco do `object-cover` e a leitura do texto sobre a foto.
