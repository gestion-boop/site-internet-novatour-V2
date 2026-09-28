import { createFileRoute, notFound } from "@tanstack/react-router";
import { LieuPage } from "@/components/nova/LieuPage";
import {
  FAMILY_LABELS,
  fetchPlaceBySlug,
  type Place,
  type PlaceFamily,
} from "@/lib/novatour-places";

const BASE_URL = "https://novatour.fr";

const SCHEMA_TYPES: Record<PlaceFamily, string> = {
  restaurant: "Restaurant",
  stay: "LodgingBusiness",
  shop: "Store",
  pro: "ProfessionalService",
};

function buildJsonLd(place: Place, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": place.family ? SCHEMA_TYPES[place.family] : "LocalBusiness",
    name: place.title,
    description: place.description ?? undefined,
    image: place.coverUrl ?? undefined,
    logo: place.logoUrl ?? undefined,
    url,
    address: { "@type": "PostalAddress", addressLocality: place.city, addressCountry: "FR" },
    ...(place.family ? { additionalType: FAMILY_LABELS[place.family] } : {}),
  };
}

export const Route = createFileRoute("/lieux/$slug")({
  loader: async ({ params }) => {
    const place = await fetchPlaceBySlug(params.slug).catch(() => null);
    if (!place) throw notFound();
    return { place };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { place } = loaderData;
    const url = `${BASE_URL}/lieux/${place.slug}`;
    const title = `${place.title} — ${place.city} | Visite 360° NovaTour`;
    const description = (
      place.description ??
      `Découvrez ${place.title} à ${place.city} en visite immersive à 360°, gratuitement sur NovaTour.`
    ).slice(0, 300);
    const socialImage = place.coverUrl ?? "https://novatour.fr/hero-occitanie.png";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "NovaTour" },
        { property: "og:image", content: socialImage },
        { property: "og:image:alt", content: place.title },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: socialImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildJsonLd(place, url)),
        },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { place } = Route.useLoaderData();
  return <LieuPage place={place} />;
}
