import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Callout } from "@/components/ui/Callout";
import { PageIntro } from "@/components/ui/PageIntro";
import { Prose } from "@/components/ui/Prose";
import styles from "./LegalPage.module.css";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  /** The document itself: headings, paragraphs and lists, styled by Prose. */
  children: ReactNode;
};

/**
 * The shared shell for the four legal documents. They are structurally
 * identical — intro, the "not drafted yet" notice, then the document — so
 * they share one layout rather than four copies of the same stylesheet.
 *
 * The notice is not optional. Every one of these pages is a skeleton: the
 * section headings are right, the body of each section is a bracketed note
 * saying what must be drafted and by whom. A reader has to know that before
 * anything below can be read as binding.
 */
export function LegalPage({ eyebrow, title, lead, children }: Props) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} lead={lead} />
      <div className={`page ${styles.body}`}>
        <Reveal>
          <Callout label="Documento por preencher">
            <p>
              Este documento é um <strong>esqueleto</strong>: tem a estrutura e os títulos das
              secções, mas o texto de cada secção está por redigir e aparece entre parêntesis retos.{" "}
              <strong>Não tem valor legal</strong> e não vincula a ILICITANO enquanto não for
              redigido e validado por assessoria jurídica.
            </p>
          </Callout>
        </Reveal>
        <Prose>{children}</Prose>
      </div>
    </>
  );
}
