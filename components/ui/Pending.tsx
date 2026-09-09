import styles from "./Pending.module.css";

/**
 * Marks an affordance the finished site will have but the prototype cannot:
 * a brochure, a floor plan, a photo gallery — assets only ILICITANO holds.
 *
 * Rendered as text rather than a link on purpose. A link to a page that does
 * not exist is a 404 waiting to happen in front of the client; this reads as
 * a gap, which is what it is.
 */
export function Pending({ children }: { children: React.ReactNode }) {
  return <span className={styles.pending}>[{children} — a fornecer pela ILICITANO]</span>;
}
