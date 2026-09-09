import type { ReactNode } from "react";
import styles from "./Callout.module.css";

type Props = {
  /** Uppercase label above the body — says what kind of notice this is. */
  label: string;
  children: ReactNode;
};

/**
 * A block that says something about the page it sits on, rather than being
 * part of the page's content. It lifts off the page with the second paper
 * tone and a hairline — never with the gold, which on this site means "em
 * comercialização" and nothing else.
 */
export function Callout({ label, children }: Props) {
  return (
    <aside className={styles.callout}>
      <span className={styles.label}>{label}</span>
      <div className="prose">{children}</div>
    </aside>
  );
}
