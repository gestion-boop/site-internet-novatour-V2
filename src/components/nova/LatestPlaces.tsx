import { useEffect, useState } from "react";

const APP_URL = "https://app.novatour.fr";

type FeaturedPlace = {
  category: string;
  city: string;
  coverUrl: string | null;
  description?: string | null;
  href: string;
  id: string;
  logoUrl?: string | null;
  title: string;
};

const fallbackPlaces: FeaturedPlace[] = [
  {
    category: "Se restaurer",
    city: "Narbonne",
    coverUrl: "/occitanie-restaurant.png",
    href: APP_URL,
    id: "fallback-restaurant",
    logoUrl: "/novatour-logo.png",
    title: "Saveurs d’Occitanie",
  },
  {
    category: "Hébergement",
    city: "Le Somail",
    coverUrl: "/occitanie-village.png",
    href: APP_URL,
    id: "fallback-stay",
    logoUrl: "/novatour-logo.png",
    title: "Parenthèse au bord de l’eau",
  },
  {
    category: "À découvrir",
    city: "Narbonne-Plage",
    coverUrl: "/occitanie-marina.png",
    href: APP_URL,
    id: "fallback-coast",
    logoUrl: "/novatour-logo.png",
    title: "Escapade sur le littoral",
  },
];

export function LatestPlaces() {
  const [places, setPlaces] = useState(fallbackPlaces);

  useEffect(() => {
    const controller = new AbortController();

    async function refreshPlaces() {
      try {
        const response = await fetch(`/api/latest-places?t=${Date.now()}`, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const payload = (await response.json()) as { places?: FeaturedPlace[] };
        if (payload.places && payload.places.length > 0) {
          setPlaces(payload.places);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("[NovaTour] Impossible d’actualiser les nouveautés", error);
        }
      }
    }

    void refreshPlaces();

    // Re-synchronise dès que l'onglet redevient actif : les mises à jour faites
    // côté back-office NovaTour apparaissent sans avoir à vider le cache.
    const onVisible = () => {
      if (document.visibilityState === "visible") void refreshPlaces();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);

    return () => {
      controller.abort();
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, []);

  return (
    <div className="places-grid" aria-live="polite">
      {places.map((place) => (
        <a className="place-card" href={place.href} key={place.id} target="_blank" rel="noreferrer">
          <figure className="place-card__media">
            {place.coverUrl ? (
              <img alt="" className="place-card__cover" loading="lazy" src={place.coverUrl} />
            ) : (
              <span className="place-card__cover place-card__cover--empty" aria-hidden="true" />
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
          </figure>
          <div className="place-card__body">
            <p className="place-card__category">{place.category}</p>
            <h3 className="place-card__title">{place.title}</h3>
            <p className="place-card__city">{place.city}</p>
            {place.description ? <p className="place-card__desc">{place.description}</p> : null}
            <span className="place-card__cta">
              Visiter en immersion <span aria-hidden="true">→</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
