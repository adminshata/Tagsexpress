// app/services/ohv-title-transfer/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Archive,
  FileText,
  ClipboardList,
  Zap,
  DollarSign,
  ChevronRight,
} from "lucide-react";

export default function OHVTitleTransferPage() {
  const whyItems = [
    {
      icon: Archive,
      title: "All-Vehicle Expertise",
      desc: "ATVs, dirt bikes, personal watercraft—we handle every OHV type with DMV-authorized precision.",
    },
    {
      icon: ClipboardList,
      title: "Document Prep",
      desc: "We verify and prefill forms so you never get a DMV rejection slip.",
    },
    {
      icon: Zap,
      title: "Same-Day Processing",
      desc: "Most OHV transfers & registrations complete in under 24 hours.",
    },
    {
      icon: FileText,
      title: "Simplified Paperwork",
      desc: "All required OHV forms in one streamlined package—no guesswork.",
    },
  ];

  const formItems = [
    {
      label: "REG 97 – Out-of-State Title Application",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg97.pdf",
    },
    {
      label: "REG 60 – Application for Vehicle/Vessel Registration",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg60.pdf",
    },
    {
      label: "Proof of Ownership (Bill of Sale)",
      icon: FileText,
      link: null,
    },
    {
      label: "OHV Safety Certificate (if required)",
      icon: ClipboardList,
      link: null,
    },
  ];

  const fees = [
    { label: "Title Transfer Fee", amount: "$15" },
    { label: "Registration Fee (Biennial)", amount: "$51" },
    { label: "OHV Decal Fee", amount: "$7" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const faqItems = [
    {
      question: "Does my OHV need a smog check?",
      answer: "Most OHVs are exempt, but we’ll confirm for your make/model and handle if needed.",
    },
    {
      question: "Can you process an out-of-state OHV title?",
      answer: "Yes—we specialize in converting non-California titles into CA-compliant registrations.",
    },
    {
      question: "What if I lost my title?",
      answer: "We’ll help you obtain a duplicate before the transfer (REG 227).",
    },
    {
      question: "How quickly can I ride legally?",
      answer: "After we finish—usually within 24 hours—you’ll have your new CA decal and title.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">OHV Title Transfer & Registration</h1>
          <p className="text-xl mb-6">
            Whether it’s an ATV, dirt bike, or personal watercraft, we handle your OHV paperwork, fees, and DMV visits—all in one stop.
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Riders Choose Tags Express</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {whyItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
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
          <h2 className="text-3xl font-bold mb-6">What Is OHV Title Transfer & Registration?</h2>
          <p className="text-lg mb-4">
            Converting your off-highway vehicle’s title and registering it in California so you can ride legally off the beaten path.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When You Need This</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>You purchased or moved your OHV into California.</li>
            <li>Your title is out-of-state and needs conversion.</li>
            <li>You lost or damaged your title and need a duplicate.</li>
            <li>You’re registering a newly built or imported OHV.</li>
          </ul>
        </div>
      </section>

      {/* How to Transfer & Register */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Complete Your OHV Transfer</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Documents:</strong> Out-of-state title or bill of sale, proof of ID, proof of insurance.
          </li>
          <li>
            <strong>Fill Forms:</strong> REG 97, REG 60, plus any safety or lien releases.
          </li>
          <li>
            <strong>Pay Fees:</strong> Title, registration, and OHV decal fees—all in one transaction.
          </li>
          <li>
            <strong>Ride Away:</strong> Receive your new CA OHV decal, registration card, and title stub.
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

      {/* Transfer & Registration Fees */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">OHV Title & Registration Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {fees.map(({ label, amount }) => (
              <div key={label} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition">
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

      {/* How Long Does It Take */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">How Long Does It Take?</h2>
        <p className="text-lg text-gray-700">
          Standard OHV transfers finish within 24 hours; simple decaled registrations often same-day.
        </p>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Cities We Serve Within 50 Miles of San Diego</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map(city => (
            <span key={city} className="bg-white p-3 rounded shadow text-gray-800">{city}</span>
          ))}
        </div>
      </section>

      {/* Request a Free Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free OHV Transfer Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you an exact quote—including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select disabled defaultValue="ohv-title-transfer" className="w-full border border-gray-300 rounded-lg px-4 py-3">
              <option value="ohv-title-transfer">OHV Title Transfer & Registration</option>
            </select>
          </div>
          {/* Name Fields */}
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={i}>
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
          {/* VIN */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">VIN Number (17 Digits)</label>
            <input type="text" name="vin" maxLength={17} className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>
          {/* Email */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>
          {/* Notes */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Anything Else?</label>
            <textarea name="notes" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>
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

      {/* Contact Information */}
      <section className="py-10 px-6 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
        <p className="text-gray-700 mb-2">Visit us at 3845 University Ave, San Diego, CA 92105</p>
        <p className="text-gray-700 mb-2">Call: <a href="tel:6197779046" className="text-red-600">(619) 777-9046</a></p>
        <p className="text-gray-700">Email: <a href="mailto:dmv@tagsexpress.com" className="text-red-600">dmv@tagsexpress.com</a></p>
        <p className="text-gray-700 mt-4">Hours: Mon–Fri 9 AM–7 PM, Sat 9 AM–6 PM, Sun 12 PM–6 PM</p>
      </section>

      <Footer />
    </main>
  );
}