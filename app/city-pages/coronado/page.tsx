"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CoronadoPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Coronado DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast, friendly DMV services in Coronado—registration renewals, title transfers, VIN checks, smog coordination & more. Skip the lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/coronado"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Coronado DMV Services
        </h1>
        <p className="text-xl mb-6">
          Island elegance meets efficient DMV service. Registrations, titles,
          VIN verifications, smog updates & more—right in Coronado.
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
          Known for its iconic Hotel del Coronado, pristine beaches, and quaint
          downtown, Coronado is a jewel of the bay. Whether you’re strolling
          Orange Avenue or cycling the Silver Strand, don’t let DMV chores slow
          you down.
        </p>
        <p>
          Tags Express brings same-day DMV services to Coronado. Skip the lines
          and let our licensed experts handle your registrations, title
          transfers, VIN verifications, smog coordination, and more in one
          convenient visit.
        </p>
      </section>

      {/* Why Coronado Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Coronado Locals Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Express Service",
                desc: "Most transactions completed in under 20 minutes—no more DMV waits.",
              },
              {
                title: "Official Partner",
                desc: "Licensed by the DMV to issue plates, tags, and titles on-site.",
              },
              {
                title: "Island Expertise",
                desc: "Familiar with Coronado’s unique protocols and local rules.",
              },
              {
                title: "Central Location",
                desc: "Conveniently near Orange Avenue with easy parking options.",
              },
              {
                title: "Upfront Pricing",
                desc: "Clear flat-rate fees—no hidden costs or surprises.",
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
            ID, proof of insurance, and smog certificate if required.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Drop by anytime or reserve
            your spot for zero wait.
          </li>
          <li>
            <strong>We Handle It All:</strong> Forms, DMV filings, and fees
            processed accurately on-site.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Coronado DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Vehicle Registration Renewals</li>
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
            Neighborhoods We Serve in Coronado
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Coronado Village",
              "Coronado Cays",
              "North Island",
              "Glorietta Bay",
              "Silver Strand",
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
                a: "Yes—walk-ins welcome daily; booking ahead guarantees zero wait.",
              },
              {
                q: "Do you process out-of-state titles?",
                a: "Absolutely—we convert and issue CA plates on-site for any state title.",
              },
              {
                q: "Which payment methods do you accept?",
                a: "Debit, credit, Zelle, and cash are accepted.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits finish within 15–20 minutes after check-in.",
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
        <p>📍 110 Orange Ave, Coronado, CA 92118</p>
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
        <p className="mb-6">Quick. Simple. Done. Book online or call now!</p>
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