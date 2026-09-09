import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Fact } from "@/components/ui/Fact";
import { Frame } from "@/components/ui/Frame";
import { PageIntro } from "@/components/ui/PageIntro";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { company, facts } from "@/lib/content";
import { credentials, sectors } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "A ILICITANO desde 2008: promoção imobiliária, engenharia e construção, com a mesma equipa a acompanhar cada obra do primeiro dia à entrega.",
};

export default function QuemSomosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Quem somos"
        title={
          <>
            A construir desde 2008, <em>com a mesma equipa.</em>
          </>
        }
        lead="Começámos pela construção de moradias, blocos habitacionais e armazéns industriais. Hoje trabalhamos em três setores — promoção imobiliária, engenharia e construção."
      />

      <section className={`page ${styles.factsBand}`} aria-label="A empresa em números">
        <hr className="hair" />
        <div className={styles.factsRow}>
          {facts.map((fact, index) => (
            <Reveal key={fact.label} index={index}>
              <Fact value={fact.value} label={fact.label} />
            </Reveal>
          ))}
        </div>
        <hr className="hair" />
      </section>

      <section className={`page grid ${styles.company}`}>
        <Reveal className={styles.companyMedia}>
          <Frame
            src="/fotografia/stone-village.jpg"
            alt="Stone Village, Leiria — moradias em condomínio privado entregues pela ILICITANO"
            ratio="4 / 5"
            sizes="(max-width: 900px) 100vw, 44vw"
          />
        </Reveal>

        <Reveal className={styles.companyCopy} index={1}>
          <span className="eyebrow">A empresa</span>
          <h2 className="display display-2">
            Uma só equipa, <em>do primeiro dia à entrega.</em>
          </h2>
          <p className="prose">
            A ILICITANO nasceu em {company.foundedYear} a construir moradias, blocos habitacionais e
            armazéns industriais. O trabalho cresceu para lá da obra — hoje a empresa promove os
            seus próprios empreendimentos, responde pela engenharia e executa a construção.
          </p>
          <p className="prose">
            É sempre a mesma equipa a acompanhar cada obra, do primeiro dia à entrega da chave. Quem
            faz o orçamento é quem está em obra e quem entrega o imóvel, seja um apartamento num
            empreendimento nosso ou a remodelação de uma casa.
          </p>
          {/* The company's own line about itself, given the weight of a pull
              quote rather than buried in a paragraph. */}
          <blockquote className={styles.quote}>
            Definida pela qualidade, requinte e detalhe.
          </blockquote>
        </Reveal>
      </section>

      <section className={`page ${styles.sectors}`}>
        <Reveal>
          <SectionHeading
            eyebrow="O que fazemos"
            title={
              <>
                Três setores, <em>uma forma de trabalhar.</em>
              </>
            }
            asideKind="prose"
            aside={
              <p className="prose">
                Promoção imobiliária, engenharia e construção. Os três encontram-se na mesma obra, e
                é por isso que não há um responsável para cada fase.
              </p>
            }
          />
        </Reveal>

        <ul className={styles.sectorGrid}>
          {sectors.map((sector, index) => (
            <Reveal as="li" key={sector.slug} index={index} className={styles.sector}>
              <Frame
                src={sector.photo}
                alt={sector.photoAlt}
                ratio="4 / 3"
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <span className={`eyebrow ${styles.sectorEyebrow}`}>{sector.eyebrow}</span>
              <h3 className={styles.sectorTitle}>{sector.title}</h3>
              <p className={`small ${styles.sectorBody}`}>{sector.body}</p>
              {sector.href ? (
                <TextLink href={sector.href} className={styles.sectorLink}>
                  {sector.linkLabel}
                </TextLink>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={`page grid ${styles.team}`}>
        <Reveal className={styles.teamMedia}>
          <Placeholder note="a fornecer pela ILICITANO" ratio="3 / 2">
            Fotografia da equipa
          </Placeholder>
        </Reveal>
        <Reveal className={styles.teamCopy} index={1}>
          <span className="eyebrow">A equipa</span>
          <h2 className="display display-3">Quem faz a obra.</h2>
          <p className="prose">
            A mesma equipa acompanha cada obra do primeiro dia à entrega — é a razão pela qual quem
            orça é quem executa. [Dimensão da equipa, funções e anos de casa — a fornecer pela
            ILICITANO.]
          </p>
        </Reveal>
      </section>

      <section className={`page ${styles.closing}`}>
        <Reveal className={styles.closingInner}>
          <div className={styles.closingCopy}>
            <span className="eyebrow">Onde continuar</span>
            <h2 className="display display-2">
              Veja o que já entregámos, <em>ou fale connosco.</em>
            </h2>
            <div className={styles.closingActions}>
              <Button href="/empreendimentos" arrow>
                Ver empreendimentos
              </Button>
              <Button href="/contactos" variant="ghost">
                Falar connosco
              </Button>
            </div>
          </div>

          <dl className={styles.credentials}>
            {credentials.map((entry) => (
              <div key={entry.term} className={styles.credential}>
                <dt className="label">{entry.term}</dt>
                <dd className={styles.credentialDetail}>{entry.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </>
  );
}
