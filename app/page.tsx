// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20 py-12 lg:py-20">
      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            PRECIOUS METALS MARKETING
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Premium Gold Bars &amp; Investment-Grade Bullion
          </h1>
          <p className="mt-4 max-w-xl text-base text-zinc-700 sm:text-lg">
            Transparent pricing, swift fulfillment, and trusted quality. Partner
            with a team that understands institutional flows and high-net-worth
            expectations in the precious metals market.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600"
            >
              Contact Sales
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-amber-300 hover:text-amber-800"
            >
              View Products
            </Link>
            <p className="ml-2 text-xs text-zinc-500">
              Same-day quotes • Global shipping options
            </p>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 text-sm text-zinc-700 sm:grid-cols-4">
            <div>
              <dt className="font-semibold text-zinc-900">LBMA-inspired</dt>
              <dd className="mt-1 text-zinc-600">995+ purity standards</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">Secure logistics</dt>
              <dd className="mt-1 text-zinc-600">Vault-to-vault delivery</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">Fast settlement</dt>
              <dd className="mt-1 text-zinc-600">Flexible trade windows</dd>
            </div>
            <div>
              <dt className="font-semibold text-zinc-900">Dedicated desk</dt>
              <dd className="mt-1 text-zinc-600">Institutional support</dd>
            </div>
          </dl>
        </div>

        <div className="relative h-[260px] rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-amber-100/60 to-white p-6 shadow-sm sm:h-[320px] lg:h-[360px]">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                LIVE DESK SNAPSHOT
              </p>
              <p className="mt-4 text-sm text-zinc-700">
                Spot gold, bullion premiums, and delivery timelines — translated
                into clear recommendations for your buying strategy.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="text-[0.65rem] text-zinc-500">SPOT GOLD</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  $2,420
                </p>
                <p className="mt-1 text-[0.7rem] text-emerald-600">
                  +0.6% intraday
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="text-[0.65rem] text-zinc-500">BULLION FLOW</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  Institutional
                </p>
                <p className="mt-1 text-[0.7rem] text-zinc-600">
                  Demand-led buying
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
                <p className="text-[0.65rem] text-zinc-500">DELIVERY</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  24–72 hrs
                </p>
                <p className="mt-1 text-[0.7rem] text-zinc-600">
                  Major global hubs
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-600">
              <p>Risk-aware pricing guidance, not just a price feed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Why work with Gold Marketing?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-700">
              Built for dealers, family offices, and serious private clients who
              want clarity, execution speed, and trusted settlement.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            Learn more about our desk →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            title="Institutional-grade process"
            body="Structured onboarding, clear trade confirmations, and documentation aligned with industry standards."
          />
          <Card
            title="Execution without noise"
            body="You get market context and clear options, not jargon-heavy commentary or scattered quotes."
          />
          <Card
            title="Long-term partnership"
            body="We grow with your allocation strategy, supporting you through different market cycles."
          />
        </div>
      </section>

      {/* USE CASES / CALLS TO ACTION */}
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight">
            Use cases we support
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700">
            <li>• Dealers looking to expand bullion product lines.</li>
            <li>• Family offices building physical gold allocations.</li>
            <li>• Private clients wanting discreet, secure delivery.</li>
            <li>• Marketing & education around gold ownership.</li>
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-3xl bg-amber-500 px-6 py-7 text-white shadow-sm">
          <div>
            <h2 className="text-lg font-semibold">Ready for your next move?</h2>
            <p className="mt-2 text-sm text-amber-100">
              Share your target allocation and timeline. We’ll reply with a
              simple, actionable course of action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-amber-900 shadow-sm hover:bg-amber-50"
            >
              Request a callback
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-amber-200/60 bg-amber-500/20 px-4 py-2 text-xs font-semibold text-amber-50 hover:bg-amber-600/40"
            >
              Browse bar range
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md">
      <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-700">{body}</p>
      <div className="mt-3 h-px w-0 bg-amber-400 transition-all group-hover:w-12" />
    </article>
  );
}
