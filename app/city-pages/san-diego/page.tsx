"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SanDiegoPage() {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>San Diego DMV Services | Tags Express</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Fast DMV services in San Diego. Registrations, title transfers, plates, VIN checks & more. Skip the DMV lines with Tags Express."
        />
        <link rel="canonical" href="https://tagsexpress.com/city-pages/san-diego" />
      </Head>

      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">San Diego DMV Services</h1>
        <p className="text-xl mb-6">
          Fast DMV services in San Diego. Registrations, title transfers, plates & more. Skip DMV lines today!
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Get a Free Quote
        </Link>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-gray-800">
        <p className="mb-6">
          Sunshine, salty breezes, and a city that never stops moving — that's San Diego. From Pacific Beach’s surf to Old Town’s history,
          it’s a place where casual meets cutting-edge. Whether you’re a student, professional, or longtime local,
          life here moves fast.
        </p>
        <p>
          Life’s too short to waste time at the DMV. Tags Express gives San Diego drivers a smarter, faster way to handle vehicle
          paperwork — from registration renewals to title transfers, VIN verifications, and smog check coordination. Located
          minutes from downtown, we offer walk-in and appointment services so you can get in, get out, and get back to living
          the San Diego life.
        </p>
      </section>

      {/* Why Trust */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why San Diego Drivers Trust Tags Express</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Same-Day DMV Processing</h3>
              <p>Walk out with your registration, stickers, or completed title paperwork — no weeks of waiting.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Official DMV Partner</h3>
              <p>We’re licensed and authorized to process DMV transactions directly — plates, tags, titles, and more.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Friendly, Multilingual Staff</h3>
              <p>English, Spanish, Arabic, and more — we make sure you feel welcome and understood.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Convenient Central Location</h3>
              <p>Find us at 3845 University Ave with free parking and fast check-in service.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Affordable, Transparent Pricing</h3>
              <p>No hidden fees, no surprises — just fast, fair DMV service you can trust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How to Get DMV Services at Tags Express</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-800">
          <li>
            <strong>Gather Your Vehicle Info:</strong> License plate number, last 5 digits of VIN, proof of insurance, smog certificate.
          </li>
          <li>
            <strong>Walk In or Book Online:</strong> Walk-ins welcome 7 days a week or schedule an appointment for faster service.
          </li>
          <li>
            <strong>Get It Done:</strong> Our experts complete your paperwork, issue your documents, and get you road-ready—same day.
          </li>
        </ol>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our San Diego DMV Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>Registration Renewal</li>
            <li>Title Transfers (Incl. Out-of-State)</li>
            <li>Duplicate & Replacement Titles</li>
            <li>VIN Verification</li>
            <li>Smog Check Coordination</li>
            <li>Notary & Passport Photos</li>
            <li>Live Scan Fingerprinting</li>
            <li>Ride-share Inspections (Uber, Lyft, Turo)</li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Neighborhoods We Serve in San Diego</h2>
          <p className="mb-6 text-gray-700">
            We proudly help drivers across the metro area, including:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
            {[
              "Chula Vista","National City","La Mesa","El Cajon","Lemon Grove",
              "Spring Valley","Santee","Imperial Beach","Bonita","Coronado"
            ].map((n) => (
              <span key={n} className="bg-gray-100 px-3 py-1 rounded">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="font-semibold mb-1">Can I renew my registration without visiting the DMV?</h3>
              <p>Yes! We offer same-day renewals on-site—no DMV visit required.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Do you handle out-of-state title transfers?</h3>
              <p>Absolutely—bring your old title and we’ll convert it in minutes.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Is an appointment required?</h3>
              <p>Walk-ins welcome, but booking online guarantees the fastest service.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">What forms of payment do you accept?</h3>
              <p>Debit, credit, Zelle, and cash are all accepted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact & Hours</h2>
          <p className="mb-2">📍 3845 University Ave, San Diego, CA 92105</p>
          <p className="mb-2">📞 (619) 777-9046</p>
          <p className="mb-2">✉️ <a href="mailto:dmv@tagsclinic.com" className="text-red-600 underline">dmv@tagsclinic.com</a></p>
          <p className="mb-2">🕒 Mon–Fri: 9 AM–7 PM | Sat: 9 AM–6 PM | Sun: 12 PM–6 PM</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Skip the DMV?</h2>
        <p className="mb-6">Fast. Easy. Done. Book online or call now!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Book Now
          </Link>
          <a href="tel:6197779046" className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Call Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}