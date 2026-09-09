import { PageIntro } from "@/components/ui/PageIntro";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./not-found.module.css";

/**
 * Rendered for any address that does not match a route. Same opening shape as
 * every other page — the site should not change register because a link broke.
 */
export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <PageIntro
        eyebrow="Erro 404"
        title={
          <>
            Esta página <em>não existe.</em>
          </>
        }
        lead="A ligação pode estar desatualizada, ou o endereço ter sido escrito de outra forma. A partir daqui chega ao resto do site."
      >
        <div className={styles.actions}>
          <Button href="/" arrow>
            Ir para a página inicial
          </Button>
          <div className={styles.links}>
            <TextLink href="/empreendimentos">Empreendimentos</TextLink>
            <TextLink href="/contactos">Contactos</TextLink>
          </div>
        </div>
      </PageIntro>
    </div>
  );
}
