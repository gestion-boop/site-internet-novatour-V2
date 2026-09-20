import { useState } from "react";
import { Building2, Hotel, Store } from "lucide-react";

const plans = [
  { id: "statique", name: "Statique" },
  { id: "dynamique", name: "Dynamique" },
  { id: "premium", name: "Premium" },
];

const sizes = [
  {
    id: "0–25 m²",
    icon: Store,
    detail: "Bar, kiosque, boutique ou petit salon.",
  },
  {
    id: "25–50 m²",
    icon: Building2,
    detail: "Restaurant, salon, salle de sport ou espace moyen.",
  },
  {
    id: "+ de 50 m²",
    icon: Hotel,
    detail: "Hôtel, domaine, réception ou espace événementiel.",
  },
];

export function OffersSelector() {
  const [plan, setPlan] = useState("Dynamique");
  const [size, setSize] = useState("25–50 m²");

  const chooseSize = (name: string) => {
    setSize(name);
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
