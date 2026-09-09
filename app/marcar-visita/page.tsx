import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { ChoiceChips } from "@/components/ui/ChoiceChips";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Field, FieldRow } from "@/components/ui/Field";
import { Frame } from "@/components/ui/Frame";
import { PageIntro } from "@/components/ui/PageIntro";
import { company } from "@/lib/content";
import { consent, intro, typologyOptions, visitOptions, visitPhoto } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Marcar visita",
  description:
    "Marque uma visita a um empreendimento ou a uma obra ILICITANO. Escolha o empreendimento, deixe o contacto e combinamos o dia. Sem compromisso.",
};

export default function MarcarVisitaPage() {
  return (
    <>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={
          <>
            Venha ver a obra <em>ao vivo.</em>
          </>
        }
        lead={intro.lead}
      />

      <div className={`page grid ${styles.body}`}>
        <Reveal className={styles.formCol}>
          {/* No action and no submit type: the prototype collects nothing,
              sends nothing, and must not put a phone number in a query
              string by falling back to a GET on the current URL. */}
          <form className={styles.form}>
            <div className={styles.formHead}>
              <h2 className="display display-3">Deixe-nos o seu contacto.</h2>
              <p className="small">
                Marcamos a visita consigo por telefone, no horário que lhe der jeito.
              </p>
            </div>

            <ChoiceChips label="O que quer visitar" name="empreendimento" options={visitOptions} />

            <FieldRow>
              <Field label="Nome" name="visita-nome" placeholder="O seu nome" />
              <Field label="Telemóvel" name="visita-telemovel" type="tel" placeholder="+351" />
            </FieldRow>

            <Field label="E-mail" name="visita-email" type="email" placeholder="nome@email.pt" />

            <ChoiceChips
              label="Tipologia de interesse"
              name="visita-tipologia"
              options={typologyOptions}
            />

            <Field
              label="Mensagem (opcional)"
              name="visita-mensagem"
              placeholder="Dias e horas que lhe dão jeito, o que gostaria de ver…"
              multiline
            />

            <Checkbox name="visita-consentimento">
              {consent} <Link href="/politica-de-privacidade">Política de privacidade</Link>.
            </Checkbox>

            <Button type="button" block arrow>
              Marcar visita
            </Button>

            <p className="small muted">A visita é sem compromisso e não tem qualquer custo.</p>
          </form>
        </Reveal>

        <Reveal className={styles.aside} index={1}>
          <Frame
            src={visitPhoto.photo}
            alt={visitPhoto.photoAlt}
            ratio="4 / 3"
            sizes="(max-width: 900px) 100vw, 33vw"
            priority
          />

          <section className={styles.asideBlock}>
            <h2 className={styles.asideTitle}>Prefere falar connosco?</h2>
            <p className="small">Ligue ou escreva-nos e tratamos da marcação na mesma chamada.</p>
            <div className={styles.contacts}>
              <a href={company.phoneHref} className={styles.contactLink}>
                <Phone /> {company.phone}
              </a>
              <a href={company.emailHref} className={styles.contactLink}>
                <Mail /> {company.email}
              </a>
            </div>
          </section>

          <section className={styles.asideBlock}>
            <h2 className={styles.asideTitle}>Onde nos encontra</h2>
            <address className={styles.address}>
              <Pin className={styles.pin} />
              <span>
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </span>
            </address>
            <p className="small muted">{company.alvara}</p>
          </section>
        </Reveal>
      </div>
    </>
  );
}
