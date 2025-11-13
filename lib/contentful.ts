// lib/contentful.ts
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    "Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN environment variables"
  );
}

const baseUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master`;

type Sys = {
  id: string;
};

type ProductFields = {
  title: string;
  slug: string;
  weight?: string;
  purity?: string;
  description?: string;
  suitableFor?: string;
  packaging?: string;
  settlement?: string;
};

export type ProductEntry = {
  sys: Sys;
  fields: ProductFields;
};

type ContentfulResponse<T> = {
  items: T[];
};

export async function fetchProducts(): Promise<ProductEntry[]> {
  const res = await fetch(
    `${baseUrl}/entries?content_type=product&order=fields.weight`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      // Revalidate every 60 seconds (ISR)
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error("Contentful error:", await res.text());
    throw new Error("Failed to fetch products from Contentful");
  }

  const data = (await res.json()) as ContentfulResponse<ProductEntry>;
  return data.items;
}
