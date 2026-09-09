import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { ChoiceChips } from "@/components/ui/ChoiceChips";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Field, FieldRow } from "@/components/ui/Field";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, process } from "@/lib/content";
import { consent, coverage, intro, workTypeOptions } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pedir orçamento",
  description:
    "Peça o orçamento da sua obra de construção ou remodelação. Visita, levantamento e orçamento detalhado, gratuito e sem compromisso.",
};

export default function OrcamentoPage() {
  return (
    <>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={
          <>
            Peça o seu orçamento <em>gratuito.</em>
          </>
        }
        lead={intro.lead}
      />

      <div className={`page grid ${styles.body}`}>
        <Reveal className={styles.formCol}>
          {/* Same field composition as the closing band on Construção &
              Remodelação, at page scale. No action and no submit type: the
              prototype sends nothing, and a fallback GET would push a phone
              number into the URL. */}
          <form className={styles.form}>
            <div className={styles.formHead}>
              <h2 className="display display-3">A sua obra, em poucas linhas.</h2>
              <p className="small">
                Quanto mais souber dizer-nos agora, mais rigoroso é o orçamento que preparamos.
              </p>
            </div>

            <ChoiceChips label="Tipo de obra" name="tipo-obra" options={workTypeOptions} />

            <FieldRow>
              <Field label="Nome" name="orcamento-nome" placeholder="O seu nome" />
              <Field label="Telemóvel" name="orcamento-telemovel" type="tel" placeholder="+351" />
              <Field
                label="Localidade da obra"
                name="orcamento-localidade"
                placeholder="Concelho"
              />
              <Field label="Área aproximada" name="orcamento-area" placeholder="m²" />
            </FieldRow>

            <Field
              label="Conte-nos o que tem em mente"
              name="orcamento-mensagem"
              placeholder="Divisões, ideias, prazos…"
              multiline
            />

            <Checkbox name="orcamento-consentimento">
              {consent} <Link href="/politica-de-privacidade">Política de privacidade</Link>.
            </Checkbox>

            <Button type="button" block arrow>
              Pedir orçamento gratuito
            </Button>

            <p className="small muted">O orçamento é gratuito e sem qualquer compromisso.</p>
          </form>
        </Reveal>

        <Reveal className={styles.aside} index={1}>
          <section className={styles.asideBlock}>
            <h2 className={styles.asideTitle}>Prefere falar connosco?</h2>
            <p className="small">
              Ligue ou escreva-nos — explicamos o que precisamos de saber antes da visita.
            </p>
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
            <h2 className={styles.asideTitle}>Onde trabalhamos</h2>
            <p className="small">{coverage}</p>
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

      <section className={styles.processBand}>
        <div className={`page ${styles.processInner}`}>
          <Reveal>
            <SectionHeading
              eyebrow="Depois do pedido"
              title={
                <>
                  Quatro passos, <em>um só responsável.</em>
                </>
              }
              asideKind="prose"
              aside={
                <p className="prose">
                  O pedido é o primeiro passo. A partir daí cuidamos de tudo — da visita e do
                  levantamento à escolha conjunta dos materiais, à execução e à entrega da chave.
                </p>
              }
            />
          </Reveal>
          <ol className={styles.steps}>
            {process.map((step, index) => (
              <Reveal as="li" key={step.number} index={index} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <p className={styles.stepBody}>{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
