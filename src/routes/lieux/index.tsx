import { createFileRoute } from "@tanstack/react-router";
import { LieuxIndexPage } from "@/components/nova/LieuxIndexPage";
import { fetchPublishedPlaces } from "@/lib/novatour-places";

const TITLE = "Tous les lieux à visiter en 360° — NovaTour";
const DESCRIPTION =
  "Parcourez tous les restaurants, hébergements, commerces et professionnels d'Occitanie référencés sur NovaTour, chacun en visite immersive à 360°.";
const URL = "https://novatour.fr/lieux";
const SOCIAL_IMAGE = "https://novatour.fr/hero-occitanie.png";

export const Route = createFileRoute("/lieux/")({
  loader: async () => {
    try {
      return { places: await fetchPublishedPlaces() };
    } catch (error) {
      console.error("[NovaTour] Impossible de charger les lieux publiés", error);
      return { places: [] };
    }
  },
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
      { property: "og:image:alt", content: "Tous les lieux à visiter en 360° sur NovaTour" },
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
          "@type": "CollectionPage",
          name: TITLE,
          url: URL,
          description: DESCRIPTION,
          isPartOf: { "@type": "WebSite", name: "NovaTour", url: "https://novatour.fr" },
        }),
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { places } = Route.useLoaderData();
  return <LieuxIndexPage places={places} />;
}
