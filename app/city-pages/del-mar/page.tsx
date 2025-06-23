"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DelMarPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Del Mar DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Coastal DMV services in Del Mar — registration renewals, title transfers, VIN verifications & smog coordination. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/del-mar"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Del Mar DMV Services
        </h1>
        <p className="text-xl mb-6">
          From gorgeous beach sunsets to the historic Racetrack, Del Mar deserves DMV service with seaside ease.
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
          Whether you’re strolling the Del Mar Village or catching waves at North Beach,
          Tags Express brings fast, friendly DMV solutions right here in Del Mar.
        </p>
        <p>
          Our licensed experts handle renewals, transfers, VIN checks, smog coordination—and more—all on-site.
        </p>
      </section>

      {/* Why Del Mar Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Del Mar Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Quick & Efficient",
                desc: "Most visits finish in under 20 minutes—no DMV lines.",
              },
              {
                title: "Authorized Partner",
                desc: "Licensed by the DMV to issue plates, tags, titles, and more.",
              },
              {
                title: "Coastal Expertise",
                desc: "Serving Del Mar since day one with local know-how.",
              },
              {
                title: "Transparent Pricing",
                desc: "Flat fees up front—no hidden costs.",
              },
              {
                title: "Prime Location",
                desc: "Conveniently located near Camino Del Mar with easy parking.",
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
            <strong>Gather Documents:</strong> Plate number, last 5 VIN digits, ID, proof of insurance, smog certificate if needed.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Drop by anytime or reserve your spot for zero wait.
          </li>
          <li>
            <strong>We Handle Everything:</strong> From forms to DMV filings, all completed same day.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Del Mar DMV Services
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
            Neighborhoods We Serve in Del Mar
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Del Mar Village",
              "North Beach",
              "Del Mar Heights",
              "Solana Beach",
              "Torrey Pines",
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
                q: "Can you handle out-of-state titles?",
                a: "Yes—every title conversion and plate issuance done on-site.",
              },
              {
                q: "What payment methods are accepted?",
                a: "We accept debit, credit, Zelle, and cash.",
              },
              {
                q: "How long does a visit take?",
                a: "Typically 15–20 minutes from check-in to completion.",
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
        <p>📍 230 15th St, Del Mar, CA 92014</p>
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
        <h2 className="text-3xl font-bold mb-4">Del Mar DMV Made Simple</h2>
        <p className="mb-6">Fast, local, and stress-free—book now or call us today!</p>
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