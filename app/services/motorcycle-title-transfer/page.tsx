// app/services/motorcycle-title-transfer/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Zap,
  Archive,
  ClipboardList,
  Key,
  FileText,
} from "lucide-react";

export default function MotorcycleTitleTransferPage() {
  const whyItems = [
    { icon: Zap, title: "Same-Day Service", desc: "Get your motorcycle title and tags in under 30 minutes—no waiting." },
    { icon: Archive, title: "DMV-Authorized Partner", desc: "We’re licensed by the CA DMV to handle your title transfer from start to finish." },
    { icon: ClipboardList, title: "Expert Motorcycle Handling", desc: "Trailers, OHVs, antiques—we know every specialty requirement." },
    { icon: Key, title: "Stress-Free Process", desc: "No DMV lines, no surprises—just hop on and ride legally." },
  ];

  const formItems = [
    { label: "Original Title Certificate", icon: FileText, link: null },
    { label: "REG 227 – Application for Title or Registration", icon: FileText, link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg227.pdf" },
    { label: "REG 262 – Vehicle/Vessel Transfer & Reassignment", icon: FileText, link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg262.pdf" },
    { label: "Statement of Facts (REG 256)", icon: FileText, link: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg256.pdf" },
  ];

  const fees = [
    { label: "Title Transfer Fee", amount: "$15" },
    { label: "Title Application Fee", amount: "$20" },
    { label: "Plate & Sticker Fee", amount: "$23" },
    { label: "Lien Filing (if any)", amount: "$5" },
  ];

  const cities = [
    "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
    "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach",
    "Poway","Coronado","Carlsbad","Encinitas","Escondido","Vista",
    "San Marcos","Del Mar","Solana Beach","Rancho Santa Fe","Alpine",
  ];

  const faqItems = [
    { question: "Do I need an appointment?", answer: "Walk-ins are welcome, but booking ahead gets you priority service." },
    { question: "What if I lost my title?", answer: "We can secure a duplicate title (REG 227) from the DMV before transfer." },
    { question: "Is a smog check required?", answer: "Most motorcycles are exempt, but we’ll confirm for your specific bike." },
    { question: "How quickly can I ride?", answer: "Once we finish—usually within 30 minutes—you’re legal to hit the road." },
  ];

  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Motorcycle Title Transfer</h1>
          <p className="text-xl mb-6">
            Sold, bought, or brought your bike in? We handle your title transfer, VIN check, and registration—same-day, in-person service.
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
        <h2 className="text-3xl font-bold text-center mb-12">Why Riders Trust Tags Express</h2>
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

      {/* Book Your Appointment */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Title Transfer Appointment</h2>
          <p className="text-lg text-gray-700 mb-6">
            Walk-ins welcome, but appointments ensure priority service.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 text-left md:text-center max-w-md mx-auto">
            <li>Choose a convenient time slot</li>
            <li>Receive instant email and text confirmation</li>
            <li>Arrive for expedited processing</li>
          </ol>
          <div className="mt-6">
            <Link href="/contact" className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700">
              Book My Appointment Now
            </Link>
          </div>
        </div>
      </section>

      {/* What & When */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Is a Motorcycle Title Transfer?</h2>
          <p className="text-lg mb-4">
            Converting your current title into a California-issued title so you can legally register and ride your bike here.
          </p>
          <h3 className="text-2xl font-semibold mb-4">When You Need It</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>You purchased a motorcycle from another state.</li>
            <li>Your bike moved into CA and needs registration.</li>
            <li>Your title is in another state and must be converted.</li>
            <li>You need a new title after salvage or junk removal.</li>
          </ul>
        </div>
      </section>

      {/* How to Transfer */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">How to Transfer Your Motorcycle Title</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li><strong>Gather Documents:</strong> Original title, proof of ID, proof of insurance.</li>
          <li><strong>Complete Forms:</strong> REG 227, REG 262, REG 256 (we’ll help).</li>
          <li><strong>Pay Fees:</strong> Title transfer, application, plates/stickers.</li>
          <li><strong>Ride Away:</strong> Receive your new CA title, tags, and sticker.</li>
        </ol>
      </section>

      {/* Title Transfer Scenarios We Handle */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Title Transfer Scenarios We Handle</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Sale or purchase of a motorcycle</li>
            <li>Salvage or junked bike title transfers</li>
            <li>Inherited or gifted motorcycles</li>
            <li>Lost or damaged titles requiring duplicates</li>
            <li>Out-of-state to California transfers</li>
          </ul>
        </div>
      </section>

      {/* How Long Does It Take? */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">How Long Does It Take?</h2>
        <p className="text-lg text-gray-700">
          Most motorcycle title transfers complete within 30 minutes. Complex or lien-related cases may take up to 2 hours.
        </p>
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

      {/* Transfer & Title Fees */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Transfer & Title Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
            All fees include processing and electronic filing. Additional smog/VIN fees may apply.
          </p>
        </div>
      </section>

      {/* Video Guide */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Video Guide: Motorcycle Title Transfer</h2>
        <p className="text-gray-700 mb-6">
          Coming soon — step-by-step tutorial on what forms you need and how the process works.
        </p>
        <div className="max-w-md mx-auto bg-gray-200 rounded-lg h-0 pb-[56.25%] relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Video Player Placeholder
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Customers Are Saying</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <blockquote className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “I moved from Texas and Tags Express made my title transfer seamless—you guys rock!”
            </p>
            <footer className="text-right font-semibold">— Alex G., San Diego</footer>
          </blockquote>
          <blockquote className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="italic mb-2">
              “They handled my lien release and title transfer all in one visit. Highly recommend.”
            </p>
            <footer className="text-right font-semibold">— Maria T., Chula Vista</footer>
          </blockquote>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Cities We Serve Within 50 Miles of San Diego</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm max-w-6xl mx-auto">
          {cities.map(city => (
            <span key={city} className="bg-gray-50 p-3 rounded shadow text-gray-800">{city}</span>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 px-6 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-6">Related Services</h3>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { title: "Registration Renewal", href: "/services/registration-renewal" },
            { title: "Replacement Sticker", href: "/services/replacement-sticker" },
            { title: "Check Registration Status", href: "/services/check-vehicle-registration-status" },
            { title: "Reinstate Suspended Registration", href: "/services/reinstate-suspended-vehicle-registration" },
            { title: "Change Name & Address", href: "/services/change-name-address-registration" },
            { title: "Fleet Services", href: "/services/fleet-services-registration-management" },
          ].map(({ title, href }) => (
            <Link key={href} href={href} className="bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              {title}
            </Link>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="py-20 px-6 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Free Motorcycle Title Transfer Quote</h2>
        <p className="mb-10">
          Fill out this quick form and we’ll send you a detailed quote—including all fees and timelines.
        </p>
        <form className="max-w-3xl mx-auto bg-white text-black p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Service</label>
            <select disabled defaultValue="motorcycle-title-transfer" className="w-full border border-gray-300 rounded-lg px-4 py-3">
              <option value="motorcycle-title-transfer">Motorcycle Title Transfer</option>
            </select>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {["First Name","Middle","Last Name"].map((lbl, idx) => (
              <div key={idx}>
                <label className="block font-semibold text-gray-700 mb-1">{lbl}</label>
                <input
                  type="text"
                  name={lbl.toLowerCase().replace(/ /g,"")}
                  required={lbl !== "Middle"}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            ))}
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">VIN Number (17 Digits)</label>
            <input type="text" maxLength={17} name="vin" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Anything Else?</label>
            <textarea name="notes" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>
          </div>
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

      {/* Contact Info */}
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