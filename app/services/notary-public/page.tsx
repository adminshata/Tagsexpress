// app/services/notary-public/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Clock,
  MapPin,
  Smartphone,
  ClipboardList,
  CalendarDays,
  DollarSign,
} from "lucide-react";

export default function NotaryPublicPage() {
  const whyItems = [
    {
      icon: ShieldCheck,
      title: "Licensed Notaries",
      desc: "Our team is commissioned by the State of California—always official and legal.",
    },
    {
      icon: Smartphone,
      title: "Mobile Service",
      desc: "We come to your home, office, or hospital—weekday evenings & weekends available.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "Most documents notarized in under 10 minutes once we arrive.",
    },
    {
      icon: MapPin,
      title: "Central & Coastal Coverage",
      desc: "Serving all of San Diego County, from Oceanside to Imperial Beach.",
    },
  ];

  const whenItems = [
    "Real estate deeds & mortgages",
    "Powers of Attorney & affidavits",
    "Wills, trusts, & living trusts",
    "Loan documents & contracts",
    "Corporate resolutions & forms",
    "School & immigration paperwork",
  ];

  const formItems = [
    {
      label: "Valid Government-Issued ID",
      icon: ClipboardList,
      link: null,
    },
    {
      label: "Document(s) to Notarize",
      icon: FileText,
      link: null,
    },
    {
      label: "Proof of Ownership (if vehicle title)",
      icon: FileText,
      link: null,
    },
  ];

  const fees = [
    { label: "Standard Notarization",       amount: "$15 / signature" },
    { label: "Mobile Travel Fee",            amount: "$30 flat" },
    { label: "After-Hours / Weekend Fee",    amount: "$20 extra" },
    { label: "Each Additional Signature",    amount: "$5" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const relatedServices = [
    { title: "Registration Renewal",        href: "/services/registration-renewal" },
    { title: "Power of Attorney",           href: "/services/notary-public" }, // itself
    { title: "Title Transfers",             href: "/services/california-title-transfer" },
    { title: "VIN Verification",            href: "/services/vin-verification" },
  ];

  const faqItems = [
    {
      question: "What ID do I need to bring?",
      answer:   "A current government-issued photo ID (driver’s license, passport, etc.).",
    },
    {
      question: "Can you notarize online?",
      answer:   "We only offer in-person notarizations per CA law—not remote online notarization.",
    },
    {
      question: "Do you travel outside normal hours?",
      answer:   "Yes—after-hours and weekend visits are available for an additional fee.",
    },
    {
      question: "Are all documents eligible?",
      answer:   "Most personal, legal, and business documents—except those requiring witnesses that we must pre-arrange.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Notary Public Services</h1>
          <p className="text-xl mb-6">
            Fast, reliable notarizations—wherever you are in San Diego County.  
            Residential, commercial, or hospital visits.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Book Now
            </Link>
            <a
              href="tel:6197779046"
              className="bg-black text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800"
            >
              Call (619) 777-9046
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Notary?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {whyItems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What & When */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">When To Use a Notary</h2>
          <p className="text-lg mb-4">
            We notarize a wide range of documents, including:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {whenItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Prepare Documents:</strong> Have your papers and ID ready.
          </li>
          <li>
            <strong>Sign in Presence:</strong> Sign each document before the notary.
          </li>
          <li>
            <strong>Notarization Stamp:</strong> We verify identity & apply official seal.
          </li>
          <li>
            <strong>Receive Copies:</strong> Get your original & stamped copies instantly.
          </li>
        </ol>
      </section>

      {/* Required Documents */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Required Documents</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, link }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4" />
              <p className="font-semibold mb-2">{label}</p>
              {link && (
                <Link href={link} target="_blank" className="text-red-600 underline text-sm">
                  Download PDF
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fees & Surcharges */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fees & Surcharges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map(({ label, amount }) => (
              <div
                key={label}
                className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition"
              >
                <h3 className="font-semibold text-xl mb-2">{label}</h3>
                <p className="text-red-600 font-bold text-2xl">{amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            Travel & after-hours fees apply only when requested.
          </p>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map(city => (
            <span key={city} className="bg-gray-50 p-3 rounded shadow text-gray-800">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 px-6 bg-gray-100">
        <h3 className="text-2xl font-semibold text-center mb-6">Related Services</h3>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
          {relatedServices.map(({ title, href }) => (
            <Link
              key={href}
              href={href}
              className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              {title}
            </Link>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free Notary Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll confirm your appointment & fees by email.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="notary-public"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="notary-public">Notary Public Service</option>
            </select>
          </div>

          {/* Name */}
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={lbl}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.toLowerCase().replace(/ /g,"")}
                  required={i !== 1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Additional Details</label>
            <textarea
              name="notes"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition"
            >
              Get My Quote
            </button>
          </div>
        </form>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map(({ question, answer }) => (
              <details
                key={question}
                className="bg-white rounded-lg shadow p-4 cursor-pointer group"
              >
                <summary className="text-lg font-semibold text-red-600 group-open:mb-2">
                  {question}
                </summary>
                <p className="text-gray-700 mt-2">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}