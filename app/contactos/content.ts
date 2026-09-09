/**
 * Copy for /contactos. The phone, the e-mail and the address come from
 * `company` in lib/content.ts, so there is exactly one place where a real
 * contact detail is written down. The opening hours are the one thing this
 * page needs and does not have, and are left in [square brackets].
 */

/**
 * The subject of the message. Kept to two or three words each: the chips are
 * uppercase and do not wrap, so a long option would push past a phone column.
 */
export const subjects = ["Visitar empreendimento", "Orçamento de obra", "Outro assunto"] as const;

export const openingHours = "[horário de atendimento]";
