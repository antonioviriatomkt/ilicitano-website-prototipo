/**
 * A readable mirror of styles/tokens.css, used only to render the design
 * system page at /sistema. The CSS file stays the source of truth — these
 * entries name and describe the tokens, and every swatch and specimen on the
 * page reads its actual value through var(), so the page cannot drift from
 * the stylesheet without visibly breaking.
 */

export const palette = [
  { token: "--paper", name: "Papel", use: "Fundo de página" },
  { token: "--white", name: "Branco", use: "Cartões, secção de serviços" },
  { token: "--paper-2", name: "Papel 2", use: "Molduras, espaços reservados" },
  { token: "--line", name: "Linha", use: "Separadores, contornos" },
  { token: "--ouro", name: "Ouro (marca)", use: "Estado à venda, ênfase no rodapé" },
  { token: "--ouro-700", name: "Ouro 700", use: "Rótulos, ênfase, ligações ativas" },
  { token: "--ink-2", name: "Tinta 2", use: "Texto secundário" },
  { token: "--ink", name: "Tinta (marca)", use: "Títulos, botões, rodapé" },
] as const;

export const durations = [
  { token: "--dur-instant", use: "Retorno imediato — estados premidos" },
  { token: "--dur-fast", use: "Cor: passagem do rato em ligações e botões" },
  { token: "--dur-base", use: "Transformações de interface — setas, sublinhados" },
  { token: "--dur-slow", use: "Painéis e camadas" },
  { token: "--dur-reveal", use: "Entrada de conteúdo ao entrar no ecrã" },
  { token: "--dur-photo", use: "Aproximação da fotografia — o relógio mais lento" },
] as const;

export const easings = [
  { token: "--ease-out", use: "Assenta sem ultrapassar — entradas e revelações" },
  { token: "--ease-inout", use: "Simétrica — o que abre e fecha" },
] as const;
