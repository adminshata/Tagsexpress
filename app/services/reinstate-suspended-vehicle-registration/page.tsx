// app/services/reinstate-suspended-vehicle-registration/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  ClipboardList,
  ChevronRight,
  DollarSign,
} from "lucide-react";

export default function ReinstateSuspendedVehicleRegistrationPage() {
  const whyItems = [
    {
      icon: FileText,
      title: "Rapid Reinstatement",
      desc: "We handle suspended registrations same-day, liaising directly with the DMV.",
    },
    {
      icon: ShieldCheck,
      title: "Penalty Reduction",
      desc: "Our experts review your case to minimize late fees and penalties.",
    },
    {
      icon: ClipboardList,
      title: "Complete Compliance",
      desc: "Insurance, smog, and paperwork—all verified before you leave.",
    },
    {
      icon: ChevronRight,
      title: "No DMV Headaches",
      desc: "Walk-in service at our San Diego location—skip the long lines.",
    },
  ];

  const formItems = [
    {
      label: "REG 5085 – Statement of Facts",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg5085.pdf",
    },
    {
      label: "SR-1 – Evidence of Insurance",
      icon: ShieldCheck,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/sr1.pdf",
    },
    {
      label: "REG 176 – Request for DMV Records",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg176.pdf",
    },
    {
      label: "REG 101 – Proof of Ownership",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg101.pdf",
    },
  ];

  const fees = [
    { period: "1–30 Days Late", amount: "Base fee + up to $10 penalty" },
    { period: "31–60 Days Late", amount: "Base fee + $20 penalty" },
    { period: "61 Days – 1 Year", amount: "Base fee + $50 penalty" },
    { period: "Over 1 Year", amount: "Base fee + $100+ penalty" },
  ];

  const faqItems = [
    {
      q: "What causes a registration suspension?",
      a: "Expired tags, insurance lapse, or unpaid fees can all trigger a suspension.",
    },
    {
      q: "How long does reinstatement take?",
      a: "Once all documents and payments are in, most cases finish within an hour.",
    },
    {
      q: "Can you reduce my penalties?",
      a: "We can review hardship cases and help you request fee waivers when possible.",
    },
    {
      q: "Do I need an appointment?",
      a: "Walk-ins are welcome, but booking ahead gives you priority service.",
    },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Reinstate Suspended Registration
          </h1>
          <p className="text-lg mb-6">
            Clear holds, pay fees, and get your tags back—same day, no DMV lines.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Drivers Trust Tags Express
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
            What &amp; When You Need Reinstatement
          </h2>
          <p className="text-lg mb-4">
            If your tags expired, insurance lapsed, or fees went unpaid, the DMV
            suspends your registration—making it illegal to drive until
            reinstated.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Your registration expired and entered suspension.</li>
            <li>Your insurance wasn’t on file or lapsed.</li>
            <li>Outstanding fees or citations remain unpaid.</li>
            <li>You need to sell or legally drive your vehicle again.</li>
          </ul>
        </div>
      </section>

      {/* How to Reinstate */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          How to Reinstate Your Registration
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Documents:</strong> Plate number, VIN, proof of
            insurance, and any suspension notices.
          </li>
          <li>
            <strong>Resolve Holds:</strong> Pay any past-due fees or penalties.
          </li>
          <li>
            <strong>Submit Forms:</strong> We file REG 5085, SR-1 and any
            additional paperwork for you.
          </li>
          <li>
            <strong>Receive Clearance:</strong> Get printed proof and new tags
            on the spot—usually within 60 minutes.
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

      {/* Fees & Penalties */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Reinstatement Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {fees.map(({ period, amount }, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition text-center"
              >
                <DollarSign size={32} className="text-red-600 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-1">{period}</h3>
                <p className="text-gray-700">{amount}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            In hardship cases, we can often reduce or waive penalties—just ask!
          </p>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-center text-sm">
          {cities.map((city, i) => (
            <span key={i} className="bg-gray-50 p-3 rounded shadow">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Request a Free Reinstatement Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Request a Free Reinstatement Quote
        </h2>
        <p className="mb-10">
          Fill out the form below and we’ll send you a full quote—including all
          fees, penalties, and requirements.
        </p>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 text-left">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Service
            </label>
            <select
              name="service"
              defaultValue="reinstate-suspended-vehicle-registration"
              disabled
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="reinstate-suspended-vehicle-registration">
                Reinstate Suspended Registration
              </option>
            </select>
          </div>

          {/* Name */}
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

          {/* VIN & Plate */}
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
              License Plate #
            </label>
            <input
              type="text"
              name="plate"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          {/* Contact */}
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

          {/* Additional Details */}
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