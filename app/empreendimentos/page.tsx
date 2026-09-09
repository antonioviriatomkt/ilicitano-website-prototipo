import type { Metadata } from "next";
import { Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Fact } from "@/components/ui/Fact";
import { Frame } from "@/components/ui/Frame";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { company, completed, forSale, kourosII } from "@/lib/content";
import frameStyles from "@/components/ui/Frame.module.css";
import { deliveredSection, featuredSection, intro } from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Empreendimentos",
  description:
    "Empreendimentos promovidos e construídos pela ILICITANO, de Alcanena a Lisboa. Um em comercialização, os restantes concluídos e entregues.",
};

/**
 * The one development on the market. Identity is read from the shared list so
 * this block follows `status` rather than a hard-coded slug; the spec strip
 * comes from the detail record the home and the development page also read,
 * since exactly one development carries that record at a time.
 */
const featured = forSale[0];

export default function EmpreendimentosPage() {
  return (
    <>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={
          <>
            O que já construímos, <em>e o que está à venda.</em>
          </>
        }
        lead={intro.lead}
      />

      {featured ? (
        <section className={`page ${styles.featured}`}>
          <Reveal className={styles.featuredHead}>
            <div className={styles.featuredTitle}>
              <span className="eyebrow">{featuredSection.eyebrow}</span>
              <h2 className="display display-2">{featured.name}</h2>
            </div>
            <TextLink href={`/empreendimentos/${featured.slug}`}>{featuredSection.detail}</TextLink>
          </Reveal>

          <Reveal className={styles.featuredMedia} index={1}>
            <Frame
              src={featured.photo}
              alt={featured.photoAlt}
              ratio="16 / 7"
              sizes="100vw"
              priority
            >
              <span className={frameStyles.badge}>
                <Chip tone="venda">{featured.statusLabel}</Chip>
              </span>
            </Frame>
          </Reveal>

          <Reveal className={`grid ${styles.featuredBody}`} index={2}>
            <div className={styles.featuredCopy}>
              <span className={styles.place}>
                <Pin /> {featured.location}
              </span>
              <p className={`lead ${styles.featuredIntro}`}>{featured.intro}</p>
              <span className="small muted">{kourosII.completion}</span>
            </div>
            <div className={styles.featuredActions}>
              <Button href={`/empreendimentos/${featured.slug}`} arrow>
                {featuredSection.primary}
              </Button>
              <TextLink href="/marcar-visita">{featuredSection.secondary}</TextLink>
            </div>
          </Reveal>

          <Reveal className={styles.specs} index={3}>
            {kourosII.specs.map((spec) => (
              <Fact key={spec.label} value={spec.value} label={spec.label} />
            ))}
          </Reveal>
        </section>
      ) : null}

      <section className={`page ${styles.delivered}`}>
        <Reveal>
          <SectionHeading
            eyebrow={deliveredSection.eyebrow}
            title={
              <>
                Entregues chave na mão, <em>de Alcanena a Lisboa.</em>
              </>
            }
            asideKind="prose"
            aside={
              /* The count is interpolated, never written out: the list is the
                 only thing that can prove it. The company-wide total is a
                 figure only ILICITANO holds, so it stays bracketed. */
              <p className="prose">
                Estão listados {completed.length} empreendimentos concluídos, entre Alcanena,
                Fátima, Leiria e Lisboa. No total, a ILICITANO promoveu [n] empreendimentos desde{" "}
                {company.foundedYear}.
              </p>
            }
          />
        </Reveal>

        <ul className={styles.grid}>
          {completed.map((development, index) => (
            // Stagger runs across the row, not the whole grid, so the second
            // row does not wait on a delay it would have outrun anyway.
            <Reveal as="li" key={development.slug} index={index % 3}>
              <ProjectCard development={development} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <TextLink href="/construcao-remodelacao">{deliveredSection.crossLink}</TextLink>
        </Reveal>
      </section>
    </>
  );
}
