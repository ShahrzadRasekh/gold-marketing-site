import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <section className="py-16">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-zinc-600">
        Tell us about your needs — we’ll follow up shortly.
      </p>
      <ContactForm />
    </section>
  );
}
// app/products/page.tsx
export const metadata = {
  title: 'Products',
  description:
    'Investment-grade gold bars for institutional and retail clients.',
};
