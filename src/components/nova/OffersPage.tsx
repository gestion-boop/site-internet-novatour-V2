import {
  BarChart3,
  Eye,
  Maximize,
  MapPin,
  Moon,
  Orbit,
  Smartphone,
  Sun,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { OffersSelector } from "./OffersSelector";

const APP_URL = "https://app.novatour.fr";

const features = [
  {
    icon: Orbit,
    title: "Visites 360° interactives",
    detail: "Explorez chaque recoin avec une navigation fluide et intuitive.",
  },
  {
    icon: MapPin,
    title: "Points d’intérêt personnalisés",
    detail: "Mettez en avant vos atouts et guidez vos visiteurs vers l’essentiel.",
  },
  {
    icon: GoogleGlyph,
    title: "Intégration Google Street View",
    detail: "Une technologie de référence, fiable et reconnue.",
  },
  {
    icon: Smartphone,
    title: "Compatible tous appareils",
    detail: "Une expérience parfaite sur ordinateur, tablette et smartphone.",
  },
  {
    icon: Eye,
    title: "Plus d’engagement",
    detail: "Attirez l’attention et augmentez vos réservations.",
  },
  {
    icon: BarChart3,
    title: "Des résultats concrets",
    detail: "Une meilleure visibilité, un trafic qualifié et plus de clients.",
  },
];

function GoogleGlyph({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.9 13.9 0 0 1 10.9 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A21.93 21.93 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

export function OffersPage() {
  return (
    <main className="offers-page novavisio-page">
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

      <section className="nv-hero snap-section">
        <div className="nv-hero__glow" aria-hidden="true" />

        <div className="nv-hero__copy">
          <p className="eyebrow">Visites virtuelles 360°</p>
          <h1>
            Une visite immersive qui donne envie de <em>pousser la porte</em>
          </h1>
          <p>
            Offrez à vos futurs clients une expérience authentique et engageante grâce à nos visites
            virtuelles 360°. Explorez vos espaces comme si vous y étiez, et transformez la curiosité
            en visite réelle.
          </p>

          <div className="nv-google-badge">
            <GoogleGlyph aria-hidden="true" />
            <span>
              <strong>Certifié Google Street View</strong>
              <small>Des visites fiables et de haute qualité</small>
            </span>
          </div>

          <div className="nv-hero__actions">
            <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">
              Découvrir nos visites virtuelles <span aria-hidden="true">→</span>
            </a>
            <a href="#devis">Être rappelé par Natacha</a>
          </div>
        </div>

        <div className="nv-viewer" aria-hidden="true">
          <img className="nv-viewer__image" src="/stays/cascade-de-moussan-terrasse.webp" alt="" />
          <span className="nv-viewer__place">
            <MapPin aria-hidden="true" />
            <span>
              <strong>La Cascade de Moussan</strong>
              <small>Terrasse ombragée</small>
            </span>
          </span>
          <span className="nv-viewer__daynight">
            <span className="is-active">
              <Sun aria-hidden="true" /> Jour
            </span>
            <span>
              <Moon aria-hidden="true" /> Nuit
            </span>
          </span>
          <span className="nv-viewer__pin" style={{ top: "38%", left: "10%" }}>
            Coin repas
          </span>
          <span className="nv-viewer__pin" style={{ top: "52%", left: "48%" }}>
            Allée ombragée
          </span>
          <span className="nv-viewer__pin" style={{ top: "44%", right: "8%" }}>
            Salle intérieure
          </span>
          <span className="nv-viewer__controls">
            <ZoomIn aria-hidden="true" />
            <ZoomOut aria-hidden="true" />
            <Maximize aria-hidden="true" />
          </span>
          <span className="nv-viewer__badge">
            <span className="nv-viewer__badge-ring">360°</span>
          </span>
        </div>
      </section>

      <section className="nv-features snap-section" aria-labelledby="nv-features-title">
        <div className="nv-features__intro">
          <p className="eyebrow">Pourquoi choisir NovaVisio</p>
          <h2 id="nv-features-title">
            Une technologie au service
            <br />
            de votre visibilité
          </h2>
          <p>
            Plus qu’une simple visite, une expérience immersive qui valorise votre lieu, renforce
            votre image et génère plus de réservations.
          </p>
        </div>

        <div className="nv-features__grid">
          {features.map((feature) => (
            <article key={feature.title}>
              <span className="nv-features__icon">
                <feature.icon aria-hidden="true" />
              </span>
              <strong>{feature.title}</strong>
              <p>{feature.detail}</p>
            </article>
          ))}
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
