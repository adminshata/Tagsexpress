"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function VistaPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>Vista DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Efficient, friendly DMV services in Vista—registration renewals, title transfers, VIN checks, smog coordination & more. Skip the DMV hassle with Tags Express."
        />
        <link rel="canonical" href="https://tagsexpress.com/city-pages/vista" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Vista DMV Services
        </h1>
        <p className="text-xl mb-6">
          Nestled between the coast and mountains, Vista deserves DMV services as dynamic as its community.
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
          From historic downtown Vista to the scenic Brengle Terrace Park, our city thrives on community and convenience.
          Skip the DMV lines and let Tags Express handle your registrations, transfers, VIN verifications, and smog updates.
        </p>
        <p>
          Our licensed team completes all DMV paperwork in one stop—fast, accurate, and stress-free.
        </p>
      </section>

      {/* Why Vista Residents Trust Us */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Vista Drivers Choose Tags Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Fast Turnaround",
                desc: "Most visits complete in under 20 minutes—no DMV queues.",
              },
              {
                title: "Authorized Partner",
                desc: "Licensed by the DMV to issue plates, tags, and titles.",
              },
              {
                title: "Local Expertise",
                desc: "In-depth knowledge of Vista’s DMV requirements and processes.",
              },
              {
                title: "Convenient Location",
                desc: "Easy access near Eucalyptus Ave with ample parking.",
              },
              {
                title: "Transparent Pricing",
                desc: "Flat fees upfront with no hidden charges.",
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
            ID, proof of insurance, and smog certificate if applicable.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Drop by anytime or reserve
            a slot for zero wait time.
          </li>
          <li>
            <strong>We Handle Everything:</strong> From forms to DMV filings,
            all completed on-site.
          </li>
        </ol>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Vista DMV Services
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
            Neighborhoods We Serve in Vista
          </h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Downtown Vista",
              "Brengle Terrace",
              "Shadowridge",
              "Guajome Park",
              "North Broadway",
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
                a: "Walk-ins welcome daily; booking ahead eliminates wait times.",
              },
              {
                q: "Can you handle out-of-state transfers?",
                a: "Yes—we issue CA plates for any out-of-state title on-site.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept debit, credit, Zelle, and cash.",
              },
              {
                q: "How long does a visit take?",
                a: "Most visits complete within 15–20 minutes after check-in.",
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
        <p>📍 200 Civic Center Dr, Vista, CA 92084</p>
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