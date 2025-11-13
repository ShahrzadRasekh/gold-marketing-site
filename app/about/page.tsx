export default function AboutPage() {
  return (
    <section className="py-16">
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="mt-2 text-zinc-600">
        We help investors and brands with premium bullion and services.
      </p>
    </section>
  );
}
// app/products/page.tsx
export const metadata = {
  title: 'Products',
  description:
    'Investment-grade gold bars for institutional and retail clients.',
};
