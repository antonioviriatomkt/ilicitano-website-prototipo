import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { services } from "@/lib/content";
import styles from "./Services.module.css";

/**
 * The turnkey-works pitch. This is the one full-bleed white band on the page —
 * the change of ground is what separates "what we sell" from "what we build
 * for you", without needing a heading to say so.
 */
export function Services() {
  return (
    <section className={styles.band}>
      <div className={`page grid ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <span className="eyebrow">Construção e remodelação</span>
          <h2 className="display display-2">
            A sua casa,
            <br />
            <em>chave na mão.</em>
          </h2>
          <p className="prose">
            Seja para erguer a casa dos seus sonhos a partir do zero ou para transformar espaços
            antigos em ambientes modernos, cuidamos de tudo — do planeamento à escolha dos
            materiais, da execução ao cumprimento dos prazos. Sem surpresas, sem dores de cabeça.
          </p>

          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className={styles.item}>
                  {service.label}
                  <ArrowRight className={styles.itemArrow} />
                </Link>
              </li>
            ))}
          </ul>

          <Button href="/orcamento" arrow className={styles.cta}>
            Pedir orçamento gratuito
          </Button>
        </Reveal>

        <Reveal className={styles.gallery} index={1}>
          <Frame
            src="/fotografia/cozinha.jpg"
            alt="Cozinha remodelada, com eletrodomésticos encastrados"
            ratio="4 / 5"
            sizes="(max-width: 900px) 100vw, 30vw"
            className={styles.tall}
          />
          <Frame
            src="/fotografia/obra-estrutura.jpg"
            alt="Estrutura em obra, escoramento de laje"
            ratio="3 / 2"
            sizes="(max-width: 900px) 50vw, 28vw"
          />
          <Frame
            src="/fotografia/wc-marmore.jpg"
            alt="Casa de banho remodelada em mármore"
            ratio="3 / 2"
            sizes="(max-width: 900px) 50vw, 28vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
