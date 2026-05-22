import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from '@/i18n.config';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    title: isEn ? "Barber Chehban | Premium Barbershop in Marrakech, Massira 2" : "Barber Chehban | Meilleur Coiffeur & Barbier à Marrakech, Massira 2",
    description: isEn ? "Barber Chehban is the premier barbershop in Marrakech (Massira 2). Experience bespoke haircuts, advanced protein treatments, and expert beard grooming by Mehdi and Achraf." : "Barber Chehban est le salon de coiffure et barbier incontournable à Marrakech (Massira 2). Profitez de nos coupes stylées, soins protéine et tailles de barbe expertes par Mehdi et Achraf.",
    keywords: isEn ? ["barber marrakech", "hairdresser marrakech", "barber massira 2", "best barber marrakech", "barber chehban", "men's haircut marrakech", "protein treatment marrakech", "beard trim marrakech", "men's hair salon massira 2"] : ["barbier marrakech", "coiffeur marrakech", "barber marrakech", "barber massira 2", "meilleur coiffeur marrakech", "barber chehban", "coiffure homme marrakech", "soin proteine marrakech", "taille de barbe marrakech", "salon de coiffure homme massira 2"],
    authors: [{ name: "Barber Chehban" }],
    robots: "index, follow",
    openGraph: {
      title: isEn ? "Barber Chehban | Premium Barbershop in Marrakech" : "Barber Chehban | Meilleur Coiffeur & Barbier à Marrakech, Massira 2",
      description: isEn ? "Barber Chehban is the premier barbershop in Marrakech (Massira 2). Bespoke haircuts, protein treatments, and expert beard grooming by our master barbers." : "Barber Chehban est le salon incontournable à Marrakech (Massira 2). Coupes premium, soins protéine et tailles de barbe expertes par nos maîtres barbiers.",
      type: "website",
      locale: isEn ? "en_US" : "fr_MA",
      siteName: "Barber Chehban",
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  // Advanced Local SEO Schema (JSON-LD)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Barber Chehban",
    "image": "https://barberchehban.com/Screenshot_20260424-075335_Instagram.jpg",
    "url": "https://barberchehban.com",
    "telephone": "+212602630847",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Dar Chifaa, Massira 2",
      "addressLocality": "Marrakech",
      "postalCode": "40140",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.636321,
      "longitude": -8.066170
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "00:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "01:00"
      }
    ],
    "sameAs": [
      "https://wa.me/212602630847"
    ]
  };

  return (
    <html
      lang={params.lang}
      className={`${playfair.variable} ${dmsans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body bg-dark text-cream selection:bg-gold selection:text-dark overflow-x-hidden">
        {/* Injecting JSON-LD for Google Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
