import { Reveal } from "@/components/motion/Reveal";
import { Fact } from "@/components/ui/Fact";
import { facts } from "@/lib/content";
import styles from "./Facts.module.css";

/** Four credentials between rules — the quiet proof line under the hero. */
export function Facts() {
  return (
    <section className={`page ${styles.section}`} aria-label="A empresa em números">
      <hr className="hair" />
      <div className={styles.row}>
        {facts.map((fact, index) => (
          <Reveal key={fact.label} index={index}>
            <Fact value={fact.value} label={fact.label} />
          </Reveal>
        ))}
      </div>
      <hr className="hair" />
    </section>
  );
}
