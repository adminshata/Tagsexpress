// app/services/pay-parking-citation/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Ticket,
  ShieldCheck,
  Clock,
  DollarSign,
  ClipboardList,
} from "lucide-react";

export default function PayParkingCitationPage() {
  const whyItems = [
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      desc: "Encrypted payment processing so your data stays safe.",
    },
    {
      icon: Clock,
      title: "Avoid Court",
      desc: "We submit payments immediately to prevent escalation.",
    },
    {
      icon: Ticket,
      title: "Full Citation Support",
      desc: "We handle the entire citation—payment, proof, and follow-up.",
    },
    {
      icon: DollarSign,
      title: "No Hidden Fees",
      desc: "Transparent flat-rate processing, no surprises at checkout.",
    },
  ];

  const steps = [
    "Provide your citation number & license plate.",
    "Select your payment method (card, cash, Zelle).",
    "Approve the total (fine + processing fee).",
    "Receive proof of payment immediately via email.",
  ];

  const formItems = [
    {
      label: "Citation Number",
      icon: ClipboardList,
      placeholder: "e.g. 123ABC456",
    },
    {
      label: "License Plate #",
      icon: Ticket,
      placeholder: "e.g. CA 7XYZ123",
    },
  ];

  const fees = [
    { label: "Processing Fee", amount: "$10" },
    { label: "Late Penalty",    amount: "Varies by days late" },
    { label: "Base Fine",       amount: "Depends on violation" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const related = [
    { title: "Registration Renewal", href: "/services/registration-renewal" },
    { title: "Replacement Sticker",  href: "/services/replacement-sticker" },
    { title: "Title Transfer",       href: "/services/california-title-transfer" },
    { title: "Check Registration Status", href: "/services/check-vehicle-registration-status" },
  ];

  const faqItems = [
    {
      question: "Can I pay after hours?",
      answer:   "Yes—use our secure online form any time, or walk in during business hours.",
    },
    {
      question: "What payment methods are accepted?",
      answer:   "We accept debit/credit cards, cash, and Zelle transfers.",
    },
    {
      question: "How soon is the citation updated?",
      answer:   "We file immediately; most agencies reflect payment within 24 hours.",
    },
    {
      question: "What if I dispute the ticket?",
      answer:   "We can refer you to the proper channels and hold payment pending your dispute.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Pay Your Parking Citation</h1>
          <p className="text-xl mb-6">
            Skip the DMV lines—let Tags Express handle your parking ticket payment quickly and securely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#payment-form"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Pay Now
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Drivers Trust Us</h2>
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
          <h2 className="text-3xl font-bold mb-6">What Is a Parking Citation Payment?</h2>
          <p className="text-lg mb-4">
            Submitting your fine to the proper agency so your ticket is marked paid, avoiding further penalties.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When to Pay</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Within the due date on your citation to avoid late fees.</li>
            <li>After receiving a DMV hold notification.</li>
            <li>When you need proof of payment for your records.</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* What You Need */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What You Need</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, placeholder }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4" />
              <p className="font-semibold mb-2">{label}</p>
              <span className="text-gray-500 text-sm">{placeholder}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fees & Penalties */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fees & Penalties</h2>
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
            Final amount = base fine + processing fee + any applicable late penalty.
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
      <section className="py-10 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-6">Related Services</h3>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
          {related.map(({ title, href }) => (
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

      {/* Request Payment */}
      <section
        id="payment-form"
        className="py-20 px-6 bg-red-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Request Citation Payment</h2>
        <p className="mb-10">
          Fill out the form below and we’ll immediately process your ticket payment.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Citation Number
            </label>
            <input
              type="text"
              name="citationNumber"
              required
              placeholder="e.g. 123ABC456"
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
              required
              placeholder="e.g. CA 7XYZ123"
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
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition"
            >
              Pay My Citation
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