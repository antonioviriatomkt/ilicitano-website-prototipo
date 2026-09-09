import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Frame } from "@/components/ui/Frame";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`page grid ${styles.hero}`}>
      <Reveal className={styles.copy}>
        <span className="eyebrow">Promoção imobiliária · Leiria · desde 2008</span>
        <h1 className="display display-1">
          Mais do que casas, <em>criamos lares.</em>
        </h1>
        <p className={`lead ${styles.lead}`}>
          Aqui, onde a sua história começa. Empreendimentos residenciais em Alcanena, Fátima, Leiria
          e Lisboa — e obra chave na mão para a sua casa.
        </p>
        <div className={styles.actions}>
          <Button href="/empreendimentos" arrow>
            Ver empreendimentos
          </Button>
          <TextLink href="/orcamento">Pedir orçamento de obra</TextLink>
        </div>
      </Reveal>

      <Reveal className={styles.media} index={1}>
        <Frame
          src="/fotografia/hero-piscina.jpg"
          alt="Stone Village — moradias com piscina, condomínio privado na zona costeira de Leiria"
          ratio="1 / 1"
          sizes="(max-width: 900px) 100vw, 50vw"
          priority
        />
        <div className={styles.caption}>
          <span className="small muted">
            Stone Village — condomínio privado, zona costeira de Leiria
          </span>
          <span className="small muted">01 / 08</span>
        </div>
      </Reveal>
    </section>
  );
}
