import type { ReactNode } from "react";
import styles from "./Prose.module.css";

/**
 * Long-form body copy — legal pages, policies. The only place on the site
 * where headings, paragraphs and lists are styled by element rather than by
 * class, because the copy is written as a document, not composed as a layout.
 */
export function Prose({ children }: { children: ReactNode }) {
  return <div className={styles.prose}>{children}</div>;
}
