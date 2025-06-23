// app/city-pages/la-mesa/page.tsx
"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LaMesaPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>La Mesa DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast DMV services in La Mesa. Registrations, title transfers, plates, VIN checks & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/la-mesa"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          La Mesa DMV Services
        </h1>
        <p className="text-xl mb-6">
          Convenient, speedy DMV services in La Mesa. Registration renewals,
          title transfers, VIN checks & more—no more DMV waits!
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
          Nestled at the foothills of Mount Helix, La Mesa is known for its
          charming downtown village and vibrant community events. From the
          historic La Mesa Boulevard to the scenic parks, life here moves at a
          friendly pace—but DMV tasks still need doing.
        </p>
        <p>
          Tags Express brings fast, reliable DMV services to La Mesa drivers.
          Skip the lines and paperwork hassle—we handle registrations, title
          transfers, smog coordination, VIN verifications, and more, all
          completed same-day.
        </p>
      </section>

      {/* Why La Mesa Trusts Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why La Mesa Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Service",
                desc: "Complete your DMV needs in a single visit—no waiting weeks.",
              },
              {
                title: "Licensed DMV Partner",
                desc: "Officially authorized to issue plates, tags, titles, and more.",
              },
              {
                title: "Multilingual Support",
                desc: "Service available in English, Spanish, Arabic, and other languages.",
              },
              {
                title: "Central La Mesa Location",
                desc: "Easy parking and quick check-in right on La Mesa Boulevard.",
              },
              {
                title: "Transparent Pricing",
                desc: "Clear, upfront fees with no hidden charges.",
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
          How It Works
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-800">
          <li>
            <strong>Gather Your Documents:</strong> Plate number, last 5 of
            VIN, proof of insurance, and smog certificate if needed.
          </li>
          <li>
            <strong>Walk-In or Book Ahead:</strong> Same-day service or
            scheduled appointment—your choice.
          </li>
          <li>
            <strong>Relax While We Handle It:</strong> We fill out forms,
            process fees, and complete DMV filings swiftly.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our La Mesa DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Vehicle Registration Renewal</li>
            <li>Title Transfers (Including Out-of-State)</li>
            <li>Duplicate & Replacement Titles</li>
            <li>VIN Verification</li>
            <li>Smog Check Coordination</li>
            <li>Notary & Passport Photos</li>
            <li>Live Scan Fingerprinting</li>
            <li>Ride-share Inspections</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Neighborhoods We Serve</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Grossmont",
              "Mt. Helix",
              "La Mesa Village",
              "Fletcher Hills",
              "Northmont",
              "La Mesa Springs",
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
                q: "Do I need to book in advance?",
                a: "No—walk-ins welcome, but booking ahead guarantees no wait.",
              },
              {
                q: "Handle out-of-state titles?",
                a: "Yes—we convert and issue your new CA plates in one visit.",
              },
              {
                q: "What payments are accepted?",
                a: "Cash, debit, credit, and Zelle for your convenience.",
              },
              {
                q: "How long will it take?",
                a: "Most services wrap up within 10–15 minutes after check-in.",
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
          <p>📍 5550 Lake Murray Blvd, La Mesa, CA 91942</p>
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