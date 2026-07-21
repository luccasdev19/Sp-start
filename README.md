# SP START Solucoes em TI — site institucional

Esqueleto inicial do site, construido com Next.js 14 (App Router),
TypeScript, Tailwind CSS e MDX para o blog.

## Como rodar

```
npm install
cp .env.local.example .env.local
```

Edite o `.env.local` e defina `NEXT_PUBLIC_WHATSAPP_NUMBER` com o numero
real, no formato internacional sem espacos (ex: 5511999999999).

```
npm run dev
```

O site sobe em `http://localhost:3000`.

## O que ja esta pronto

- Home (`/`) com todas as secoes: Hero, stats, quem somos, missao/visao/valores,
  preview de servicos, atendimento, parcerias e CTA final.
- Pagina de Servicos (`/servicos`) com os 3 blocos de conteudo.
- Blog (`/blog`) funcional com MDX: lista posts de `content/blog/*.mdx`
  e renderiza cada post em `/blog/[slug]`. Ja tem 3 posts de exemplo.
- Botao de WhatsApp reutilizavel (`components/shared/WhatsAppButton.tsx`),
  com mensagens diferentes por secao (`lib/whatsapp.ts`).
- Paleta de cores dark/gray configurada no `tailwind.config.ts`.

## O que falta (pontos ainda em aberto)

1. **Accent color definitivo** — hoje esta um azul-acinzentado provisorio
   em `tailwind.config.ts` (`colors.accent`). Trocar quando decidido.
2. **Feature extra** do site — ainda nao definida.
3. **Conteudo real** — os textos institucionais (Quem somos, Missao/Visao/Valores,
   Parcerias, blocos de Servicos) estao como placeholder e precisam ser
   substituidos pelo conteudo real extraido do site atual em Wix.
4. **shadcn/ui** — o `components/ui/button.tsx` e um placeholder simples;
   rodar `npx shadcn@latest init` e `npx shadcn@latest add button` quando
   quiser os componentes oficiais.
5. **Menu mobile** — o Header ainda nao tem versao para telas pequenas.

## Publicando um novo post no blog

Criar um arquivo `.mdx` em `content/blog/`, seguindo o frontmatter dos
posts de exemplo:

```
---
title: "Titulo do post"
excerpt: "Resumo curto que aparece no card da listagem"
date: "2026-07-01"
tag: "Categoria"
---

teste no readme
Conteudo do post em markdown.
```

O build estatico (SSG) gera a pagina automaticamente a partir do slug
(nome do arquivo).
