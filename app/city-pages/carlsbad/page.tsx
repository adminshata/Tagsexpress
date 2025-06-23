"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CarlsbadPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Carlsbad DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Fast, friendly DMV services in Carlsbad. Registrations, title transfers, VIN verification, smog checks & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/carlsbad"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Carlsbad DMV Services
        </h1>
        <p className="text-xl mb-6">
          Beachside charm meets a better DMV experience in Carlsbad. 
          Registration renewals, title transfers, VIN checks & more—no hassle.
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
          Known for its stunning coastline, craft breweries, and family-friendly attractions, 
          Carlsbad blends seaside charm with modern living. From Tamarack Beach to the Flower 
          Fields, there’s always something to explore—don’t let DMV errands slow you down.
        </p>
        <p>
          Tags Express brings same-day DMV processing to Carlsbad. Skip the long waits—our team 
          handles registrations, title transfers, smog updates, VIN verifications, and more, 
          all in one visit.
        </p>
      </section>

      {/* Why Carlsbad Drivers Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Carlsbad Residents Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Service",
                desc: "Most transactions completed in under 20 minutes—no more waiting weeks.",
              },
              {
                title: "Authorized Partner",
                desc: "Licensed by the DMV to issue plates, tags, and titles on-site.",
              },
              {
                title: "Local Expertise",
                desc: "Deep understanding of Carlsbad’s DMV requirements and local regulations.",
              },
              {
                title: "Convenient Location",
                desc: "Easy access near Palomar Airport Road with free customer parking.",
              },
              {
                title: "Transparent Fees",
                desc: "Flat-rate pricing, no hidden costs—clear, upfront fees every time.",
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
            <strong>Prepare Documents:</strong> Plate number, last 5 VIN digits, proof of insurance, and smog certificate if needed.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Choose same-day service or schedule ahead to guarantee no wait.
          </li>
          <li>
            <strong>We Handle Everything:</strong> Forms, fees, DMV filings—accurately completed on-site.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Carlsbad DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Vehicle Registration Renewal</li>
            <li>Title Transfers & Out-of-State Transfers</li>
            <li>Duplicate & Replacement Titles</li>
            <li>VIN Verification</li>
            <li>Smog Check Coordination</li>
            <li>Notary & Passport Photos</li>
            <li>Live Scan Fingerprinting</li>
            <li>Ride-share Vehicle Inspections</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Neighborhoods We Serve in Carlsbad
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "La Costa",
              "Carlton Hills",
              "Bressi Ranch",
              "Aviara",
              "Pacific Highlands Ranch",
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
                a: "Walk-ins welcome daily; booking ahead guarantees zero wait.",
              },
              {
                q: "Can you process out-of-state transfers?",
                a: "Yes—we convert and issue CA plates on-site for all states.",
              },
              {
                q: "What payment methods are accepted?",
                a: "Debit, credit, Zelle, and cash are all accepted.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits complete within 15–20 minutes after check-in.",
              },
            ].map(({ q, a }, i) => (
              <div key={i}>
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
        <p>📍 5805 Avenida Encinas, Carlsbad, CA 92008</p>
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
        <h2 className="text-3xl font-bold mb-4">Ready to Skip the DMV?</h2>
        <p className="mb-6">Fast. Easy. Done. Book online or call now!</p>
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