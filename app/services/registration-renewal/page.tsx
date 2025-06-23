"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Droplet,
  ShieldCheck,
  ClipboardList,
  MapPin,
} from "lucide-react";

export default function RegistrationRenewalPage() {
  const formItems = [
    {
      label: "Missing Renewal Notice",
      icon: ClipboardList,
      description: "Application for Replacement Plates, Stickers & Documents",
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
      preview: "reg-156",
    },
    {
      label: "Lost Registration Card",
      icon: FileText,
      description: "Application for Replacement Plates, Stickers & Documents",
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
      preview: "reg-156",
    },
    {
      label: "Change of Address",
      icon: MapPin,
      description: "Notice of Change of Address",
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/dmv-14.pdf",
      preview: "dmv-14",
    },
    {
      label: "Smog Check Certificate (if required)",
      icon: Droplet,
      description: "",
      link: null,
    },
    {
      label: "Proof of Valid Insurance",
      icon: ShieldCheck,
      description: "",
      link: null,
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            DMV Registration Renewal in California
          </h1>
          <p className="text-xl mb-6">
            Skip the line, get your tags same day. We make DMV renewals simple,
            fast, and pain-free.
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Drivers Trust Tags Express
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {[
            "Same-Day Tags",
            "DMV-Authorized Partner",
            "Multilingual Staff",
            "Expert Form Assistance",
            "Centrally Located in San Diego",
            "Appointment Priority",
          ].map((title, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg text-center"
            >
              <Image
                src={`/images/icons/${i + 1}.png`}
                alt={title}
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">Fast, reliable service—every time.</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Is */}
      <section className="bg-gray-100 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">What Is Vehicle Registration Renewal?</h2>
        <p className="text-lg mb-4">
          Renewal extends your legal right to drive. California requires an
          annual renewal—you’ll receive a new registration card and sticker
          once complete.
        </p>
        <Image
          src="/images/services/registration-info.jpg"
          alt="How registration renewal works"
          width={800}
          height={400}
          className="rounded-lg mx-auto"
        />
      </section>

      {/* How to Renew */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          How To Renew Your Registration
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Gather Documents:</strong> Plate number, last 5 VIN digits,
            proof of insurance, and any renewal notice.
          </li>
          <li>
            <strong>Select Method:</strong> Walk-in for same-day service, online
            portal, or by mail.
          </li>
          <li>
            <strong>Pay & Print:</strong> Card, cash, or Zelle—receive your new
            tag on the spot.
          </li>
        </ol>
      </section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Required DMV Forms</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, description, link, preview }, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition text-center"
            >
              <Icon size={40} className="text-red-600 mb-4" />
              <h3 className="font-semibold text-lg mb-1">{label}</h3>
              {description && <p className="text-gray-700 mb-2">{description}</p>}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="text-red-600 underline text-sm"
                >
                  Download PDF — Preview: {preview}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Avoid Late Fees */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Avoid DMV Late Fees</h2>
          <p className="text-gray-700 mb-8 text-lg">
            California charges penalties for expired tags. Here’s what you’ll owe:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["1–10 Days Late", "Approx. 10% of base registration"],
              ["11–30 Days Late", "Approx. 20% + CHP penalty"],
              ["31 Days – 1 Year", "Up to 60% total penalties"],
              ["Over 1 Year", "May exceed 160% of base fees"],
            ].map(([days, fee], i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition"
              >
                <h3 className="text-red-600 font-semibold text-xl mb-2">{days}</h3>
                <p className="text-gray-700">{fee}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600">
            We can sometimes reduce penalties for hardship cases—just ask!
          </p>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
            "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach","Poway",
            "Coronado","Carlsbad","Encinitas","Escondido","Vista","San Marcos",
            "Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
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

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free DMV Renewal Quote</h2>
        <p className="text-gray-600 mb-10">
          Tell us your details and we’ll recommend the fastest, most affordable path.
        </p>
        <Link
          href="/contact"
          className="bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
        >
          Submit Your Request
        </Link>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Can I renew without my DMV notice?",
                answer: "Yes—your plate number and last 5 VIN digits are enough.",
              },
              {
                question: "How fast is same-day service?",
                answer: "Most renewals complete in under 15 minutes.",
              },
              {
                question: "What if my registration is expired?",
                answer: "We’ll calculate any late fees and get you back on the road.",
              },
              {
                question: "Is a smog check required?",
                answer: "Some vehicles do—just ask and we’ll confirm for your VIN.",
              },
              {
                question: "What documents do I need?",
                answer:
                  "Plate number, VIN, valid ID, proof of insurance. We’ll help fill out any missing forms.",
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