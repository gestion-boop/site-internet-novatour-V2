import { Camera, CloudUpload, Glasses, Share2 } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { OffersSelector } from "./OffersSelector";

const steps = [
  {
    icon: Camera,
    title: "Création 360°",
    detail: "Captation professionnelle et modélisation",
    accent: "visio" as const,
  },
  {
    icon: Glasses,
    title: "Immersion",
    detail: "Visites interactives et expériences immersives",
    accent: "visio" as const,
  },
  {
    icon: CloudUpload,
    title: "Hébergement",
    detail: "Plateforme sécurisée et performante",
    accent: "tour" as const,
  },
  {
    icon: Share2,
    title: "Diffusion",
    detail: "Partage facile sur tous vos supports",
    accent: "tour" as const,
  },
];

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

      <section className="offers-hero offers-hero--split snap-section">
        <div className="offers-hero__glow" aria-hidden="true" />

        <div className="offers-hero__flow" aria-hidden="true">
          <span className="offers-hero__badge offers-hero__badge--visio">
            <img src="/novavisio-logo.png" alt="" width="48" height="48" />
            <span>
              <small>NovaVisio</small>
              <b>L’entreprise</b>
            </span>
          </span>
          <span className="offers-hero__connector">
            <span className="offers-hero__connector-line offers-hero__connector-line--visio" />
            <span className="offers-hero__connector-node offers-hero__connector-node--visio">
              360°
            </span>
            <span className="offers-hero__connector-line offers-hero__connector-line--dashed" />
            <span className="offers-hero__connector-node offers-hero__connector-node--tour">
              <CloudUpload aria-hidden="true" />
            </span>
            <span className="offers-hero__connector-line offers-hero__connector-line--tour" />
          </span>
          <span className="offers-hero__badge offers-hero__badge--tour">
            <img src="/novatour-logo.png" alt="" width="48" height="48" />
            <span>
              <small>NovaTour</small>
              <b>La marque</b>
            </span>
          </span>
        </div>

        <p className="eyebrow">
          Créatrice de visites virtuelles immersives · Plateforme de diffusion
        </p>
        <h1>
          <span className="novavisio-accent">NovaVisio</span> crée vos visites immersives,
          <br />
          <em>NovaTour</em> les diffuse.
        </h1>
        <p>
          L’équipe NovaVisio se déplace chez vous pour capturer votre lieu à 360° ; NovaTour héberge
          et diffuse ensuite la visite auprès du public.
        </p>

        <ul className="offers-hero__steps">
          {steps.map((step) => (
            <li key={step.title} className={`offers-hero__step--${step.accent}`}>
              <span className="offers-hero__step-icon">
                <step.icon aria-hidden="true" />
              </span>
              <span className="offers-hero__step-stem" aria-hidden="true" />
              <div>
                <strong>{step.title}</strong>
                <small>{step.detail}</small>
              </div>
            </li>
          ))}
        </ul>

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
