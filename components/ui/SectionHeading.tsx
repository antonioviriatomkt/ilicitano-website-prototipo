import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type Props = {
  eyebrow: string;
  /** Pass the emphasised clause wrapped in <em> — it renders in ouro-700. */
  title: ReactNode;
  /** Supporting paragraph or a link, set opposite the title on desktop. */
  aside?: ReactNode;
  level?: "h1" | "h2";
  /** Whether the aside is a nowrap link or a paragraph that needs a column. */
  asideKind?: "link" | "prose";
};

/**
 * The rubric-and-headline pair that opens every section, optionally with a
 * second column — a paragraph or a link — set against its baseline.
 */
export function SectionHeading({ eyebrow, title, aside, level = "h2", asideKind = "link" }: Props) {
  const Title = level;
  return (
    <div className={styles.wrap} data-aside={aside ? asideKind : undefined}>
      <div className={styles.main}>
        <span className="eyebrow">{eyebrow}</span>
        <Title className={`display ${level === "h1" ? "display-1" : "display-2"}`}>{title}</Title>
      </div>
      {aside ? <div className={styles.aside}>{aside}</div> : null}
    </div>
  );
}
