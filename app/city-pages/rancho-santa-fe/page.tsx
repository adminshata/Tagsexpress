"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RanchoSantaFePage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Rancho Santa Fe DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Exclusive DMV services in Rancho Santa Fe—registration renewals, title transfers, VIN verifications & smog coordination. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/rancho-santa-fe"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Rancho Santa Fe DMV Services
        </h1>
        <p className="text-xl mb-6">
          From winding equestrian trails to upscale village charm, Rancho Santa Fe deserves DMV service that's equally refined.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
        <p className="mb-6">
          Whether you’re exploring horse ranches or dining at the village’s gourmet bistros, Tags Express delivers fast, personalized DMV solutions right here in Rancho Santa Fe.
        </p>
        <p>
          Our licensed team handles registration renewals, title transfers, VIN checks, smog coordination, and more—all with courtesy and efficiency.
        </p>
      </section>

      {/* Why Rancho Santa Fe Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Rancho Santa Fe Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Personalized Service",
                desc: "Individual attention—you’re more than just a number.",
              },
              {
                title: "Authorized DMV Partner",
                desc: "Licensed to issue plates, tags, titles, and more.",
              },
              {
                title: "Luxury Standards",
                desc: "White-glove approach to every transaction.",
              },
              {
                title: "Transparent Fees",
                desc: "Clear, upfront pricing with no hidden charges.",
              },
              {
                title: "Convenient Location",
                desc: "Minutes from El Fuego Road with valet-style parking.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          How to Get Started
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-800">
          <li>
            <strong>Gather Documents:</strong> Plate number, last 5 VIN digits, ID, proof of insurance, and smog certificate if required.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Visit us at your convenience or reserve your appointment to skip any wait.
          </li>
          <li>
            <strong>We Handle Everything:</strong> From paperwork to DMV filings, all completed same day with premium service.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Rancho Santa Fe DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Registration Renewals</li>
            <li>Title Transfers & Out-of-State Transfers</li>
            <li>Duplicate & Replacement Titles</li>
            <li>VIN Verification</li>
            <li>Smog Check Coordination</li>
            <li>Notary & Passport Photo Services</li>
            <li>Live Scan Fingerprinting</li>
            <li>Ride-Share Vehicle Inspections</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Neighborhoods We Serve in Rancho Santa Fe
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "The Covenant",
              "Fairbanks Ranch",
              "Rancho Del Lago",
              "Solana/Bernardo Estates",
              "Georgetown",
            ].map((n) => (
              <span key={n} className="bg-gray-100 px-3 py-1 rounded">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 text-gray-800">
            {[
              {
                q: "Do I need an appointment?",
                a: "Walk-ins welcome; booking ahead guarantees no wait.",
              },
              {
                q: "Can you process out-of-state titles?",
                a: "Yes—we convert any title and issue plates on-site.",
              },
              {
                q: "What payment methods are accepted?",
                a: "Debit, credit, Zelle, and cash are all accepted.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits are completed within 15–20 minutes.",
              },
            ].map(({ q, a }, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-1">{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact & Hours</h2>
        <p>📍 6014 El Fuego Road, Rancho Santa Fe, CA 92067</p>
        <p>📞 (619) 777-9046</p>
        <p>
          ✉️{" "}
          <Link href="mailto:dmv@tagsclinic.com" className="text-red-600 underline">
            dmv@tagsclinic.com
          </Link>
        </p>
        <p>🕒 Mon–Fri: 9 AM–7 PM | Sat: 9 AM–6 PM | Sun: 12 PM–6 PM</p>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Rancho Santa Fe DMV, Elevated</h2>
        <p className="mb-6">Premium service, no lines—book now or call today!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Book Now
          </Link>
          <a
            href="tel:6197779046"
            className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Call Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}