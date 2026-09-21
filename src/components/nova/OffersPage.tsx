import {
  Camera,
  Globe,
  Maximize,
  MapPin,
  Moon,
  Orbit,
  Sparkles,
  Sun,
  Users,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { OffersSelector } from "./OffersSelector";

const APP_URL = "https://app.novatour.fr";

const steps = [
  {
    title: "Vous nous présentez votre lieu",
    detail:
      "Hôtel, restaurant, domaine, commerce, activité touristique, lieu culturel, hébergement… Présentez-nous votre établissement et ce que vous souhaitez mettre en valeur.",
  },
  {
    title: "NovaVisio crée votre visite",
    detail:
      "Notre équipe réalise la captation et crée une visite immersive 360° pensée pour mettre en valeur vos espaces et votre univers.",
  },
  {
    title: "Votre visite rejoint NovaTour",
    detail:
      "Votre expérience immersive est intégrée à NovaTour et associée aux informations utiles de votre établissement.",
  },
  {
    title: "Vos visiteurs découvrent votre univers",
    detail:
      "Vos futurs visiteurs peuvent explorer votre lieu à distance, se projeter et retrouver les informations nécessaires pour préparer leur venue.",
  },
];

const features = [
  {
    icon: Camera,
    title: "Captation 360° professionnelle",
    detail:
      "Des images immersives de haute qualité pour restituer fidèlement l’atmosphère et les espaces de votre établissement.",
  },
  {
    icon: Orbit,
    title: "Visite interactive",
    detail:
      "Points d’intérêt, navigation intuitive et informations contextualisées pour permettre aux visiteurs de découvrir votre lieu comme s’ils y étaient.",
  },
  {
    icon: Sparkles,
    title: "Mise en valeur de votre établissement",
    detail:
      "Nous ne nous contentons pas de photographier un espace : nous construisons une expérience qui permet de comprendre, d’explorer et de se projeter.",
  },
  {
    icon: Globe,
    title: "Intégration sur NovaTour",
    detail: "Votre visite devient une véritable vitrine immersive au sein de notre plateforme.",
  },
];

const audiences = [
  "Hôtels & hébergements",
  "Restaurants",
  "Domaines & propriétés",
  "Sites touristiques",
  "Activités de loisirs",
  "Commerces",
  "Lieux culturels",
  "Producteurs & savoir-faire locaux",
  "Offices et acteurs du tourisme",
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
            Rejoignez-nous
          </a>
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
          <p className="eyebrow">Visites immersives 360° par NovaVisio</p>
          <h1>
            Votre établissement, votre lieu, votre savoir-faire… <em>en immersion</em>
          </h1>
          <p>
            NovaVisio crée pour vous une visite immersive 360° professionnelle et interactive, puis
            votre établissement est valorisé sur NovaTour. Faites découvrir votre univers avant même
            que vos visiteurs franchissent la porte.
          </p>

          <div className="nv-google-badge">
            <GoogleGlyph aria-hidden="true" />
            <span>
              <strong>Certifié Google Street View</strong>
              <small>Des visites fiables et de haute qualité</small>
            </span>
          </div>

          <div className="nv-hero__actions">
            <a className="button button-primary" href="#taille-lieu">
              Faites découvrir votre établissement <span aria-hidden="true">→</span>
            </a>
            <a href="#devis">Être rappelé par NovaVisio</a>
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

      <section className="nv-steps snap-section" aria-labelledby="nv-steps-title">
        <div className="nv-steps__intro">
          <p className="eyebrow">Comment ça marche</p>
          <h2 id="nv-steps-title">De votre lieu à l’expérience immersive</h2>
        </div>
        <div className="nv-steps__grid">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="nv-steps__index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nv-features snap-section" aria-labelledby="nv-features-title">
        <div className="nv-features__intro">
          <p className="eyebrow">Notre savoir-faire</p>
          <h2 id="nv-features-title">Notre savoir-faire au service de votre visibilité</h2>
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

      <section className="nv-flow snap-section" aria-labelledby="nv-flow-title">
        <div className="nv-flow__intro">
          <p className="eyebrow">Le parcours de votre lieu</p>
          <h2 id="nv-flow-title">Deux savoir-faire complémentaires, une seule expérience</h2>
        </div>

        <div className="nv-flow__chain">
          <div className="nv-flow__node">
            <span className="nv-flow__icon">
              <MapPin aria-hidden="true" />
            </span>
            <strong>Votre lieu</strong>
          </div>

          <span className="nv-flow__arrow" aria-hidden="true">
            →
          </span>

          <div className="nv-flow__node nv-flow__node--novavisio">
            <span className="nv-flow__icon">
              <Camera aria-hidden="true" />
            </span>
            <strong>NovaVisio</strong>
            <p>Création de votre visite immersive 360°</p>
          </div>

          <span className="nv-flow__arrow" aria-hidden="true">
            →
          </span>

          <div className="nv-flow__node nv-flow__node--novatour">
            <span className="nv-flow__icon">
              <Globe aria-hidden="true" />
            </span>
            <strong>NovaTour</strong>
            <p>Diffusion et découverte de votre établissement</p>
          </div>

          <span className="nv-flow__arrow" aria-hidden="true">
            →
          </span>

          <div className="nv-flow__node">
            <span className="nv-flow__icon">
              <Users aria-hidden="true" />
            </span>
            <strong>Vos futurs visiteurs</strong>
          </div>
        </div>

        <p className="nv-flow__tagline">
          « Nous créons l’expérience, <span className="novavisio-accent">NovaTour</span> la fait
          découvrir. »
        </p>
      </section>

      <section className="nv-audience snap-section" aria-labelledby="nv-audience-title">
        <div className="nv-audience__intro">
          <p className="eyebrow">Pour qui ?</p>
          <h2 id="nv-audience-title">Tous les lieux qui méritent d’être découverts</h2>
        </div>

        <ul className="nv-audience__tags">
          {audiences.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>

        <p className="nv-audience__note">
          Professionnel ou particulier, si vous possédez un lieu ou une activité à faire découvrir,
          votre projet a sa place sur NovaTour.
        </p>
      </section>

      <section className="nv-cta-final snap-section" aria-labelledby="nv-cta-final-title">
        <div className="nv-cta-final__glow" aria-hidden="true" />
        <div className="nv-cta-final__inner">
          <p className="eyebrow">Passez à l’immersion</p>
          <h2 id="nv-cta-final-title">Et si votre lieu devenait une expérience à découvrir ?</h2>
          <p>
            Faites découvrir votre établissement autrement grâce à une visite immersive créée par{" "}
            <span className="novavisio-accent">NovaVisio</span> et valorisée sur NovaTour.
          </p>
          <div className="nv-cta-final__actions">
            <a className="button button-primary" href="#taille-lieu">
              Présenter mon établissement <span aria-hidden="true">→</span>
            </a>
            <a href="#devis">Être rappelé</a>
          </div>
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
