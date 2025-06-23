"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact Tags Express</h1>
            <p className="text-lg text-white/90">
              Get in touch for DMV help, appointments, quotes, or any questions. We're here to make it easy.
            </p>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Info</h2>
            <p className="mb-2">
              <strong>Address:</strong> 3845 University Ave, San Diego, CA 92105
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> <a href="tel:6197779046" className="text-red-600 hover:underline">619-777-9046</a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong> <a href="mailto:dmv@tagclinic.com" className="text-red-600 hover:underline">dmv@tagclinic.com</a>
            </p>
            <p className="mb-2">
              <strong>Hours:</strong> Mon–Fri 9AM–7PM, Sat 9AM–6PM, Sun 12PM–6PM
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Tags Express is a licensed DMV business partner. We provide registration, title, VIN, smog, and more — without the hassle.
            </p>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center mb-6">
            <h2 className="text-2xl font-bold">Visit Our Office</h2>
            <p className="text-gray-600">
              Located in the heart of San Diego, just minutes off I-15 & University Ave.
            </p>
          </div>
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=3845+University+Ave,+San+Diego,+CA+92105&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full rounded-lg"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}