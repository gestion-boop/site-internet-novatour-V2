import { LatestPlaces } from "./LatestPlaces";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { ShieldCheck } from "lucide-react";
import saisonHero from "@/assets/saison-bg-cosy.png.asset.json";
import cosyVisite from "@/assets/le-cosy-visite.png.asset.json";


const APP_URL = "https://app.novatour.fr";

export function HomePage() {
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
          <a href="/offres">Nos offres</a>
          <a href="#partenaire">Pourquoi nous rejoindre</a>
          <a href="/contact">Contact</a>
        </nav>

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
          <p className="eyebrow">La plateforme gratuite pour explorer</p>
          <h1>
            Un seul endroit <br className="hero-br" />
            pour explorer tous les autres.
          </h1>
          <p className="hero-intro">
            Explorez les meilleurs lieux de la région à 360°, puis retrouvez toutes leurs informations utiles au même
            endroit.
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

          <p className="hero-categories">Restaurants · Hébergements · Professionnels · Commerces</p>
        </div>
      </section>

      <section className="discover section" aria-labelledby="discover-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Les dernières découvertes</p>
            <h2 id="discover-title">À vivre près de chez vous</h2>
          </div>
          <a className="text-link" href={APP_URL} target="_blank" rel="noreferrer">
            Voir tous les lieux <span>→</span>
          </a>
        </div>
        <LatestPlaces />
      </section>

      <section className="about about--editorial section" id="concept">
        <div className="about-story-visual" aria-label="Lieux et expériences à découvrir">
          <figure className="story-photo story-photo--village">
            <img src="/occitanie-village.png" alt="Village occitan en pierre traversé par un canal" />
          </figure>
          <figure className="story-photo story-photo--restaurant">
            <img src="/occitanie-restaurant.png" alt="Terrasse de restaurant avec vue sur les vignobles" />
          </figure>
          <figure className="story-photo story-photo--marina">
            <img src="/occitanie-marina.png" alt="Marina méditerranéenne bordée de maisons et de palmiers" />
          </figure>
          <div className="story-phone" aria-hidden="true">
            <span className="story-phone-speaker" />
            <img src="/novatour-app-home.png" alt="" />
          </div>
        </div>

        <div className="about-copy about-copy--editorial">
          <p className="eyebrow">
            La plateforme gratuite créée par <span className="novavisio-accent">NovaVisio</span>
          </p>
          <h2>
            Tout un territoire
            <br />
            au creux de la main
          </h2>
          <p className="about-categories">Restaurants · Hébergements · Professionnels · Commerces</p>

          <div className="about-features">
            <article>
              <span className="feature-icon" aria-hidden="true">
                360°
              </span>
              <div>
                <small>01 — Découvrir</small>
                <strong>Visites immersives interactives 360°</strong>
              </div>
            </article>
            <article>
              <span className="feature-icon" aria-hidden="true">
                ▤
              </span>
              <div>
                <small>02 — S’informer</small>
                <strong>Toutes les informations réunies au même endroit : coordonnées, réseaux sociaux, avis…</strong>
              </div>
            </article>
            <a href={APP_URL} target="_blank" rel="noreferrer">
              <span className="feature-icon" aria-hidden="true">
                ♡
              </span>
              <div>
                <small>03 — Choisir</small>
                <strong>Explorer avant de choisir</strong>
              </div>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </div>
      </section>




      <section className="saison-showcase" id="partenaire" aria-labelledby="partner-title">
        <div className="saison-showcase__bg" aria-hidden="true">
          <img src={saisonHero.url} alt="" />
          <span className="saison-showcase__veil" />
        </div>

        <div className="saison-showcase__inner">
          <div className="saison-showcase__content">
            <p className="saison-showcase__eyebrow">Locations saisonnières</p>
            <h2 id="partner-title">
              Visitez avant
              <br />
              de réserver.
            </h2>
            <p className="saison-showcase__lead">
              Pour la première fois, découvrez vos locations saisonnières en immersion 360° avant de faire votre choix.
            </p>
            <p className="saison-showcase__sub">
              Faites ressentir l’ambiance, valorisez chaque espace et donnez envie de réserver avant même la première
              visite.
            </p>

            <div className="saison-showcase__actions">
              <a className="saison-showcase__cta" href={APP_URL} target="_blank" rel="noreferrer">
                Découvrir NovaTour <b aria-hidden="true">→</b>
              </a>
              <a className="saison-showcase__link" href="/contact">
                Vous êtes propriétaire ? Mettre mon logement en valeur <b aria-hidden="true">→</b>
              </a>
            </div>

            <p className="saison-showcase__trust">
              <ShieldCheck aria-hidden="true" />
              Une visite immersive créée pour inspirer confiance.
            </p>
          </div>

          <a
            className="saison-showcase__device"
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Ouvrir une visite immersive 360° dans l’application NovaTour"
          >
            <span className="saison-showcase__notch" aria-hidden="true" />
            <img src={cosyVisite.url} alt="Visite immersive 360° d’une location saisonnière dans l’application NovaTour" />
          </a>
        </div>
      </section>

      <section className="app-section section app-section--modern">
        <div className="app-copy">
          <p className="eyebrow">L’application web</p>
          <h2>
            NovaTour dans
            <br />
            votre <em>poche</em>
          </h2>
          <p>
            NovaTour est une application web : aucun téléchargement ni store. Ajoutez-la directement à l’écran d’accueil
            de votre téléphone et accédez aux visites comme dans une véritable application.
          </p>
          <ol className="install-steps">
            <li>
              <span>1</span>
              <p>
                <strong>Ouvrez NovaTour</strong> dans Safari sur iPhone ou Chrome sur Android.
              </p>
            </li>
            <li>
              <span>2</span>
              <p>
                <strong>Appuyez sur « Partager »</strong> ou ouvrez le menu de votre navigateur.
              </p>
            </li>
            <li>
              <span>3</span>
              <p>
                <strong>Choisissez « Ajouter à l’écran d’accueil »</strong> : l’icône NovaTour apparaît sur votre
                téléphone.
              </p>
            </li>
          </ol>
          <a className="app-start-button" href={APP_URL} target="_blank" rel="noreferrer">
            <span aria-hidden="true">▯</span>
            <small>Démarrer</small>
            <strong>Faire votre première recherche</strong>
            <b aria-hidden="true">→</b>
          </a>
        </div>

        <div className="app-install">
          <a
            className="app-notification"
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Découvrir les derniers partenaires NovaTour"
          >
            <img src="/novatour-logo.png" alt="" width="52" height="52" />
            <div>
              <strong>Profitez des derniers partenaires de NovaTour</strong>
              <p>Découvrez les nouveaux lieux qui rejoignent la plateforme près de chez vous.</p>
            </div>
          </a>

          <div className="scan-divider">
            <span>ou scannez</span>
          </div>

          <div className="qr-card">
            <p>Scanner pour ouvrir NovaTour</p>
            <a href={APP_URL} target="_blank" rel="noreferrer" aria-label="Ouvrir l’application NovaTour">
              <img
                src="/novatour-app-qr.png"
                alt="QR code permettant d’ouvrir l’application NovaTour"
                width="220"
                height="220"
              />
            </a>
            <strong>Pointez votre appareil photo</strong>
            <span>Le lien s’ouvre directement sur iOS et Android.</span>
          </div>
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
          <a href="https://www.facebook.com/p/NovaTour-61587281682477/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <p className="copyright">© 2026 NovaTour. Tous droits réservés.</p>
      </footer>
    </main>
  );
}