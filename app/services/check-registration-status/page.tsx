// app/services/check-vehicle-registration-status/page.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  FileSearch,
  RefreshCw,
  Bell,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const CITIES = [
  "San Diego","Chula Vista","El Cajon","La Mesa","Santee","National City",
  "Lemon Grove","Spring Valley","Lakeside","Bonita","Imperial Beach","Poway",
  "Coronado","Carlsbad","Encinitas","Escondido","Vista","San Marcos",
  "Del Mar","Solana Beach","Rancho Santa Fe","Alpine"
];

const FAQ = [
  {
    q: "How quickly will I see my status?",
    a: "Instantly. As soon as you submit your plate and VIN, you’ll get real-time results.",
  },
  {
    q: "Can I check without my renewal notice?",
    a: "Yes! We only need your license plate number and the last 5 digits of your VIN.",
  },
  {
    q: "Will I be notified about upcoming expiration?",
    a: "Absolutely. We can send you friendly reminders so you never miss a renewal.",
  },
  {
    q: "Is my data secure?",
    a: "100%. We use encrypted connections and never store your personal info.",
  },
];

export default function CheckRegistrationStatusPage() {
  return (
    <main className="bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Check Your Vehicle Registration Status
          </h1>
          <p className="text-xl mb-6">
            Stay up-to-date on your vehicle’s registration. Our quick lookup keeps
            you informed, helps you avoid penalties, and ensures you’re always road-ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
            >
              Check Now
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

      {/* Why Check Online */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Check Online?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <FileSearch className="mx-auto mb-4 text-red-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Instant Lookup</h3>
            <p className="text-gray-700">
              Access your status in seconds with just your plate and VIN.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <RefreshCw className="mx-auto mb-4 text-red-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
            <p className="text-gray-700">
              Always see the latest expiration date and renewal requirements.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg text-center">
            <Bell className="mx-auto mb-4 text-red-600" size={48} />
            <h3 className="text-xl font-semibold mb-2">Penalty Alerts</h3>
            <p className="text-gray-700">
              Get friendly reminders so you never incur late fees.
            </p>
          </div>
        </div>
      </section>

      {/* How to Check */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How to Check Your Registration Status
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-lg">
            <li>
              <strong>Step 1:</strong> Enter your license plate number and last 5
              digits of your VIN.
            </li>
            <li>
              <strong>Step 2:</strong> Click “Check Status” and view your
              registration details instantly.
            </li>
            <li>
              <strong>Step 3:</strong> Review expiration date, renewal options,
              and any fees due.
            </li>
          </ol>
        </div>
      </section>

      {/* What You’ll Need */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What You’ll Need</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <ShieldCheck className="mx-auto mb-3 text-red-600" size={36} />
            <p>Valid License Plate</p>
          </div>
          <div>
            <MapPin className="mx-auto mb-3 text-red-600" size={36} />
            <p>Last 5 Digits of VIN</p>
          </div>
          <div>
            <FileSearch className="mx-auto mb-3 text-red-600" size={36} />
            <p>Renewal Notice (Optional)</p>
          </div>
          <div>
            <Bell className="mx-auto mb-3 text-red-600" size={36} />
            <p>Proof of Insurance</p>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-sm">
          {CITIES.map((city) => (
            <span key={city} className="bg-gray-50 p-3 rounded shadow">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Need Help Checking? Request a Free Quote
        </h2>
        <p className="mb-6">
          We’ll guide you through the fastest way to get your status and avoid
          any penalties.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
        >
          Request a Quote
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="bg-white rounded-lg shadow p-4 cursor-pointer group">
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