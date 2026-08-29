import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/nova/ContactPage";

const TITLE = "Contact — NovaTour & NovaVisio";
const DESCRIPTION =
  "Besoin d'une information ? Demandez à être rappelé(e) par l'équipe NovaVisio. Téléphone, email et adresse de NovaTour à Narbonne.";
const URL = "https://novatour.fr/contact";
const SOCIAL_IMAGE = "https://novatour.fr/hero-occitanie.png";

export const Route = createFileRoute("/contact")({
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
      { property: "og:image:alt", content: "Contactez NovaTour et NovaVisio" },
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
          "@type": "ContactPage",
          name: "Contact NovaTour",
          url: URL,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Organization",
            name: "NovaTour",
            url: "https://novatour.fr",
            telephone: "+33630310065",
            email: "natacha.jaillet@novavisio.fr",
            address: {
              "@type": "PostalAddress",
              streetAddress: "19 Rue du Luxembourg",
              addressLocality: "Narbonne",
              postalCode: "11100",
              addressCountry: "FR",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});
