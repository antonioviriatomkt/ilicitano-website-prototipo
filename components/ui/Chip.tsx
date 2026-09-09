import type { ReactNode } from "react";
import styles from "./Chip.module.css";

type Props = {
  children: ReactNode;
  /**
   * "venda" is the gold state and means one thing only: the development is on
   * the market. Everything else — delivered work, typologies — uses "default".
   */
  tone?: "default" | "venda";
};

export function Chip({ children, tone = "default" }: Props) {
  return (
    <span className={[styles.chip, tone === "venda" && styles.venda].filter(Boolean).join(" ")}>
      {tone === "venda" ? <span className={styles.dot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
