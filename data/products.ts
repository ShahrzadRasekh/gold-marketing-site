// data/products.ts
export type Product = {
  id: string;
  name: string;
  category: string;
  weight: string;
  purity: string;
  description: string;
  suitableFor: string;
  packaging: string;
  settlement: string;
};

export const products: Product[] = [
  {
    id: "1kg-bar",
    name: "1 kg Gold Bar",
    category: "Investment Bar",
    weight: "1 kg",
    purity: "995–999.9 fine gold",
    description:
      "Institutional-standard bar suitable for primary allocations and vault-to-vault transfers.",
    suitableFor: "Dealers, family offices, long-term allocators",
    packaging: "Sealed, serialized bar with certificate where applicable",
    settlement: "Typically 24–72 hours depending on location",
  },
  {
    id: "500g-bar",
    name: "500 g Gold Bar",
    category: "Investment Bar",
    weight: "500 g",
    purity: "995–999.9 fine gold",
    description:
      "Flexible bar size for portfolio adjustments and scaling in or out of positions.",
    suitableFor: "Dealers, professional investors, private clients",
    packaging: "Individual tamper-evident packaging",
    settlement: "24–72 hours",
  },
  {
    id: "100g-bar",
    name: "100 g Gold Bar",
    category: "Retail & Private Client",
    weight: "100 g",
    purity: "995–999.9 fine gold",
    description:
      "Popular bar size for private clients and introductory allocations into physical gold.",
    suitableFor: "Private clients, gifting, starter allocations",
    packaging: "Blister pack with assay card",
    settlement: "24–72 hours",
  },
];
