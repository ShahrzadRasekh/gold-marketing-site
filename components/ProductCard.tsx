// components/ProductCard.tsx
import Image from 'next/image';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-zinc-900/80 px-2 py-1 text-xs text-white">
            Out of stock
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold tracking-tight">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-zinc-600">
          {product.weight} • {product.purity}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.priceUSD)}
          </span>
          <button
            disabled={!product.inStock}
            className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {product.inStock ? 'Request quote' : 'Notify me'}
          </button>
        </div>
      </div>
    </article>
  );
}
