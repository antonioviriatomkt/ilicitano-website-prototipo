# ILICITANO — protótipo do site

Protótipo do novo site da ILICITANO (promoção imobiliária, engenharia e construção, Leiria),
construído a partir da proposta de linguagem visual desenhada em Claude Design.

### Rotas

| Rota | O que é |
| --- | --- |
| `/` | Home |
| `/empreendimentos` | Índice — o que está à venda e o que foi entregue |
| `/empreendimentos/kouros-ii` | Ficha do empreendimento em comercialização |
| `/empreendimentos/[slug]` | Ficha de um empreendimento concluído (6) |
| `/construcao-remodelacao` | Construção e remodelação para particulares |
| `/quem-somos` | A empresa |
| `/contactos` | Contactos e formulário |
| `/marcar-visita` | Marcação de visita |
| `/orcamento` | Pedido de orçamento |
| `/aviso-legal`, `/termos-e-condicoes`, `/politica-de-privacidade`, `/gestao-de-cookies` | Documentos legais — esqueletos por preencher |
| `/sistema` | Linguagem visual: tokens, tipografia, componentes, movimento |

```bash
npm install
npm run dev
```

## Stack

Next.js (App Router) · TypeScript · CSS Modules. Sem framework de CSS: a linguagem visual é um
conjunto de custom properties, e cada componente traz o seu próprio módulo. `next/font` serve as
duas famílias localmente, `next/image` trata da fotografia.

## Estrutura

```
app/
  layout.tsx          cabeçalho, rodapé, tipos de letra, metadados
  page.tsx            home — compõe as seis secções, sem lógica própria
  <rota>/             uma pasta por rota; conteúdo próprio em content.ts
styles/
  tokens.css          ← fonte de verdade da linguagem visual
  base.css            reset, defaults, prefers-reduced-motion
  primitives.css      classes de tipo e grelha partilhadas
components/
  brand/              monograma e logótipo
  ui/                 Button, TextLink, Chip, Fact, Frame, SectionHeading,
                      PageIntro, Breadcrumb, Prose, Callout, Placeholder,
                      Pending, ProjectCard, Field, ChoiceChips, Checkbox
  layout/             Header, Footer, LegalPage
  motion/             Reveal — entrada ao entrar no ecrã
  sections/           Hero, Facts, Featured, Portfolio, Services, About,
                      QuoteBand
lib/content.ts        dados e copy globais, fora dos componentes
public/fotografia/    fotografia da ILICITANO
```

## Linguagem visual

### Tokens

`styles/tokens.css` é a única fonte de verdade. Os nomes são os mesmos da prancha "Linguagem
visual" no Claude Design — `--paper`, `--ink`, `--ouro`, `--line` — para que um valor se siga do
desenho ao código sem tabela de tradução. Nenhum componente inventa uma cor, uma duração ou uma
curva: tudo lê os tokens.

| Grupo | Regra |
| --- | --- |
| Cor | `--paper` é a página; `--white` só para superfícies que se levantam dela (cartões, faixa de serviços). |
| Ouro | `--ouro` / `--ouro-700` são o único acento e significam **uma** coisa: em comercialização, ou estado ativo. |
| Tipo | `--font-display` (Manrope Light) só para voz de título; `--font-ui` (Jost) para toda a informação e interface. |
| Cantos | Não há raios. O monograma é feito de barras de corte reto, e a grelha é ortogonal. |

### Movimento

Três durações e duas curvas cobrem o site inteiro. O movimento é lento, num só eixo e nunca
elástico — a marca é calma e arquitetónica, e o movimento acompanha.

| Token | Onde |
| --- | --- |
| `--dur-fast` | cor na passagem do rato |
| `--dur-base` | transformações de interface — setas, sublinhados |
| `--dur-reveal` | entrada de conteúdo ao entrar no ecrã |
| `--dur-photo` | aproximação da fotografia — o relógio mais lento, para ler como cinema e não como interface |
| `--ease-out` | assenta sem ultrapassar — entradas |
| `--ease-inout` | simétrica — o que abre e fecha |

Tudo colapsa sob `prefers-reduced-motion`: em vez de desligar as transições em bloco — o que
tiraria a legibilidade dos controlos — as durações vão a ~0 e `--reveal-shift` / `--photo-zoom`
são neutralizados, pelo que a mudança de cor continua a acontecer. Nenhuma informação depende de
movimento para ser lida, e o `Reveal` mostra o conteúdo se o `IntersectionObserver` não existir.

## Conteúdo

Todo o copy vive em `lib/content.ts`. Os valores entre **[parêntesis retos]** — preços, áreas,
data de conclusão — são os que só a ILICITANO tem, e estão deixados como marcadores visíveis em
vez de inventados.

## Formulários

Nenhum formulário envia nada. Não têm `action`, o botão principal é `type="button"`, e o copy não
promete que a mensagem seguiu. Ligar isto a um destinatário é uma decisão da build a sério.

O texto de consentimento de RGPD está por redigir e aparece como marcador, ligado à política de
privacidade.

## Verificação

`npm run build`, `npx tsc --noEmit` e `npx eslint .` têm de passar. Além disso, as 16 rotas foram
verificadas a 390, 768 e 1440 px: estado HTTP correto, sem scroll horizontal, um só `<h1>` por
página, nenhuma imagem sem `alt`, nenhuma revelação presa a opacidade 0 e zero erros de consola.
O grafo de ligações internas não tem ligações mortas.

## Fotografia

Toda a fotografia em `public/fotografia/` é da ILICITANO, tirada do site atual. Três notas que
precisam de decisão do cliente:

- **`vale-cavalos.jpg` tem a marca de água de outro estúdio** ("WORKMI STUDIO") no canto inferior
  direito. O enquadramento (`focus` no modelo `developments`) mantém-na fora dos cortes 4/3, mas
  ela continua lá no ficheiro e aparece em cortes mais largos. Não foi recortada de propósito:
  apagar a marca de água de terceiros é apagar uma atribuição. Ou a ILICITANO confirma que a
  imagem é dela e fornece uma versão limpa, ou usa-se outra.
- **`cozinha.jpg` é uma fotografia de obra por acabar** — buraco por baixo da placa, película nos
  eletrodomésticos, remate do pavimento por fazer. Era a maior imagem da home. Saiu de todo o
  site; a substituta é `vale-lobos-cozinha.jpg`.
- **`sao-bento.jpg` divide o enquadramento com o prédio degradado do lado.** O edifício
  reabilitado é o da esquerda, e o `focus` põe-no a dominar o corte — mas por baixo de um chip
  "Concluído" convém uma fotografia só do edifício entregue.

Em geral, esta é a parte do protótipo que mais ganha com material melhor: fotografia de obra
acabada, renders do Kouros II e plantas. Chegando material novo, entra em `public/fotografia/` e
troca-se o caminho em `lib/content.ts` — nenhum componente precisa de mudar.

## Estado

Todas as rotas do protótipo estão construídas. O que falta é do cliente, não do código:

- Os **valores entre [parêntesis retos]** — preços, áreas, frações, datas, dimensão da equipa,
  âmbito do alvará.
- As **imagens marcadas com `Placeholder`** — renders do Kouros II, plantas, mapas, fotografia da
  equipa.
- Os **quatro documentos legais**, que são esqueletos e dizem-no na própria página. Têm de ser
  redigidos por assessoria jurídica antes de qualquer publicação.
- O **seletor de idioma é decorativo**: o protótipo é só PT.
