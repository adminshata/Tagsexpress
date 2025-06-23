// app/city-pages/lakeside/page.tsx
"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LakesidePage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Lakeside DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast DMV services in Lakeside. Registrations, title transfers, plates, VIN checks & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/lakeside"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Lakeside DMV Services
        </h1>
        <p className="text-xl mb-6">
          Quick, reliable DMV services in Lakeside. Registration renewals,
          title transfers, VIN verifications & more—no more DMV headaches!
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
          Nestled between the river valleys and mountain foothills, Lakeside offers
          a relaxed, scenic lifestyle. From outdoor adventures at El Monte County
          Preserve to riverside strolls along the San Diego River, life here moves
          at your pace—but DMV tasks don’t have to slow you down.
        </p>
        <p>
          Tags Express brings swift, stress-free DMV services to Lakeside residents.
          Skip the long DMV lines—our team handles registrations, title transfers,
          smog coordination, VIN checks, and more, all on the same day.
        </p>
      </section>

      {/* Why Lakeside Trusts Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Lakeside Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Service",
                desc: "Complete your DMV needs in under 30 minutes—no waiting for weeks.",
              },
              {
                title: "Official DMV Partner",
                desc: "Licensed to issue plates, tags, titles, and more directly on-site.",
              },
              {
                title: "Multilingual Support",
                desc: "Service available in English, Spanish, Arabic, and more languages.",
              },
              {
                title: "Convenient Location",
                desc: "Easily accessible on Maine Ave with free parking and quick check-in.",
              },
              {
                title: "Transparent Pricing",
                desc: "Upfront, flat-rate fees—no hidden costs or surprise charges.",
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
            <strong>Gather Your Documents:</strong> Plate number, last 5 VIN digits,
            proof of insurance, and smog certificate if required.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Choose same-day service or
            reserve your spot to skip the line entirely.
          </li>
          <li>
            <strong>We Handle Everything:</strong> Forms, payments, and DMV filings—
            all done quickly and accurately by our experts.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Lakeside DMV Services
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
              "River Park",
              "El Monte County Preserve",
              "Talmadge",
              "Summerhill Estates",
              "Bankhead Springs",
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
                q: "Can I walk in without an appointment?",
                a: "Yes—walk-ins are always welcome, though booking ahead ensures zero wait.",
              },
              {
                q: "Do you handle out-of-state transfers?",
                a: "Absolutely—we process out-of-state titles and issue California plates.",
              },
              {
                q: "Which payments do you accept?",
                a: "We accept debit, credit, Zelle, and cash for your convenience.",
              },
              {
                q: "How long will my visit take?",
                a: "Most visits complete within 10–15 minutes after check-in.",
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
          <p>📍 9870 Maine Ave, Lakeside, CA 92040</p>
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