"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PowayPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Poway DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Friendly, local DMV services in Poway—registration renewals, title transfers, VIN verifications & smog coordination. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/poway"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Poway DMV Services
        </h1>
        <p className="text-xl mb-6">
          Known as “The City in the Country,” Poway deserves DMV service as welcoming and efficient as its community.
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
          From Lake Poway’s serene trails to Poway Road’s bustling shops, 
          Tags Express brings same-day DMV solutions right here in Poway. 
          We handle everything—renewals, transfers, VIN checks, smog coordination—with speed and precision.
        </p>
        <p>
          Our fully licensed team completes all paperwork on-site so you never have to step into the DMV.
        </p>
      </section>

      {/* Why Poway Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Poway Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Community Focused",
                desc: "We know Poway and treat every customer like a neighbor.",
              },
              {
                title: "Rapid Turnaround",
                desc: "Most visits completed in under 20 minutes—no DMV lines.",
              },
              {
                title: "Authorized DMV Partner",
                desc: "Licensed to issue plates, tags, titles, and more.",
              },
              {
                title: "Transparent Pricing",
                desc: "Flat, upfront fees—no hidden charges.",
              },
              {
                title: "Convenient Location",
                desc: "Easy access near Poway Road with parking available.",
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
            <strong>Gather Documents:</strong> Plate #, last 5 VIN digits, ID, proof of insurance, smog certificate if needed.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Stop by anytime or reserve your spot for zero wait.
          </li>
          <li>
            <strong>We Process Everything:</strong> From form-filling to DMV submissions, all done same day.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Poway DMV Services
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
            Neighborhoods We Serve in Poway
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Old Poway",
              "Lake Poway",
              "Black Mountain Ranch",
              "Twin Peaks",
              "Scripps Poway",
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
                q: "Is an appointment required?",
                a: "Walk-ins welcome; booking online ensures no wait.",
              },
              {
                q: "Do you handle out-of-state titles?",
                a: "Yes, we’ll convert any out-of-state title and plates on-site.",
              },
              {
                q: "What payment methods are accepted?",
                a: "We accept debit, credit, Zelle, and cash.",
              },
              {
                q: "How long will my visit take?",
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
        <p>📍 13340 Poway Rd, Poway, CA 92064</p>
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
        <h2 className="text-3xl font-bold mb-4">Poway DMV Made Easy</h2>
        <p className="mb-6">Fast, friendly, and local—book now or call us today!</p>
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