import { useEffect, useRef, useState } from "react";

const APP_URL = "https://app.novatour.fr";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusableElements = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    panel?.querySelector<HTMLElement>(focusableSelector)?.focus();

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`}>
      <button
        ref={triggerRef}
        className="menu-trigger"
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className="menu-backdrop"
        type="button"
        aria-label="Fermer le menu"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        ref={panelRef}
        className="menu-panel"
        id="mobile-navigation"
        aria-hidden={!open}
        aria-modal="true"
        role="dialog"
        aria-label="Menu principal"
      >
        <div className="menu-panel-header">
          <a className="menu-brand" href="#accueil" onClick={closeMenu}>
            <img src="/novatour-logo.png" alt="" width="48" height="48" />
            <span>NovaTour</span>
          </a>
          <button
            className="menu-close"
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <p className="menu-kicker">Explorer l’Occitanie autrement</p>
        <nav aria-label="Navigation mobile">
          <a href="/#accueil" onClick={closeMenu}>
            <span>01</span>Accueil
          </a>
          <a href={APP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <span>02</span>Découvrir NovaTour
          </a>
          <a href="/novavisio" onClick={closeMenu}>
            <span>03</span>NovaVisio
          </a>
          <a href="/offres" onClick={closeMenu}>
            <span>04</span>Nos offres
          </a>
          <a href="/#partenaire" onClick={closeMenu}>
            <span>05</span>Devenir partenaire
          </a>
          <a href="/contact" onClick={closeMenu}>
            <span>06</span>Contact
          </a>
        </nav>

        <a className="button button-primary menu-cta" href="/#partenaire" onClick={closeMenu}>
          Inscrire mon entreprise <span>→</span>
        </a>
      </aside>
    </div>
  );
}
