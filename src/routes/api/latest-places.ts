import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const API_URL = "https://api.novatour.fr/api/v1";
const APP_URL = "https://app.novatour.fr";

type ApiPlace = {
  category: string[];
  city: string;
  cover_url: string;
  business_logo?: string;
  description?: string;
  virtual_tour_ext_link?: string;
  place_name: string;
  place_uuid: string;
  published: boolean;
};

type ApiCategory = {
  category_uuid: string;
  name: string;
  sub_categories?: ApiCategory[];
};

function slugify(value: string) {
  return (
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "place"
  );
}

/**
 * Les visuels (logo, cover) gardent la même URL S3 quand le client les met à jour
 * (le nom de fichier est l'UUID). On ajoute donc un paramètre de version pour
 * forcer le navigateur/CDN à récupérer la version fraîche à chaque rafraîchissement.
 */
function withVersion(url: string | null | undefined, version: number) {
  if (!url) return null;
  return `${url}${url.includes("?") ? "&" : "?"}v=${version}`;
}

function flattenCategories(categories: ApiCategory[]) {
  const names = new Map<string, string>();
  for (const category of categories) {
    names.set(category.category_uuid, category.name);
    for (const subCategory of category.sub_categories ?? []) {
      names.set(subCategory.category_uuid, subCategory.name);
    }
  }
  return names;
}

export const Route = createFileRoute("/api/latest-places")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const [placesResponse, categoriesResponse] = await Promise.all([
            fetch(`${API_URL}/place/public`, {
              cache: "no-store",
              headers: { Accept: "application/json" },
            }),
            fetch(`${API_URL}/place/category`, {
              cache: "no-store",
              headers: { Accept: "application/json" },
            }),
          ]);

          if (!placesResponse.ok) {
            throw new Error(`NovaTour places API returned ${placesResponse.status}`);
          }

          const placesPayload = (await placesResponse.json()) as { places?: ApiPlace[] };
          const categoriesPayload = categoriesResponse.ok
            ? ((await categoriesResponse.json()) as { categories?: ApiCategory[] })
            : { categories: [] };
          const categoryNames = flattenCategories(categoriesPayload.categories ?? []);
          const version = Date.now();

          const places = (placesPayload.places ?? [])
            .filter((place) => place.published && place.place_uuid && place.place_name)
            .slice(0, 3)
            .map((place) => ({
              category:
                place.category.map((id) => categoryNames.get(id)).find(Boolean) ?? "À découvrir",
              city: place.city || "Occitanie",
              coverUrl: withVersion(place.cover_url, version),
              logoUrl: withVersion(place.business_logo, version),
              description: (place.description || "").trim() || null,
              href: `${APP_URL}/place/${slugify(place.place_name)}?id=${encodeURIComponent(place.place_uuid)}`,
              id: place.place_uuid,
              title: place.place_name,
            }));

          if (places.length !== 3) {
            throw new Error(`NovaTour API returned only ${places.length} published places`);
          }

          return Response.json(
            { places },
            { headers: { "Cache-Control": "no-store, no-cache, must-revalidate" } },
          );
        } catch (error) {
          console.error("[NovaTour] Latest places proxy failed", error);
          return Response.json(
            { message: "latest_places_unavailable", places: [] },
            { status: 502, headers: { "Cache-Control": "no-store" } },
          );
        }
      },
    },
  },
});
