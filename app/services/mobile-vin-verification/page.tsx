// app/services/mobile-vin-verification/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  CheckCircle,
  Smartphone,
  Zap,
  CalendarDays,
  FileText,
  ClipboardList,
  DollarSign,
  CornerUpLeft,
  RefreshCw,
  Anchor,
  Tag,
  Clock,
} from "lucide-react";

export default function MobileVinVerificationPage() {
  const whyItems = [
    {
      icon: CheckCircle,
      title: "State-Certified Inspectors",
      desc: "Our team is DMV- and CHP-authorized for fully legal VIN inspections.",
    },
    {
      icon: Smartphone,
      title: "We Come To You",
      desc: "On-site service anywhere in San Diego County—no need to drive to us.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "Most mobile inspections complete in under 15 minutes once we arrive.",
    },
    {
      icon: CalendarDays,
      title: "Same-Day Scheduling",
      desc: "Book online or by phone—slots filled daily, often within hours.",
    },
  ];

  const scenarios = [
    { label: "Out-of-State Title Transfers", icon: CornerUpLeft },
    { label: "Salvage & Junked Vehicle Revival", icon: RefreshCw },
    { label: "Bonded Titles", icon: Anchor },
    { label: "VIN Plate Replacement", icon: Tag },
    { label: "Vintage/Antique Registrations", icon: Clock },
  ];

  const formItems = [
    {
      label: "VIN Verification Form (REG 31)",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2021/12/reg31.pdf",
    },
    {
      label: "Proof of Insurance",
      icon: ClipboardList,
      link: null,
    },
    {
      label: "Out-of-State Title (when applicable)",
      icon: FileText,
      link: null,
    },
  ];

  const fees = [
    { label: "On-Site VIN Inspection", amount: "$25" },
    { label: "Travel Fee (Mobile)",     amount: "$30" },
    { label: "Each Additional Vehicle", amount: "$20" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const relatedServices = [
    { title: "VIN Verification",                 href: "/services/vin-verification" },
    { title: "Out-of-State Title Transfer",      href: "/services/out-of-state-title-transfer" },
    { title: "Revived Salvage & Junked Vehicle", href: "/services/revived-salvage-junked-vehicle" },
    { title: "Reinstate Suspended Registration", href: "/services/reinstate-suspended-vehicle-registration" },
  ];

  const faqItems = [
    {
      question: "How quickly can you arrive on-site?",
      answer:   "Typically within 2–4 hours of booking anywhere in San Diego County.",
    },
    {
      question: "Do I need to bring my car to a location?",
      answer:   "No—our inspector comes to your home or office with all equipment.",
    },
    {
      question: "What if I have multiple vehicles?",
      answer:   "Each additional vehicle is only $20, and we can inspect them back-to-back.",
    },
    {
      question: "Is mobile service available on weekends?",
      answer:   "Yes—we offer Saturday appointments at no extra charge.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Mobile VIN Verification</h1>
          <p className="text-xl mb-6">
            DMV-certified VIN inspections delivered to your driveway—fast, easy, and fully legal.
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Mobile VIN?</h2>
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
          <h2 className="text-3xl font-bold mb-6">What &amp; When</h2>
          <p className="text-lg mb-4">
            Mobile VIN inspections satisfy DMV and CHP requirements for:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {scenarios.map(({ label }) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Verification Scenarios */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Verification Scenarios We Handle</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scenarios.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <Icon size={32} className="text-red-600 mb-3 mx-auto" />
              <p className="font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Book Your Slot:</strong> Choose a time and address; we confirm by email/SMS.
          </li>
          <li>
            <strong>On-Site Inspection:</strong> Our certified inspector arrives fully equipped.
          </li>
          <li>
            <strong>Complete Forms:</strong> Sign the REG 31 and any other required documents.
          </li>
          <li>
            <strong>Receive Certificate:</strong> Get your printed VIN verification on the spot.
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
          <h2 className="text-3xl font-bold mb-6">Fees &amp; Surcharges</h2>
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
            Weekend service and after-hours available upon request—no extra charge.
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
        <h2 className="text-3xl font-bold mb-6">Request a Free Mobile VIN Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll text/email you a firm quote—no surprises.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service fixed */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="mobile-vin-verification"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="mobile-vin-verification">Mobile VIN Verification</option>
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

          {/* VIN & Plate */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              VIN Number (17 Digits)
            </label>
            <input
              type="text"
              name="vin"
              maxLength={17}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">License Plate #</label>
            <input
              type="text"
              name="plate"
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