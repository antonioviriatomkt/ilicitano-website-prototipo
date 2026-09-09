import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Fact } from "@/components/ui/Fact";
import { TextLink } from "@/components/ui/TextLink";
import { TokenValue } from "@/components/ui/TokenValue";
import { Wordmark } from "@/components/brand/Wordmark";
import { durations, easings, palette } from "@/lib/tokens";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Linguagem visual",
  description: "Tokens, tipografia, componentes e movimento do site ILICITANO.",
};

export default function DesignSystemPage() {
  return (
    <div className={`page ${styles.wrap}`}>
      <header className={styles.masthead}>
        <div className={styles.mastheadCopy}>
          <span className="eyebrow">ILICITANO · linguagem visual</span>
          <h1 className="display display-1">
            Claro, editorial, <em>com o dourado a marcar o que está à venda.</em>
          </h1>
        </div>
        <Wordmark size={56} />
      </header>

      <Section title="Paleta">
        <div className={styles.swatches}>
          {palette.map((entry) => (
            <div key={entry.token} className={styles.swatch}>
              <div className={styles.chipColour} style={{ background: `var(${entry.token})` }} />
              <span className={styles.swatchName}>{entry.name}</span>
              <code className={styles.code}>{entry.token}</code>
              <span className="small muted">{entry.use}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tipografia">
        <div className={styles.specimens}>
          <Specimen note="Manrope Light · títulos H1 · --size-display-1">
            <span className="display display-1">
              Mais do que casas, <em>criamos lares.</em>
            </span>
          </Specimen>
          <Specimen note="Manrope Light · títulos de secção · --size-display-2">
            <span className="display display-2">A sua casa, chave na mão.</span>
          </Specimen>
          <Specimen note="Jost Light · texto de apoio · --size-lead">
            <span className="lead">Aqui, onde a sua história começa.</span>
          </Specimen>
          <Specimen note="Jost Regular · corpo de texto · --size-prose">
            <span className="prose">
              Do planeamento à escolha dos materiais, da execução ao cumprimento dos prazos.
            </span>
          </Specimen>
          <Specimen note="Jost Medium · rótulo de secção · --size-eyebrow">
            <span className="eyebrow">Em comercialização</span>
          </Specimen>
        </div>
      </Section>

      <Section title="Componentes">
        <div className={styles.components}>
          <Button href="/sistema" arrow>
            Marcar visita
          </Button>
          <Button href="/sistema" variant="ghost">
            Conhecer a empresa
          </Button>
          <TextLink href="/sistema">Ver ficha do empreendimento</TextLink>
          <div className={styles.chips}>
            <Chip tone="venda">Em comercialização</Chip>
            <Chip>Concluído</Chip>
          </div>
          <Fact value="T1 · T2 · T3" label="Tipologias" />
        </div>
      </Section>

      <Section title="Movimento">
        <p className="prose" style={{ maxWidth: "58ch" }}>
          Três durações e duas curvas cobrem o site inteiro. O movimento é lento, num só eixo e
          nunca elástico — e todos os valores colapsam sob <code className={styles.code}>
            prefers-reduced-motion
          </code>
          , pelo que nenhuma informação depende dele para ser lida.
        </p>

        <div className={styles.motionTable}>
          {[...durations, ...easings].map((entry) => (
            <div key={entry.token} className={styles.motionRow}>
              <code className={styles.code}>{entry.token}</code>
              <TokenValue token={entry.token} className={styles.motionValue} />
              <span className="small muted">{entry.use}</span>
            </div>
          ))}
        </div>

        <div className={styles.demo}>
          <span className="eyebrow">Revelação ao entrar no ecrã</span>
          <div className={styles.demoRow}>
            {[0, 1, 2, 3].map((index) => (
              <Reveal key={index} index={index}>
                <div className={styles.demoTile}>{index + 1}</div>
              </Reveal>
            ))}
          </div>
          <span className="small muted">
            Cada elemento entra com um atraso de --stagger sobre o anterior.
          </span>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={`eyebrow ${styles.sectionTitle}`}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function Specimen({ note, children }: { note: string; children: React.ReactNode }) {
  return (
    <div className={styles.specimen}>
      {children}
      <span className="small muted">{note}</span>
    </div>
  );
}
