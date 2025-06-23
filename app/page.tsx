"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import CitiesWeServe from "@/components/CitiesWeServe";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Tags Express | Fast DMV Services in California</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Avoid the DMV hassle. Tags Express handles registration renewals, title transfers, smog checks and VIN verifications — fast and stress-free."
        />
        <meta
          name="keywords"
          content="DMV services, vehicle registration, California DMV, title transfer, smog check, VIN verification, car tags, San Diego"
        />
        <link rel="canonical" href="https://tagsexpress.com/" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tags Express" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Tags Express | Fast DMV Services in California"
        />
        <meta
          property="og:description"
          content="Avoid the DMV hassle. Tags Express handles registration renewals, title transfers, smog checks and VIN verifications — fast and stress-free."
        />
        <meta property="og:url" content="https://tagsexpress.com/" />
        <meta
          property="og:image"
          content="https://tagsexpress.com/logo.png"
        />
        <meta property="og:image:alt" content="Tags Express Logo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tagsclinic" />
        <meta name="twitter:creator" content="@tagsclinic" />
        <meta
          name="twitter:title"
          content="Tags Express | Fast DMV Services in California"
        />
        <meta
          name="twitter:description"
          content="Avoid the DMV hassle. Tags Express handles registration renewals, title transfers, smog checks and VIN verifications — fast and stress-free."
        />
        <meta
          name="twitter:image"
          content="https://tagsexpress.com/logo.png"
        />
        <meta name="twitter:image:alt" content="Tags Express Logo" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "Tags Express",
              "image": "https://tagsexpress.com/logo.png",
              "@id": "https://tagsexpress.com/",
              "url": "https://tagsexpress.com/",
              "telephone": "+1-619-777-9046",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3845 University Ave",
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92105",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.7757,
                "longitude": -117.0719
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday","Tuesday","Wednesday","Thursday","Friday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "12:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/tagsclinic",
                "https://twitter.com/tagsclinic",
                "https://www.instagram.com/tagsclinic",
                "https://www.tiktok.com/@tagsclinic",
                "https://www.snapchat.com/add/tagsclinic"
              ]
            })
          }}
        />
      </Head>

      <Header />

      {/* ...rest of your sections (Hero, Services, Why, Stats, Testimonials, Quote CTA, CitiesWeServe, FAQ, Final CTA) */}
      <CitiesWeServe />
      <Footer />
    </main>
  );
}