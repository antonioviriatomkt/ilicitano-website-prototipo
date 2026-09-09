import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { completed } from "@/lib/content";
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
              Moradias, condomínios privados e edifícios residenciais — construídos e promovidos por
              nós, do projeto à entrega da chave.
            </p>
          }
        />
      </Reveal>

      <ul className={styles.grid}>
        {completed.map((development, index) => (
          // Stagger runs across the row, not the whole grid, so the second row
          // does not wait on a six-step delay it would have outrun anyway.
          <Reveal as="li" key={development.slug} index={index % 3}>
            <ProjectCard development={development} />
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <TextLink href="/empreendimentos">Ver os sete empreendimentos concluídos</TextLink>
      </Reveal>
    </section>
  );
}
