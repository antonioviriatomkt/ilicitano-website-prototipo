import { Mail, Phone } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { ChoiceChips } from "@/components/ui/ChoiceChips";
import { Field, FieldRow } from "@/components/ui/Field";
import { company, services } from "@/lib/content";
import styles from "./QuoteBand.module.css";

/**
 * The dark closing block: the pitch on the left, the quote request on the
 * right. The only place on the site where a form sits on --ink, which is what
 * makes it the end of the page rather than another section of it.
 */
export function QuoteBand() {
  return (
    <section className={`page ${styles.section}`} id="orcamento">
      <Reveal className={styles.band}>
        <div className={styles.copy}>
          <span className={`eyebrow ${styles.eyebrow}`}>Pedir orçamento</span>
          <h2 className={`display display-2 ${styles.title}`}>
            Dê hoje o primeiro passo para a sua <em>nova casa.</em>
          </h2>
          <p className={styles.lead}>
            Não adie mais o projeto que tanto deseja. Partilhe as suas ideias e peça o seu
            orçamento gratuito e sem qualquer compromisso.
          </p>
          <div className={styles.contact}>
            <a href={company.phoneHref} className={styles.contactLink}>
              <Phone /> {company.phone}
            </a>
            <a href={company.emailHref} className={styles.contactLink}>
              <Mail /> {company.email}
            </a>
          </div>
        </div>

        {/* No action: the prototype collects nothing and sends nothing. */}
        <form className={styles.form} onSubmit={undefined}>
          <ChoiceChips
            label="Tipo de obra"
            name="tipo-obra"
            options={services.map((service) => service.shortLabel ?? service.label)}
          />
          <FieldRow>
            <Field label="Nome" name="nome" placeholder="O seu nome" />
            <Field label="Telemóvel" name="telemovel" type="tel" placeholder="+351" />
            <Field label="Localidade da obra" name="localidade" placeholder="Concelho" />
            <Field label="Área aproximada" name="area" placeholder="m²" />
          </FieldRow>
          <Field
            label="Conte-nos o que tem em mente"
            name="mensagem"
            placeholder="Divisões, ideias, prazos…"
            multiline
          />
          <Button href="/orcamento" block arrow className={styles.submit}>
            Pedir orçamento gratuito
          </Button>
          <span className={`small muted ${styles.note}`}>Sem compromisso.</span>
        </form>
      </Reveal>
    </section>
  );
}
