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
  tagline: "Promoção imobiliária, engenharia e construção. Definida pela qualidade, requinte e detalhe.",
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

/** The one development currently on the market — the only gold-chipped item. */
export const featured = {
  name: "Kouros II",
  location: "Centro de Alcanena",
  href: "/empreendimentos/kouros-ii",
  status: "Em construção",
  photo: "/fotografia/kouros2-obra.jpg",
  photoAlt: "Kouros II — laje em construção, vista aérea",
  photoCaption: "Estado da obra — junho de 2026",
  specs: [
    { value: "T1·T2·T3", label: "Tipologias" },
    { value: "[área] m²", label: "Áreas" },
    { value: "[preço] €", label: "Desde" },
  ],
  features: [
    "Cozinhas equipadas e casas de banho com acabamentos premium",
    "Isolamento térmico classe A e acústico, vidro duplo com estores elétricos",
    "Parqueamento no piso -1, elevador e pré-instalação de AC",
    "Com a obra em curso, ainda pode escolher alguns acabamentos",
  ],
} as const;

export const portfolio = [
  {
    name: "São Bento",
    location: "Lisboa · coração da cidade",
    meta: "T2 · T3 · T4",
    photo: "/fotografia/sao-bento.jpg",
    href: "/empreendimentos/sao-bento",
  },
  {
    name: "Kouros Building",
    location: "Alcanena",
    meta: "T2 · T3",
    photo: "/fotografia/kouros-building.jpg",
    href: "/empreendimentos/kouros-building",
  },
  {
    name: "Stone Village",
    location: "Zona costeira de Leiria",
    meta: "Condomínio privado",
    photo: "/fotografia/stone-village.jpg",
    href: "/empreendimentos/stone-village",
  },
  {
    name: "Villas Vale de Cavalos",
    location: "Fátima",
    meta: "Moradias geminadas",
    photo: "/fotografia/vale-cavalos.jpg",
    href: "/empreendimentos/villas-vale-de-cavalos",
  },
  {
    name: "Villas Alfaiate",
    location: "Leiria",
    meta: "Moradias T3",
    photo: "/fotografia/alfaiate.jpg",
    href: "/empreendimentos/villas-alfaiate",
  },
  {
    name: "Urbanização Vale de Lobos",
    location: "Leiria",
    meta: "Comércio + T1 · T2 · T3",
    photo: "/fotografia/vale-lobos.jpg",
    href: "/empreendimentos/urbanizacao-vale-de-lobos",
  },
] as const;

export const services = [
  { label: "Construção de raiz", href: "/construcao-remodelacao#raiz" },
  { label: "Remodelação integral", href: "/construcao-remodelacao#integral" },
  {
    label: "Remodelação parcial — cozinhas, casas de banho, quartos",
    href: "/construcao-remodelacao#parcial",
  },
] as const;

export const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Termos e condições", href: "/termos-e-condicoes" },
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
  { label: "Gestão de cookies", href: "/gestao-de-cookies" },
  { label: "Livro de Reclamações", href: "https://www.livroreclamacoes.pt/inicio" },
] as const;
