# SP START Soluções em TI

Site institucional da SP START, desenvolvido com Next.js, TypeScript e Tailwind CSS. O projeto possui uma landing page completa com página de serviços. 

## Tecnologias

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- MDX para o blog
- Framer Motion para pequenas animações
- Lucide React e React Icons

## Funcionalidades atuais

- Landing page com seção de hero, estatísticas, sobre, missão/visão/valores, serviços, atendimento, parcerias e CTA final
- Página de serviços com conteúdo institucional e botão de contato
- Botão de WhatsApp reutilizável com mensagens específicas por contexto
- Estrutura responsiva e visual institucional

## Requisitos

- Node.js 18+ recomendado
- npm ou pnpm

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Crie um arquivo `.env.local` na raiz do projeto com a variável abaixo:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

> O valor deve estar no formato internacional, sem espaços.

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse: http://localhost:3000

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estrutura principal

```text
app/                # Rotas e páginas do Next.js
components/         # Componentes reutilizáveis do site
lib/                # Constantes, utilidades e integração do WhatsApp
public/             # Imagens e assets estáticos
```
## Observações

O projeto já está funcional e compilando, mas ainda pode receber melhorias de conteúdo, SEO e conversão ao longo do desenvolvimento.
