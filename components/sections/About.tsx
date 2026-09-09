import { Mail, Phone, Pin } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { company } from "@/lib/content";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={`page grid ${styles.section}`}>
      <Reveal className={styles.media}>
        <Frame
          src="/fotografia/kouros-building-varanda.jpg"
          alt="Kouros Building, Alcanena — fachada com varandas"
          ratio="1 / 1"
          sizes="(max-width: 900px) 100vw, 40vw"
        />
      </Reveal>

      <Reveal className={styles.copy} index={1}>
        <span className="eyebrow">Quem somos</span>
        <h2 className="display display-2">
          Desde 2008 a construir <em>onde as famílias ficam.</em>
        </h2>
        <p className="prose">
          A ILICITANO começou pela construção de moradias, blocos habitacionais e armazéns
          industriais. Hoje trabalha nos setores da promoção imobiliária, engenharia e construção —
          com a mesma equipa a acompanhar cada obra do primeiro dia à entrega.
        </p>

        <ul className={styles.contact}>
          <li>
            <a href={company.phoneHref} className={styles.contactLink}>
              <Phone /> {company.phone}
            </a>
          </li>
          <li>
            <a href={company.emailHref} className={styles.contactLink}>
              <Mail /> {company.email}
            </a>
          </li>
          <li className={styles.address}>
            <Pin /> {company.addressLine1}, Leiria
          </li>
        </ul>

        <div className={styles.actions}>
          <Button href="/contactos">Falar connosco</Button>
          <Button href="/quem-somos" variant="ghost">
            Conhecer a empresa
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
