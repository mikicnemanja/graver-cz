import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRAVER-cz | Profesionalno Graviranje u Novom Sadu",
  description:
    "Profesionalne usluge graviranja u Novom Sadu. Izrada pehara, medalja, plaketa, industrijsko graviranje, natpisne table. Kvalitet, preciznost i zadovoljstvo klijenata.",
  keywords: [
    "graviranje Novi Sad",
    "graviranje na metalu",
    "industrijsko graviranje",
    "pehari medalje",
    "natpisne table",
    "graviranje čaša",
    "graviranje u drvetu",
    "GRAVER-cz",
    "Milana Koma 23",
  ],
  authors: [{ name: "GRAVER-cz" }],
  creator: "GRAVER-cz",
  publisher: "GRAVER-cz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://graver-cz.vercel.app",
    title: "GRAVER-cz | Profesionalno Graviranje u Novom Sadu",
    description:
      "Profesionalne usluge graviranja u Novom Sadu. Izrada pehara, medalja, plaketa, industrijsko graviranje, natpisne table. Kvalitet, preciznost i zadovoljstvo klijenata.",
    siteName: "GRAVER-cz",
    images: [
      {
        url: "https://graver-cz.vercel.app/images/graver-banner.png",
        width: 1200,
        height: 630,
        alt: "GRAVER-cz - Profesionalno Graviranje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRAVER-cz | Profesionalno Graviranje u Novom Sadu",
    description:
      "Profesionalne usluge graviranja u Novom Sadu. Kvalitet, preciznost i zadovoljstvo klijenata.",
    images: ["https://graver-cz.vercel.app/images/graver-banner.png"],
  },
  alternates: {
    canonical: "https://graver-cz.vercel.app",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GRAVER-cz",
              image: "https://graver-cz.vercel.app/images/graver-banner.png",
              "@id": "https://graver-cz.vercel.app",
              url: "https://graver-cz.vercel.app",
              telephone: "+381642287056",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Milana Koma 23",
                addressLocality: "Novi Sad",
                postalCode: "21000",
                addressCountry: "RS",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.2671,
                longitude: 19.8335,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=100091570605417&sk=about",
              ],
              description:
                "Profesionalne usluge graviranja u Novom Sadu. Izrada pehara, medalja, plaketa, industrijsko graviranje, natpisne table.",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "1",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 45.2671,
                  longitude: 19.8335,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Usluge Graviranja",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Izrada pehara, medalja, plaketa",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Industrijsko graviranje",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Natpisne table",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Graviranje čaša",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Graviranje u drvetu",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
