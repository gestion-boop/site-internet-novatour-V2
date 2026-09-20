const APP_URL = "https://app.novatour.fr";

type Partner = {
  alt: string;
  href: string;
  id: string;
  logo: string;
  name: string;
};

const partners: Partner[] = [
  {
    alt: "Ariya — Bien-être et tradition",
    href: APP_URL,
    id: "ariya",
    logo: "/partners/ariya.webp",
    name: "Ariya",
  },
  { alt: "Mioza", href: APP_URL, id: "mioza", logo: "/partners/mioza.webp", name: "Mioza" },
  {
    alt: "Groupe Alternance Narbonne — L’école supérieure de l’alternance",
    href: APP_URL,
    id: "groupe-alternance",
    logo: "/partners/groupe-alternance.webp",
    name: "Groupe Alternance Narbonne",
  },
  {
    alt: "Le Fauteuil by Sylvie",
    href: APP_URL,
    id: "le-fauteuil",
    logo: "/partners/le-fauteuil.webp",
    name: "Le Fauteuil by Sylvie",
  },
  { alt: "Gaïa", href: APP_URL, id: "gaia", logo: "/partners/gaia.webp", name: "Gaïa" },
];

/** Doublé pour un défilement en boucle continue et sans coupure. */
const loop = [...partners, ...partners];

export function TrustedPartners() {
  return (
    <section className="trusted-partners section" aria-labelledby="trusted-title">
      <div className="trusted-partners__heading">
        <p className="eyebrow">Ils nous font confiance</p>
        <h2 id="trusted-title">Déjà présents sur NovaTour</h2>
      </div>

      <div className="trusted-partners__track" aria-hidden="true">
        <div className="trusted-partners__scroller">
          {loop.map((partner, index) => (
            <a
              className="trusted-partners__logo"
              href={partner.href}
              key={`${partner.id}-${index}`}
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
