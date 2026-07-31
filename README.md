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
- Página `/servicos` com acesso às quatro soluções principais
- Páginas individuais para Consultoria, Projetos, Gestão de TI e Suporte Técnico
- Conteúdo dos serviços centralizado em `lib/constants.ts`, reutilizado na home, na listagem e nas páginas detalhadas
- Timeline de leitura integrada às páginas de serviço, com animações discretas de progresso, conclusão e acessibilidade
- Botão de WhatsApp reutilizável com mensagens específicas por contexto
- Estrutura responsiva e visual institucional

## Serviços e jornada de leitura

Cada serviço possui uma rota própria:

- `/servicos/consultoria`
- `/servicos/projetos`
- `/servicos/gestao`
- `/servicos/suporte`

As páginas detalhadas usam o componente `ServiceReadingTimeline`. A timeline é um elemento inline, posicionado antes do CTA, e representa somente a leitura da página atual. Sua jornada é unidirecional:

1. `hidden`: permanece invisível até entrar na área de leitura.
2. `entering`: aparece com fade e deslocamento vertical suave.
3. `tracking`: preenche linha e anéis conforme o usuário percorre o trecho local da timeline.
4. `completed`: conclui o ícone final com um glow sutil e permanece estática antes do botão de contato.

Essa arquitetura usa Framer Motion (`useInView` e `useScroll`) para evitar reposicionamentos de layout, listeners manuais de scroll e a aparência de widget flutuante.

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

O projeto pode receber melhorias contínuas de conteúdo, SEO e conversão.
