import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { ChoiceChips } from "@/components/ui/ChoiceChips";
import { Field, FieldRow } from "@/components/ui/Field";
import { PageIntro } from "@/components/ui/PageIntro";
import { Placeholder } from "@/components/ui/Placeholder";
import { company } from "@/lib/content";
import { openingHours, subjects } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contactos",
  description: `Fale com a ILICITANO: ${company.phone}, ${company.email}. Sede em ${company.addressLine1}, ${company.addressLine2}.`,
};

export default function ContactosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contactos"
        title={
          <>
            Diga-nos <em>o que precisa.</em>
          </>
        }
        lead="Telefone, e-mail e morada da sede, em Leiria. Se preferir escrever, use o formulário abaixo."
      />

      <section className={`page ${styles.details}`} aria-label="Contactos diretos">
        <hr className="hair" />
        <div className={styles.detailRow}>
          <Reveal className={styles.detail}>
            <span className={styles.detailTerm}>Telefone</span>
            <a href={company.phoneHref} className={styles.detailLink}>
              <Phone /> {company.phone}
            </a>
            <span className="small muted">Chamada para a rede móvel nacional</span>
          </Reveal>

          <Reveal className={styles.detail} index={1}>
            <span className={styles.detailTerm}>E-mail</span>
            <a href={company.emailHref} className={styles.detailLink}>
              <Mail /> {company.email}
            </a>
            <span className="small muted">Empreendimentos, obra e assuntos gerais</span>
          </Reveal>

          <Reveal className={styles.detail} index={2}>
            <span className={styles.detailTerm}>Sede</span>
            {/* <address> so the postal address is announced as one, and the
                italics the UA gives it are turned off in the module. */}
            <address className={styles.address}>
              <Pin />
              <span className={styles.addressLines}>
                <span>{company.addressLine1}</span>
                <span>{company.addressLine2}</span>
              </span>
            </address>
          </Reveal>

          <Reveal className={styles.detail} index={3}>
            <span className={styles.detailTerm}>Atendimento</span>
            <span className={styles.detailPlain}>{openingHours}</span>
            <span className="small muted">A confirmar pela ILICITANO</span>
          </Reveal>
        </div>
        <hr className="hair" />
      </section>

      <div className={`page grid ${styles.body}`}>
        <Reveal className={styles.formColumn}>
          <div className={styles.formHead}>
            <span className="eyebrow">Deixar mensagem</span>
            <h2 className="display display-2">
              Escreva-nos <em>em dois minutos.</em>
            </h2>
            <p className="prose">
              Escolha o assunto e conte-nos o essencial: o empreendimento que quer visitar, a
              divisão que quer remodelar, o terreno onde quer construir.
            </p>
          </div>

          {/* No action and no handler: the prototype collects nothing and
              sends nothing. The wiring is a decision for the real build. */}
          <form className={styles.form}>
            <ChoiceChips label="Assunto" name="assunto" options={subjects} />
            <FieldRow>
              <Field label="Nome" name="nome" placeholder="O seu nome" required />
              <Field label="Telemóvel" name="telemovel" type="tel" placeholder="+351" />
              <Field label="E-mail" name="email" type="email" placeholder="nome@email.pt" />
              <Field label="Localidade" name="localidade" placeholder="Concelho" />
            </FieldRow>
            <Field
              label="Mensagem"
              name="mensagem"
              placeholder="O que tem em mente, e quando gostaria de avançar…"
              multiline
            />
            <Checkbox name="contacto-consentimento">
              [Texto de consentimento por redigir — tratamento dos dados para efeitos de resposta a
              este contacto.] <Link href="/politica-de-privacidade">Política de privacidade</Link>.
            </Checkbox>
            {/* A real <button>, not a link: a link that submits is unreachable
                by keyboard. type="button" rather than "submit" because a form
                with no action would GET, putting the phone number in the URL. */}
            <Button type="button" block arrow className={styles.submit}>
              Enviar mensagem
            </Button>
            <span className={`small muted ${styles.note}`}>
              Protótipo: o formulário ainda não está ligado a nenhum destinatário.
            </span>
          </form>
        </Reveal>

        <Reveal className={styles.aside} index={1}>
          <div className={styles.asideBlock}>
            <span className="eyebrow">Onde estamos</span>
            <h2 className="display display-3">Sede em Leiria.</h2>
            <Placeholder note="localização da sede e acessos" className={styles.map}>
              Mapa — Leiria
            </Placeholder>
            <address className={styles.asideAddress}>
              <span>{company.addressLine1}</span>
              <span>{company.addressLine2}</span>
            </address>
          </div>

          <dl className={styles.legal}>
            <div className={styles.legalItem}>
              <dt className="label">Alvará</dt>
              <dd className={styles.legalDetail}>{company.alvara}</dd>
            </div>
            <div className={styles.legalItem}>
              <dt className="label">Contribuinte</dt>
              <dd className={styles.legalDetail}>{company.nif}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </>
  );
}
