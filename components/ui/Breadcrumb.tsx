import Link from "next/link";
import styles from "./Breadcrumb.module.css";

type Crumb = { label: string; href?: string };

/** Trail above a detail page's title. The last crumb is the current page. */
export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Migalhas" className={styles.nav}>
      <ol className={styles.list}>
        {trail.map((crumb, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={crumb.label} className={styles.item}>
              {crumb.href && !last ? (
                <Link href={crumb.href}>{crumb.label}</Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={styles.current}>
                  {crumb.label}
                </span>
              )}
              {last ? null : (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
