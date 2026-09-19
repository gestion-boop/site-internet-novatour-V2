import { Camera, Clock, Tag } from "lucide-react";
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

      <section className="offers-hero snap-section">
        <p className="eyebrow">Solutions professionnelles NovaVisio</p>
        <h1>
          Votre établissement,
          <br />
          visible sur <em>NovaTour</em>
        </h1>
        <p>
          Vous êtes restaurateur, hébergeur ou commerçant ?{" "}
          <span className="novavisio-accent">NovaVisio</span> réalise votre visite immersive 360°,
          NovaTour la diffuse ensuite gratuitement au public.
        </p>
        <div className="offers-hero-actions">
          <a className="button button-primary" href="#pricing-title">
            Découvrir les solutions <span>↓</span>
          </a>
          <a href="#devis">Être rappelé par Natacha</a>
        </div>
        <ul className="offers-stats">
          <li>
            <Camera aria-hidden="true" />
            Visite 360° réalisée chez vous
          </li>
          <li>
            <Clock aria-hidden="true" />
            En ligne sous 48 h
          </li>
          <li>
            <Tag aria-hidden="true" />À partir de 9,90 € HT / mois
          </li>
        </ul>
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
