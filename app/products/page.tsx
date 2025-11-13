// app/products/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Gold Products — Investment-Grade Bars & Bullion",
  description:
    "Explore investment-grade gold bars and bullion products with transparent pricing and secure logistics.",
};

export default function ProductsPage() {
  return (
    <section className="py-12 lg:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Gold Products
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-700 sm:text-base">
            A focused range of investment-grade bars designed for dealers,
            family offices, and serious private clients. All products are
            sourced through established refinery and bullion partners.
          </p>
        </div>

        <Link
          href="/contact"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
        >
          Request live quote
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
                  {product.name}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-amber-700">
                  {product.category}
                </p>
              </div>
              <div className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">
                {product.weight}
              </div>
            </div>

            <p className="mt-3 text-sm text-zinc-700">{product.description}</p>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-600">
              <div>
                <dt className="font-semibold text-zinc-900">Purity</dt>
                <dd className="mt-1">{product.purity}</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Ideal for</dt>
                <dd className="mt-1">{product.suitableFor}</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Packaging</dt>
                <dd className="mt-1">{product.packaging}</dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-900">Settlement</dt>
                <dd className="mt-1">{product.settlement}</dd>
              </div>
            </dl>

            <div className="mt-5 flex items-center justify-between text-xs">
              <p className="text-zinc-500">
                Premiums and availability vary by market session.
              </p>
              <Link
                href="/contact"
                className="font-semibold text-amber-700 hover:text-amber-800"
              >
                Enquire →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
