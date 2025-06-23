"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EncinitasPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Encinitas DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast, friendly DMV services in Encinitas—same-day registration renewals, title transfers, VIN checks, smog coordination & more. Skip the lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/encinitas"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Encinitas DMV Services
        </h1>
        <p className="text-xl mb-6">
          Surf’s up—and so is your DMV experience. Registrations, titles, VIN
          verifications, smog updates & more, all in sunny Encinitas.
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
          From the colorful Flower Fields to the legendary surf breaks at Moonlight Beach,
          Encinitas embodies coastal cool. Don’t let DMV lines wash away your day—let
          Tags Express handle it all.
        </p>
        <p>
          We offer same-day DMV services right here in Encinitas. Skip the waiting room—
          our licensed team processes renewals, transfers, VIN checks, smog filings, and
          more in one seamless visit.
        </p>
      </section>

      {/* Why Encinitas Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Encinitas Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Beachside Convenience",
                desc: "Located near Coast Hwy 101 for easy drop-in service.",
              },
              {
                title: "Express Processing",
                desc: "Most transactions done in under 20 minutes—no DMV queues.",
              },
              {
                title: "Local Expertise",
                desc: "In-depth knowledge of Encinitas DMV requirements.",
              },
              {
                title: "Authorized Partner",
                desc: "Officially licensed to issue plates, tags, and titles.",
              },
              {
                title: "Transparent Pricing",
                desc: "Flat-rate fees explained upfront—no surprises.",
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
            <strong>Gather Your Docs:</strong> Plate number, last 5 VIN digits,
            ID, proof of insurance, and smog certificate if required.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Choose same-day service or
            reserve your spot for zero wait.
          </li>
          <li>
            <strong>We Handle Everything:</strong> Forms, DMV filings, and fees
            all completed on-site.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Encinitas DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Registration Renewals</li>
            <li>Title Transfers & Out-of-State Transfers</li>
            <li>Duplicate & Replacement Titles</li>
            <li>VIN Verification</li>
            <li>Smog Check Coordination</li>
            <li>Notary & Passport Photos</li>
            <li>Live Scan Fingerprinting</li>
            <li>Ride-Share Vehicle Inspections</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Neighborhoods We Serve in Encinitas
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Old Encinitas",
              "New Encinitas",
              "Leucadia",
              "Cardiff-by-the-Sea",
              "Olivenhain",
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
                a: "Walk-ins welcome daily; booking ahead eliminates all wait.",
              },
              {
                q: "Can you handle out-of-state transfers?",
                a: "Yes—we process and issue CA plates on-site for any state title.",
              },
              {
                q: "What payments are accepted?",
                a: "Debit, credit, Zelle, and cash are all accepted.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits wrap up within 15–20 minutes after check-in.",
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
        <p>📍 505 S Coast Hwy 101, Encinitas, CA 92024</p>
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
        <h2 className="text-3xl font-bold mb-4">Skip the DMV Lines Today</h2>
        <p className="mb-6">Fast. Friendly. Done. Book online or call now!</p>
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