"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ClipboardList,
  FileText,
  DollarSign,
  Printer,
  CheckCircle,
} from "lucide-react";

export default function ReplacementStickerPage() {
  const formItems = [
    {
      label: "Lost Registration Sticker",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
    },
    {
      label: "Lost or Stolen License Plates",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
    },
    {
      label: "Damaged Sticker or Plate",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
    },
  ];

  const steps = [
    {
      icon: ClipboardList,
      title: "Step 1: Bring Your Documents",
      desc: "Vehicle registration card & proof of insurance.",
    },
    {
      icon: FileText,
      title: "Step 2: Fill Out REG 156",
      desc: "We’ll guide you through the official replacement form.",
    },
    {
      icon: DollarSign,
      title: "Step 3: Pay Replacement Fee",
      desc: "Flat fee, payable by card, cash or Zelle.",
    },
    {
      icon: Printer,
      title: "Step 4: Print & Go",
      desc: "Get your new sticker printed instantly on-site.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Lost or Stolen Registration Sticker?
          </h1>
          <p className="text-xl mb-6">
            Same-day replacements with zero DMV lines. Fast, easy, and fully compliant across California.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Get Replacement
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
          Why Tags Express?
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {[
            "Instant On-Site Printing",
            "No Appointment Needed",
            "DMV-Authorized Partner",
            "Transparent Fees",
            "Multilingual Support",
            "15-Minute Turnaround",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg text-center"
            >
              <CheckCircle size={40} className="text-red-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* What Is Replacement Sticker */}
      <section className="bg-gray-100 py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          What Is a Replacement Sticker?
        </h2>
        <p className="text-lg mb-4">
          If your registration sticker is lost, stolen or damaged, California law
          requires immediate replacement. We handle the forms & print it on spot—no DMV trip.
        </p>
        <Image
          src="/images/services/replacement-sticker-info.jpg"
          alt="Replacement sticker process"
          width={800}
          height={400}
          className="rounded-lg mx-auto"
        />
      </section>

      {/* How to Get Your Replacement Sticker */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          How to Get Your Sticker
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <Icon size={48} className="text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Required DMV Forms
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {formItems.map(({ label, icon: Icon, link }, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4" />
              <p className="font-semibold mb-2">{label}</p>
              <Link
                href={link!}
                target="_blank"
                className="text-red-600 underline text-sm"
              >
                Download PDF
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            "San Diego",
            "Chula Vista",
            "El Cajon",
            "La Mesa",
            "Santee",
            "National City",
            "Lemon Grove",
            "Spring Valley",
            "Lakeside",
            "Bonita",
            "Imperial Beach",
            "Poway",
            "Coronado",
            "Carlsbad",
            "Encinitas",
            "Escondido",
            "Vista",
            "San Marcos",
            "Del Mar",
            "Solana Beach",
            "Rancho Santa Fe",
            "Alpine",
          ].map((city, i) => (
            <span
              key={i}
              className="bg-white p-3 rounded shadow text-gray-800"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “They replaced my sticker in 10 minutes—no DMV hassle!”
            </p>
            <span className="font-semibold">– Alex R., San Diego</span>
          </blockquote>
          <blockquote className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “Staff was friendly and explained everything — a stress-free replacement.”
            </p>
            <span className="font-semibold">– Maria T., La Mesa</span>
          </blockquote>
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Need a Replacement?</h2>
        <p className="mb-8">
          Tell us your situation and we’ll handle the rest—fast & friendly.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-600 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition"
        >
          Request a Quote
        </Link>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What if my sticker was stolen?",
                answer:
                  "No police report needed—just come with REG 156 and your reg card, and we’ll reissue on the spot.",
              },
              {
                question: "How long will it take?",
                answer: "Most replacements finish in under 15 minutes.",
              },
              {
                question: "Can I walk in?",
                answer:
                  "Yes! Walk-ins are welcome, though booking guarantees a priority slot.",
              },
              {
                question: "Do you replace plates too?",
                answer: "Yes—REG 156 covers both plates and stickers; ask our staff!",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-lg shadow p-4 cursor-pointer group"
              >
                <summary className="text-lg font-semibold text-red-600 group-open:mb-2">
                  {faq.question}
                </summary>
                <p className="text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}