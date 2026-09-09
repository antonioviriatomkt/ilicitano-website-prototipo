"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  /** Position within a staggered group; multiplied by the --stagger token. */
  index?: number;
  /** Element to render as — sections and list items need their own tag. */
  as?: ElementType;
  className?: string;
};

/**
 * Fades and lifts its children into place the first time they enter the
 * viewport, then disconnects. Content that has already scrolled past on load
 * (a deep link, a restored scroll position) is shown immediately by the same
 * observer callback, so nothing can get stuck invisible.
 */
export function Reveal({ children, index = 0, as: Tag = "div", className }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Treat a missing IntersectionObserver as "show it" rather than leaving
    // the content at opacity 0 forever. Deferred a frame so the fallback does
    // not set state synchronously inside the effect.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      // Start the reveal slightly before the element's top edge clears the
      // fold, so it has finished by the time it is properly in view.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, visible && styles.visible, className].filter(Boolean).join(" ")}
      style={{ "--reveal-delay": `calc(${index} * var(--stagger))` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
