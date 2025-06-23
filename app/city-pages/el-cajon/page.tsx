// app/city-pages/el-cajon/page.tsx
"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ElCajonPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>El Cajon DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast DMV services in El Cajon. Registrations, title transfers, plates, VIN checks & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/el-cajon"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          El Cajon DMV Services
        </h1>
        <p className="text-xl mb-6">
          Hassle-free DMV services in El Cajon. Registrations, title transfers,
          plates & more—skip the DMV lines today!
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
          Nestled at the edge of the hills, El Cajon blends suburban warmth with
          small-town charm. From the lively Broadway district to the foothills
          of Fletcher Hills, this city moves at its own pace—but DMV tasks still
          need doing.
        </p>
        <p>
          Tags Express brings fast, friendly DMV services to El Cajon—no more
          waiting in long lines or wrestling with forms. Whether you need
          registration renewal, title transfers, VIN verifications, or smog
          coordination, we’ve got you covered, same day.
        </p>
      </section>

      {/* Why El Cajon Trusts Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why El Cajon Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Processing",
                desc: "Complete your DMV transactions in minutes—not weeks.",
              },
              {
                title: "Official DMV Partner",
                desc: "Licensed to issue plates, tags, titles, and more on-site.",
              },
              {
                title: "Bilingual & Multilingual Staff",
                desc: "Service available in English, Spanish, Arabic, and beyond.",
              },
              {
                title: "Central Location",
                desc: "Conveniently located at 450 N Magnolia Ave with free parking.",
              },
              {
                title: "Transparent Fees",
                desc: "Upfront pricing with no hidden charges—ever.",
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
            <strong>Gather Your Info:</strong> License plate, last 5 VIN digits,
            proof of insurance, smog certificate if applicable.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Choose same-day service or
            reserve your spot in advance.
          </li>
          <li>
            <strong>Relax & Go:</strong> We handle forms, fees, and DMV
            filings—so you can get back to your day.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our El Cajon DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Registration Renewal</li>
            <li>Title Transfers (Including Out-of-State)</li>
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
              "Fletcher Hills",
              "Granite Hills",
              "Bostonia",
              "Rancho San Diego",
              "Crest",
              "Cardiff",
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
                a: "Walk-ins are welcome every day, though booking online gets you served fastest.",
              },
              {
                q: "Can you handle out-of-state title transfers?",
                a: "Yes—we convert your out-of-state title and issue new plates here.",
              },
              {
                q: "What payments do you accept?",
                a: "Debit, credit, Zelle, and cash are all accepted securely.",
              },
              {
                q: "How long does service take?",
                a: "Most transactions finish within 10–20 minutes after check-in.",
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
          <p>📍 450 N Magnolia Ave, El Cajon, CA 92020</p>
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