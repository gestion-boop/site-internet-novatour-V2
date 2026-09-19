import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const APP_URL = "https://app.novatour.fr";

type Tour = {
  alt: string;
  city: string;
  href: string;
  id: string;
  image: string;
  kind: string;
  title: string;
};

/** Aperçus 360° réels : captures de l'application NovaTour. */
const tours: Tour[] = [
  {
    alt: "Cuisine ouverte de l’appartement Le Cosy en visite 360°",
    city: "Narbonne",
    href: APP_URL,
    id: "le-cosy",
    image: "/stays/le-cosy-cuisine.webp",
    kind: "Appartement",
    title: "Le Cosy",
  },
  {
    alt: "Chambre du gîte de Jonquières en visite 360°",
    city: "Jonquières",
    href: APP_URL,
    id: "jonquieres",
    image: "/stays/jonquieres-chambre.webp",
    kind: "Gîte et chambres d’hôtes",
    title: "Château de Jonquières",
  },
];

export function TourPreview() {
  const [index, setIndex] = useState(0);
  const tour = tours[index];
  const go = (delta: number) =>
    setIndex((current) => (current + delta + tours.length) % tours.length);

  return (
    <div className="tour-preview" aria-label="Aperçu d’une visite immersive 360°">
      <div className="tour-preview__bar">
        <span className="tour-preview__live">
          <span className="tour-preview__dot" aria-hidden="true" />
          Aperçu 360°
        </span>
        <span className="tour-preview__count">
          {index + 1} / {tours.length}
        </span>
      </div>

      <div className="tour-preview__stage">
        <img alt={tour.alt} className="tour-preview__image" key={tour.id} src={tour.image} />
        <span className="tour-preview__place">
          <MapPin aria-hidden="true" />
          {tour.city} · {tour.kind}
        </span>
        <a className="tour-preview__open" href={tour.href} target="_blank" rel="noreferrer">
          <span className="tour-preview__hotspot" aria-hidden="true">
            360°
          </span>
          Ouvrir la visite
        </a>
      </div>

      <div className="tour-preview__foot">
        <div>
          <strong>{tour.title}</strong>
          <span>Visite immersive dans l’application NovaTour</span>
        </div>
        <div className="tour-preview__nav">
          <button type="button" onClick={() => go(-1)} aria-label="Visite précédente">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Visite suivante">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
