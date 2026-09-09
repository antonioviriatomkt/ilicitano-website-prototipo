import styles from "./Wordmark.module.css";

type Props = {
  /** Bar height in px. The wordmark next to it stays at its fixed size. */
  size?: number;
  /** On the dark footer the monogram and wordmark invert to white. */
  tone?: "ink" | "light";
  /** Monogram alone, without the ILICITANO lettering. */
  monogramOnly?: boolean;
};

/**
 * The ILICITANO monogram — three square-cut bars, the third broken to make
 * the dot of the "i". Every right angle in the design system descends from
 * this shape, which is why nothing on the site has a border radius.
 */
export function Monogram({ size = 28, tone = "ink" }: Pick<Props, "size" | "tone">) {
  const fill = tone === "light" ? "var(--on-ink)" : "var(--ink)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="ILICITANO"
      className={styles.monogram}
    >
      <rect x="6" y="0" width="20" height="100" fill={fill} />
      <rect x="40" y="0" width="20" height="100" fill={fill} />
      <rect x="74" y="36" width="20" height="64" fill={fill} />
      <rect x="74" y="0" width="20" height="20" fill={fill} />
    </svg>
  );
}

export function Wordmark({ size = 28, tone = "ink", monogramOnly = false }: Props) {
  return (
    <span className={styles.lockup} data-tone={tone}>
      <Monogram size={size} tone={tone} />
      {monogramOnly ? null : <span className={styles.word}>ILICITANO</span>}
    </span>
  );
}
