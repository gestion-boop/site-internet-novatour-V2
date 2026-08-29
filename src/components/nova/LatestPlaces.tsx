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
    coverUrl: null,
    href: APP_URL,
    id: "fallback-restaurant",
    logoUrl: "/novatour-logo.png",
    title: "Saveurs d’Occitanie",
  },
  {
    category: "Hébergement",
    city: "Le Somail",
    coverUrl: null,
    href: APP_URL,
    id: "fallback-stay",
    logoUrl: "/novatour-logo.png",
    title: "Parenthèse au bord de l’eau",
  },
  {
    category: "À découvrir",
    city: "Narbonne-Plage",
    coverUrl: null,
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
        if (payload.places?.length === 3) {
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
      {places.map((place, index) => (
        <a
          className={`place-phone place-phone--${index + 1}`}
          href={place.href}
          key={place.id}
          target="_blank"
          rel="noreferrer"
        >
          <span className="place-phone__frame">
            <span className="place-phone__notch" aria-hidden="true" />
            <span className="place-phone__screen">
              <span
                className={`place-phone__cover${place.logoUrl ? " place-phone__cover--logo" : " place-phone__cover--empty"}`}
              >
                {place.logoUrl ? (
                  <img
                    alt={`Logo ${place.title}`}
                    className="place-phone__logo place-phone__logo--hero"
                    loading="lazy"
                    src={place.logoUrl}
                  />
                ) : (
                  <span className="place-phone__fallback-logo" aria-hidden="true">
                    N
                  </span>
                )}
                <span className="place-360">360°</span>
              </span>
              <span className="place-phone__body">
                <p>{place.category}</p>
                <h3>{place.title}</h3>
                <span className="place-phone__city">⌖ {place.city}</span>
                {place.description ? (
                  <span className="place-phone__desc">{place.description}</span>
                ) : null}
                <span className="place-phone__cta">Visiter en immersion</span>
              </span>
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
