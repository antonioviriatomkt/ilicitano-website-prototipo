/**
 * Copy for /quem-somos. Nothing here goes beyond what the company itself has
 * said about itself: the founding year, the three sectors, the alvará and the
 * places it works in. Anything the page would like to say and cannot source —
 * the size of the team, the milestones of the last seventeen years — is left
 * in [square brackets] for ILICITANO to fill.
 */

import { company } from "@/lib/content";

type Sector = {
  slug: string;
  eyebrow: string;
  title: string;
  body: string;
  photo: string;
  photoAlt: string;
  /** Only two of the three sectors have a page of their own to link to. */
  href?: string;
  linkLabel?: string;
};

export const sectors: Sector[] = [
  {
    slug: "promocao",
    eyebrow: "01 — Promoção imobiliária",
    title: "Empreendimentos próprios",
    body: "Empreendimentos residenciais desenvolvidos pela ILICITANO em Alcanena, Fátima, Leiria e Lisboa — do terreno à entrega da chave.",
    photo: "/fotografia/vale-lobos.jpg",
    photoAlt:
      "Urbanização Vale de Lobos, Leiria — edifício com comércio no piso térreo e habitação nos pisos superiores",
    href: "/empreendimentos",
    linkLabel: "Ver empreendimentos",
  },
  {
    slug: "engenharia",
    eyebrow: "02 — Engenharia",
    title: "Alvará 123006 - PAR",
    body: "O alvará que a empresa detém cobre construção e engenharia. [Disciplinas, classes e âmbito — a detalhar pela ILICITANO.]",
    photo: "/fotografia/obra-estrutura.jpg",
    photoAlt: "Estrutura de betão de uma obra da ILICITANO em execução",
  },
  {
    slug: "construcao",
    eyebrow: "03 — Construção",
    title: "Onde tudo começou",
    body: "Moradias, blocos habitacionais e armazéns industriais desde 2008. Hoje também obra chave na mão para particulares.",
    photo: "/fotografia/obra-fachada.jpg",
    photoAlt: "Obra de raiz em curso, fachada em construção",
    href: "/construcao-remodelacao",
    linkLabel: "Construção & Remodelação",
  },
];

/** The identity block that closes the page. Every value comes from `company`. */
export const credentials = [
  { term: "Alvará", detail: `${company.alvara} · construção e engenharia` },
  { term: "Contribuinte", detail: company.nif },
  { term: "Sede", detail: `${company.addressLine1}, ${company.addressLine2}` },
  { term: "Onde trabalhamos", detail: "Alcanena · Fátima · Leiria · Lisboa" },
] as const;
