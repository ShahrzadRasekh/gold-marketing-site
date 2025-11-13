// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gold-marketing-site.vercel.app"),
  title: {
    default: "Gold Marketing — Premium Gold Bars & Bullion",
    template: "%s | Gold Marketing",
  },
  description:
    "Gold Marketing provides investment-grade gold bars and bullion with secure logistics, LBMA-inspired standards, and fast settlement.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Gold Marketing — Premium Gold Bars & Investment-Grade Bullion",
    description:
      "Transparent pricing, swift fulfillment, and trusted gold bullion services for institutions and serious investors.",
    images: [
      {
        url: "/og.jpg", // optional, add an og.jpg into /public later
        width: 1200,
        height: 630,
        alt: "Gold bars stacked in a secure vault",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gold Marketing — Premium Gold Bars & Bullion",
    description:
      "Investment-grade gold bars with transparent pricing, secure logistics, and institutional support.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-gradient-to-b from-white via-[#FFFBF4] to-white text-zinc-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6">
          <NavBar />
          <main className="flex-1 pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        <span className="inline-flex items-center gap-2">
          <span className="h-6 w-6 rounded-full bg-amber-400" />
          <span>Gold Marketing</span>
        </span>
      </Link>

      <nav className="flex items-center gap-8 text-sm font-medium text-zinc-700">
        <Link
          href="/products"
          className="transition hover:text-amber-600 hover:underline underline-offset-4"
        >
          Products
        </Link>
        <Link
          href="/about"
          className="transition hover:text-amber-600 hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-amber-900 shadow-sm transition hover:bg-amber-100"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-600">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Gold Marketing. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs">
          <span>LBMA-inspired standards</span>
          <span>Secure logistics</span>
          <span>24/7 trade support</span>
        </div>
      </div>
    </footer>
  );
}
