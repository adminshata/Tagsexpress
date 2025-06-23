// app/city-pages/chula-vista/page.tsx
"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ChulaVistaPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Chula Vista DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast DMV services in Chula Vista. Registrations, title transfers, plates, VIN checks & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/chula-vista"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Chula Vista DMV Services
        </h1>
        <p className="text-xl mb-6">
          Quick, convenient DMV services in Chula Vista. Registration renewals,
          title transfers, VIN checks & more—no DMV queue required!
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
          From the sparkling waterfront at Bayfront Parkway to the vibrant
          neighborhoods of Otay Ranch, Chula Vista blends coastal charm with
          suburban comfort. Whether you’re a family heading to the Living Coast
          Discovery Center or a commuter bound for downtown San Diego, you need
          DMV tasks done fast.
        </p>
        <p>
          Tags Express makes Chula Vista DMV errands effortless. Skip the
          long lines and paperwork headaches—our licensed team handles
          registrations, title transfers, smog coordination, VIN verifications,
          and more, all on the same day.
        </p>
      </section>

      {/* Why Chula Vista Trusts Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Chula Vista Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Same-Day Processing",
                desc: "Walk out with your registration, stickers, or titles—no waiting weeks.",
              },
              {
                title: "Authorized DMV Partner",
                desc: "We’re licensed to issue plates, tags, and titles directly.",
              },
              {
                title: "Friendly, Multilingual Team",
                desc: "Support in English, Spanish, Arabic, and more—service you can understand.",
              },
              {
                title: "Central Chula Vista Location",
                desc: "Conveniently located near Third Avenue and J Street with easy parking.",
              },
              {
                title: "Transparent Fees",
                desc: "No hidden charges—just clear, upfront pricing for all services.",
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
            <strong>Prepare Your Documents:</strong> Plate number, last 5 digits
            of VIN, proof of insurance, and smog certificate if needed.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Same-day service available
            or schedule your appointment to skip the wait entirely.
          </li>
          <li>
            <strong>Leave DMV Tasks to Us:</strong> We fill out forms,
            process fees, and get your paperwork done—fast.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Chula Vista DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Registration Renewal</li>
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
              "Bonita",
              "Eastlake",
              "Otay Ranch",
              "Civic Center",
              "Rolling Hills Ranch",
              "Eastlake Greens",
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
                q: "Can I renew without an appointment?",
                a: "Yes—walk-ins welcome daily, though booking online guarantees the fastest service.",
              },
              {
                q: "Do you process out-of-state titles?",
                a: "Absolutely—we convert your out-of-state title and plates in one visit.",
              },
              {
                q: "What forms of payment are accepted?",
                a: "Debit, credit, Zelle, and cash are all accepted on-site.",
              },
              {
                q: "How fast is same-day service?",
                a: "Most transactions finish within 10–15 minutes once you arrive.",
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
          <p>📍 345 Third Ave, Chula Vista, CA 91910</p>
          <p>📞 (619) 777-9046</p>
          <p>
            ✉️{" "}
            <Link
              href="mailto:dmv@tagsclinic.com"
              className="text-red-600 underline"
            >
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