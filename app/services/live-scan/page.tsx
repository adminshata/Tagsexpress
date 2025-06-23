// app/services/live-scan/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Globe,
  CheckCircle,
  FileText,
  DollarSign,
  ClipboardList,
  Fingerprint,
} from "lucide-react";

export default function LiveScanPage() {
  const whyItems = [
    {
      icon: Zap,
      title: "Rapid Results",
      desc: "Electronic fingerprinting with results sent directly to your agency—often within 24–48 hours.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Transmission",
      desc: "State-of-the-art encryption guarantees your fingerprints are safely delivered to DOJ & FBI.",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      desc: "Spanish and Arabic assistance available for a smooth check-in and data review.",
    },
    {
      icon: CheckCircle,
      title: "Agency Approved",
      desc: "Our system is certified by California DOJ and FBI for licensing, employment, and background checks.",
    },
  ];

  const steps = [
    "Bring a valid government-issued photo ID.",
    "Complete and sign the Live Scan Request Form (BCIA 8016).",
    "Have your fingerprints electronically scanned.",
    "We transmit immediately and email you proof of submission.",
  ];

  const formItems = [
    {
      label: "BCIA 8016 – Live Scan Request",
      icon: FileText,
      link: "https://oag.ca.gov/sites/all/files/agweb/pdfs/bcaria/bcia8016.pdf",
    },
    {
      label: "Valid Photo ID",
      icon: ClipboardList,
      link: null,
    },
  ];

  const fees = [
    { label: "Service Fee", amount: "$25" },
    { label: "CA DOJ Fee",   amount: "$70" },
    { label: "FBI Fee",      amount: "$35" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const related = [
    { title: "VIN Verification", href: "/services/vin-verification" },
    { title: "Uber Inspection", href: "/services/uber-vehicle-inspection" },
    { title: "Turo Inspection", href: "/services/turo-vehicle-inspection" },
    { title: "Notary Public",    href: "/services/notary-public" },
  ];

  const faqItems = [
    {
      question: "What do I need to bring?",
      answer:   "A government-issued photo ID and your completed BCIA 8016 form.",
    },
    {
      question: "How soon will results arrive?",
      answer:   "Most agencies receive electronic results within 24–48 hours of your scan.",
    },
    {
      question: "Do I need an appointment?",
      answer:   "Walk-ins are welcome; scheduling ahead guarantees fastest service.",
    },
    {
      question: "Which agencies accept Live Scan?",
      answer:   "Licensing boards, employers, schools, and volunteer organizations statewide.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Live Scan Fingerprinting</h1>
          <p className="text-xl mb-6">
            Fast, secure electronic fingerprinting for licensing, employment, and background checks—agency-approved and same-day scanning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#live-scan-form"
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Clients Trust Our Live Scan</h2>
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
          <h2 className="text-3xl font-bold mb-6">What Is Live Scan?</h2>
          <p className="text-lg mb-4">
            Live Scan is an electronic fingerprint capture service that submits your prints directly to the California DOJ and FBI for background checks.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When Do You Need It?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Professional or contractor licensing</li>
            <li>School or volunteer background checks</li>
            <li>Employment screening</li>
            <li>Foster care or adoption processing</li>
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
          {formItems.map(({ label, icon: Icon, link }) => (
            <div
              key={label}
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

      {/* Fees & Payment */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Fees & Payment</h2>
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
            Final total = Service fee + CA DOJ fee + FBI fee.
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

      {/* Request a Quote */}
      <section
        id="live-scan-form"
        className="py-20 px-6 bg-red-600 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Request Live Scan Appointment</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll reserve your spot—fast, secure, and compliant.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6 text-left">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="live-scan"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="live-scan">Live Scan Fingerprinting</option>
            </select>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={i}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.replace(/\s+/g,"").toLowerCase()}
                  required={i!==1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
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
              Book My Appointment
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