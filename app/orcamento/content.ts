/**
 * Copy for /orcamento. The three job types are read from `services` so the
 * page and the closing band on Construção & Remodelação can never disagree
 * about what ILICITANO does.
 */
import { services } from "@/lib/content";

export const intro = {
  eyebrow: "Pedir orçamento",
  lead: "Conte-nos que obra tem em mente. Fazemos a visita, o levantamento e um orçamento detalhado — gratuito e sem qualquer compromisso. [Prazo de resposta a confirmar com a ILICITANO]",
} as const;

export const workTypeOptions = services.map((service) => service.shortLabel ?? service.label);

/** The four localities the company already works in — nothing added. */
export const coverage = "Trabalhamos em Alcanena, Fátima, Leiria e Lisboa.";

export const consent =
  "[Texto de consentimento por redigir — tratamento dos dados para efeitos de resposta ao pedido de orçamento]";
