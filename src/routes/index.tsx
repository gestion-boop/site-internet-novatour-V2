import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/nova/HomePage";

const TITLE = "NovaTour — Visitez. Découvrez. Choisissez. en 360°";
const DESCRIPTION =
  "Explorez gratuitement les restaurants, hébergements, commerces et activités grâce aux visites immersives 360° de NovaTour.";
const URL = "https://novatour.fr/";
const SOCIAL_IMAGE = "https://novatour.fr/hero-occitanie.png";

export const Route = createFileRoute("/")({
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
      { property: "og:image:alt", content: "Découvrez des lieux en visites immersives 360° avec NovaTour" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: HomePage,
});
