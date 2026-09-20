import { useState } from "react";
import { Building2, Hotel, Store } from "lucide-react";

type PlanFeature = { title: string; detail?: string; included?: boolean };

const plans: {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  description: string;
  features: PlanFeature[];
}[] = [
  {
    id: "statique",
    name: "Statique",
    price: "9,90€",
    description: "L’essentiel pour présenter votre activité et être trouvable.",
    features: [
      { title: "Visite 360° jusqu’à 8 espaces capturés" },
      { title: "5 points d’interaction intégrés" },
      { title: "Plan interactif intégré" },
      { title: "5 fichiers PDF intégrés" },
      { title: "Charte graphique personnalisée" },
    ],
  },
  {
    id: "dynamique",
    name: "Dynamique",
    price: "19,90€",
    popular: true,
    description: "Le plan interactif et la visite jour & nuit pour une immersion complète.",
    features: [
      { title: "Toute l’offre Statique", detail: "Inclut tous les services de l’offre Statique" },
      {
        title: "Visite 360° jusqu’à 20 espaces capturés",
        detail: "Deux fois plus de pièces ou zones filmées qu’en Statique",
      },
      {
        title: "Liens de redirection illimités",
        detail: "Contact, réservation, réseaux sociaux, menu en ligne…",
      },
      {
        title: "Visite jour & nuit",
        detail: "Basculez entre deux ambiances lumineuses depuis la même visite 360°",
      },
      {
        title: "Ajout de 2 vidéos",
        detail: "Vidéos d’ambiance intégrées directement dans la visite",
      },
      {
        title: "Intégration de 10 PDF",
        detail: "Le double de documents consultables par rapport à l’offre Statique",
      },
      {
        title: "2 mises à jour par an",
        detail: "NovaVisio revient actualiser votre visite virtuelle deux fois par an",
      },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "24,90€",
    description: "L’expérience complète pour une activité qui se démarque vraiment.",
    features: [
      { title: "Toute l’offre Dynamique", detail: "Inclut tous les services de l’offre Dynamique" },
      { title: "Visite 360° illimitée", detail: "Autant d’espaces que nécessaire, sans limite" },
      {
        title: "Visite jour & nuit incluse",
        detail: "Les deux ambiances lumineuses, comprises dans l’offre",
      },
      {
        title: "Vidéos illimitées",
        detail: "Ajoutez autant de vidéos d’ambiance que vous le souhaitez",
      },
      { title: "PDF illimités", detail: "Programmes, brochures, tarifs… sans limite de documents" },
      {
        title: "Mises à jour illimitées",
        detail: "Modifications traitées en priorité par notre équipe",
      },
      {
        title: "Référencement renforcé",
        detail: "Position mise en avant dans les résultats de recherche",
      },
      {
        title: "Accompagnement personnalisé",
        detail: "Un conseiller NovaVisio dédié pour optimiser votre visite",
      },
    ],
  },
];

const sizes = [
  {
    id: "0–25 m²",
    price: "208 € HT",
    icon: Store,
    detail: "Bar, kiosque, boutique ou petit salon.",
  },
  {
    id: "25–50 m²",
    price: "333,33 € HT",
    icon: Building2,
    detail: "Restaurant, salon, salle de sport ou espace moyen.",
  },
  {
    id: "+ de 50 m²",
    price: "Sur devis",
    icon: Hotel,
    detail: "Hôtel, domaine, réception ou espace événementiel.",
  },
];

export function OffersSelector() {
  const [plan, setPlan] = useState("Dynamique");
  const [size, setSize] = useState("25–50 m²");

  const choosePlan = (name: string) => {
    setPlan(name);
    document.getElementById("taille-lieu")?.scrollIntoView({ behavior: "smooth" });
  };

  const chooseSize = (name: string) => {
    setSize(name);
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="pricing-section snap-section" aria-labelledby="pricing-title">
        <div className="offers-section-heading">
          <p className="eyebrow">
            Solutions de visibilité <span className="novavisio-accent">NovaVisio</span>
          </p>
          <h2 id="pricing-title">Une solution claire pour chaque ambition</h2>
          <p>
            <span className="novavisio-accent">
              Ces tarifs concernent les services professionnels conçus par NovaVisio.
            </span>{" "}
            L’accès à NovaTour reste gratuit pour les visiteurs.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((item) => (
            <article
              className={`pricing-card${item.popular ? " pricing-card--popular" : ""}`}
              id={item.id}
              key={item.id}
            >
              {item.popular && <div className="popular-label">Le plus populaire</div>}
              <div className="pricing-card-head">
                <h3>{item.name}</h3>
                <p>
                  <strong>{item.price}</strong>
                  <span>
                    HT
                    <br />
                    /mois
                  </span>
                </p>
                <em>{item.description}</em>
              </div>
              <ul>
                {item.features.map(({ title, detail, included = true }) => (
                  <li className={included ? undefined : "is-excluded"} key={title}>
                    <span>{included ? "✓" : "×"}</span>
                    <div>
                      <strong>{title}</strong>
                      {detail ? <small>{detail}</small> : null}
                    </div>
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => choosePlan(item.name)}>
                Choisir {item.name}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        className="venue-size-section snap-section"
        id="taille-lieu"
        aria-labelledby="venue-title"
      >
        <div className="offers-section-heading">
          <p className="eyebrow">Créer votre visite virtuelle</p>
          <h2 id="venue-title">Quelle est la taille de votre lieu ?</h2>
          <p>
            <span className="novavisio-accent">
              La visite 360° est réalisée par NovaVisio directement chez vous.
            </span>{" "}
            La taille détermine la formule adaptée.
          </p>
        </div>
        <div className="size-grid">
          {sizes.map((item) => (
            <button
              className={size === item.id ? "is-selected" : ""}
              type="button"
              key={item.id}
              onClick={() => chooseSize(item.id)}
            >
              <span>
                <item.icon aria-hidden="true" />
              </span>
              <h3>{item.id}</h3>
              <strong>{item.price}</strong>
              <p>{item.detail}</p>
              <b>Choisir cette formule →</b>
            </button>
          ))}
        </div>
        <p className="venue-note">
          ⓘ <span className="novavisio-accent">Créée par NovaVisio,</span> votre fiche est ensuite
          diffusée sur NovaTour sous 48h.
        </p>
      </section>

      <section className="quote-section snap-section" id="devis" aria-labelledby="quote-title">
        <div className="quote-copy">
          <p className="eyebrow">Votre projet commence ici</p>
          <h2 id="quote-title">Natacha vous rappelle</h2>
          <p>
            Indiquez vos coordonnées.{" "}
            <span className="novavisio-accent">Natacha, de l’équipe NovaVisio,</span> vous
            contactera pour comprendre votre activité, confirmer la solution et organiser la prise
            de vue.
          </p>
          <div className="quote-selection">
            <p className="quote-selection__summary">
              Votre sélection : <strong>{plan}</strong>
              <span aria-hidden="true">·</span>
              <strong>{size}</strong>
            </p>
            <div className="quote-picker">
              <span className="quote-picker__label">Offre choisie</span>
              <div className="quote-picker__options" role="group" aria-label="Offre choisie">
                {plans.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={plan === item.name ? "is-active" : ""}
                    aria-pressed={plan === item.name}
                    onClick={() => setPlan(item.name)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="quote-picker">
              <span className="quote-picker__label">Taille du lieu</span>
              <div className="quote-picker__options" role="group" aria-label="Taille du lieu">
                {sizes.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={size === item.id ? "is-active" : ""}
                    aria-pressed={size === item.id}
                    onClick={() => setSize(item.id)}
                  >
                    {item.id}
                  </button>
                ))}
              </div>
            </div>
            <p className="quote-picker__hint">
              Vous pouvez modifier votre choix ici avant d’envoyer la demande.
            </p>
          </div>

          <a href="tel:+33630310065">Ou appelez directement le 06 30 31 00 65</a>
        </div>
        <form
          className="quote-form"
          action="https://formsubmit.co/natacha.jaillet@novavisio.fr"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Demande de devis NovaVisio — diffusion NovaTour"
          />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="Offre sélectionnée" value={plan} />
          <input type="hidden" name="Taille du lieu" value={size} />
          <input
            type="hidden"
            name="_next"
            value="https://novatour.fr/offres?demande=envoyee#devis"
          />
          <input
            className="form-honeypot"
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
          />
          <label>
            <span>Nom complet *</span>
            <input name="Nom complet" required autoComplete="name" placeholder="Marie Dupont" />
          </label>
          <label>
            <span>Entreprise *</span>
            <input
              name="Entreprise"
              required
              autoComplete="organization"
              placeholder="Nom de votre établissement"
            />
          </label>
          <label>
            <span>Téléphone *</span>
            <input
              name="Téléphone"
              required
              type="tel"
              autoComplete="tel"
              placeholder="06 12 34 56 78"
            />
          </label>
          <label>
            <span>Email *</span>
            <input
              name="email"
              required
              type="email"
              autoComplete="email"
              placeholder="marie@exemple.fr"
            />
          </label>
          <label className="quote-message">
            <span>Votre projet</span>
            <textarea name="Projet" placeholder="Parlez-nous brièvement de votre lieu…" />
          </label>
          <label className="quote-consent">
            <input type="checkbox" required name="Consentement" value="Accepté" />
            <span>
              J’accepte d’être recontacté(e) par l’équipe{" "}
              <b className="novavisio-accent">NovaVisio</b> au sujet de ma demande.
            </span>
          </label>
          <button className="button button-primary" type="submit">
            Demander à être rappelé(e) <span>→</span>
          </button>
        </form>
      </section>
    </>
  );
}
