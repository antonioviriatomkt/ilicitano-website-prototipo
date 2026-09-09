import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./Frame.module.css";

type Props = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "7 / 5". Taken from the artboard proportions. */
  ratio: string;
  /** Responsive width hint for the image loader. */
  sizes: string;
  /** Only the hero image should be priority — it is the LCP element. */
  priority?: boolean;
  /**
   * CSS object-position. The default centre crop is wrong for photographs
   * whose subject sits off to one side — the São Bento façade shares its
   * frame with a derelict neighbour, and a centred crop shows the neighbour.
   */
  focus?: string;
  /** Overlaid content, e.g. the status chip on a portfolio card. */
  children?: ReactNode;
  className?: string;
};

/**
 * Every photograph on the site sits in a Frame: a hard-edged, clipped box on
 * --paper-2, so an image that is still loading holds its exact final space
 * and the page never reflows underneath the reader.
 */
export function Frame({ src, alt, ratio, sizes, priority, focus, children, className }: Props) {
  return (
    <div
      className={[styles.frame, className].filter(Boolean).join(" ")}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.image}
        style={focus ? { objectPosition: focus } : undefined}
      />
      {children}
    </div>
  );
}
