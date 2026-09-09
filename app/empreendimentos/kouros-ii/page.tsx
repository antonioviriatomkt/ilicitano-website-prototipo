import type { Metadata } from "next";
import { Car, Mail, Phone, Pin, Tick, Walk } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { ChoiceChips } from "@/components/ui/ChoiceChips";
import { Chip } from "@/components/ui/Chip";
import { Fact } from "@/components/ui/Fact";
import { Field } from "@/components/ui/Field";
import { Frame } from "@/components/ui/Frame";
import { Placeholder } from "@/components/ui/Placeholder";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TextLink } from "@/components/ui/TextLink";
import { company, completed, kourosII } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Kouros II — apartamentos T1, T2 e T3 em Alcanena",
  description: kourosII.intro,
};

/**
 * The "same team" strip at the foot. The artboard fills it with three Alcanena
 * projects, but only one delivered development in the content is in Alcanena —
 * the other two artboard cards are a gallery and a project we have no record
 * of. Rather than invent them, this shows three delivered developments and the
 * heading drops the "em Alcanena".
 */
const related = completed.slice(0, 3);

export default function KourosIIPage() {
  return (
    <>
      <section className={`page ${styles.top}`}>
        <Breadcrumb
          trail={[
            { label: "Empreendimentos", href: "/empreendimentos" },
            { label: kourosII.name },
          ]}
        />

        <Reveal className={`grid ${styles.masthead}`}>
          <div className={styles.identity}>
            <Chip tone="venda">{kourosII.statusLabel}</Chip>
            <h1 className={`display ${styles.title}`}>{kourosII.name}</h1>
            <p className={`lead ${styles.intro}`}>{kourosII.intro}</p>
          </div>
          <div className={styles.locality}>
            <span className={styles.place}>
              <Pin /> {kourosII.location}
            </span>
            <span className="small muted">{kourosII.completion}</span>
          </div>
        </Reveal>

        <Reveal className={`grid ${styles.gallery}`} index={1}>
          <Frame
            src={kourosII.photo}
            alt={kourosII.photoAlt}
            ratio="10 / 7"
            sizes="(max-width: 900px) 100vw, 66vw"
            priority
            className={styles.galleryMain}
          />
          <div className={styles.gallerySide}>
            <Placeholder note="a fornecer pela ILICITANO" ratio="4 / 3">
              Render da fachada
            </Placeholder>
            <Placeholder ratio="4 / 3">Render do interior / apartamento-modelo</Placeholder>
          </div>
        </Reveal>

        <div className={styles.galleryMeta}>
          <span className="small muted">{kourosII.galleryCaption}</span>
          <TextLink href="/empreendimentos/kouros-ii/galeria">Ver galeria e plantas</TextLink>
        </div>
      </section>

      <div className={`page grid ${styles.body}`}>
        <div className={styles.main}>
          <Reveal as="section" className={styles.block}>
            <span className="eyebrow">Ficha técnica</span>
            <div className={styles.specs}>
              {kourosII.specs.map((spec) => (
                <Fact key={spec.label} value={spec.value} label={spec.label} />
              ))}
            </div>
            <ul className={styles.features}>
              {kourosII.features.map((feature) => (
                <li key={feature}>
                  <Tick className={styles.tick} />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="section" className={styles.block}>
            <div className={styles.blockHead}>
              <div className={styles.blockTitle}>
                <span className="eyebrow">Tipologias e preços</span>
                <h2 className="display display-3">
                  Escolha a sua fração <em>em planta.</em>
                </h2>
              </div>
              <TextLink href="/empreendimentos/kouros-ii/brochura">
                Descarregar brochura
              </TextLink>
            </div>

            {/* A real table: these are four related columns of data, and a
                screen reader should be able to read a row as a row. */}
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Tipologia</th>
                  <th scope="col">Área bruta</th>
                  <th scope="col">Piso</th>
                  <th scope="col">Preço desde</th>
                  <th scope="col">
                    <span className="sr-only">Planta</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {kourosII.units.map((unit) => (
                  <tr key={unit.typology}>
                    <th scope="row" className={styles.typology}>
                      {unit.typology}
                    </th>
                    {/* data-label feeds the stacked mobile layout, where the
                        header row is hidden and each cell names itself. */}
                    <td data-label="Área bruta">{unit.area}</td>
                    <td data-label="Piso">{unit.floor}</td>
                    <td data-label="Preço desde">{unit.price}</td>
                    <td className={styles.planCell}>
                      <TextLink href="/empreendimentos/kouros-ii/plantas">
                        Planta<span className="sr-only"> do {unit.typology}</span>
                      </TextLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="small muted">
              Com a obra em curso, tem a possibilidade de escolher alguns acabamentos. Preços de
              lançamento, sujeitos a confirmação.
            </p>
          </Reveal>

          <Reveal as="section" className={styles.block}>
            <div className={styles.blockTitle}>
              <span className="eyebrow">Proximidades</span>
              <h2 className="display display-3">
                Tudo <em>a minutos</em> de casa.
              </h2>
            </div>
            <div className={styles.proximity}>
              <ul className={styles.proximityList}>
                {kourosII.proximity.map((entry) => (
                  <li key={entry.place}>
                    <span className={styles.proximityPlace}>
                      {entry.icon === "car" ? <Car /> : <Walk />} {entry.place}
                    </span>
                    <span className="muted">{entry.time}</span>
                  </li>
                ))}
              </ul>
              <Placeholder
                note="localização do empreendimento e pontos de interesse"
                className={styles.map}
              >
                Mapa — Alcanena
              </Placeholder>
            </div>
          </Reveal>
        </div>

        <aside className={styles.aside}>
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2 className="display display-3">Marque a sua visita à obra</h2>
              <p className="small">
                Garanta o seu apartamento em planta a preço de lançamento. Sem compromisso.
              </p>
            </div>
            <form className={styles.form}>
              <Field label="Nome" name="visita-nome" placeholder="O seu nome" />
              <Field label="Telemóvel" name="visita-telemovel" type="tel" placeholder="+351" />
              <Field
                label="E-mail"
                name="visita-email"
                type="email"
                placeholder="nome@email.pt"
              />
              <ChoiceChips
                label="Tipologia de interesse"
                name="tipologia"
                options={["T1", "T2", "T3"]}
              />
              <Button href="/marcar-visita" block arrow>
                Marcar visita
              </Button>
            </form>
            <div className={styles.cardContact}>
              <a href={company.phoneHref} className={styles.contactLink}>
                <Phone /> {company.phone}
              </a>
              <a href={company.emailHref} className={styles.contactLink}>
                <Mail /> {company.email}
              </a>
            </div>
          </div>
        </aside>
      </div>

      <section className={`page ${styles.related}`}>
        <div className={styles.blockHead}>
          <div className={styles.blockTitle}>
            <span className="eyebrow">Obra feita pela mesma equipa</span>
            <h2 className="display display-3">
              Veja o que <em>já entregámos.</em>
            </h2>
          </div>
          <TextLink href="/empreendimentos">Todos os empreendimentos</TextLink>
        </div>
        <ul className={styles.relatedGrid}>
          {related.map((development, index) => (
            <Reveal as="li" key={development.slug} index={index}>
              <ProjectCard development={development} />
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
