import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Fact } from "@/components/ui/Fact";
import { Frame } from "@/components/ui/Frame";
import { Placeholder } from "@/components/ui/Placeholder";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TextLink } from "@/components/ui/TextLink";
import { company, completed, developments } from "@/lib/content";
import { cta, gallery, related, sheet } from "./content";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

/**
 * Only the delivered developments are served here. Kouros II has its own
 * static route — a development on the market needs prices, typologies and a
 * visit form, none of which belong on this page — and a static segment wins
 * over the dynamic one, so it can never be reached through this file.
 */
function deliveredBySlug(slug: string) {
  return completed.find((development) => development.slug === slug);
}

export function generateStaticParams() {
  return completed.map((development) => ({ slug: development.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const development = deliveredBySlug(slug);
  if (!development) return {};

  return {
    title: `${development.name} — ${development.location}`,
    description: development.intro,
  };
}

export default async function DeliveredDevelopmentPage({ params }: Props) {
  const { slug } = await params;
  const development = deliveredBySlug(slug);
  if (!development) notFound();

  // The development on the market sits first in the list, so it always leads
  // the strip — the one place a delivered page can point at something to buy.
  const others = developments.filter((entry) => entry.slug !== development.slug).slice(0, 3);

  return (
    <>
      <section className={`page ${styles.top}`}>
        <Breadcrumb
          trail={[
            { label: "Empreendimentos", href: "/empreendimentos" },
            { label: development.name },
          ]}
        />

        <Reveal className={`grid ${styles.masthead}`}>
          <div className={styles.identity}>
            <Chip>{development.statusLabel}</Chip>
            <h1 className={`display display-1 ${styles.title}`}>{development.name}</h1>
            <p className={`lead ${styles.intro}`}>{development.intro}</p>
          </div>
          <div className={styles.locality}>
            <span className={styles.place}>
              <Pin /> {development.location}
            </span>
            <span className="small muted">
              {sheet.completionLabel}: {sheet.completionValue}
            </span>
          </div>
        </Reveal>

        <Reveal index={1}>
          <Frame
            src={development.photo}
            alt={development.photoAlt}
            ratio="16 / 9"
            sizes="100vw"
            priority
            className={styles.hero}
          />
        </Reveal>
      </section>

      <div className={`page ${styles.body}`}>
        <Reveal as="section" className={styles.block}>
          <span className="eyebrow">{sheet.eyebrow}</span>
          <div className={styles.facts}>
            <Fact value={development.location} label={sheet.locationLabel} size="sm" />
            <Fact value={development.meta} label={sheet.typologiesLabel} size="sm" />
            <Fact value={sheet.completionValue} label={sheet.completionLabel} size="sm" />
          </div>
          <p className="small muted">{sheet.missing}</p>
        </Reveal>

        <Reveal as="section" className={styles.block} index={1}>
          <span className="eyebrow">{gallery.eyebrow}</span>
          <Placeholder ratio="16 / 5" note={gallery.note}>
            {gallery.label}
          </Placeholder>
        </Reveal>

        <Reveal as="section" className={styles.cta}>
          <div className={styles.ctaCopy}>
            <h2 className="display display-3">
              Quer uma obra <em>como esta?</em>
            </h2>
            <p className="prose">{cta.body}</p>
          </div>
          <div className={styles.ctaActions}>
            <Button href="/contactos" arrow>
              {cta.primary}
            </Button>
            <a href={company.phoneHref} className={styles.contactLink}>
              <Phone /> {company.phone}
            </a>
          </div>
        </Reveal>
      </div>

      <section className={`page ${styles.related}`}>
        <div className={styles.relatedHead}>
          <span className="eyebrow">{related.eyebrow}</span>
          <TextLink href="/empreendimentos">{related.all}</TextLink>
        </div>
        <ul className={styles.relatedGrid}>
          {others.map((entry, index) => (
            <Reveal as="li" key={entry.slug} index={index}>
              <ProjectCard development={entry} />
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
