// app/services/duplicate-title/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Zap,
  Archive,
  ClipboardList,
  FileText,
  DollarSign,
} from "lucide-react";

export default function DuplicateTitlePage() {
  // 1. Why Choose Us
  const whyItems = [
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      desc: "Get your duplicate title in under an hour—no DMV lines required.",
    },
    {
      icon: Archive,
      title: "Authorized DMV Partner",
      desc: "We’re licensed to issue official duplicate titles on-site.",
    },
    {
      icon: ClipboardList,
      title: "Error-Free Paperwork",
      desc: "We verify and fill your forms to eliminate DMV rejections.",
    },
    {
      icon: FileText,
      title: "Walk-In Service",
      desc: "Drop by anytime—no appointment needed for most cases.",
    },
  ];

  // 2. Required DMV Forms
  const formItems = [
    {
      label: "REG 227 – Application for Duplicate Title",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg227.pdf",
    },
    {
      label: "Odometer Disclosure (if vehicle <10 years old)",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/vc-101.pdf",
    },
    {
      label: "Proof of Identity",
      icon: ClipboardList,
      link: null,
    },
  ];

  // 3. Fees & Add-Ons
  const fees = [
    { label: "Duplicate Title Fee", amount: "$23" },
    { label: "Fast-Track Service", amount: "$10 (optional)" },
    { label: "Lien Release (if needed)", amount: "$5" },
  ];

  // 4. Cities We Serve
  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  // 5. FAQ
  const faqItems = [
    {
      question: "What if my title was stolen?",
      answer:
        "We’ll walk you through filing a police report (optional) and issuing a new title.",
    },
    {
      question: "Can I add a lien holder later?",
      answer:
        "Yes—just provide lien paperwork and we’ll include it on your duplicate title.",
    },
    {
      question: "Do you need an appointment?",
      answer:
        "Walk-ins are welcome, but booking ahead guarantees zero wait time.",
    },
    {
      question: "How do I prove ownership?",
      answer:
        "Bring your vehicle registration, insurance, and a valid photo ID.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Duplicate Title Service</h1>
          <p className="text-xl mb-6">
            Lost, stolen or damaged your title? We’ll get you a certified duplicate—same day, stress-free.
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
          Why Drivers Choose Us
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

      {/* What Is & When */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Is a Duplicate Title?</h2>
          <p className="text-lg mb-4">
            A duplicate title is an official replacement for your original vehicle title when it’s lost, stolen, mutilated, or incorrect.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When You Need It</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg max-w-md mx-auto">
            <li>Your title was lost or stolen.</li>
            <li>Your title was damaged, defaced, or illegible.</li>
            <li>You need to add or remove a lienholder.</li>
          </ul>
        </div>
      </section>

      {/* How to Get Your Duplicate Title */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          How to Get Your Duplicate Title
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Info:</strong> VIN, license plate, and a valid ID.
          </li>
          <li>
            <strong>Fill REG 227:</strong> We provide and verify the form for you.
          </li>
          <li>
            <strong>Pay Fees:</strong> Standard $23 fee—or add fast-track for $10.
          </li>
          <li>
            <strong>Receive Title:</strong> We print your duplicate on the spot.
          </li>
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

      {/* Fees & Add-Ons */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fees & Add-Ons</h2>
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
            Fast-track add-on ensures under 30-minute turnaround. Lien release fee applies if your vehicle has an active lien.
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
          Request a Free Duplicate Title Quote
        </h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a firm quote—including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Service
            </label>
            <select
              disabled
              defaultValue="duplicate-title"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="duplicate-title">Duplicate Title</option>
            </select>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name", "Middle", "Last Name"].map((lbl, i) => (
              <div key={lbl}>
                <label className="block font-semibold text-gray-700 mb-1">
                  {lbl}
                </label>
                <input
                  type="text"
                  name={lbl.replace(/ /g, "").toLowerCase()}
                  required={i !== 1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              VIN (Last 5 Digits)
            </label>
            <input
              type="text"
              name="vin"
              maxLength={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
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
              Anything else?
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
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition"
            >
              Send My Quote
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