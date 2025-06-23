// app/services/passport-photo/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Camera,
  UserCheck,
  Clock,
  MapPin,
  FileText,
  DollarSign,
} from "lucide-react";

export default function PassportPhotoPage() {
  const whyItems = [
    {
      icon: Camera,
      title: "Professional Studio",
      desc: "High-quality photos in our on-site studio with proper lighting and background.",
    },
    {
      icon: Clock,
      title: "Quick Service",
      desc: "Most passport-photo sessions completed in under 5 minutes.",
    },
    {
      icon: UserCheck,
      title: "Official Compliance",
      desc: "All shots meet US State Department & DMV guidelines.",
    },
    {
      icon: MapPin,
      title: "Multiple Locations",
      desc: "Available at every Tags Express location across San Diego County.",
    },
  ];

  const guidelines = [
    "2×2 inches in size (51×51 mm)",
    "Full face, neutral expression",
    "Plain white or off-white background",
    "No glasses, hats, or head coverings (unless religious)",
    "Printed on matte or glossy photo paper",
  ];

  const formItems = [
    {
      label: "State ID or Driver’s License",
      icon: FileText,
      link: null,
    },
    {
      label: "Current Passport (for renewals)",
      icon: FileText,
      link: null,
    },
  ];

  const pricing = [
    { tier: "2 Prints",    price: "$10" },
    { tier: "4 Prints",    price: "$18" },
    { tier: "Digital Copy",price: "$5"  },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const relatedServices = [
    { title: "Registration Renewal", href: "/services/registration-renewal" },
    { title: "Replacement Sticker",  href: "/services/replacement-sticker"  },
    { title: "Notary Public",         href: "/services/notary-public"        },
    { title: "Title Transfers",       href: "/services/california-title-transfer" },
  ];

  const faqItems = [
    {
      question: "How many prints do I get?",
      answer:   "You’ll receive two printed photos; additional prints are available on request.",
    },
    {
      question: "Can I get digital files?",
      answer:   "Yes—digital copies can be emailed for an extra $5 fee.",
    },
    {
      question: "Are your photos accepted internationally?",
      answer:   "Our standard 2×2 format meets US requirements; check other countries’ specs separately.",
    },
    {
      question: "Can children get passport photos here?",
      answer:   "Absolutely—infants and toddlers are no problem, following the same guidelines.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Passport Photo Service</h1>
          <p className="text-xl mb-6">
            Fast, compliant passport photos—no appointment needed.  
            Walk in or book ahead at any Tags Express location.
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Tags Express?</h2>
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

      {/* Photo Guidelines */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Passport Photo Requirements</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {guidelines.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Walk In or Book:</strong> No appointment needed, or reserve a slot online.
          </li>
          <li>
            <strong>Smile & Pose:</strong> We guide you through framing and expression.
          </li>
          <li>
            <strong>Instant Prints:</strong> Your two 2×2″ photos ready in under 5 minutes.
          </li>
          <li>
            <strong>Optional Digital Copy:</strong> Add the emailable file for $5.
          </li>
        </ol>
      </section>

      {/* Required Documents */}
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
                <Link href={link} target="_blank" className="text-red-600 underline text-sm">
                  Download PDF
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map(({ tier, price }, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{tier}</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">{price}</p>
                <p className="text-gray-600">Includes studio fee & prints.</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-700">
            Mobile service available for an additional travel fee.
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

      {/* Request a Photo Appointment */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Passport Photo Appointment</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll confirm your slot & pricing via email.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select
              disabled
              defaultValue="passport-photo"
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="passport-photo">Passport Photo Service</option>
            </select>
          </div>

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
            <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Additional Details</label>
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
              Get My Appointment
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