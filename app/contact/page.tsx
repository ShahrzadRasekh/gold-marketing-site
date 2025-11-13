// app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Speak with the Gold Marketing Desk",
  description:
    "Share your gold allocation goals, ask about bullion products, or request a callback from the Gold Marketing desk.",
};

export default function ContactPage() {
  return (
    <section className="py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact the desk
          </h1>
          <p className="mt-3 max-w-xl text-sm text-zinc-700 sm:text-base">
            Tell us a little about what you&apos;re looking to achieve —
            whether it&apos;s a first allocation, a refresh of an existing
            program, or support with marketing and education.
          </p>

          <ContactForm />
        </div>

        <aside className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-5 text-sm shadow-sm">
          <h2 className="text-sm font-semibold tracking-tight text-zinc-900">
            What to include
          </h2>
          <ul className="space-y-2 text-zinc-700">
            <li>• Approximate allocation size or budget</li>
            <li>• Preferred time horizon and delivery expectations</li>
            <li>• Whether you&apos;re a dealer, family office, or private client</li>
            <li>• Any specific bar sizes or products you&apos;re considering</li>
          </ul>

          <div className="mt-4 rounded-2xl bg-amber-50 p-3 text-xs text-amber-900">
            We respond personally to each enquiry. There are no automated price
            spam emails — just clear, relevant follow-up.
          </div>
        </aside>
      </div>
    </section>
  );
}
