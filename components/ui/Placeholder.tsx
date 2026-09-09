import styles from "./Placeholder.module.css";

type Props = {
  children: React.ReactNode;
  /** Secondary line, set in sentence case under the label. */
  note?: string;
  ratio?: string;
  className?: string;
};

/**
 * A hatched box standing in for an asset ILICITANO has to supply — a render,
 * a floor plan, a map. Deliberately unmistakable: a prototype should never
 * pass off a stock image as the client's own work.
 */
export function Placeholder({ children, note, ratio, className }: Props) {
  return (
    <div
      className={[styles.placeholder, ratio && styles.ratioed, className]
        .filter(Boolean)
        .join(" ")}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <span className={styles.label}>{children}</span>
      {note ? <span className={styles.note}>{note}</span> : null}
    </div>
  );
}
