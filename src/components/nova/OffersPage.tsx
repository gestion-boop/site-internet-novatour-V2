import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { OffersSelector } from "./OffersSelector";

const APP_URL = "https://app.novatour.fr";

export function OffersPage() {
  return (
    <main className="offers-page">
      <MotionEffects />
      <header className="site-header offers-site-header">
        <a className="brand" href="/#accueil" aria-label="NovaTour — accueil">
          <img src="/novatour-logo.png" alt="" width="58" height="58" />
          <span>NovaTour</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="/#accueil">Accueil</a>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Faire une recherche
          </a>
          <a className="active" href="/offres">
            Nos offres
          </a>
          <a href="/#partenaire">Devenir partenaire</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="header-cta" href="#devis">
          Obtenir un devis
        </a>
        <MobileMenu />
      </header>

      <section className="offers-hero offers-hero--visual snap-section">
        <div className="offers-hero__bg" aria-hidden="true">
          <img
            className="offers-hero__schema"
            src="/novavisio-novatour-schema.webp"
            alt="NovaVisio, l’entreprise créatrice de visites virtuelles immersives, crée les visites ; NovaTour, la plateforme de diffusion, les diffuse. Une solution complète en 4 étapes : création 360°, immersion, hébergement, diffusion."
          />
        </div>
        <div className="offers-hero__veil" aria-hidden="true" />
        <div className="offers-hero-actions">
          <a
            className="button button-primary"
            href="https://www.novavisio.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Découvrir les offres NovaVisio <span aria-hidden="true">↗</span>
          </a>
          <a href="#devis">Être rappelé par Natacha</a>
        </div>
      </section>

      <OffersSelector />

      <footer>
        <div className="footer-brand">
          <a className="brand brand--footer" href="/#accueil">
            <img src="/novatour-logo.png" alt="" width="54" height="54" />
            <span>NovaTour</span>
          </a>
          <p>
            La plateforme gratuite de découverte conçue par{" "}
            <a
              className="novavisio-accent"
              href="https://www.novavisio.fr/"
              target="_blank"
              rel="noreferrer"
            >
              NovaVisio
            </a>
            .
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <a href="/#accueil">Accueil</a>
          <a href="/offres">Nos offres</a>
          <a href="/#partenaire">Devenir partenaire</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            19 Rue du Luxembourg
            <br />
            11100 Narbonne
          </p>
          <a href="mailto:natacha.jaillet@novavisio.fr">natacha.jaillet@novavisio.fr</a>
        </div>
        <div>
          <h3>Commercial</h3>
          <p>Natacha Jaillet</p>
          <a href="tel:+33630310065">06 30 31 00 65</a>
        </div>
        <p className="copyright">© 2026 NovaTour. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
