import { useEffect, useState } from "react";

type Partner = {
  alt: string;
  href: string;
  id: string;
  logo: string;
  name: string;
};

/** Ambiance en fond : un aperçu des univers présents sur NovaTour. */
const backdrops = [
  "/stays/le-cosy-cuisine.webp",
  "/stays/cascade-de-moussan-terrasse.webp",
  "/narbonne-canal.webp",
  "/stays/jonquieres-chambre.webp",
];

const BACKDROP_DELAY = 5000;

const partners: Partner[] = [
  {
    alt: "Ariya — Bien-être et tradition",
    href: "https://app.novatour.fr/place/ariya-bien-etre-et-tradition?category=commerces&id=bcaf93c6-4286-4434-811e-862c09d70265",
    id: "ariya",
    logo: "/partners/ariya.webp",
    name: "Ariya",
  },
  {
    alt: "Mioza",
    href: "https://app.novatour.fr/place/mioza?category=se+restaurer&id=0dc5f97b-a944-4f40-8a0e-13168091e15e",
    id: "mioza",
    logo: "/partners/mioza.webp",
    name: "Mioza",
  },
  {
    alt: "Groupe Alternance Narbonne — L’école supérieure de l’alternance",
    href: "https://app.novatour.fr/place/groupe-alternance?category=professionnels&id=52dc7e95-3fc0-41b2-ba7f-39b89aba3cd2",
    id: "groupe-alternance",
    logo: "/partners/groupe-alternance.webp",
    name: "Groupe Alternance Narbonne",
  },
  {
    alt: "Le Fauteuil by Sylvie",
    href: "https://app.novatour.fr/place/le-fauteuil-by-sylvie?category=commerces&id=91ea043a-16b1-4174-9a85-182ad291a142",
    id: "le-fauteuil",
    logo: "/partners/le-fauteuil.webp",
    name: "Le Fauteuil by Sylvie",
  },
  {
    alt: "Gaïa",
    href: "https://app.novatour.fr/place/gaia?category=se+restaurer&id=a092f0f6-e198-4c1a-a8da-25173fd67f66",
    id: "gaia",
    logo: "/partners/gaia.webp",
    name: "Gaïa",
  },
  {
    alt: "ImmoSphera — Visitez autrement",
    href: "https://app.novatour.fr/place/agence-immosphera?category=professionnels&id=36246b5e-be3e-41a8-8de5-13823d06ac94",
    id: "immosphera",
    logo: "/partners/immosphera.webp",
    name: "ImmoSphera",
  },
  {
    alt: "Arc en Ciel — Mobilier & décoration",
    href: "https://app.novatour.fr/place/arc-en-ciel?category=commerces&id=21fe6bb0-7524-48f9-9d35-2c26f4617003",
    id: "arc-en-ciel",
    logo: "/partners/arc-en-ciel.webp",
    name: "Arc en Ciel",
  },
  {
    alt: "Indian Flame",
    href: "https://app.novatour.fr/place/indian-flame?category=se+restaurer&id=8e8a87ee-50f6-47a1-9f29-c7d99714d04e",
    id: "indian-flame",
    logo: "/partners/indian-flame.webp",
    name: "Indian Flame",
  },
  {
    alt: "WAW! — Work Another Way",
    href: "https://app.novatour.fr/place/le-waw-coworking?category=professionnels&id=cee17d8b-1274-4ef9-9251-d781539a820c",
    id: "waw",
    logo: "/partners/waw.webp",
    name: "WAW!",
  },
  {
    alt: "Le Cosy",
    href: "https://app.novatour.fr/place/le-cosy?category=h%C3%A9bergements&search=cosy&id=1d274a97-8e90-42c6-897f-a0928301562c",
    id: "le-cosy",
    logo: "/partners/le-cosy.webp",
    name: "Le Cosy",
  },
  {
    alt: "Le Bali",
    href: "https://app.novatour.fr/place/le-bali?category=h%C3%A9bergements&id=67290063-bf83-4a4f-874d-c1730203eff4",
    id: "le-bali",
    logo: "/partners/le-bali.webp",
    name: "Le Bali",
  },
];

/** Doublé pour un défilement en boucle continue et sans coupure. */
const loop = [...partners, ...partners];

export function TrustedPartners() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % backdrops.length);
    }, BACKDROP_DELAY);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="trusted-partners section" aria-labelledby="trusted-title">
      <div className="trusted-partners__bg" aria-hidden="true">
        {backdrops.map((src, i) => (
          <img
            className={`trusted-partners__bg-image${i === index ? " is-active" : ""}`}
            key={src}
            src={src}
            alt=""
            loading="lazy"
          />
        ))}
        <span className="trusted-partners__veil" />
      </div>

      <div className="trusted-partners__heading">
        <p className="eyebrow">Ils nous font confiance</p>
        <h2 id="trusted-title">Déjà présents sur NovaTour</h2>
      </div>

      <div className="trusted-partners__track" aria-hidden="true">
        <div className="trusted-partners__scroller">
          {loop.map((partner, loopIndex) => (
            <a
              className="trusted-partners__logo"
              href={partner.href}
              key={`${partner.id}-${loopIndex}`}
              target="_blank"
              rel="noreferrer"
              tabIndex={-1}
            >
              <img src={partner.logo} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </div>

      <ul className="trusted-partners__list sr-only">
        {partners.map((partner) => (
          <li key={partner.id}>
            <a href={partner.href} target="_blank" rel="noreferrer">
              {partner.alt} — visiter en immersion sur NovaTour
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
