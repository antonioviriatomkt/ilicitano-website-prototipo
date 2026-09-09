import { Tick } from "@/components/icons";
import { Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Fact } from "@/components/ui/Fact";
import { Frame } from "@/components/ui/Frame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { featured } from "@/lib/content";
import frameStyles from "@/components/ui/Frame.module.css";
import styles from "./Featured.module.css";

/**
 * The one development on the market, given the width the site's commercial
 * purpose deserves: photograph of the live site on the left, the whole
 * decision — typology, price, spec, visit — in a single white card on the right.
 */
export function Featured() {
  return (
    <section className={`page ${styles.section}`}>
      <Reveal>
        <SectionHeading
          eyebrow="Em comercialização"
          title={
            <>
              O seu apartamento novo, <em>em planta,</em> a preço de lançamento.
            </>
          }
          aside={<TextLink href="/empreendimentos">Todos os empreendimentos</TextLink>}
        />
      </Reveal>

      <div className={`grid ${styles.body}`}>
        <Reveal className={styles.media}>
          <Frame
            src={featured.photo}
            alt={featured.photoAlt}
            ratio="7 / 5"
            sizes="(max-width: 900px) 100vw, 58vw"
          >
            <span className={frameStyles.badge}>
              <Chip tone="venda">{featured.status}</Chip>
            </span>
          </Frame>
          <span className="small muted">{featured.photoCaption}</span>
        </Reveal>

        <Reveal className={styles.card} index={1}>
          <div className={styles.cardHead}>
            <h3 className="display display-3">{featured.name}</h3>
            <span className={styles.location}>
              <Pin /> {featured.location}
            </span>
          </div>

          <div className={styles.specs}>
            {featured.specs.map((spec) => (
              <Fact key={spec.label} value={spec.value} label={spec.label} size="sm" />
            ))}
          </div>

          <ul className={styles.features}>
            {featured.features.map((feature) => (
              <li key={feature}>
                <Tick className={styles.tick} />
                {feature}
              </li>
            ))}
          </ul>

          <div className={styles.cardActions}>
            <Button href="/marcar-visita" block arrow>
              Marcar visita à obra
            </Button>
            <TextLink href={featured.href}>Ver ficha do empreendimento</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
