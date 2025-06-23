// app/services/revive-salvage-vehicle/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Zap,
  FileText,
  ClipboardList,
  DollarSign,
  Trash2,
  ChevronRight,
} from "lucide-react";

export default function ReviveSalvageVehiclePage() {
  const whyItems = [
    {
      icon: Trash2,
      title: "Vehicle Revival Expertise",
      desc: "We convert salvage or junked titles back to registered status efficiently.",
    },
    {
      icon: FileText,
      title: "Full DMV Liaison",
      desc: "From salvage certificates to bond filings—handled end-to-end.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "Most salvage restorations complete within 24–48 hours.",
    },
    {
      icon: ClipboardList,
      title: "Document Verification",
      desc: "All forms pre-checked to avoid DMV rejections and delays.",
    },
  ];

  const formItems = [
    {
      label: "REG 488 – Salvage Certificate",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg488.pdf",
    },
    {
      label: "REG 472 – Bond Papers (if required)",
      icon: FileText,
      link: null,
    },
    {
      label: "Salvage Vehicle Inspection Report",
      icon: FileText,
      link: null,
    },
  ];

  const fees = [
    { label: "Salvage Title Fee", amount: "$50" },
    { label: "Bond Fee (if required)", amount: "$250" },
    { label: "Inspection Fee", amount: "$40" },
  ];

  const scenarios = [
    "Repaired after accident",
    "Flood or fire-damaged vehicles",
    "Rebuilt motorcycle salvage",
    "Insurance-totaled cars",
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const faqItems = [
    {
      question: "What is a salvage title?",
      answer: "A salvage title is issued when insurance deems a vehicle a total loss—our service restores it for road use.",
    },
    {
      question: "Do I need a surety bond?",
      answer: "If the DMV requires it, we arrange and file your bond documents.",
    },
    {
      question: "How long does the DMV process take?",
      answer: "Typically 2–3 business days once all paperwork is filed.",
    },
    {
      question: "Can I drive before restoration?",
      answer: "No—your vehicle must be legally reinstated before driving.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Revive Salvage & Junked Vehicles</h1>
          <p className="text-xl mb-6">
            Restore your salvage or junked vehicle’s title—skip the DMV headaches with Tags Express.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100">
              Get Started
            </Link>
            <a href="tel:6197779046" className="bg-black text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800">
              Call (619) 777-9046
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tags Express?</h2>
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

      {/* What is Salvage Title */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Is a Salvage Title?</h2>
          <p className="text-lg mb-4">
            A salvage title denotes a vehicle deemed a total loss—our service reinstates it for legal road use.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Scenarios We Handle</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {scenarios.map((s) => (
              <span
                key={s}
                className="bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How to Revive */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Revive Your Vehicle</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li><strong>Provide Documents:</strong> Salvage/junk title, ID, proof of ownership.</li>
          <li><strong>Complete Forms:</strong> We file REG 488, bond papers, and inspection reports.</li>
          <li><strong>Pay Fees:</strong> Title, bond, and inspection fees as required.</li>
          <li><strong>Receive Title:</strong> Get your revived title and registration in-hand—often same day.</li>
        </ol>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
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
          <h2 className="text-3xl font-bold mb-6">Fees & Penalties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {fees.map(({ label, amount }) => (
              <div key={label} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2">{label}</h3>
                <p className="text-red-600 font-bold text-2xl">{amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            Ask us about bond waivers for hardship cases and additional inspection fees.
          </p>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Cities We Serve Within 50 Miles of San Diego</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map((city) => (
            <span key={city} className="bg-gray-50 p-3 rounded shadow">{city}</span>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free Salvage Revival Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a detailed quote including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select disabled defaultValue="revive-salvage-vehicle" className="w-full border border-gray-300 rounded-lg px-4 py-3">
              <option value="revive-salvage-vehicle">Revive Salvage & Junked Vehicle</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-3 gap-4">
            { ["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={lbl}>
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

          {/* Vehicle Info */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">VIN (Last 5 Digits)</label>
            <input type="text" name="vin" maxLength={5} className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>

          {/* Notes */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Anything else?</label>
            <textarea name="notes" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition">
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
              <details key={question} className="bg-white rounded-lg shadow p-4 cursor-pointer group">
                <summary className="text-lg font-semibold text-red-600">{question}</summary>
                <p className="mt-2 text-gray-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}