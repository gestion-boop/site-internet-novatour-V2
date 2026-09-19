import { useEffect, useState } from "react";

const STAYS_URL = "https://app.novatour.fr/?category=h%C3%A9bergements";

type Stay = {
  category: string;
  city: string;
  coverUrl: string | null;
  href: string;
  id: string;
  title: string;
};

const fallbackStays: Stay[] = [
  {
    category: "Maison de vacances",
    city: "Le Somail",
    coverUrl: "/occitanie-village.png",
    href: STAYS_URL,
    id: "fallback-stay-village",
    title: "Maison de village au bord du canal",
  },
  {
    category: "Appartement",
    city: "Narbonne-Plage",
    coverUrl: "/occitanie-marina.png",
    href: STAYS_URL,
    id: "fallback-stay-marina",
    title: "Appartement vue sur le port",
  },
  {
    category: "Gîte",
    city: "Narbonne",
    coverUrl: "/occitanie-restaurant.png",
    href: STAYS_URL,
    id: "fallback-stay-mas",
    title: "Mas avec terrasse sur les vignes",
  },
];

/**
 * Locations saisonnières visibles sur NovaTour : les derniers hébergements
 * publiés (famille « stay » côté API), avec repli sur des visuels locaux.
 */
export function SeasonalStays() {
  const [stays, setStays] = useState(fallbackStays);

  useEffect(() => {
    const controller = new AbortController();

    async function refreshStays() {
      try {
        const response = await fetch(`/api/latest-places?family=stay&limit=3&t=${Date.now()}`, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) return;

        const payload = (await response.json()) as { places?: Stay[] };
        if (payload.places && payload.places.length > 0) {
          setStays(payload.places);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("[NovaTour] Impossible d’actualiser les locations", error);
        }
      }
    }

    void refreshStays();

    return () => controller.abort();
  }, []);

  return (
    <div className="stay-gallery" aria-label="Locations saisonnières à visiter en immersion">
      {stays.map((stay) => (
        <a className="stay-card" href={stay.href} key={stay.id} target="_blank" rel="noreferrer">
          {stay.coverUrl ? (
            <img alt="" className="stay-card__cover" loading="lazy" src={stay.coverUrl} />
          ) : (
            <span className="stay-card__cover stay-card__cover--empty" aria-hidden="true" />
          )}
          <span className="stay-card__badge">Visite 360°</span>
          <span className="stay-card__body">
            <small>
              {stay.category} · {stay.city}
            </small>
            <strong>{stay.title}</strong>
          </span>
        </a>
      ))}
    </div>
  );
}
