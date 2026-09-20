const STAYS_URL = "https://app.novatour.fr/?category=h%C3%A9bergements";

type FeaturedVisit = {
  alt: string;
  category: string;
  city: string;
  href: string;
  id: string;
  screenshot: string;
  title: string;
};

/**
 * Visites immersives mises en avant : captures mobiles réelles de
 * l'application NovaTour. Pour ajouter une location, déposer la capture
 * (format portrait) dans public/stays et compléter cette liste.
 */
const featuredVisits: FeaturedVisit[] = [
  {
    alt: "Visite immersive 360° du gîte de Jonquières : chambre lumineuse avec poutre apparente",
    category: "Gîte",
    city: "Jonquières",
    href: STAYS_URL,
    id: "jonquieres",
    screenshot: "/stays/jonquieres-chambre.webp",
    title: "Château de Jonquières",
  },
  {
    alt: "Visite immersive 360° de l’appartement Le Cosy : cuisine ouverte et mur bleu",
    category: "Appartement",
    city: "Narbonne",
    href: STAYS_URL,
    id: "le-cosy",
    screenshot: "/stays/le-cosy-mobile.webp",
    title: "Le Cosy",
  },
];

export function SeasonalStays() {
  return (
    <div className="stay-phones" aria-label="Locations saisonnières à visiter en immersion">
      {featuredVisits.map((visit, index) => (
        <a
          className={`stay-phone${index % 2 === 1 ? " stay-phone--offset" : ""}`}
          href={visit.href}
          key={visit.id}
          target="_blank"
          rel="noreferrer"
        >
          <span className="stay-phone__frame">
            <span className="stay-phone__notch" aria-hidden="true" />
            <img
              alt={visit.alt}
              className="stay-phone__screen"
              loading="lazy"
              src={visit.screenshot}
            />
          </span>
          <span className="stay-phone__caption">
            <small>
              {visit.category} · {visit.city}
            </small>
            <strong>{visit.title}</strong>
            <em>Visiter en 360° →</em>
          </span>
        </a>
      ))}
    </div>
  );
}
