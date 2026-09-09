import type { ReactNode } from "react";
import styles from "./Field.module.css";

type Props = {
  label: string;
  name: string;
  type?: "text" | "tel" | "email";
  placeholder?: string;
  required?: boolean;
  /** Renders a textarea rather than a single-line input. */
  multiline?: boolean;
  className?: string;
};

/**
 * A labelled input. The label is a real <label> tied to the control by id, so
 * the field is usable by keyboard and by a screen reader — the artboards draw
 * these as static blocks, but a prototype people will click through should
 * behave like the real form.
 */
export function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  multiline = false,
  className,
}: Props) {
  const id = `campo-${name}`;
  return (
    <div className={[styles.field, className].filter(Boolean).join(" ")}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          placeholder={placeholder}
          required={required}
          className={`${styles.control} ${styles.textarea}`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={styles.control}
        />
      )}
    </div>
  );
}

/** Groups fields into the two-up rows the artboards use. */
export function FieldRow({ children }: { children: ReactNode }) {
  return <div className={styles.row}>{children}</div>;
}
