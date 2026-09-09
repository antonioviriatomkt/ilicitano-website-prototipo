import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import styles from "./Button.module.css";

type Variant = "solid" | "ghost" | "light";

type Props = {
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  variant?: Variant;
  /** Adds the trailing arrow that slides on hover. */
  arrow?: boolean;
  /** Fills its container — used in the Kouros card and throughout mobile. */
  block?: boolean;
  /** Shorter height for the header's persistent call to action. */
  compact?: boolean;
  className?: string;
  onClick?: () => void;
};

/**
 * The site has exactly one button shape: a square-cut block of uppercase
 * label text. Variants change only its fill, never its geometry.
 */
export function Button({
  children,
  href,
  variant = "solid",
  arrow = false,
  block = false,
  compact = false,
  className,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        styles.button,
        styles[variant],
        block && styles.block,
        compact && styles.compact,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{children}</span>
      {arrow ? <ArrowRight className={styles.arrow} /> : null}
    </Link>
  );
}
