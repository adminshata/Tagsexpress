// app/services/change-name-address-registration/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  MapPin,
  User,
  FileText,
  ClipboardList,
  ChevronRight,
  DollarSign,
} from "lucide-react";

export default function ChangeNameAddressPage() {
  const whyItems = [
    {
      icon: MapPin,
      title: "Instant Updates",
      desc: "We file your new address or name with DMV same-day—no waiting in line.",
    },
    {
      icon: User,
      title: "Legal Accuracy",
      desc: "Licensed partner ensures all forms are filled out correctly to avoid rejections.",
    },
    {
      icon: ClipboardList,
      title: "Document Guidance",
      desc: "We walk you through required proofs: lease, utility bill, marriage certificate, etc.",
    },
    {
      icon: ChevronRight,
      title: "Walk-In Convenience",
      desc: "Drop by our San Diego office, or book ahead for priority service.",
    },
  ];

  const formItems = [
    {
      label: "Notice of Change of Address (DMV 14)",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/dmv14.pdf",
    },
    {
      label: "Name Change Affidavit (REG 256)",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg256.pdf",
    },
    {
      label: "Proof of Residency or Name Change",
      icon: ClipboardList,
      link: null,
    },
  ];

  const fees = [
    { item: "Address Change", amount: "FREE (standard DMV fee waived)" },
    { item: "Name Change",      amount: "$14 (DMV processing fee)" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const faqItems = [
    {
      q: "What proof do I need for address change?",
      a: "Bring two documents showing your new address (lease, utility bill, bank statement).",
    },
    {
      q: "Can I change my name without a court order?",
      a: "Name changes require legal proof: marriage certificate, divorce decree, or court order.",
    },
    {
      q: "How long does it take?",
      a: "Most updates process in 10–15 minutes with us—no DMV wait.",
    },
    {
      q: "Is there a fee?",
      a: "Address changes are free; name changes carry a $14 DMV fee we collect for you.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Update Your Name &amp; Address
          </h1>
          <p className="text-lg mb-6">
            Change your legal name or residential address on your DMV record—
            fast, accurate, and stress-free.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Book Your Update
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Drivers Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
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
          <h2 className="text-3xl font-bold mb-6">
            What &amp; When to Update
          </h2>
          <p className="text-lg mb-4">
            California law requires you to update your DMV record whenever you
            move or legally change your name.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>You moved to a new home or rental within California.</li>
            <li>You were married, divorced, or had a legal name change.</li>
            <li>You need to keep DMV mail and notices current.</li>
          </ul>
        </div>
      </section>

      {/* How to Update */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          How to File Your Update
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Docs:</strong> New proof of address, or legal name
            change paperwork.
          </li>
          <li>
            <strong>Choose Service:</strong> Walk in for on-the-spot filing or
            book ahead online.
          </li>
          <li>
            <strong>Submit Forms:</strong> We complete DMV-14 &amp; REG-256 for
            you, and collect any DMV fees.
          </li>
          <li>
            <strong>Get Confirmation:</strong> Receive updated registration
            card &amp; sticker (if address changed) immediately.
          </li>
        </ol>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Required DMV Forms
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, link }, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4" />
              <p className="font-semibold mb-2">{label}</p>
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="text-red-600 underline text-sm"
                >
                  Download PDF
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fees */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fees &amp; Penalties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fees.map(({ item, amount }, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center"
              >
                <DollarSign size={32} className="text-red-600 mb-2 mx-auto" />
                <h3 className="font-semibold mb-1">{item}</h3>
                <p className="text-gray-700">{amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto text-center text-sm">
          {cities.map((city, i) => (
            <span
              key={i}
              className="bg-gray-50 p-3 rounded shadow"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Request a Free Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Request a Free Update Quote
        </h2>
        <p className="mb-10">
          Fill out the form and we’ll deliver your updated registration
          details and fees right away.
        </p>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 text-left">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Service
            </label>
            <select
              name="service"
              defaultValue="change-name-address-registration"
              disabled
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="change-name-address-registration">
                Change Name &amp; Address
              </option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i)=>(
              <div key={i}>
                <label className="block font-semibold text-gray-700 mb-1">
                  {lbl}
                </label>
                <input
                  type="text"
                  name={lbl.toLowerCase().replace(/ /g,"")}
                  required={i!==1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Additional Details
            </label>
            <textarea
              name="notes"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Get My Quote
            </button>
          </div>
        </form>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }, i) => (
              <details
                key={i}
                className="bg-white rounded-lg shadow p-4 cursor-pointer group"
              >
                <summary className="text-lg font-semibold text-red-600">
                  {q}
                </summary>
                <p className="mt-2 text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}