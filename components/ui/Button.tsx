import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import styles from "./Button.module.css";

type Variant = "solid" | "ghost" | "light";

type Common = {
  children: ReactNode;
  variant?: Variant;
  /** Adds the trailing arrow that slides on hover. */
  arrow?: boolean;
  /** Fills its container — used in cards and throughout mobile. */
  block?: boolean;
  /** Shorter height for the header's persistent call to action. */
  compact?: boolean;
  className?: string;
  onClick?: () => void;
};

/**
 * Either a link or a real button, never both: `href` navigates, `type` acts.
 * A form's primary control has to be a <button> — a link that submits is
 * unreachable by keyboard and lies to assistive technology — and the shape is
 * identical either way, so both live in one component rather than in a
 * hand-copied stylesheet next to each form.
 */
type Props = Common &
  (
    | { href: ComponentProps<typeof Link>["href"]; type?: never }
    | { href?: never; type: "button" | "submit" }
  );

export function Button({
  children,
  variant = "solid",
  arrow = false,
  block = false,
  compact = false,
  className,
  onClick,
  ...rest
}: Props) {
  const classes = [
    styles.button,
    styles[variant],
    block && styles.block,
    compact && styles.compact,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow ? <ArrowRight className={styles.arrow} /> : null}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <Link href={rest.href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={rest.type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
