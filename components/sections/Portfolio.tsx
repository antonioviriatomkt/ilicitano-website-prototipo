import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Frame } from "@/components/ui/Frame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { portfolio } from "@/lib/content";
import frameStyles from "@/components/ui/Frame.module.css";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  return (
    <section className={`page ${styles.section}`}>
      <Reveal>
        <SectionHeading
          eyebrow="Obra feita"
          title={
            <>
              Sete empreendimentos entregues, <em>de Alcanena a Lisboa.</em>
            </>
          }
          asideKind="prose"
          aside={
            <p className="prose">
              Moradias, condomínios privados e edifícios residenciais — construídos e promovidos
              por nós, do projeto à entrega da chave.
            </p>
          }
        />
      </Reveal>

      <ul className={styles.grid}>
        {portfolio.map((project, index) => (
          // Stagger runs across the row, not the whole grid, so the second row
          // does not wait on a six-step delay it would have outrun anyway.
          <Reveal as="li" key={project.name} index={index % 3}>
            <Link href={project.href} className={styles.card}>
              <Frame
                src={project.photo}
                alt={project.name}
                ratio="4 / 3"
                sizes="(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw"
              >
                <span className={frameStyles.badge}>
                  <Chip>Concluído</Chip>
                </span>
              </Frame>
              <div className={styles.meta}>
                <div className={styles.identity}>
                  <span className={styles.name}>{project.name}</span>
                  <span className="small muted">{project.location}</span>
                </div>
                <span className="meta">{project.meta}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <TextLink href="/empreendimentos">Ver os sete empreendimentos concluídos</TextLink>
      </Reveal>
    </section>
  );
}
