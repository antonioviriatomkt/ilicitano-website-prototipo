import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import styles from "./PageIntro.module.css";

type Props = {
  eyebrow: string;
  /** Wrap the emphasised clause in <em> — it renders in ouro-700. */
  title: ReactNode;
  lead?: ReactNode;
  /** Omit on top-level pages; pass a trail on anything nested. */
  trail?: { label: string; href?: string }[];
  /** Extra content under the lead — buttons, a note. */
  children?: ReactNode;
};

/**
 * The opening of every page that is not the home: rubric, H1, and an optional
 * lead. One component so the top of the site is the same shape everywhere,
 * and so page-to-page rhythm does not drift as pages are added.
 */
export function PageIntro({ eyebrow, title, lead, trail, children }: Props) {
  return (
    <header className={`page ${styles.intro}`}>
      {trail ? <Breadcrumb trail={trail} /> : null}
      <span className="eyebrow">{eyebrow}</span>
      <h1 className={`display display-1 ${styles.title}`}>{title}</h1>
      {lead ? <p className={`lead ${styles.lead}`}>{lead}</p> : null}
      {children}
    </header>
  );
}
