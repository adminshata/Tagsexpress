// app/services/california-title-transfer/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Archive,
  CornerUpLeft,
  FileText,
  ClipboardList,
  DollarSign,
} from "lucide-react";

export default function CaliforniaTitleTransferPage() {
  const whyItems = [
    {
      icon: Archive,
      title: "Authorized Service",
      desc: "We’re licensed to process in-state title transfers quickly and correctly.",
    },
    {
      icon: CornerUpLeft,
      title: "Out-of-State Vehicles",
      desc: "Seamless VIN, smog & title transfer for cars from any state.",
    },
    {
      icon: ClipboardList,
      title: "Lien-Holder Coordination",
      desc: "We handle lien releases and paperwork with banks and lenders.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "Up-front fee estimates—know the total before you commit.",
    },
  ];

  const formItems = [
    {
      label: "Vehicle Title Certificate",
      icon: FileText,
      link: null,
    },
    {
      label: "REG 227 – Application for Title or Registration",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg227.pdf",
    },
    {
      label: "Smog Certificate (if required)",
      icon: ClipboardList,
      link: null,
    },
  ];

  const faqItems = [
    {
      q: "What if I lost the title?",
      a: "We can help you order and file a duplicate via REG 227 on your behalf.",
    },
    {
      q: "How long do out-of-state transfers take?",
      a: "Usually 2–3 business days after paperwork is complete.",
    },
    {
      q: "Is a smog check always required?",
      a: "Most vehicles older than 4 years need one—we’ll let you know.",
    },
    {
      q: "Can you handle lien releases?",
      a: "Yes, we coordinate directly with your lender for lien release.",
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">California Title Transfer</h1>
          <p className="text-xl mb-6">
            Fast, compliant title transfers—whether buying, selling, or bringing a car from out of state.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Start Transfer
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

      {/* Why Work With Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Steps */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Title Transfer Appointment</h2>
          <p className="text-lg mb-6">Walk-ins welcome, but appointments ensure priority service.</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-left inline-block">
            <li>Choose a convenient time slot</li>
            <li>Receive instant email & text confirmation</li>
            <li>Arrive for expedited, on-site processing</li>
          </ul>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700"
            >
              Book My Appointment Now
            </Link>
          </div>
        </div>
      </section>

      {/* What & When */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Is a Title Transfer?</h2>
          <p className="text-lg text-gray-700 mb-6">
            A title transfer officially changes vehicle ownership in California. Required any time you buy, sell, inherit, or bring a vehicle from out of state.
          </p>

          <h3 className="text-2xl font-semibold mb-4">When Do You Need to Transfer?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>You bought or sold a vehicle within California</li>
            <li>You brought a car in from another state</li>
            <li>You inherited a vehicle or received it as a gift</li>
            <li>You’re correcting lien or ownership records</li>
          </ul>
        </div>
      </section>

      {/* How to Transfer */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Transfer Your Title</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Documents:</strong> Title, bill of sale, smog (if needed), and your ID.
          </li>
          <li>
            <strong>Complete REG 227:</strong> We help fill out the DMV application.
          </li>
          <li>
            <strong>Submit & Pay:</strong> We file your paperwork and collect fees on the spot.
          </li>
          <li>
            <strong>Receive Your Title:</strong> Printed or digital—often same-day.
          </li>
        </ol>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Required DMV Forms</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, link }, i) => (
            <div
              key={i}
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
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Transfer Fees</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              ["Base Transfer Fee", "$15 per transfer", DollarSign],
              ["County Fees", "Varies by weight & vehicle type", ClipboardList],
              ["Duplicate Title", "$23 if original is lost", FileText],
            ].map(([title, fee, Icon], i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                <Icon size={24} className="text-red-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{fee}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600">
            All fees are quoted up front—no hidden charges. We’ll calculate your total before you commit.
          </p>
        </div>
      </section>

      {/* Video Guide */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Title Transfer Video Guide</h2>
          <p className="text-gray-700 mb-6">Watch our quick step-by-step tutorial.</p>
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Title Transfer Video"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Customers Say About Us</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “The transfer for my out-of-state car took under 30 minutes—amazing service!”
            </p>
            <span className="font-semibold">– Sarah L., Encinitas</span>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “Tags Express guided me through lien release and had my title in no time. Truly painless.”
            </p>
            <span className="font-semibold">– David R., La Mesa</span>
          </blockquote>
        </div>
        <div className="mt-6">
          <Link
            href="https://g.page/r/CcQuR0gS20VyEAI/review"
            target="_blank"
            className="text-red-600 underline"
          >
            Read More Google Reviews
          </Link>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map((c,i) => (
            <span key={i} className="bg-white p-3 rounded shadow text-gray-800">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free Title Transfer Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a detailed quote—including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="california-title-transfer"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="california-title-transfer">California Title Transfer</option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl,i) => (
              <div key={i}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.replace(/ /g,"").toLowerCase()}
                  required={i!==1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">VIN (Last 5 Digits)</label>
            <input
              type="text"
              maxLength={5}
              name="vin"
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

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Anything Else?</label>
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
            {faqItems.map(({ q, a }, i) => (
              <details
                key={i}
                className="bg-white rounded-lg shadow p-4 cursor-pointer group"
              >
                <summary className="text-lg font-semibold text-red-600">{q}</summary>
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