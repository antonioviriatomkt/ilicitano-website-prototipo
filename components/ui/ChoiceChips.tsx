"use client";

import { useId, useState } from "react";
import styles from "./ChoiceChips.module.css";

type Props = {
  label: string;
  name: string;
  options: readonly string[];
};

/**
 * A single-choice row rendered as chips. Radios underneath rather than
 * buttons, so the group is one tab stop, arrow keys move between options and
 * the choice submits with the form — the chip is only the skin.
 */
export function ChoiceChips({ label, name, options }: Props) {
  const groupId = useId();
  const [selected, setSelected] = useState(options[0]);

  return (
    <fieldset className={styles.group}>
      <legend className={styles.label}>{label}</legend>
      <div className={styles.options}>
        {options.map((option) => (
          <label
            key={option}
            className={styles.chip}
            data-selected={option === selected}
          >
            <input
              type="radio"
              name={`${name}-${groupId}`}
              value={option}
              checked={option === selected}
              onChange={() => setSelected(option)}
              className="sr-only"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
