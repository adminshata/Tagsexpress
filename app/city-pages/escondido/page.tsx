"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function EscondidoPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Escondido DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Quick, reliable DMV services in Escondido—registration renewals, title transfers, VIN checks, smog coordination & more. Skip the DMV lines with Tags Express."
        />
        <link
          rel="canonical"
          href="https://tagsexpress.com/city-pages/escondido"
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Escondido DMV Services
        </h1>
        <p className="text-xl mb-6">
          Nestled in North County, Escondido deserves DMV services as friendly as its community.
          We handle registrations, transfers, VIN verifications, smog filings & more—fast.
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
          From the vibrant downtown district to the scenic Dixon Lake, Escondido has it all.
          Don’t let DMV errands slow you down—Tags Express brings hassle-free, same-day DMV
          services right here.
        </p>
        <p>
          Our licensed team processes renewals, title transfers, VIN checks, smog coordination,
          and more in just one stop. Skip the DMV lines and get back to enjoying Escondido.
        </p>
      </section>

      {/* Why Escondido Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Escondido Chooses Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Rapid Service",
                desc: "Complete most transactions in under 20 minutes—no DMV waiting rooms.",
              },
              {
                title: "Official Authorization",
                desc: "Licensed DMV partner—issue plates, tags, and titles on-site.",
              },
              {
                title: "Local Knowledge",
                desc: "Familiar with Escondido’s DMV protocols and requirements.",
              },
              {
                title: "Convenient Location",
                desc: "Central spot near Grand Avenue for easy access and parking.",
              },
              {
                title: "Transparent Fees",
                desc: "Flat-rate pricing explained upfront—no hidden costs.",
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
            <strong>Gather Your Documents:</strong> Plate number, last 5 digits of VIN,
            valid ID, proof of insurance, and smog certificate if needed.
          </li>
          <li>
            <strong>Walk In or Schedule Online:</strong> Drop by anytime or reserve
            your spot for zero wait.
          </li>
          <li>
            <strong>We Take Care of Everything:</strong> From paperwork to fees,
            all handled on-site by our DMV experts.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Escondido DMV Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Vehicle Registration Renewals</li>
            <li>Title Transfers & Out-of-State Transfers</li>
            <li>Duplicate & Replacement Titles</li>
            <li>VIN Verification</li>
            <li>Smog Check Coordination</li>
            <li>Notary Services & Passport Photos</li>
            <li>Live Scan Fingerprinting</li>
            <li>Ride-Share Vehicle Inspections</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Neighborhoods We Serve in Escondido
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Downtown Escondido",
              "Valley Center",
              "North Broadway",
              "Country Club",
              "Lake Wohlford",
            ].map((area) => (
              <span key={area} className="bg-gray-100 px-3 py-1 rounded">
                {area}
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
                a: "Yes—walk-ins welcome daily; booking ensures no wait time.",
              },
              {
                q: "Do you handle out-of-state titles?",
                a: "Absolutely—we convert and issue CA plates on-site for any state.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept debit, credit, Zelle, and cash.",
              },
              {
                q: "How long will my visit take?",
                a: "Most visits finish within 15-20 minutes after check-in.",
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
        <p>📍 400 W Grand Ave, Escondido, CA 92025</p>
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