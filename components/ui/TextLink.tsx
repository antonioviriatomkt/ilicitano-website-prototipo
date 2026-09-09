import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import styles from "./TextLink.module.css";

type Props = {
  children: ReactNode;
  href: ComponentProps<typeof Link>["href"];
  className?: string;
};

/**
 * The secondary action: an uppercase label on a rule. Used wherever a second
 * choice sits beside a Button, so the two never compete for the same weight.
 */
export function TextLink({ children, href, className }: Props) {
  return (
    <Link href={href} className={[styles.link, className].filter(Boolean).join(" ")}>
      {children}
    </Link>
  );
}
