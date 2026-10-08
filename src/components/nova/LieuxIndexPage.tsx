import { BedDouble, House, MapPin, Play, ShoppingBag, Utensils } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import type { Place } from "@/lib/novatour-places";

const familyIcons = {
  pro: House,
  restaurant: Utensils,
  shop: ShoppingBag,
  stay: BedDouble,
} as const;

export function LieuxIndexPage({ places }: { places: Place[] }) {
  return (
    <main className="lieux-page">
      <MotionEffects />
      <header className="site-header">
        <a className="brand" href="/#accueil" aria-label="NovaTour — accueil">
          <img src="/novatour-logo.png" alt="" width="58" height="58" />
          <span>NovaTour</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="/#accueil">Accueil</a>
          <a href="https://app.novatour.fr" target="_blank" rel="noreferrer">
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

      <div className="lieux-hero">
        <div className="lieux-hero__inner">
          <p className="eyebrow">NovaTour</p>
          <h1>Tous les lieux à visiter en 360°</h1>
          <p className="lieux-hero__lead">
            Restaurants, hébergements, commerces et professionnels d’Occitanie : parcourez chaque
            établissement en visite immersive avant même d’y mettre les pieds.
          </p>
        </div>
      </div>

      <div className="lieux-body">
        {places.length > 0 ? (
          <div className="lieux-grid">
            {places.map((place) => {
              const FamilyIcon = place.family ? familyIcons[place.family] : null;
              return (
                <a className="place-card" href={`/lieux/${place.slug}`} key={place.id}>
                  <figure className="place-card__media">
                    {place.coverUrl ? (
                      <img
                        alt=""
                        className="place-card__cover"
                        loading="lazy"
                        src={place.coverUrl}
                      />
                    ) : (
                      <span
                        className="place-card__cover place-card__cover--empty"
                        aria-hidden="true"
                      />
                    )}
                    <span className="place-card__badge">360°</span>
                    {place.logoUrl ? (
                      <img
                        alt={`Logo ${place.title}`}
                        className="place-card__logo"
                        loading="lazy"
                        src={place.logoUrl}
                      />
                    ) : null}
                    <span className="place-card__type">
                      {FamilyIcon ? <FamilyIcon aria-hidden="true" /> : null}
                      {place.category}
                    </span>
                  </figure>
                  <div className="place-card__body">
                    <h2 className="place-card__title">{place.title}</h2>
                    {place.description ? (
                      <p className="place-card__desc">{place.description}</p>
                    ) : null}
                    <div className="place-card__footer">
                      <span className="place-card__cta">
                        <Play aria-hidden="true" /> Démarrer la visite
                      </span>
                      <span className="place-card__location">
                        <MapPin aria-hidden="true" />
                        <span>{place.city}</span>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <p className="lieux-empty">
            Les lieux publiés sont momentanément indisponibles. Revenez bientôt, ou explorez-les
            directement sur{" "}
            <a href="https://app.novatour.fr" target="_blank" rel="noreferrer">
              NovaTour
            </a>
            .
          </p>
        )}
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
          <a href="https://app.novatour.fr" target="_blank" rel="noreferrer">
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
