/**
 * Site content, in Portuguese, kept out of the components.
 *
 * Values in [square brackets] are the figures only ILICITANO holds — prices,
 * areas, unit counts, completion dates. They are deliberately left as visible
 * placeholders rather than invented, so nobody ships a made-up number.
 */

export const company = {
  name: "ILICITANO",
  legalName: "ILICITANO S.A.",
  tagline:
    "Promoção imobiliária, engenharia e construção. Definida pela qualidade, requinte e detalhe.",
  phone: "+351 915 201 376",
  phoneHref: "tel:+351915201376",
  email: "geral@ilicitano.pt",
  emailHref: "mailto:geral@ilicitano.pt",
  addressLine1: "R. João Machado Polónia, Loja 28 R/C",
  addressLine2: "2410-539 Leiria",
  alvara: "Alvará 123006 - PAR",
  nif: "NIF 508 783 615",
  foundedYear: 2008,
} as const;

export const navigation = [
  { label: "Empreendimentos", href: "/empreendimentos" },
  { label: "Construção & Remodelação", href: "/construcao-remodelacao" },
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Contactos", href: "/contactos" },
] as const;

export const languages = ["PT", "EN", "ES", "FR"] as const;

export const facts = [
  { value: "2008", label: "Ano de fundação" },
  { value: "8", label: "Empreendimentos" },
  { value: "4", label: "Localidades — Alcanena, Fátima, Leiria, Lisboa" },
  { value: "Alvará", label: "123006 - PAR · Construção e engenharia" },
] as const;

export type DevelopmentStatus = "venda" | "concluido";

export type Development = {
  slug: string;
  name: string;
  location: string;
  /** Short right-hand label on a card — typologies, or what the project is. */
  meta: string;
  status: DevelopmentStatus;
  /** Chip label. Longer than `meta`, and only shown on a development page. */
  statusLabel: string;
  photo: string;
  photoAlt: string;
  /** object-position, where a centred crop loses the subject. */
  focus?: string;
  /** One line under the name on the development page. */
  intro: string;
};

/**
 * Every development, in the order they should be listed. Exactly one carries
 * status "venda" at a time — it is the only thing on the site allowed to wear
 * the gold chip.
 */
