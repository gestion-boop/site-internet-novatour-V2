const API_URL = "https://api.novatour.fr/api/v1";
export const APP_URL = "https://app.novatour.fr";

export type PlaceFamily = "restaurant" | "stay" | "shop" | "pro";

export const FAMILY_LABELS: Record<PlaceFamily, string> = {
  restaurant: "Se restaurer",
  stay: "Hébergement",
  shop: "Commerces",
  pro: "Professionnels",
};

export type Place = {
  category: string;
  city: string;
  coverUrl: string | null;
  description: string | null;
  family: PlaceFamily | null;
  id: string;
  logoUrl: string | null;
  slug: string;
  title: string;
  tourHref: string;
};

type ApiPlace = {
  category: string[];
  city: string;
  cover_url: string;
  business_logo?: string;
  description?: string;
  place_name: string;
  place_uuid: string;
  published: boolean;
};

type ApiCategory = {
  category_uuid: string;
  name: string;
  sub_categories?: ApiCategory[];
};

export function slugify(value: string) {
  return (
    value
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "place"
  );
}

function flattenCategories(categories: ApiCategory[]) {
  const names = new Map<string, string>();
  const roots = new Map<string, string>();
  for (const category of categories) {
    names.set(category.category_uuid, category.name);
    roots.set(category.category_uuid, category.name);
    for (const subCategory of category.sub_categories ?? []) {
      names.set(subCategory.category_uuid, subCategory.name);
      roots.set(subCategory.category_uuid, category.name);
    }
  }
  return { names, roots };
}

/**
 * Famille d'établissement, alignée sur les quatre filtres de l'application
 * (Se restaurer, Hébergements, Commerces, Professionnels).
 */
function detectFamily(labels: (string | undefined)[]): PlaceFamily | null {
  const text = labels.filter(Boolean).join(" ").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  if (!text) return null;
  if (/restaur|\bbars?\b|cafe|brasserie|pizz|traiteur|manger|gastro/.test(text)) {
    return "restaurant";
  }
  if (/heberg|hotel|gite|chambre|camping|location saison|logement|dormir/.test(text)) {
    return "stay";
  }
  if (/commerc|boutique|magasin|shop|epicerie|\bcaves?\b|marche/.test(text)) return "shop";
  if (
    /profession|\bpros?\b|service|artisan|entreprise|agence|cabinet|bien-etre|sante|loisir/.test(
      text,
    )
  ) {
    return "pro";
  }
  return null;
}

/** Récupère tous les lieux publiés de NovaTour, pour les pages SEO dédiées et le sitemap. */
export async function fetchPublishedPlaces(): Promise<Place[]> {
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
  const { names: categoryNames, roots: categoryRoots } = flattenCategories(
    categoriesPayload.categories ?? [],
  );

  const seenSlugs = new Map<string, number>();

  return (placesPayload.places ?? [])
    .filter((place) => place.published && place.place_uuid && place.place_name)
    .map((place) => {
      const baseSlug = slugify(place.place_name);
      const count = seenSlugs.get(baseSlug) ?? 0;
      seenSlugs.set(baseSlug, count + 1);
      const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;

      return {
        category: place.category.map((id) => categoryNames.get(id)).find(Boolean) ?? "À découvrir",
        city: place.city || "Occitanie",
        coverUrl: place.cover_url || null,
        description: (place.description || "").trim() || null,
        family: detectFamily([
          ...place.category.map((id) => categoryRoots.get(id)),
          ...place.category.map((id) => categoryNames.get(id)),
        ]),
        id: place.place_uuid,
        logoUrl: place.business_logo || null,
        slug,
        title: place.place_name,
        tourHref: `${APP_URL}/place/${baseSlug}?id=${encodeURIComponent(place.place_uuid)}`,
      };
    });
}

export async function fetchPlaceBySlug(slug: string): Promise<Place | null> {
  const places = await fetchPublishedPlaces();
  return places.find((place) => place.slug === slug) ?? null;
}
