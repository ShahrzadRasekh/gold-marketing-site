// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  // Change this to your live domain after deploy
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Gold Marketing — Trusted Precious Metals',
    template: '%s | Gold Marketing',
  },
  description: 'Premium gold bars & services. Secure, transparent, and fast.',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Gold Marketing — Trusted Precious Metals',
    description: 'Premium gold bars & services. Secure, transparent, and fast.',
    images: [
      {
        url: '/og.jpg', // optional: add an og.jpg to /public
        width: 1200,
        height: 630,
        alt: 'Gold bars and premium bullion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gold Marketing — Trusted Precious Metals',
    description: 'Premium gold bars & services. Secure, transparent, and fast.',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <header className="py-6 flex items-center justify-between">
      <a href="/" className="font-semibold tracking-tight text-lg">
        Gold Marketing
      </a>
      <nav className="flex gap-6 text-sm">
        <a className="hover:opacity-80" href="/products">
          Products
        </a>
        <a className="hover:opacity-80" href="/about">
          About
        </a>
        <a className="hover:opacity-80" href="/contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="py-10 text-sm text-zinc-600">
      <div className="border-t pt-6">
        <p>
          &copy; {new Date().getFullYear()} Gold Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
