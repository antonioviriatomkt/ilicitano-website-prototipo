/**
 * Copy for /marcar-visita. The list of developments is derived from
 * lib/content rather than restated here, so a new project shows up in the
 * form without anyone having to remember a second file.
 */
import { developments, forSale } from "@/lib/content";

export const intro = {
  eyebrow: "Marcar visita",
  lead: "Escolha o empreendimento ou a obra que quer conhecer e deixe-nos o seu contacto. Combinamos consigo o dia e a hora, e acompanhamo-lo no local. [Prazo de resposta a confirmar com a ILICITANO]",
} as const;

/** The one development in commercialisation leads the list. */
export const visitOptions = [
  ...forSale.map((development) => development.name),
  ...developments.filter((development) => development.status !== "venda").map((d) => d.name),
  "Outro / ainda não sei",
];

/**
 * Only the typologies that actually exist in the portfolio, plus the two
 * honest answers a visitor may need to give.
 */
export const typologyOptions = ["T1", "T2", "T3", "T4", "Moradia", "Ainda não sei"];

/** The project photographed beside the form — the one open to visits. */
export const visitPhoto = forSale[0];

export const consent =
  "[Texto de consentimento por redigir — tratamento dos dados para efeitos de marcação da visita]";
