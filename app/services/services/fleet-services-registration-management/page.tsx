// app/services/fleet-services-registration-management/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { List, Users, FileText, DollarSign, Zap } from "lucide-react";

export default function FleetServicesPage() {
  const whyItems = [
    {
      icon: List,
      title: "Bulk Processing",
      desc: "Renew hundreds of registrations in a single batch—no DMV lines.",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      desc: "Personal support to handle your entire fleet’s needs smoothly.",
    },
    {
      icon: DollarSign,
      title: "Volume Discounts",
      desc: "Tiered pricing that saves you on every vehicle renewal.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      desc: "Most fleet jobs completed within 24–48 hours, guaranteed.",
    },
  ];

  const formItems = [
    {
      label: "Power of Attorney (REG 260)",
      icon: FileText,
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg260.pdf",
    },
    { label: "Business License Copy", icon: FileText, link: null },
    { label: "Vehicle List (CSV/XLS)", icon: List, link: null },
  ];

  const pricingTiers = [
    { tier: "1–25 Vehicles", price: "$15/vehicle" },
    { tier: "26–100 Vehicles", price: "$13/vehicle" },
    { tier: "101+ Vehicles", price: "$12/vehicle" },
  ];

  const testimonials = [
    {
      quote:
        "Tags Express handled our 200-car renewal in 24 hours—unbelievable service!",
      author: "Fleet Manager, ABC Rentals",
    },
    {
      quote:
        "The portal and dedicated account manager made everything seamless.",
      author: "Operations Lead, XYZ Logistics",
    },
  ];

  const cities = [
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
  ];

  const related = [
    { title: "Registration Renewal", href: "/services/registration-renewal" },
    { title: "Replacement Sticker", href: "/services/replacement-sticker" },
    { title: "Title Transfer", href: "/services/california-title-transfer" },
    { title: "Smog Check", href: "/services/smog-check" },
  ];

  const faqItems = [
    {
      q: "Can I submit my fleet list online?",
      a: "Yes—just upload a CSV or Excel file via our secure portal.",
    },
    {
      q: "Do you handle out-of-state fleets?",
      a: "Absolutely—we coordinate with every California DMV office.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept credit, ACH, Zelle, and net-30 invoicing.",
    },
    {
      q: "How do I track my orders?",
      a: "Your dedicated portal shows real-time status on each vehicle.",
    },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Fleet Registration & Management
          </h1>
          <p className="text-xl mb-6">
            Seamlessly renew, transfer, and manage your entire vehicle fleet—
            with volume discounts and VIP support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
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

      {/* Why Choose Fleet */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Companies Choose Us
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

      {/* How It Works */}
<section className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
    <div className="space-y-12">
      {whyItems.map(({ icon: Icon, title, desc }, i) => (
        <div
          key={i}
          className={`md:flex md:items-center md:space-x-6 ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-shrink-0 bg-white border-4 border-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0">
            <Icon size={28} className="text-red-600" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg md:w-1/2 text-center md:text-left">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Required DMV Forms */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Required DMV Forms
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {formItems.map(({ label, icon: Icon, link }, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
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

      {/* Pricing & Volume Discounts */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Pricing & Volume Discounts
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map(({ tier, price }, i) => (
            <div
              key={i}
              className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-red-600 transition"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <span className="font-bold">{i + 1}</span>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-2">{tier}</h3>
                <p className="text-2xl font-bold text-red-600 mb-4">
                  {price}
                </p>
                <p className="text-gray-600">
                  Ideal for {tier.toLowerCase()}.
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-gray-700">
          All prices include handling, processing, and electronic delivery.
          Contact us for custom enterprise tiers.
        </p>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Leading Fleets
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map(({ quote, author }, i) => (
            <blockquote
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow"
            >
              <p className="italic mb-2">“{quote}”</p>
              <span className="font-semibold">{author}</span>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {cities.map((city, i) => (
            <span
              key={i}
              className="bg-white p-3 rounded shadow text-gray-800"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 px-6 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Related Services
        </h3>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
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

      {/* Request a Fleet Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Request Your Fleet Management Quote
        </h2>
        <p className="mb-10">
          Tell us about your fleet size and needs—we’ll send you a custom quote
          with guaranteed turnaround and pricing.
        </p>
        <form className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg text-left space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Fleet Size
            </label>
            <input
              type="number"
              name="fleetSize"
              min={1}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />
          </div>
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
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition"
            >
              Send My Quote
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
                <summary className="text-lg font-semibold text-red-600 group-open:mb-2">
                  {q}
                </summary>
                <p className="text-gray-700">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}