export const developments: Development[] = [
  {
    slug: "kouros-ii",
    name: "Kouros II",
    location: "Centro da cidade de Alcanena",
    meta: "T1 · T2 · T3",
    status: "venda",
    statusLabel: "Em construção · em comercialização",
    photo: "/fotografia/kouros2-obra.jpg",
    photoAlt: "Kouros II — laje em construção, vista aérea",
    intro:
      "No coração de Alcanena nasce um empreendimento moderno, pensado para quem procura conforto, qualidade e estilo de vida.",
  },
  {
    slug: "sao-bento",
    name: "São Bento",
    location: "Lisboa · coração da cidade",
    meta: "T2 · T3 · T4",
    status: "concluido",
    statusLabel: "Concluído",
    photo: "/fotografia/sao-bento.jpg",
    photoAlt: "São Bento, Lisboa — fachada do edifício reabilitado",
    // The restored building is on the left of the frame; its derelict
    // neighbour is on the right. A centred crop shows mostly the neighbour,
    // under a chip that says "Concluído".
    focus: "left center",
    intro:
      "Reabilitação de um edifício no coração de Lisboa, devolvido à cidade sem perder o carácter da fachada original.",
  },
  {
    slug: "kouros-building",
    name: "Kouros Building",
    location: "Alcanena",
    meta: "T2 · T3",
    status: "concluido",
    statusLabel: "Concluído",
    photo: "/fotografia/kouros-building.jpg",
    photoAlt: "Kouros Building, Alcanena — fachada com varandas",
    intro:
      "O primeiro Kouros: um edifício residencial no centro de Alcanena, entregue chave na mão.",
  },
  {
    slug: "stone-village",
    name: "Stone Village",
    location: "Zona costeira de Leiria",
    meta: "Condomínio privado",
    status: "concluido",
    statusLabel: "Concluído",
    photo: "/fotografia/stone-village.jpg",
    photoAlt: "Stone Village — moradias em condomínio privado",
    intro:
      "Condomínio privado de moradias na zona costeira de Leiria, com piscina e espaços comuns ajardinados.",
  },
  {
    slug: "villas-vale-de-cavalos",
    name: "Villas Vale de Cavalos",
    location: "Fátima",
    meta: "Moradias geminadas",
    status: "concluido",
    statusLabel: "Concluído",
    photo: "/fotografia/vale-cavalos.jpg",
    photoAlt: "Villas Vale de Cavalos, Fátima — moradia geminada",
    // This photograph carries another studio's watermark in the bottom-right
    // corner. Framing left keeps it out of the 4/3 crops; it is still visible
    // in the wide crop on the development page. See the note in the README —
    // it needs replacing, not cropping.
    focus: "left center",
    intro: "Moradias geminadas em Fátima, de linhas contemporâneas e volumetria simples.",
  },
  {
    slug: "villas-alfaiate",
    name: "Villas Alfaiate",
    location: "Leiria",
    meta: "Moradias T3",
    status: "concluido",
    statusLabel: "Concluído",
    photo: "/fotografia/alfaiate.jpg",
    photoAlt: "Villas Alfaiate, Leiria — conjunto de moradias T3",
    intro: "Conjunto de moradias T3 em Leiria, com pátio e estacionamento privativo.",
  },
  {
    slug: "urbanizacao-vale-de-lobos",
    name: "Urbanização Vale de Lobos",
    location: "Leiria",
    meta: "Comércio + T1 · T2 · T3",
    status: "concluido",
    statusLabel: "Concluído",
    photo: "/fotografia/vale-lobos.jpg",
    photoAlt: "Urbanização Vale de Lobos, Leiria — edifício com comércio no piso térreo",
    intro: "Urbanização com comércio no piso térreo e habitação nos pisos superiores, em Leiria.",
  },
];

export const forSale = developments.filter((d) => d.status === "venda");
export const completed = developments.filter((d) => d.status === "concluido");

export function developmentBySlug(slug: string) {
  return developments.find((d) => d.slug === slug);
}

/** The detail only the development page shows, keyed by slug. */
export const kourosII = {
  ...developments[0],
  completion: "Conclusão prevista: [trimestre / ano]",
  /**
   * The home's card says less than the development page, in shorter words —
   * it has to sell the click, not answer every question.
   */
  homeCard: {
    statusChip: "Em construção",
    location: "Centro de Alcanena",
    photoCaption: "Estado da obra — junho de 2026",
    highlights: [
      "Cozinhas equipadas e casas de banho com acabamentos premium",
      "Isolamento térmico classe A e acústico, vidro duplo com estores elétricos",
      "Parqueamento no piso -1, elevador e pré-instalação de AC",
      "Com a obra em curso, ainda pode escolher alguns acabamentos",
    ],
  },
  galleryCaption: "Fotografia de obra — junho de 2026 · 1 / 3",
  specs: [
    { value: "T1 · T2 · T3", label: "Tipologias" },
    { value: "[frações]", label: "Apartamentos · [n] disponíveis" },
    { value: "Classe A", label: "Isolamento térmico" },
  ],
  features: [
    "Cozinhas modernas equipadas",
    "Casas de banho com louça suspensa e acabamentos premium",
    "Janelas de vidro duplo com estores elétricos",
    "Varandas com vista desafogada",
    "Parqueamento no piso -1",
    "Elevador",
    "Isolamento térmico (classe A) e acústico",
    "Pré-instalação de ar condicionado",
  ],
  /** Every figure here is ILICITANO's to supply — see the note at the top. */
  units: [
    { typology: "T1", area: "[área] m²", floor: "[piso]", price: "[preço] €" },
    { typology: "T2", area: "[área] m²", floor: "[piso]", price: "[preço] €" },
    { typology: "T3", area: "[área] m²", floor: "[piso]", price: "[preço] €" },
  ],
  proximity: [
    { place: "Escola", time: "3 min", icon: "walk" },
    { place: "Supermercados", time: "4 min", icon: "walk" },
    { place: "Ginásios", time: "5 min", icon: "walk" },
    { place: "Nó das autoestradas A1 e A23", time: "6 min", icon: "car" },
    { place: "Farmácias, clínicas e hospital", time: "perto", icon: "walk" },
    { place: "Jardins, cultura, restaurantes e cafés", time: "perto", icon: "walk" },
  ],
} as const;

