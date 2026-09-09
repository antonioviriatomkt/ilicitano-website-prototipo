import Link from "next/link";
import { Chip } from "@/components/ui/Chip";
import { Frame } from "@/components/ui/Frame";
import type { Development } from "@/lib/content";
import frameStyles from "@/components/ui/Frame.module.css";
import styles from "./ProjectCard.module.css";

type Props = {
  development: Development;
  /** Passed to next/image; depends on how many columns the grid is running. */
  sizes?: string;
};

/**
 * One development in a grid. Used by the home, the developments index and the
 * "more by the same team" strip on a development page, so a project looks the
 * same wherever it is listed.
 */
export function ProjectCard({
  development,
  sizes = "(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 33vw",
}: Props) {
  const forSale = development.status === "venda";
  return (
    <Link href={`/empreendimentos/${development.slug}`} className={styles.card}>
      <Frame
        src={development.photo}
        alt={development.photoAlt}
        ratio="4 / 3"
        sizes={sizes}
        focus={development.focus}
      >
        <span className={frameStyles.badge}>
          <Chip tone={forSale ? "venda" : "default"}>
            {forSale ? "Em comercialização" : "Concluído"}
          </Chip>
        </span>
      </Frame>
      <div className={styles.meta}>
        <div className={styles.identity}>
          <span className={styles.name}>{development.name}</span>
          <span className="small muted">{development.location}</span>
        </div>
        <span className="meta">{development.meta}</span>
      </div>
    </Link>
  );
}
