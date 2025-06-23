// app/services/out-of-state-title-transfer/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  CornerUpLeft,
  Archive,
  FileText,
  ClipboardList,
  ChevronRight,
} from "lucide-react";

export default function OutOfStateTitleTransferPage() {
  const whyItems = [
    {
      icon: CornerUpLeft,
      title: "All-States Expertise",
      desc: "We handle every state’s requirements so you don’t have to study 50 DMV manuals.",
    },
    {
      icon: Archive,
      title: "Title & VIN Support",
      desc: "From lien releases to VIN inspections—we manage every form and step.",
    },
    {
      icon: ClipboardList,
      title: "Document Prep",
      desc: "We verify and pre-fill your paperwork to avoid DMV rejections.",
    },
    {
      icon: FileText,
      title: "Same-Day Processing",
      desc: "Most out-of-state transfers are completed in under 24 hours.",
    },
  ];

  const formItems = [
    {
      label: "Out-of-State Title",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg97.pdf",
    },
    {
      label: "Release of Liability",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg138.pdf",
    },
    {
      label: "Odometer Disclosure",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/vc-101.pdf",
    },
    {
      label: "Lien Release (if applicable)",
      icon: FileText,
      link: null,
    },
  ];

  const fees = [
    { label: "Standard Transfer Fee", amount: "$15" },
    { label: "Transfer + Registration", amount: "$35" },
    { label: "Lien Release Fee", amount: "$5" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const testimonials = [
    {
      quote: "Tags Express made my out-of-state transfer seamless—paperwork and smog done in one visit!",
      author: "Alex R., San Diego",
    },
    {
      quote: "I didn’t realize how many forms I needed. They handled everything quickly.",
      author: "Maria T., Chula Vista",
    },
  ];

  const related = [
    { title: "California Title Transfer", href: "/services/california-title-transfer" },
    { title: "Registration Renewal", href: "/services/registration-renewal" },
    { title: "Replacement Sticker", href: "/services/replacement-sticker" },
    { title: "VIN Verification", href: "/services/vin-verification" },
  ];

  const faqItems = [
    {
      question: "Can I transfer a title from any U.S. state?",
      answer: "Yes—we’re familiar with all 50 states’ paperwork and can guide you end-to-end.",
    },
    {
      question: "What if my out-of-state title is lost?",
      answer: "We’ll help you secure a duplicate from the issuing state before transfer.",
    },
    {
      question: "Do I need a smog check?",
      answer: "If California requires it for your vehicle age/type, we coordinate the test for you.",
    },
    {
      question: "How long does it take?",
      answer: "Most transfers wrap up within 24 hours; complex cases may take 2–3 days.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Out-of-State Title Transfer</h1>
          <p className="text-xl mb-6">
            Moved to California? We’ll handle your out-of-state title, VIN, smog and registration—all in one visit.
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tags Express?</h2>
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
          <h2 className="text-3xl font-bold mb-6">What Is an Out-of-State Title Transfer?</h2>
          <p className="text-lg mb-4">
            Converting your non-California title into a California title so you can legally register and drive here.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When Do You Need This?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>You just moved into California with a titled vehicle.</li>
            <li>You bought a car from out of state.</li>
            <li>Your title is in another state and needs conversion.</li>
            <li>You need smog or VIN verification before registering.</li>
          </ul>
        </div>
      </section>

      {/* How to Transfer */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Complete Your Transfer</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li><strong>Provide Documents:</strong> Out-of-state title, ID, proof of insurance.</li>
          <li><strong>Smog & VIN Check:</strong> We coordinate CA-required smog and VIN inspection.</li>
          <li><strong>Fees & Forms:</strong> Pay fees and sign REG 97, REG 138, VC 101, etc.</li>
          <li><strong>Get CA Title:</strong> We file your paperwork and print your California title & registration.</li>
        </ol>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Required DMV Forms</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, link }) => (
            <div key={label} className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
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
            All fees include processing and electronic filing. Additional smog or VIN test fees may apply.
          </p>
        </div>
      </section>

      {/* Video Guide */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Video Guide: Out-of-State Title Transfer</h2>
          <p className="text-gray-700">
            Coming soon — a step-by-step walkthrough so you know exactly what to expect.
          </p>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Customer Feedback</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ quote, author }, i) => (
              <blockquote key={i} className="bg-gray-50 p-6 rounded-xl shadow">
                <p className="italic mb-2">“{quote}”</p>
                <span className="font-semibold">{author}</span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Cities We Serve Within 50 Miles of San Diego</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map(city => (
            <span key={city} className="bg-white p-3 rounded shadow">{city}</span>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 px-6 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-6">Related Services</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {related.map(({ title, href }, i) => (
            <Link
              key={i}
              href={href}
              className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:bg-red-50 transition"
            >
              {title}
            </Link>
          ))}
        </div>
      </section>

      {/* Request a Free Title Transfer Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free Title Transfer Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a detailed quote—including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          {/* Service */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="out-of-state-title-transfer"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700"
            >
              <option value="out-of-state-title-transfer">
                Out-of-State Title Transfer
              </option>
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
                  required={i!==1}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>

          {/* Vehicle Info */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">VIN Number (17 Digits)</label>
            <input
              type="text"
              name="vin"
              maxLength={17}
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

          {/* Anything Else */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Anything Else?</label>
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
              <details key={question} className="bg-white rounded-lg shadow p-4 cursor-pointer group">
                <summary className="text-lg font-semibold text-red-600">{question}</summary>
                <p className="mt-2 text-gray-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>3845 University Ave, San Diego, CA 92105</p>
          <p>Phone: (619) 777-9046 | Email: dmv@tagsclinic.com</p>
          <p>Hours: Mon–Fri 9am–7pm · Sat 9am–6pm · Sun 12pm–6pm</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}