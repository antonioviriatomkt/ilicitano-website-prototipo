import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildStages, process, services } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Construção & Remodelação",
  description:
    "Construção de raiz, remodelação integral e remodelação parcial. Serviço chave na mão, prazos cumpridos. Orçamento gratuito e sem compromisso.",
};

export default function ConstrucaoRemodelacaoPage() {
  return (
    <>
      <section className={`page grid ${styles.hero}`}>
        <Reveal className={styles.heroCopy}>
          <span className="eyebrow">Construção e remodelação · particulares</span>
          <h1 className={`display ${styles.heroTitle}`}>
            Se está na altura de mudar, <em>nós construímos.</em>
          </h1>
          <p className={`lead ${styles.heroLead}`}>
            Combinamos experiência, materiais de qualidade e um acompanhamento rigoroso para
            construir o seu futuro ou dar uma nova vida ao seu imóvel. Serviço chave na mão, prazos
            cumpridos.
          </p>
          <div className={styles.heroActions}>
            <Button href="#orcamento" arrow>
              Pedir orçamento gratuito
            </Button>
            <span className="small muted">Sem qualquer compromisso</span>
          </div>
        </Reveal>

        <Reveal className={styles.heroGallery} index={1}>
          <Frame
            src="/fotografia/cozinha.jpg"
            alt="Cozinha remodelada, com eletrodomésticos encastrados"
            ratio="4 / 5"
            sizes="(max-width: 900px) 100vw, 26vw"
            priority
            className={styles.heroTall}
          />
          <div className={styles.heroStack}>
            <Frame
              src="/fotografia/obra-fachada.jpg"
              alt="Obra de raiz em curso, fachada em construção"
              ratio="1 / 1"
              sizes="(max-width: 900px) 50vw, 26vw"
            />
            <Frame
              src="/fotografia/wc-preto.jpg"
              alt="Casa de banho remodelada em tons escuros"
              ratio="1 / 1"
              sizes="(max-width: 900px) 50vw, 26vw"
            />
          </div>
        </Reveal>
      </section>

      <section className={`page ${styles.services}`}>
        <Reveal>
          <SectionHeading
            eyebrow="O que fazemos por si"
            title={
              <>
                Três serviços, <em>um só responsável</em> pela sua obra.
              </>
            }
          />
        </Reveal>
        <ul className={styles.serviceGrid}>
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} index={index}>
              <Link href={`#${service.slug}`} id={service.slug} className={styles.serviceCard}>
                <Frame
                  src={service.photo}
                  alt={service.photoAlt}
                  ratio="4 / 3"
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{service.shortLabel ?? service.label}</h3>
                  <p className="small">{service.body}</p>
                  <span className={styles.serviceMore}>
                    Saber mais <ArrowRight size={14} className={styles.serviceArrow} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={styles.processBand}>
        <div className={`page ${styles.processInner}`}>
          <Reveal>
            <SectionHeading
              eyebrow="Porquê a ILICITANO"
              title={
                <>
                  Fazer uma obra não tem de ser <em>stressante.</em>
                </>
              }
              asideKind="prose"
              aside={
                <p className="prose">
                  Assumimos o compromisso de entregar um serviço chave na mão. Cuidamos de tudo — do
                  planeamento inicial à escolha conjunta dos materiais, passando pela execução
                  rigorosa e pelo cumprimento dos prazos acordados.
                </p>
              }
            />
          </Reveal>
          <ol className={styles.steps}>
            {process.map((step, index) => (
              <Reveal as="li" key={step.number} index={index} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepTitle}>{step.title}</span>
                <p className={styles.stepBody}>{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={`page ${styles.stages}`}>
        <Reveal>
          <SectionHeading
            eyebrow="Obra a sério"
            title={
              <>
                Do tosco <em>ao acabamento.</em>
              </>
            }
            asideKind="prose"
            aside={
              <p className="prose">
                Publicamos a obra como ela é — estrutura, redes técnicas, isolamentos — porque é aí
                que se vê a diferença.
              </p>
            }
          />
        </Reveal>
        <ul className={styles.stageGrid}>
          {buildStages.map((stage, index) => (
            <Reveal as="li" key={stage.label} index={index} className={styles.stage}>
              <Frame
                src={stage.photo}
                alt={stage.photoAlt}
                ratio="1 / 1"
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <span className={styles.stageLabel}>{stage.label}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <QuoteBand />
    </>
  );
}
