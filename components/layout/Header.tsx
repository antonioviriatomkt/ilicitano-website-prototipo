"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Close, Menu } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { languages, navigation } from "@/lib/content";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The header does not unmount across a route change, so every link that can
  // be reached while the panel is open closes it on the way out — otherwise
  // the menu would still be covering the page it just navigated to.
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // The header loses height once the hero starts to leave, so the navigation
  // takes less of the viewport while reading. One boolean, no per-frame work.
  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the panel is open the page behind it must not scroll.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={styles.header} data-condensed={condensed}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="ILICITANO — página inicial"
        >
          <Wordmark size={28} />
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
                data-active={active}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <LanguageSwitch />
          <Button href="/marcar-visita" compact className={styles.cta}>
            Marcar visita
          </Button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
          >
            {menuOpen ? <Close /> : <Menu />}
            <span className="sr-only">{menuOpen ? "Fechar menu" : "Abrir menu"}</span>
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={styles.panel} data-open={menuOpen} hidden={!menuOpen}>
        <nav className={styles.panelNav} aria-label="Principal — telemóvel">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.panelLink}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href="/marcar-visita" block arrow onClick={closeMenu}>
          Marcar visita
        </Button>
      </div>
    </header>
  );
}

/**
 * Four languages, the active one in ink. Placeholder buttons for now — the
 * prototype is single-locale, so these do not yet route anywhere.
 */
function LanguageSwitch() {
  return (
    <div className={styles.lang}>
      {languages.map((code, index) => (
        <span key={code} className={styles.langItem} data-active={index === 0}>
          {code}
        </span>
      ))}
    </div>
  );
}
