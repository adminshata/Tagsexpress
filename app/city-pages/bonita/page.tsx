// app/city-pages/bonita/page.tsx
"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BonitaPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Bonita DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast DMV services in Bonita. Registrations, title transfers, plates, VIN checks & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/bonita"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bonita DMV Services
        </h1>
        <p className="text-xl mb-6">
          Efficient DMV services in Bonita. Registration renewals, title transfers,
          VIN verifications & more—ditch the DMV hassle!
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
          Situated between National City and Chula Vista, Bonita is known for its
          rolling hills and charming neighborhoods. From hiking at Sweetwater Summit
          to scenic drives along Highland Valley Road, Bonita blends suburban calm
          with easy access to San Diego’s urban core.
        </p>
        <p>
          Tags Express brings fast, stress-free DMV services to Bonita residents.
          Skip long lines—we handle vehicle registrations, title transfers,
          smog coordination, VIN checks, and more, all on the same day.
        </p>
      </section>

      {/* Why Bonita Trusts Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Bonita Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Completion",
                desc: "Finish all DMV tasks in minutes without the wait.",
              },
              {
                title: "Official DMV Partner",
                desc: "Licensed to issue plates, tags, titles, and more on-site.",
              },
              {
                title: "Multilingual Support",
                desc: "Service available in English, Spanish, Arabic, and more.",
              },
              {
                title: "Convenient Location",
                desc: "Located at Bonita Golf Course Dr with ample parking.",
              },
              {
                title: "Transparent Fees",
                desc: "Flat-rate pricing, no hidden costs or surprises.",
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
            <strong>Gather Documents:</strong> Plate number, last 5 VIN digits,
            ID, proof of insurance, and smog certificate if needed.
          </li>
          <li>
            <strong>Walk-In or Reserve:</strong> Choose same-day service or book online
            to skip the line.
          </li>
          <li>
            <strong>We Take Care of It:</strong> All forms, payments, and DMV filings
            handled effectively.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Bonita DMV Services We Offer
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
          <h2 className="text-3xl font-bold mb-6">Neighborhoods We Serve</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Eastlake Greens",
              "Sunbow",
              "Rolling Hills Ranch",
              "Bonita Downs",
              "Rancho del Rey",
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
                q: "Can I walk in or do I need an appointment?",
                a: "Walk-ins welcome daily; booking ahead ensures no wait.",
              },
              {
                q: "Do you handle out-of-state title transfers?",
                a: "Yes—we process out-of-state titles and issue CA plates.",
              },
              {
                q: "What payment methods are accepted?",
                a: "Debit, credit, Zelle, and cash are all accepted.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits finish within 10–15 minutes after check-in.",
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
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact & Hours</h2>
          <p>📍 5555 Bonita Road, Bonita, CA 91902</p>
          <p>📞 (619) 777-9046</p>
          <p>
            ✉️{" "}
            <Link href="mailto:dmv@tagsclinic.com" className="text-red-600 underline">
              dmv@tagsclinic.com
            </Link>
          </p>
          <p>🕒 Mon–Fri: 9 AM–7 PM | Sat: 9 AM–6 PM | Sun: 12 PM–6 PM</p>
        </div>
      </section>

      {/* Final Call to Action */}
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