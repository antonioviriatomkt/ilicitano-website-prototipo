import styles from "./Fact.module.css";

type Props = {
  value: string;
  label: string;
  /** The Kouros card runs the same component at a smaller display size. */
  size?: "lg" | "sm";
};

/** A number in the display face over an uppercase caption. */
export function Fact({ value, label, size = "lg" }: Props) {
  return (
    <div className={styles.fact}>
      <span className={[styles.value, size === "sm" && styles.sm].filter(Boolean).join(" ")}>
        {value}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
