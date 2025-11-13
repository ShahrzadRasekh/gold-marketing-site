// data/products.ts
export type Product = {
  id: string;
  name: string;
  purity: string;
  weight: string;
  priceUSD: number;
  image: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: 'gm-1oz-1',
    name: 'Gold Bar 1 oz',
    purity: '999.9',
    weight: '1 oz',
    priceUSD: 2420,
    image:
      'https://images.unsplash.com/photo-1610375461246-83df859dfe49?q=80&w=1200&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'gm-10g-1',
    name: 'Gold Bar 10 g',
    purity: '999.9',
    weight: '10 g',
    priceUSD: 780,
    image:
      'https://images.unsplash.com/photo-1602173991319-230e4d8d6e9b?q=80&w=1200&auto=format&fit=crop',
    inStock: true,
  },
  {
    id: 'gm-100g-1',
    name: 'Gold Bar 100 g',
    purity: '999.9',
    weight: '100 g',
    priceUSD: 7800,
    image:
      'https://images.unsplash.com/photo-1622372738942-7b5f0a3d2b1e?q=80&w=1200&auto=format&fit=crop',
    inStock: false,
  },
];
