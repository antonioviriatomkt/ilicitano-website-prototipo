import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { company, legalLinks } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.brandColumn}>
            <Link href="/" aria-label="ILICITANO — página inicial">
              <Wordmark size={34} tone="light" />
            </Link>
            <p className={styles.tagline}>{company.tagline}</p>
          </div>

          <FooterColumn title="Localização">
            {company.addressLine1}
            <br />
            {company.addressLine2}
          </FooterColumn>

          <FooterColumn title="Contacto">
            <a href={company.phoneHref}>{company.phone}</a>
            <br />
            <a href={company.emailHref}>{company.email}</a>
          </FooterColumn>

          <FooterColumn title="Informações">
            {company.alvara}
            <br />
            {company.nif}
          </FooterColumn>
        </div>

        <hr className={styles.rule} />

        <div className={styles.bottom}>
          <ul className={styles.legal}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <span className={styles.copyright}>
            {company.legalName} © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.column}>
      <span className={`eyebrow ${styles.columnTitle}`}>{title}</span>
      <p className={styles.columnBody}>{children}</p>
    </div>
  );
}
