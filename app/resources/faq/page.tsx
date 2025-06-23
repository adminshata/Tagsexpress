"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    section: "Registration & Title",
    items: [
      {
        q: "Do I need an appointment?",
        a: "Walk-ins are welcome, but booking online guarantees faster service and shorter wait times.",
      },
      {
        q: "Are you the DMV?",
        a: "No — Tags Express is a licensed DMV Business Partner. We process most DMV services faster and with less hassle.",
      },
      {
        q: "What documents do I need for registration?",
        a: "You typically need your plate number, VIN, and a valid ID. If it's a title transfer, bring your title and proof of insurance.",
      },
      {
        q: "Can I renew my registration online?",
        a: "Yes! You can renew online with us or through the DMV if you have your renewal notice or license plate number.",
      },
      {
        q: "What is PNO (Planned Nonoperation)?",
        a: "If your vehicle won't be used on public roads, you can file a PNO to avoid registration fees.",
      },
    ],
  },
  {
    section: "Smog & Emissions",
    items: [
      {
        q: "Do I need a smog check for renewal?",
        a: "Most gasoline vehicles over 4 years old require a smog check every 2 years. Diesel and hybrids may have different rules.",
      },
      {
        q: "What if my car fails smog?",
        a: "You'll need to fix the issue and retest. We can help you find a STAR-certified smog station if needed.",
      },
    ],
  },
  {
    section: "VIN & Out-of-State",
    items: [
      {
        q: "Can I get a VIN verification without the DMV?",
        a: "Yes! Tags Express offers on-site and mobile VIN verifications with REG 31 signed by certified agents.",
      },
      {
        q: "What if I lost my out-of-state title?",
        a: "We can help you apply for a duplicate and complete the California title transfer process.",
      },
    ],
  },
  {
    section: "Live Scan & Fingerprinting",
    items: [
      {
        q: "What is Live Scan?",
        a: "Live Scan is digital fingerprinting used for background checks required by many jobs and state agencies.",
      },
      {
        q: "What do I need to bring?",
        a: "You’ll need your Live Scan form from the requesting agency, a valid ID, and payment for the service.",
      },
    ],
  },
  {
    section: "Permits & Temporary Tags",
    items: [
      {
        q: "Can I get a 30-day moving permit without registration?",
        a: "Yes — if you have proof of ownership and insurance, we can issue a DMV-approved 30-day permit.",
      },
      {
        q: "How fast can I get the permit?",
        a: "Tags Express issues permits the same day — most within 10–15 minutes.",
      },
    ],
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<[string, number] | null>(null);

  const filteredFaqs = faqs
    .map(({ section, items }) => ({
      section,
      items: items.filter(f =>
        f.q.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(group => group.items.length > 0);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">

        {/* Red Gradient Hero Section */}
        <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm uppercase tracking-widest text-white/90 font-semibold mb-4 block">
              Customer Help Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Find clear answers to your most common DMV questions — from registration to smog, titles, and mobile VIN services.
            </p>
          </div>
        </section>

        {/* Search + FAQs */}
        <section className="py-12 px-6 max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search a question (e.g., smog, title, appointment)"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-10 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-10">No matching FAQs found.</p>
          ) : (
            filteredFaqs.map(({ section, items }, sectionIdx) => (
              <div key={sectionIdx} className="mb-10">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-1">{section}</h2>
                <div className="space-y-4">
                  {items.map((faq, i) => {
                    const isOpen = openIndex?.[0] === section && openIndex?.[1] === i;
                    return (
                      <div key={i} className="border rounded-lg shadow-sm">
                        <button
                          onClick={() =>
                            setOpenIndex(isOpen ? null : [section, i])
                          }
                          className="flex items-center justify-between w-full px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 border-t bg-gray-50 text-gray-700">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </section>

        {/* Final CTA */}
        <section className="bg-red-600 text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">Call us, email us, or stop by — our team is here to help.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Contact Tags Express
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}