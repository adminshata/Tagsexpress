"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ImperialBeachPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Imperial Beach DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Breezy, convenient DMV services in Imperial Beach—registration renewals, title transfers, VIN checks, smog coordination & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/imperial-beach"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Imperial Beach DMV Services
        </h1>
        <p className="text-xl mb-6">
          Where the surf meets service—Imperial Beach drivers get fast, friendly DMV support.
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
          From the pier to the sand dunes, Imperial Beach embraces easy living.
          Let Tags Express handle your DMV paperwork—registration, transfers,
          VIN checks, and smog testing—so you can get back to sun and surf.
        </p>
        <p>
          Our licensed team completes every form accurately and swiftly, right
          here in the heart of Imperial Beach.
        </p>
      </section>

      {/* Why Imperial Beach Drivers Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Imperial Beach Locals Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Surfside Convenience",
                desc: "Our location minutes from the pier makes DMV visits a breeze.",
              },
              {
                title: "Same-Day Processing",
                desc: "Walk out with plates, stickers, or titles—no waiting weeks.",
              },
              {
                title: "DMV-Authorized",
                desc: "Fully licensed to issue California plates, tags, and titles.",
              },
              {
                title: "Transparent Fees",
                desc: "Flat, upfront pricing—no hidden costs or surprises.",
              },
              {
                title: "Local Expertise",
                desc: "We understand Imperial Beach requirements and regulations.",
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
            <strong>Collect Documents:</strong> Plate number, last 5 VIN digits,
            ID, proof of insurance, and smog certificate if needed.
          </li>
          <li>
            <strong>Walk In or Reserve:</strong> Stop by uninterrupted or book
            online for zero wait.
          </li>
          <li>
            <strong>We Handle It All:</strong> From paperwork to DMV filings—
            completed same day.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Imperial Beach DMV Services
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
            Neighborhoods We Serve in Imperial Beach
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Imperial Beach",
              "Silver Strand",
              "Seacoast Shores",
              "Pier Plaza",
              "Dog Beach",
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
                q: "Do you require an appointment?",
                a: "Walk-ins are welcome; booking ahead ensures no wait time.",
              },
              {
                q: "Can you process out-of-state transfers?",
                a: "Yes—we issue California plates and tags for any out-of-state title.",
              },
              {
                q: "Which payments do you accept?",
                a: "Debit, credit, Zelle, and cash are all accepted.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits finish within 15–20 minutes after check-in.",
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
        <p>📍 825 Seacoast Dr, Imperial Beach, CA 91932</p>
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
        <h2 className="text-3xl font-bold mb-4">Ride the Waves, Skip the DMV</h2>
        <p className="mb-6">Fast service. Friendly faces. Book now or call today!</p>
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