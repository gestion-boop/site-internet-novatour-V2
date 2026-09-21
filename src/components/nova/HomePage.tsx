import { useState } from "react";
import { LatestPlaces } from "./LatestPlaces";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import {
  ClipboardList,
  Compass,
  Eye,
  Globe,
  MousePointerClick,
  Share,
  ShieldCheck,
  Smartphone,
  SquarePlus,
} from "lucide-react";
import { SeasonalStays } from "./SeasonalStays";
import { TourPreview } from "./TourPreview";
import { TrustedPartners } from "./TrustedPartners";

const APP_URL = "https://app.novatour.fr";
const STAYS_URL = "https://app.novatour.fr/?category=h%C3%A9bergements";

export function HomePage() {
  const [conceptBg, setConceptBg] = useState("/stays/le-cosy-cuisine.webp");

  return (
    <main>
      <MotionEffects />
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="NovaTour — accueil">
          <img src="/novatour-logo.png" alt="" width="58" height="58" />
          <span>NovaTour</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <a className="active" href="#accueil">
            Accueil
          </a>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Découvrir NovaTour
          </a>
          <a href="/offres">Rejoignez-nous</a>
          <a href="/contact">Contact</a>
        </nav>

        <a className="header-cta" href="/offres#devis">
          Obtenir un devis
        </a>
        <MobileMenu />
      </header>

      <section className="hero hero--video" id="accueil">
        <div className="hero-video-layer" aria-hidden="true">
          <video
            className="hero-video"
            src="/novatour-hero.mp4"
            poster="/novatour-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="hero-video-overlay" />
        </div>

        <div className="hero-copy">
          <h1>
            Un seul <span className="hero-accent">endroit</span> <br className="hero-br" />
            pour <span className="hero-accent">explorer</span> tous les autres.
          </h1>
          <p className="hero-intro">
            Découvrez des lieux, des expériences et des adresses à explorer en visites immersives et
            intéractives en 360°, avec toutes les informations utiles au même endroit.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={APP_URL} target="_blank" rel="noreferrer">
              <span aria-hidden="true">⌕</span>
              Découvrir NovaTour
            </a>
            <a className="text-link hero-pro-link" href="/offres">
              Vous êtes un professionnel ? Devenez visible <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="hero-proofs">
            <li>
              <Smartphone aria-hidden="true" />
              Sans téléchargement
            </li>
            <li>
              <Compass aria-hidden="true" />
              Immersion 360°
            </li>
          </ul>
        </div>
      </section>

      <section className="discover section" aria-labelledby="discover-title">
        <div className="discover__bg" aria-hidden="true">
          <img src="/narbonne-canal.webp" alt="" loading="lazy" />
        </div>
        <div className="discover__veil" aria-hidden="true" />
        <div className="discover__constellation" aria-hidden="true">
          <svg viewBox="0 0 360 220" preserveAspectRatio="xMaxYMin meet">
            <g fill="none" stroke="rgba(255, 255, 255, 0.85)" strokeWidth="1" strokeLinecap="round">
              <path d="M40 150 L120 100 L170 60 L250 90 L300 40" />
              <path d="M120 100 L150 150 L250 90" />
              <path d="M170 60 L200 20" />
            </g>
            <g fill="#fff">
              <circle cx="40" cy="150" r="2.4" />
              <circle cx="120" cy="100" r="3" />
              <circle cx="170" cy="60" r="2.2" />
              <circle cx="250" cy="90" r="3.2" />
              <circle cx="300" cy="40" r="2.4" />
              <circle cx="150" cy="150" r="2" />
              <circle cx="200" cy="20" r="1.8" />
            </g>
          </svg>
        </div>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Les dernières découvertes</p>
            <h2 id="discover-title">Ils viennent de rejoindre NovaTour</h2>
          </div>
          <div className="discover__heading-side">
            <a className="text-link" href={APP_URL} target="_blank" rel="noreferrer">
              Voir tous les lieux <span>→</span>
            </a>
          </div>
        </div>
        <LatestPlaces />
      </section>

      <section className="about about--editorial section" id="concept">
        <div className="about-editorial__bg" aria-hidden="true">
          <img src={conceptBg} alt="" loading="lazy" key={conceptBg} />
        </div>
        <div className="about-editorial__veil" aria-hidden="true" />
        <TourPreview onTourChange={(tour) => setConceptBg(tour.image)} />

        <div className="about-copy about-copy--editorial">
          <h2>
            Tout réuni
            <br />
            au même endroit
          </h2>

          <div className="about-features">
            <article>
              <span className="feature-icon" aria-hidden="true">
                360°
              </span>
              <div>
                <small>01 — Découvrir</small>
                <strong>
                  Découvrez autrement un lieu grâce à la visite immersive et intéractive
                </strong>
              </div>
            </article>
            <article>
              <span className="feature-icon" aria-hidden="true">
                <ClipboardList />
              </span>
              <div>
                <small>02 — S’informer</small>
                <strong>
                  Retrouvez toutes les coordonnées, les réseaux sociaux, les menus, les vidéos, sur
                  la même interface
                </strong>
              </div>
            </article>
            <article>
              <span className="feature-icon" aria-hidden="true">
                <MousePointerClick />
              </span>
              <div>
                <small>03 — Choisir</small>
                <strong>Explorer avant de choisir</strong>
              </div>
            </article>
          </div>

          <a
            className="button button-primary about-cta"
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Découvrir NovaTour <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="saison-showcase" id="partenaire" aria-labelledby="partner-title">
        <div className="saison-showcase__bg saison-showcase__bg--gradient" aria-hidden="true">
          <img src="/stays/le-cosy-cuisine.webp" alt="" loading="lazy" />
          <span className="saison-showcase__veil" />
        </div>

        <div className="saison-showcase__inner">
          <div className="saison-showcase__content">
            <p className="saison-showcase__eyebrow">Locations saisonnières</p>
            <h2 id="partner-title">
              Visitez en immersion 360°
              <br />
              avant de réserver.
            </h2>
            <p className="saison-showcase__lead">
              Explorez gîtes, maisons et appartements pièce par pièce. Réservez en toute confiance
              sur vos plateformes préférées ou en direct.
            </p>

            <div className="saison-showcase__actions">
              <a className="saison-showcase__cta" href={STAYS_URL} target="_blank" rel="noreferrer">
                Voir les locations <b aria-hidden="true">→</b>
              </a>
            </div>

            <div className="saison-platforms" aria-label="Plateformes de réservation concernées">
              <span className="saison-platforms__label">
                Visitez sur NovaTour, et réservez sur les plateformes
              </span>
              <span className="saison-platforms__logo saison-platforms__logo--airbnb">
                <img src="/stays/airbnb-logo.png" alt="Airbnb" height="24" />
              </span>
              <span className="saison-platforms__logo saison-platforms__logo--booking">
                <img src="/stays/booking-logo.png" alt="Booking.com" height="36" />
              </span>
              <span className="saison-platforms__logo saison-platforms__logo--expedia">
                <img src="/stays/expedia-logo.png" alt="Expedia" height="22" />
              </span>
              <span className="saison-platforms__logo saison-platforms__logo--abritel">
                <img src="/stays/abritel-logo.png" alt="Abritel" height="22" />
              </span>
              <span className="saison-platforms__label">ou en direct.</span>
            </div>

            <ul className="saison-benefits">
              <li>
                <Eye aria-hidden="true" />
                <span>
                  <strong>Immersion 360°</strong> Une visite virtuelle fidèle au lieu.
                </span>
              </li>
              <li>
                <ShieldCheck aria-hidden="true" />
                <span>
                  <strong>Zéro mauvaise surprise</strong> Transparence totale avant de réserver.
                </span>
              </li>
              <li>
                <ClipboardList aria-hidden="true" />
                <span>
                  <strong>Tout au même endroit</strong> Coordonnées, avis, réseaux et réservation.
                </span>
              </li>
            </ul>
          </div>

          <SeasonalStays />
        </div>
      </section>

      <TrustedPartners />

      <section className="app-section app-section--light section">
        <div className="app-section__bg" aria-hidden="true">
          <img src="/hero-occitanie.png" alt="" loading="lazy" />
        </div>
        <div className="app-section__veil" aria-hidden="true" />
        <div className="app-copy app-copy--light">
          <p className="eyebrow">L’application web</p>
          <h2>
            NovaTour dans
            <br />
            votre <em>poche</em>
          </h2>
          <p>
            Aucun téléchargement : ajoutez NovaTour à l’écran d’accueil de votre téléphone et lancez
            les visites en un geste.
          </p>
          <ol className="app-steps">
            <li>
              <Globe aria-hidden="true" />
              <span>
                <strong>Ouvrez NovaTour</strong> dans Safari ou Chrome.
              </span>
            </li>
            <li>
              <Share aria-hidden="true" />
              <span>
                <strong>Appuyez sur « Partager »</strong> dans votre navigateur.
              </span>
            </li>
            <li>
              <SquarePlus aria-hidden="true" />
              <span>
                <strong>Ajoutez à l’écran d’accueil</strong>, l’icône apparaît.
              </span>
            </li>
          </ol>
          <a
            className="button button-primary app-cta"
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir NovaTour <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="app-qr">
          <img alt="" className="app-qr__logo" height="64" src="/novatour-logo.png" width="64" />
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Ouvrir l’application NovaTour"
          >
            <img
              alt="QR code permettant d’ouvrir l’application NovaTour"
              className="app-qr__code"
              height="240"
              src="/novatour-app-qr.png"
              width="240"
            />
          </a>
          <strong>Scannez pour ouvrir NovaTour sur votre téléphone</strong>
          <span>Le lien s’ouvre directement sur iOS et Android.</span>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <a className="brand brand--footer" href="#accueil">
            <img src="/novatour-logo.png" alt="" width="54" height="54" />
            <span>NovaTour</span>
          </a>
          <p>
            NovaTour est la plateforme gratuite de découverte imaginée et développée par{" "}
            <span className="novavisio-accent">NovaVisio</span>.
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <a href="#accueil">Accueil</a>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Découvrir
          </a>
          <a href="/offres">Nos offres</a>
          <a href="#partenaire">Devenir partenaire</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            19 Rue du Luxembourg
            <br />
            11100 Narbonne, France
          </p>
          <a href="mailto:natacha.jaillet@novavisio.fr">natacha.jaillet@novavisio.fr</a>
        </div>
        <div>
          <h3>Informations légales</h3>
          <a href="https://app.novatour.fr/legal" target="_blank" rel="noreferrer">
            Mentions légales
          </a>
          <a href="https://app.novatour.fr/cgu" target="_blank" rel="noreferrer">
            Conditions générales d’utilisation
          </a>
          <a href="https://app.novatour.fr/privacy" target="_blank" rel="noreferrer">
            Politique de confidentialité
          </a>
        </div>
        <div>
          <h3>Suivez-nous</h3>
          <a href="https://www.instagram.com/novatour.fr/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a
            href="https://www.facebook.com/p/NovaTour-61587281682477/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <p className="copyright">© 2026 NovaTour. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
