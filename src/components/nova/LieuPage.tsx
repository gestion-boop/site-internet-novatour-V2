import { BedDouble, House, MapPin, Orbit, ShoppingBag, Utensils } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import type { Place } from "@/lib/novatour-places";

const APP_URL = "https://app.novatour.fr";

const familyIcons = {
  pro: House,
  restaurant: Utensils,
  shop: ShoppingBag,
  stay: BedDouble,
} as const;

export function LieuPage({ place }: { place: Place }) {
  const FamilyIcon = place.family ? familyIcons[place.family] : MapPin;

  return (
    <main className="lieu-page">
      <MotionEffects />
      <header className="site-header">
        <a className="brand" href="/#accueil" aria-label="NovaTour — accueil">
          <img src="/novatour-logo.png" alt="" width="58" height="58" />
          <span>NovaTour</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="/#accueil">Accueil</a>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Découvrir NovaTour
          </a>
          <a className="active" href="/lieux">
            Tous les lieux
          </a>
          <a href="https://www.novavisio.fr/#novatour" target="_blank" rel="noreferrer">
            Rejoignez-nous
          </a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a
            className="header-novavisio"
            href="https://www.novavisio.fr/#novatour"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/novavisio-logo.png" alt="" width="58" height="58" />
            <span>
              <strong>NovaVisio</strong>
              <small>Création immersive</small>
            </span>
          </a>
          <a className="header-cta" href="/offres#devis">
            Obtenir un devis
          </a>
        </div>
        <MobileMenu />
      </header>

      <div className="lieu-hero">
        <div className="lieu-hero__inner">
          <a className="lieu-breadcrumb" href="/lieux">
            ← Tous les lieux
          </a>
          <p className="eyebrow">
            <FamilyIcon aria-hidden="true" />
            {place.category}
          </p>
          <h1>{place.title}</h1>
          <p className="lieu-hero__city">
            <MapPin aria-hidden="true" /> {place.city}
          </p>
          <a
            className="button button-primary"
            href={place.tourHref}
            target="_blank"
            rel="noreferrer"
          >
            Visiter en immersion 360° <span aria-hidden="true">→</span>
          </a>
        </div>
        {place.coverUrl ? (
          <div className="lieu-hero__visual">
            <img src={place.coverUrl} alt="" loading="eager" />
          </div>
        ) : null}
      </div>

      <div className="lieu-body">
        <div className="lieu-description">
          <h2>À propos de {place.title}</h2>
          {place.description ? (
            <p>{place.description}</p>
          ) : (
            <p>
              {place.title} fait partie des lieux référencés gratuitement sur NovaTour. Explorez-en
              chaque espace en visite immersive à 360°, avant même d’y mettre les pieds.
            </p>
          )}
          <ul className="lieu-facts">
            <li>
              <FamilyIcon aria-hidden="true" />
              <div>
                <strong>Catégorie</strong>
                <span>{place.category}</span>
              </div>
            </li>
            <li>
              <MapPin aria-hidden="true" />
              <div>
                <strong>Localisation</strong>
                <span>{place.city}</span>
              </div>
            </li>
            <li>
              <Orbit aria-hidden="true" />
              <div>
                <strong>Visite 360°</strong>
                <span>Gratuite, sans inscription</span>
              </div>
            </li>
          </ul>
        </div>

        <aside className="lieu-panel">
          {place.coverUrl ? (
            <div className="lieu-panel__photo">
              <img src={place.coverUrl} alt="" loading="lazy" />
              {place.logoUrl ? (
                <span className="lieu-panel__logo">
                  <img src={place.logoUrl} alt="" loading="lazy" />
                </span>
              ) : null}
            </div>
          ) : place.logoUrl ? (
            <span className="lieu-panel__logo lieu-panel__logo--standalone">
              <img src={place.logoUrl} alt="" loading="lazy" />
            </span>
          ) : null}
          <div className="lieu-panel__body">
            <h3>Découvrez {place.title} comme si vous y étiez</h3>
            <p>
              Une visite immersive à 360°, créée par NovaVisio et diffusée gratuitement sur NovaTour
              : explorez chaque espace avant même de pousser la porte.
            </p>
            <a
              className="button button-primary lieu-panel__cta"
              href={place.tourHref}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir la visite 360° <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href={APP_URL} target="_blank" rel="noreferrer">
              Découvrir d’autres lieux sur NovaTour <span aria-hidden="true">→</span>
            </a>
          </div>
        </aside>
      </div>

      <footer id="contact">
        <div className="footer-brand">
          <a className="brand brand--footer" href="/#accueil">
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
          <a href="/#accueil">Accueil</a>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Découvrir
          </a>
          <a href="/lieux">Tous les lieux</a>
          <a href="/offres">Nos offres</a>
          <a href="/#partenaire">Devenir partenaire</a>
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
          <div className="footer-social">
            <a
              className="footer-social__link"
              href="https://www.instagram.com/novatour.fr/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              className="footer-social__link"
              href="https://www.facebook.com/p/NovaTour-61587281682477/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              className="footer-social__link"
              href="https://fr.linkedin.com/showcase/novatournarbonne/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2026 NovaTour. Tous droits réservés.</p>
          <a
            className="footer-village"
            href="https://www.villagebyca.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/partners/village-by-ca.png"
              alt="Le Village by CA — 1er accélérateur en Europe"
              width="77"
              height="30"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
