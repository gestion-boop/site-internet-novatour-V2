import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const APP_URL = "https://app.novatour.fr";
const AUTOPLAY_DELAY = 20000;

type Tour = {
  alt: string;
  city: string;
  href: string;
  id: string;
  image: string;
  kind: string;
  title: string;
};

/** Aperçus 360° : un exemple par type de lieu, pour montrer la diversité de NovaTour. */
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
    alt: "Terrasse ombragée du restaurant La Cascade de Moussan en visite 360°",
    city: "Moussan",
    href: "https://app.novatour.fr/place/la-cascade-de-moussan?category=se+restaurer&id=84f25fd1-8892-498e-aeda-d0c7f3480753",
    id: "cascade-de-moussan",
    image: "/stays/cascade-de-moussan-terrasse.webp",
    kind: "Restaurant",
    title: "La Cascade de Moussan",
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
  {
    alt: "Salon voûté de l’agence ImmoSphera en visite 360°",
    city: "Narbonne",
    href: "https://app.novatour.fr/place/agence-immosphera?category=professionnels&id=36246b5e-be3e-41a8-8de5-13823d06ac94",
    id: "immosphera",
    image: "/stays/immosphera-salon.webp",
    kind: "Professionnels",
    title: "ImmoSphera",
  },
];

export function TourPreview({ onTourChange }: { onTourChange?: (tour: Tour) => void }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const tour = tours[index];

  const remainingRef = useRef(AUTOPLAY_DELAY);
  const startRef = useRef(0);

  const go = (delta: number) => {
    remainingRef.current = AUTOPLAY_DELAY;
    setIndex((current) => (current + delta + tours.length) % tours.length);
  };

  useEffect(() => {
    if (paused) {
      remainingRef.current -= Date.now() - startRef.current;
      return;
    }

    startRef.current = Date.now();
    const timer = window.setTimeout(() => {
      remainingRef.current = AUTOPLAY_DELAY;
      setIndex((current) => (current + 1) % tours.length);
    }, remainingRef.current);
    return () => window.clearTimeout(timer);
  }, [paused, index]);

  useEffect(() => {
    onTourChange?.(tour);
    // onTourChange identity isn't expected to change across renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tour]);

  return (
    <div
      className="tour-preview"
      aria-label="Aperçu d’une visite immersive 360°"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="tour-preview__bar">
        <span className="tour-preview__live">
          <span className="tour-preview__dot" aria-hidden="true" />
          Aperçu 360°
        </span>
        <span className="tour-preview__count">
          {index + 1} / {tours.length}
          <span className="tour-preview__clock" aria-hidden="true" key={index}>
            <span className={`tour-preview__clock-hand${paused ? " is-paused" : ""}`} />
          </span>
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
