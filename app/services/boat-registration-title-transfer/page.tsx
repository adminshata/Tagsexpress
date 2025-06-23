// app/services/boat-registration-transfer/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Anchor,
  FileText,
  ClipboardList,
  Zap,
  Clock,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

export default function BoatRegistrationTransferPage() {
  const whyItems = [
    {
      icon: Anchor,
      title: "Marine Expertise",
      desc: "We navigate California’s boat registration rules—no marina legwork for you.",
    },
    {
      icon: FileText,
      title: "Title & Documentation",
      desc: "From lien releases to bill of sale, we handle every form accurately.",
    },
    {
      icon: ClipboardList,
      title: "On-Water Verification",
      desc: "Mobile hull-ID inspections available right at your dock.",
    },
    {
      icon: Zap,
      title: "Fast Same-Day Service",
      desc: "Get your stickers and title printed on-site—often within hours.",
    },
  ];

  const formItems = [
    {
      label: "REG 90 – Vessel Registration Application",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg90.pdf",
    },
    {
      label: "Proof of Ownership (Bill of Sale)",
      icon: FileText,
      link: null,
    },
    {
      label: "REG 101 – Title Application",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg101.pdf",
    },
    {
      label: "Lien Release (if applicable)",
      icon: FileText,
      link: null,
    },
  ];

  const fees = [
    { label: "Vessel Registration Fee", amount: "$20–$55 (by length)" },
    { label: "Title Fee", amount: "$15" },
    { label: "Lien Recording Fee", amount: "$5" },
  ];

  const durations = [
    {
      icon: Clock,
      time: "1–2 Hours",
      desc: "Standard vessel registrations",
    },
    {
      icon: Zap,
      time: "Same-Day",
      desc: "Most title transfers",
    },
    {
      icon: CalendarDays,
      time: "24–48 Hours",
      desc: "Out-of-state transfers & complex cases",
    },
  ];

  const scenarios = [
    "New vessel purchase",
    "Out-of-state vessel transfer",
    "Motor-only title transfers",
    "Duplicate title requests",
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const faqItems = [
    {
      question: "Do I need a title for my boat?",
      answer: "Yes—vessels over 8 feet require California titles and registration.",
    },
    {
      question: "Can you register my boat at the marina?",
      answer: "Absolutely—our mobile team handles on-water hull inspections.",
    },
    {
      question: "How soon after registration can I launch?",
      answer: "You’ll receive your sticker immediately—launch as soon as you’re legal.",
    },
    {
      question: "What if I bought the boat out of state?",
      answer: "We’ll coordinate smog/VIN checks and handle the full title transfer.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Boat Registration & Transfer</h1>
          <p className="text-xl mb-6">
            Dockside or in-office, we simplify boat titles, registrations & transfers—fast and compliant.
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

      {/* What & Scenarios */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Is Boat Registration & Transfer?</h2>
          <p className="text-lg mb-4">
            Converting your vessel’s title and registering it with California’s DMV so you can legally boat in our waters.
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

      {/* How Long Does It Take? */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How Long Does It Take?</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {durations.map(({ icon: Icon, time, desc }) => (
            <div key={time} className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center">
              <Icon size={36} className="text-red-600 mb-3" />
              <h3 className="text-xl font-semibold mb-1">{time}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Transfer */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">How to Complete Your Boat Transfer</h2>
          <ol className="list-decimal list-inside space-y-4 text-lg">
            <li>
              <strong>Provide Vessel Info:</strong> Hull ID (HIN), bill of sale, and proof of insurance.
            </li>
            <li>
              <strong>On-Water Verification:</strong> We’ll inspect your hull ID dockside or at our office.
            </li>
            <li>
              <strong>Forms & Fees:</strong> Sign REG 90/REG 101, pay registration/title fees.
            </li>
            <li>
              <strong>Receive Documents:</strong> Get your California title, registration, and sticker same-day.
            </li>
          </ol>
        </div>
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

      {/* Transfer Fees */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transfer Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {fees.map(({ label, amount }) => (
              <div key={label} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition">
                <h3 className="font-semibold text-xl mb-2">{label}</h3>
                <p className="text-red-600 font-bold text-2xl">{amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            All fees include processing and electronic filing. Marina or smog/VIN test fees may apply.
          </p>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map((city) => (
            <span key={city} className="bg-gray-50 p-3 rounded shadow">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free Boat Registration Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a detailed quote—including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="boat-registration-transfer"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="boat-registration-transfer">Boat Registration & Transfer</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name", "Middle", "Last Name"].map((lbl, i) => (
              <div key={lbl}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.replace(/ /g, "").toLowerCase()}
                  required={i !== 1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>

          {/* Vessel Details */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Hull ID Number (HIN)
            </label>
            <input
              type="text"
              name="hin"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Vessel Length (ft)
            </label>
            <input
              type="number"
              name="length"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
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

          {/* Additional Notes */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Anything else?</label>
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
                <summary className="text-lg font-semibold text-red-600">
                  {question}
                </summary>
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