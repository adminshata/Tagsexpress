// app/services/motorhome-title-transfer/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Bus,
  FileText,
  ClipboardList,
  Zap,
  DollarSign,
} from "lucide-react";

export default function MotorhomeTitleTransferPage() {
  const whyItems = [
    {
      icon: Bus,
      title: "RV & Motorhome Experts",
      desc: "Specialized in Class A/B/C titling, registrations, and VIN verifications.",
    },
    {
      icon: FileText,
      title: "Complete Paperwork",
      desc: "From applications to lien releases, we prepare and file every DMV form.",
    },
    {
      icon: ClipboardList,
      title: "Pre-Submission Review",
      desc: "We check your docs up front to eliminate DMV rejections and delays.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "Most RV title transfers and registrations done within 24 hours.",
    },
  ];

  const formItems = [
    {
      label: "REG 101 – Application for Title or Registration",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg101.pdf",
    },
    {
      label: "REG 262 – Gift Transfer Declaration",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg262.pdf",
    },
    {
      label: "VIN Verification (396 Form)",
      icon: ClipboardList,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/vc396.pdf",
    },
    {
      label: "SR-1 – Evidence of Insurance",
      icon: ClipboardList,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/sr1.pdf",
    },
  ];

  const fees = [
    { label: "Title Transfer Fee", amount: "$15" },
    { label: "Registration Fee", amount: "$58" },
    { label: "VIN Verification Fee", amount: "$6" },
  ];

  const scenarios = [
    "Out-of-state RV transfers",
    "Gift & family transfers",
    "Duplicate title requests",
    "Salvage & rebuilt RV titles",
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const faqItems = [
    {
      q: "Do motorhomes require weight classification?",
      a: "Yes—depending on size, we’ll help you choose the correct weight class for registration.",
    },
    {
      q: "Can you handle salvage titles for RVs?",
      a: "Absolutely—we guide you through REG 4885 and all necessary inspections.",
    },
    {
      q: "What if I don’t have my original title?",
      a: "We can obtain a duplicate title before transfer using REG 227.",
    },
    {
      q: "How soon can I drive my RV?",
      a: "Once paperwork is filed—often same or next business day—you’ll have your new tags in hand.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Motorhome Title Transfer</h1>
          <p className="text-xl mb-6">
            Whether Class A, B, or C—you’re covered. We’ll handle your California title, registration, VIN check, and tags swiftly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Get Started
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Why RV Owners Trust Tags Express
        </h2>
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
          <h2 className="text-3xl font-bold mb-6">What Is an RV Title Transfer?</h2>
          <p className="text-lg mb-4">
            Converting your existing or out-of-state RV title into a California title so you can legally register and drive your motorhome.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When You Need This</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>You just moved to California with a titled motorhome.</li>
            <li>You purchased an RV from out of state.</li>
            <li>Your title was lost or damaged.</li>
            <li>You received the RV as a gift or inheritance.</li>
          </ul>
        </div>
      </section>

      {/* How to Transfer */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Complete Your Transfer</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Docs:</strong> Out-of-state title (or duplicate), ID, proof of insurance.
          </li>
          <li>
            <strong>VIN & Weight Check:</strong> We coordinate any required inspections.
          </li>
          <li>
            <strong>Forms & Payment:</strong> Sign REG 101, REG 262 (if gift), file SR-1, pay fees.
          </li>
          <li>
            <strong>Drive Legal:</strong> Receive your California title, registration card, and tags.
          </li>
        </ol>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Required DMV Forms</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, link }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
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

      {/* Fees */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transfer & Registration Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
            All fees include processing, electronic filing, and decal issuance.
          </p>
        </div>
      </section>

      {/* Transfer Scenarios */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Title Transfer Scenarios We Handle</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
            {scenarios.map((s, i) => (
              <li
                key={i}
                className="flex items-center space-x-2 text-lg text-gray-700"
              >
                <Bus size={20} className="text-red-600 flex-shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Long Does It Take? */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">How Long Does It Take?</h2>
        <p className="text-lg text-gray-700">
          Standard motorhome transfers complete within 24 hours; simple renewals often same-day.
        </p>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map(city => (
            <span
              key={city}
              className="bg-gray-50 p-3 rounded shadow text-gray-800"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Request a Free Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Request a Free RV Transfer Quote
        </h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a detailed quote—including fees, timelines, and any special requirements.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Service
            </label>
            <select
              disabled
              defaultValue="motorhome-title-transfer"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="motorhome-title-transfer">
                Motorhome Title Transfer
              </option>
            </select>
          </div>

          {/* Name */}
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={i}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.toLowerCase().replace(/ /g,"")}
                  required={i!==1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>

          {/* VIN & Plate */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              VIN (Last 5 Digits)
            </label>
            <input
              type="text"
              name="vin"
              maxLength={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              License Plate #
            </label>
            <input
              type="text"
              name="plate"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Email */}
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

          {/* Notes */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Anything Else?
            </label>
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
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <details
                key={q}
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

      {/* Contact Info */}
      <section className="py-10 px-6 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
        <p className="text-gray-700 mb-2">
          Address: 3845 University Ave, San Diego, CA 92105
        </p>
        <p className="text-gray-700 mb-2">
          Phone: <a href="tel:6197779046" className="text-red-600">(619) 777-9046</a>
        </p>
        <p className="text-gray-700">
          Email:{" "}
          <a href="mailto:dmv@tagsexpress.com" className="text-red-600">
            dmv@tagsexpress.com
          </a>
        </p>
        <p className="text-gray-700 mt-4">
          Hours: Mon–Fri 9 AM–7 PM, Sat 9 AM–6 PM, Sun 12 PM–6 PM
        </p>
      </section>

      <Footer />
    </main>
  );
}