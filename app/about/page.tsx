// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Gold Marketing — Precious Metals Desk",
  description:
    "Gold Marketing is a precious metals desk focused on investment-grade gold bars, secure logistics, and long-term client relationships.",
};

const faqs = [
  {
    question: "Who do you primarily work with?",
    answer:
      "We support dealers, family offices, and serious private clients who want a clear, structured approach to buying and holding physical gold.",
  },
  {
    question: "Do you only offer gold bars?",
    answer:
      "Our core focus is on investment-grade gold bars. Depending on the client and jurisdiction, we may support selected bullion products on request.",
  },
  {
    question: "How do you handle logistics and delivery?",
    answer:
      "We work with established logistics providers and vaulting partners. Delivery options depend on your location and preferred settlement structure.",
  },
  {
    question: "Can you help with education and marketing content?",
    answer:
      "Yes. We collaborate with marketing teams to create clear, compliant education around gold ownership and bullion products.",
  },
];

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Gold Marketing
          </h1>
          <p className="mt-3 text-sm text-zinc-700 sm:text-base">
            Gold Marketing exists to make physical gold allocations clearer,
            calmer, and more operationally reliable — for both professional
            desks and serious private clients.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <article className="space-y-5 text-sm leading-relaxed text-zinc-700">
            <p>
              We operate as a focused precious metals desk with an emphasis on
              execution quality, transparent communication, and secure
              settlement. Rather than chasing every product trend, we keep our
              range tight and our process disciplined.
            </p>
            <p>
              For many clients, physical gold allocation is just one part of a
              broader strategy. Our role is to give you a clear view of market
              conditions, premiums, and logistics so you can make decisions
              quickly — without noise or jargon.
            </p>
            <p>
              Whether you are building an initial allocation, refreshing an
              existing program, or simply exploring options, we focus on giving
              you a simple, actionable path forward.
            </p>
          </article>

          <aside className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-5 text-sm shadow-sm">
            <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
              Snapshot
            </h2>
            <dl className="space-y-3 text-zinc-700">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Focus
                </dt>
                <dd className="mt-1">
                  Investment-grade gold bars, logistics, and allocation support.
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Clients
                </dt>
                <dd className="mt-1">
                  Dealers, family offices, and private clients with a long-term
                  view.
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Approach
                </dt>
                <dd className="mt-1">
                  Clear communication, structured onboarding, and secure,
                  confirmed settlement flows.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-10">
        <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-700">
          A few quick answers to common questions about how we work. For
          anything more specific, we&apos;re happy to discuss your situation
          directly.
        </p>

        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-zinc-200 bg-white p-4 text-sm shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                <span className="font-semibold text-zinc-900">
                  {faq.question}
                </span>
                <span className="text-xs text-zinc-500 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xs text-zinc-500 group-open:inline">
                  –
                </span>
              </summary>
              <p className="mt-3 text-zinc-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* SEO: FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
