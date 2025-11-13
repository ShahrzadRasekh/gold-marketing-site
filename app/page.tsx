export default function HomePage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Premium Gold Bars & Investment‑Grade Bullion
          </h1>
          <p className="mt-4 text-zinc-700">
            Transparent pricing, swift fulfillment, and trusted quality. Partner
            with a team that understands the precious metals market.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white"
            >
              Contact Sales
            </a>
            <a
              href="/products"
              className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold border border-zinc-200 hover:bg-zinc-50"
            >
              View Products
            </a>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-zinc-600">
            <li>LBMA-inspired standards</li>
            <li>24/7 order tracking</li>
            <li>Secure logistics</li>
            <li>Fast settlement</li>
          </ul>
        </div>
        <div className="aspect-[4/3] rounded-2xl border border-zinc-200 bg-gradient-to-br from-amber-50 to-zinc-50" />
      </div>
    </section>
  );
}