export type Service = {
  slug: string;
  label: string;
  /** Used where the full label is too long — chips, the home's list. */
  shortLabel?: string;
  href: string;
  photo: string;
  photoAlt: string;
  body: string;
};

export const services: Service[] = [
  {
    slug: "raiz",
    label: "Construção de raiz",
    href: "/construcao-remodelacao#raiz",
    photo: "/fotografia/render-moradia.jpg",
    photoAlt: "Moradia contemporânea construída de raiz",
    body: "Executamos o seu projeto desde as fundações até à entrega da chave: estrutura, alvenarias, instalações técnicas e acabamentos, com rigor técnico e cumprimento de prazos.",
  },
  {
    slug: "integral",
    label: "Remodelação integral",
    href: "/construcao-remodelacao#integral",
    photo: "/fotografia/corredor.jpg",
    photoAlt: "Corredor remodelado de uma habitação",
    body: "Transformação completa de moradias, apartamentos ou escritórios, adaptando cada divisão às suas necessidades atuais.",
  },
  {
    slug: "parcial",
    label: "Remodelação parcial — cozinhas, casas de banho, quartos",
    shortLabel: "Remodelação parcial",
    href: "/construcao-remodelacao#parcial",
    photo: "/fotografia/wc-marmore.jpg",
    photoAlt: "Casa de banho remodelada em mármore claro",
    body: "Atualizamos divisões específicas da sua casa ou local de trabalho. Projetamos e renovamos cozinhas, casas de banho, quartos ou qualquer outra divisão.",
  },
];

/** The four steps of a turnkey job, as shown on Construção & Remodelação. */
export const process = [
  {
    number: "01",
    title: "Planeamento",
    body: "Visita, levantamento e orçamento detalhado — gratuito e sem compromisso.",
  },
  {
    number: "02",
    title: "Materiais",
    body: "Escolha conjunta dos materiais e acabamentos, com a nossa equipa.",
  },
  {
    number: "03",
    title: "Execução",
    body: "Execução rigorosa, acompanhamento próximo e cumprimento dos prazos acordados.",
  },
  {
    number: "04",
    title: "Entrega",
    body: "Prazo acordado, sem surpresas, sem dores de cabeça. Entrega da chave.",
  },
] as const;

/** Structural work, shown as it really looks. */
export const buildStages = [
  {
    label: "01 — Estrutura",
    photo: "/fotografia/obra-laje.jpg",
    photoAlt: "Laje em construção",
  },
  {
    label: "02 — Divisórias e redes técnicas",
    photo: "/fotografia/obra-divisorias.jpg",
    photoAlt: "Divisórias e redes técnicas em obra",
  },
  {
    label: "03 — Acabamentos",
    photo: "/fotografia/vale-lobos-cozinha.jpg",
    photoAlt: "Cozinha acabada",
  },
] as const;

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Termos e condições", href: "/termos-e-condicoes" },
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
  { label: "Gestão de cookies", href: "/gestao-de-cookies" },
  { label: "Livro de Reclamações", href: "https://www.livroreclamacoes.pt/inicio" },
] as const;
