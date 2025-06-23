// app/services/check-vehicle-registration-status/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  CalendarDays,
  ShieldCheck,
  Globe2,
  ClipboardList,
  MapPin,
  CalendarOff,
  FileText,
} from "lucide-react";

export default function CheckRegistrationStatusPage() {
  const whyItems = [
    {
      icon: CalendarDays,
      title: "Same-Day Processing",
      desc: "Get your status report printed on-site within minutes.",
    },
    {
      icon: ShieldCheck,
      title: "DMV-Authorized Partner",
      desc: "Licensed to pull live DMV records and print official reports.",
    },
    {
      icon: Globe2,
      title: "Multilingual Support",
      desc: "English, Spanish, Arabic, and more—service made easy.",
    },
    {
      icon: Search,
      title: "Instant DMV Lookup",
      desc: "Real-time access to your registration status.",
    },
    {
      icon: CalendarOff,
      title: "No Appointment Needed",
      desc: "Walk-in ready—most checks finish under 5 minutes.",
    },
    {
      icon: MapPin,
      title: "Central San Diego",
      desc: "3845 University Ave—free parking & easy access.",
    },
  ];

  const formItems = [
    { icon: ClipboardList, label: "License Plate Number" },
    { icon: FileText,       label: "Last 5 Digits of VIN" },
    { icon: ClipboardList, label: "DMV Renewal Notice (if available)" },
  ];

  const relatedForms = [
    {
      name: "Change of Address",
      form: "Notice of Change of Address",
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/dmv14.pdf",
      preview: "dmv-14",
    },
    {
      name: "Lost Registration Card",
      form: "Application for Replacement Plates, Stickers & Documents (REG 156)",
      link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf",
      preview: "reg-156",
    },
    {
      name: "Registration Reinstatement",
      form: "Varies – we’ll help you complete it",
      link: null,
      preview: "",
    },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee",
    "National City","Lemon Grove","Spring Valley","Lakeside","Bonita",
    "Imperial Beach","Poway","Coronado","Carlsbad","Encinitas","Escondido",
    "Vista","San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Search size={64} className="mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Check Vehicle Registration Status</h1>
          <p className="text-xl mb-6">
            Instant DMV status report—no lines, no guesswork. Printed on-site in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Book Now
            </Link>
            <a
              href="tel:6197779046"
              className="bg-black text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Call (619) 777-9046
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Drivers Choose Tags Express for Status Checks
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg text-center">
              <Icon size={48} className="text-red-600 mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Status Check Appointment</h2>
          <p className="mb-6">Walk-ins welcome, or reserve online for priority service.</p>
          <ol className="list-decimal list-inside space-y-2 max-w-md mx-auto text-left mb-6">
            <li>Choose a convenient time slot.</li>
            <li>Receive instant email & text confirmation.</li>
            <li>Arrive for expedited processing.</li>
          </ol>
          <Link
            href="/contact"
            className="bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition"
          >
            Book My Appointment
          </Link>
        </div>
      </section>

      {/* What Is */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Is a Vehicle Registration Status Check?</h2>
        <p className="text-lg mb-6">
          Confirm your registration is active, see any fees or holds, and avoid surprises—printed instantly in our office.
        </p>
        <Image
          src="/images/services/check-status-explanation.jpg"
          alt="Vehicle Registration Status Check Illustration"
          width={800}
          height={400}
          className="rounded-lg mx-auto"
        />
      </section>

      {/* When Needed */}
      <section className="bg-gray-50 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">When Do You Need to Check?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>You’re unsure if your registration is active.</li>
          <li>You recently paid and want to confirm processing.</li>
          <li>You never received your sticker or documents.</li>
          <li>You’re buying a used vehicle and need verification.</li>
          <li>You moved and want to confirm your address on file.</li>
          <li>You suspect a suspension or hold on your record.</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Check Your Registration Status</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>
            <strong>Bring Vehicle Info:</strong> License plate number & last 5 VIN digits.
          </li>
          <li>
            <strong>We Query DMV Records:</strong> Real-time lookup of your status.
          </li>
          <li>
            <strong>Receive Your Report:</strong> Printed or digital summary of expiration, holds, and next steps.
          </li>
        </ol>
      </section>

      {/* Common Reasons */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Common Reasons to Check Status</h2>
        <ul className="grid sm:grid-cols-2 gap-4 list-inside list-disc text-lg">
          <li>Lost your renewal notice</li>
          <li>Unsure if your payment processed</li>
          <li>Purchased a used vehicle</li>
          <li>Never received new tags</li>
          <li>Moved and need to verify address</li>
          <li>Concerned about suspensions or holds</li>
        </ul>
      </section>

      {/* Related DMV Forms */}
      <section className="bg-gray-50 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Related DMV Forms</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {relatedForms.map(({ name, form, link, preview }, i) => (
            <div
              key={i}
              className="bg-gray-100 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{name}</h3>
              <p className="text-gray-700 mb-4">{form}</p>
              {link && (
                <Link href={link} target="_blank" className="text-red-600 underline">
                  Download PDF (preview: {preview})
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Suspensions & Reinstatement */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What If Your Registration Is Suspended?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Proof of insurance (electronic or printed).</li>
          <li>Smog check certificate (if required).</li>
          <li>Payment of back fees & penalties.</li>
          <li>Submission of REG 5085 or other forms (we assist!).</li>
        </ul>
      </section>

      {/* Avoid Fees */}
      <section className="bg-gray-50 py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Avoid Late Fees & Holds</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Renew at least 30 days before expiration.</li>
          <li>Keep your address current with the DMV.</li>
          <li>Check your status anytime with our fast service.</li>
          <li>Resolve smog & insurance issues promptly.</li>
        </ul>
      </section>

      {/* Video Guide (Placeholder) */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Video Guide: How to Check Your Status</h2>
        <p className="text-gray-600 mb-8">Coming soon—a step-by-step video tutorial.</p>
        <div className="w-full h-0 pb-[56.25%] relative">
          <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Video Player Placeholder</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Feedback</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “I never got my sticker in the mail—Tags Express printed my status report and helped me renew immediately.”
            </p>
            <span className="font-semibold">– Omar A., El Cajon</span>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “They caught a suspension I didn’t know about and walked me through reinstatement—so glad I checked!”
            </p>
            <span className="font-semibold">– Jasmine T., North Park</span>
          </blockquote>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {cities.map((c, i) => (
            <span key={i} className="bg-gray-50 p-3 rounded shadow">{c}</span>
          ))}
        </div>
      </section>

     {/* Request a Free Status Check */}
<section className="py-20 px-6 bg-red-600 text-white">
  <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Left: Intro */}
    <div className="space-y-6">
      <Search size={48} className="text-white" />
      <h2 className="text-4xl font-bold">Request a Free Status Check</h2>
      <p className="text-lg">
        Fill out our quick form below and we’ll reach back within minutes with your current DMV status and next steps.
      </p>
      <ul className="list-disc list-inside space-y-2 text-white/90">
        <li>Fast email & text confirmation</li>
        <li>No appointment needed</li>
        <li>Complete report in under 5 minutes</li>
      </ul>
    </div>

    {/* Right: Form Card */}
    <div className="bg-white text-black rounded-2xl p-10 shadow-xl">
      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Plate Number (e.g. CA 1ABC123)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="VIN (Last 5 Digits)"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            maxLength={5}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <textarea
          rows={3}
          placeholder="Anything else you'd like to mention?"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Related Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Related Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { title: "Registration Renewal", href: "/services/registration-renewal" },
            { title: "Replacement Sticker", href: "/services/replacement-sticker" },
            { title: "Reinstate Suspended Registration", href: "/services/reinstate-registration" },
            { title: "California Title Transfer", href: "/services/california-title-transfer" },
            { title: "Smog Check Referrals", href: "/services/smog-check" },
          ].map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I check my status without a renewal notice?",
                a: "Yes—with just your plate number and last 5 VIN digits.",
              },
              {
                q: "Will you tell me if my tags are expired?",
                a: "Absolutely—we’ll show expiration dates and any holds.",
              },
              {
                q: "What if the DMV suspended my registration?",
                a: "We’ll guide you through reinstatement steps and forms.",
              },
              {
                q: "Is there a penalty if I didn’t realize tags expired?",
                a: "Late fees may apply—our report shows any penalties owed.",
              },
              {
                q: "Can you help me renew if it’s due?",
                a: "Yes—book our renewal service immediately after status check.",
              },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 rounded-lg p-4 shadow">
                <summary className="font-semibold text-red-600 cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}