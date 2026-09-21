import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";
import { useEffect, useState } from "react";

const APP_URL = "https://app.novatour.fr";
const CONTACT_EMAIL = "natacha.jaillet@novavisio.fr";
const FORM_SUBMIT_ACTION = "https://formsubmit.co/natacha.jaillet@novavisio.fr";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    project: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.has("envoye")) {
      setSubmitted(true);
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim()) next.fullName = "Veuillez indiquer votre nom complet.";
    if (!formData.company.trim()) next.company = "Veuillez indiquer le nom de votre établissement.";
    if (!formData.phone.trim()) {
      next.phone = "Veuillez indiquer votre numéro de téléphone.";
    } else if (!/^\+?[\d\s\-]{8,20}$/.test(formData.phone.replace(/\s/g, ""))) {
      next.phone = "Veuillez saisir un numéro de téléphone valide.";
    }
    if (!formData.email.trim()) {
      next.email = "Veuillez indiquer votre adresse email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Veuillez saisir une adresse email valide.";
    }
    if (!formData.consent) next.consent = "Veuillez accepter d’être recontacté(e).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    e.currentTarget.submit();
  };

  const updateField = (field: keyof typeof formData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <main className="contact-page">
      <MotionEffects />
      <header className="site-header contact-site-header">
        <a className="brand" href="/#accueil" aria-label="NovaTour — accueil">
          <img src="/novatour-logo.png" alt="" width="58" height="58" />
          <span>NovaTour</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="/#accueil">Accueil</a>
          <a href={APP_URL} target="_blank" rel="noreferrer">
            Découvrir NovaTour
          </a>
          <a href="/offres">Rejoignez-nous</a>
          <a className="active" href="/contact">
            Contact
          </a>
        </nav>
        <a className="header-cta" href="/offres#devis">
          Obtenir un devis
        </a>
        <MobileMenu />
      </header>

      <section className="contact-hero-section">
        <div className="contact-heading">
          <p className="eyebrow">Une question, un projet, un lieu à valoriser ?</p>
          <h1>Besoin d’une information ? On vous rappelle.</h1>
          <p>
            Remplissez le formulaire ci-dessous. L’équipe NovaVisio vous recontacte sous 24h ouvrées
            pour échanger sur votre besoin et vous guider vers la solution adaptée.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h2>Message bien envoyé</h2>
                <p>
                  Merci {formData.fullName.trim() || ""}, l’équipe NovaVisio a bien reçu votre
                  demande. Nous vous rappellerons très prochainement au {formData.phone.trim()}.
                </p>
                <a className="button button-primary" href="/offres">
                  Découvrir nos offres
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action={FORM_SUBMIT_ACTION} method="POST" noValidate>
                <input type="hidden" name="_subject" value="Demande de contact — NovaTour" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://novatour.fr/contact?envoye=1" />
                <input
                  className="form-honeypot"
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="form-grid">
                  <label>
                    <span>
                      Nom complet <b>*</b>
                    </span>
                    <input
                      type="text"
                      name="Nom complet"
                      placeholder="Marie Dupont"
                      value={formData.fullName}
                      required
                      onChange={(e) => updateField("fullName", e.target.value)}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "error-fullName" : undefined}
                    />
                    {errors.fullName && (
                      <span id="error-fullName" className="form-error" role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </label>

                  <label>
                    <span>
                      Entreprise <b>*</b>
                    </span>
                    <input
                      type="text"
                      name="Entreprise"
                      placeholder="Nom de votre établissement"
                      value={formData.company}
                      required
                      onChange={(e) => updateField("company", e.target.value)}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? "error-company" : undefined}
                    />
                    {errors.company && (
                      <span id="error-company" className="form-error" role="alert">
                        {errors.company}
                      </span>
                    )}
                  </label>

                  <label>
                    <span>
                      Téléphone <b>*</b>
                    </span>
                    <input
                      type="tel"
                      name="Téléphone"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      required
                      onChange={(e) => updateField("phone", e.target.value)}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "error-phone" : undefined}
                    />
                    {errors.phone && (
                      <span id="error-phone" className="form-error" role="alert">
                        {errors.phone}
                      </span>
                    )}
                  </label>

                  <label>
                    <span>
                      Email <b>*</b>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="marie@exemple.fr"
                      value={formData.email}
                      required
                      onChange={(e) => updateField("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : undefined}
                    />
                    {errors.email && (
                      <span id="error-email" className="form-error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </label>

                  <label className="form-message">
                    <span>Votre projet</span>
                    <textarea
                      name="Projet"
                      placeholder="Parlez-nous brièvement de votre lieu..."
                      value={formData.project}
                      onChange={(e) => updateField("project", e.target.value)}
                      rows={4}
                    />
                  </label>
                </div>

                <div className={`consent ${errors.consent ? "consent--error" : ""}`}>
                  <input
                    type="checkbox"
                    id="contact-consent"
                    name="Consentement"
                    value="Accepté"
                    checked={formData.consent}
                    required
                    onChange={(e) => updateField("consent", e.target.checked)}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "error-consent" : undefined}
                  />
                  <label htmlFor="contact-consent">
                    J’accepte d’être recontacté(e) par l’équipe <strong>NovaVisio</strong> au sujet
                    de ma demande.
                    {errors.consent && (
                      <span id="error-consent" className="form-error" role="alert">
                        {errors.consent}
                      </span>
                    )}
                  </label>
                </div>

                <button className="button button-primary form-submit" type="submit">
                  Demander à être rappelé(e) <span>→</span>
                </button>
              </form>
            )}
          </div>

          <aside className="contact-details">
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                ☎
              </div>
              <span>
                <small>Commercial</small>
                <a href="tel:+33630310065">06 30 31 00 65</a>
              </span>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                ✉
              </div>
              <span>
                <small>Email</small>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </span>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                ⌖
              </div>
              <span>
                <small>Adresse</small>
                <span>19 Rue du Luxembourg, 11100 Narbonne</span>
              </span>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                ◎
              </div>
              <span>
                <small>Réseaux</small>
                <span>@novatour.fr sur Instagram, Facebook, LinkedIn</span>
              </span>
            </div>
          </aside>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <a className="brand brand--footer" href="/#accueil">
            <img src="/novatour-logo.png" alt="" width="54" height="54" />
            <span>NovaTour</span>
          </a>
          <p>
            La plateforme gratuite de découverte conçue par{" "}
            <a
              className="novavisio-accent"
              href="https://www.novavisio.fr/"
              target="_blank"
              rel="noreferrer"
            >
              NovaVisio
            </a>
            .
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <a href="/#accueil">Accueil</a>
          <a href="/offres">Nos offres</a>
          <a href="/#partenaire">Devenir partenaire</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            19 Rue du Luxembourg
            <br />
            11100 Narbonne
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
        <div>
          <h3>Commercial</h3>
          <p>Natacha Jaillet</p>
          <a href="tel:+33630310065">06 30 31 00 65</a>
        </div>
        <p className="copyright">© 2026 NovaTour. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
