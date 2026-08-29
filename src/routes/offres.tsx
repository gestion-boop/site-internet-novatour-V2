import { createFileRoute } from "@tanstack/react-router";
import { OffersPage } from "@/components/nova/OffersPage";

const TITLE = "Nos offres — NovaTour & NovaVisio";
const DESCRIPTION =
  "Solutions professionnelles NovaVisio : visites immersives 360°, référencement local et diffusion gratuite de votre établissement sur NovaTour.";
const URL = "https://novatour.fr/offres";
const SOCIAL_IMAGE = "https://novatour.fr/hero-occitanie.png";

export const Route = createFileRoute("/offres")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:site_name", content: "NovaTour" },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:alt", content: "Les offres professionnelles NovaTour et NovaVisio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "NovaVisio — Visites immersives 360°",
          serviceType: "Visite virtuelle 360° et référencement local",
          provider: { "@type": "Organization", name: "NovaVisio", url: "https://novatour.fr" },
          areaServed: { "@type": "AdministrativeArea", name: "Occitanie" },
          url: URL,
          description: DESCRIPTION,
          offers: [
            { "@type": "Offer", name: "Statique", price: "9.90", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Dynamique", price: "19.90", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Premium", price: "24.90", priceCurrency: "EUR" },
          ],
        }),
      },
    ],
  }),
  component: OffersPage,
});
