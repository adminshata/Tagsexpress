// app/services/lyft-vehicle-inspection/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Car,
  Zap,
  CheckCircle,
  ClipboardList,
  FileText,
  DollarSign,
} from "lucide-react";

export default function LyftVehicleInspectionPage() {
  const whyItems = [
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "Most inspections complete in under 15 minutes—get back on the road immediately.",
    },
    {
      icon: CheckCircle,
      title: "Certified Inspectors",
      desc: "All inspections performed by DMV-trained professionals with Lyft certification.",
    },
    {
      icon: ClipboardList,
      title: "Detailed Report",
      desc: "Receive a clear pass/fail report instantly, with notes on any corrective items.",
    },
    {
      icon: Car,
      title: "All Vehicle Types",
      desc: "Sedans, SUVs, hybrids, and electrics—all meet Lyft’s inspection standards.",
    },
  ];

  const steps = [
    "Bring your vehicle and a valid driver’s license.",
    "Complete the Lyft inspection form (we’ll provide it).",
    "Our inspector checks lights, brakes, seat belts, tires, glass, and more.",
    "Instant digital pass/fail report—approved vehicles get a sticker on the spot.",
  ];

  const scenarios = [
    { icon: FileText, title: "New Driver Onboarding" },
    { icon: FileText, title: "Annual Re-Inspection" },
    { icon: FileText, title: "Post-Accident Check" },
    { icon: FileText, title: "Vehicle Modifications" },
    { icon: FileText, title: "XL & Accessibility Vehicles" },
  ];

  const formItems = [
    {
      label: "Lyft Vehicle Inspection Form",
      icon: FileText,
      link: null,
    },
    {
      label: "Driver’s License",
      icon: ClipboardList,
      link: null,
    },
  ];

  const fees = [
    { label: "Inspection Fee", amount: "$25" },
    { label: "Re-inspection", amount: "$15" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const related = [
    { title: "Uber Vehicle Inspection", href: "/services/uber-vehicle-inspection" },
    { title: "Turo Vehicle Inspection",  href: "/services/turo-vehicle-inspection" },
    { title: "Smog & Emissions",         href: "/services/smog-check-and-emissions-testing" },
    { title: "VIN Verification",         href: "/services/vin-verification" },
  ];

  const faqItems = [
    {
      question: "Do I need an appointment?",
      answer:   "Walk-ins are welcome; appointments guarantee you’re in and out fastest.",
    },
    {
      question: "What vehicle documents are required?",
      answer:   "Bring your Lyft Inspection Form and your valid driver’s license.",
    },
    {
      question: "What if I fail inspection?",
      answer:   "We’ll give you a checklist of fixes—once done, come back for a re-inspection fee.",
    },
    {
      question: "How long is my inspection valid?",
      answer:   "Your Lyft sticker is valid for 12 months, until your next yearly check.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Lyft Vehicle Inspection
          </h1>
          <p className="text-xl mb-6">
            Quick, certified inspections to get your car Lyft-ready—same-day service in San Diego.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#lyft-inspection-form"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Book Inspection
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
          Why Drivers Choose Our Lyft Inspection
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
          <h2 className="text-3xl font-bold mb-6">
            What Is a Lyft Vehicle Inspection?
          </h2>
          <p className="text-lg mb-4">
            A comprehensive safety check of lights, brakes, tires, glass, seat belts, mirrors, and more to meet Lyft’s standards.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            When Do You Need It?
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Your car is new to Lyft and needs initial certification.</li>
            <li>Your annual re-inspection is due.</li>
            <li>You failed a previous inspection and require re-test.</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          How the Inspection Works
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* How Long Does It Take? */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How Long Does It Take?</h2>
          <p className="text-lg text-gray-700">
            Most Lyft inspections finish in 10–15 minutes. Re-inspections take about 5–10 minutes after fixes.
          </p>
        </div>
      </section>

      {/* Inspection Scenarios We Handle */}
      <section className="bg-white py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Inspection Scenarios We Handle</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scenarios.map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 bg-gray-50 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <Icon size={28} className="text-red-600 flex-shrink-0" />
              <span className="text-gray-800 font-semibold">{title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What to Bring</h2>
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

      {/* Fees */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Inspection Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            All fees cover your on-site inspection; re-tests are discounted.
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
      <section id="lyft-inspection-form" className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Request Your Lyft Inspection
        </h2>
        <p className="mb-10">
          Fill out this quick form and we’ll reserve your inspection slot—no surprises.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6 text-left">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="lyft-vehicle-inspection"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="lyft-vehicle-inspection">
                Lyft Vehicle Inspection
              </option>
            </select>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={i}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.replace(/\s+/g, "").toLowerCase()}
                  required={i !== 1}
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
              Book My Inspection
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