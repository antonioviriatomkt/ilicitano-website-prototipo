# ILICITANO — protótipo do site

Protótipo do novo site da ILICITANO (promoção imobiliária, engenharia e construção, Leiria),
construído a partir da proposta de linguagem visual desenhada em Claude Design.

- **Home** — `/`
- **Linguagem visual** (tokens, tipografia, componentes, movimento) — `/sistema`

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
  sistema/            página viva da linguagem visual
styles/
  tokens.css          ← fonte de verdade da linguagem visual
  base.css            reset, defaults, prefers-reduced-motion
  primitives.css      classes de tipo e grelha partilhadas
components/
  brand/              monograma e logótipo
  ui/                 Button, TextLink, Chip, Fact, Frame, SectionHeading
  layout/             Header (menu, condensação no scroll), Footer
  motion/             Reveal — entrada ao entrar no ecrã
  sections/           Hero, Facts, Featured, Portfolio, Services, About
lib/content.ts        todo o copy e os dados, fora dos componentes
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

## Estado

Feito: home (desktop e telemóvel) e a página da linguagem visual.

Por fazer: as ligações do cabeçalho, do rodapé e dos cartões apontam para rotas que ainda não
existem. As próximas páginas já estão desenhadas na mesma prancha do Claude Design —
`Kouros II — empreendimento` e `Construção & Remodelação`. O seletor de idioma é decorativo: o
protótipo é só PT.
