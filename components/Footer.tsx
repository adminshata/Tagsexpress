"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">Tags Express</h3>
          <p className="text-sm text-gray-400">
            Simplifying California DMV services with expert, pain-free solutions.
          </p>
        </div>

        {/* DMV Services */}
        <div>
          <h4 className="font-semibold mb-3">DMV Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services/registration-renewal">Registration Renewal</Link></li>
            <li><Link href="/services/california-title-transfer">Title Transfer</Link></li>
            <li><Link href="/services/vin-verification">VIN Verification</Link></li>
            <li><Link href="/services/smog-check">Smog Check</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/resources/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 3845 University Ave, San Diego, CA 92105</li>
            <li>📞 <a href="tel:6197779046">619-777-9046</a></li>
            <li>✉️ <a href="mailto:dmv@tagsexpress.com">dmv@tagsexpress.com</a></li>
            <li>🕘 Mon–Sat: 9AM–7PM</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Tags Express. All rights reserved.
      </div>
    </footer>
  );
}