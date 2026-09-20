import { createFileRoute } from "@tanstack/react-router";
import { NovaVisioPage } from "@/components/nova/NovaVisioPage";

const TITLE = "NovaVisio — Visites immersives 360°";
const DESCRIPTION =
  "NovaVisio capture votre lieu en visite virtuelle 360° certifiée Google Street View, puis NovaTour la diffuse gratuitement pour attirer plus de clients.";
const URL = "https://novatour.fr/novavisio";
const SOCIAL_IMAGE = "https://novatour.fr/hero-occitanie.png";

export const Route = createFileRoute("/novavisio")({
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
      { property: "og:image:alt", content: "Visite virtuelle 360° réalisée par NovaVisio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: NovaVisioPage,
});
