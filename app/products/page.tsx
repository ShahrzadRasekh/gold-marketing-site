// app/products/page.tsx
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <section className="py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Products</h1>
          <p className="mt-2 text-zinc-600">
            Investment-grade gold bars ready for institutional and retail
            clients.
          </p>
        </div>
        <div className="text-sm text-zinc-600">{products.length} items</div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
// app/products/page.tsx
export const metadata = {
  title: 'Products',
  description:
    'Investment-grade gold bars for institutional and retail clients.',
};
