import type { ReactNode } from "react";
import styles from "./Checkbox.module.css";

type Props = {
  name: string;
  children: ReactNode;
  required?: boolean;
};

/**
 * A consent checkbox with its label. The native control is kept — it is
 * already accessible, and `accent-color` is enough to bring it into the
 * palette without rebuilding it out of divs.
 */
export function Checkbox({ name, children, required }: Props) {
  const id = `campo-${name}`;
  return (
    <div className={styles.row}>
      <input
        id={id}
        type="checkbox"
        name={name}
        required={required}
        className={styles.input}
      />
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </div>
  );
}
