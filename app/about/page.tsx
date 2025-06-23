// app/about/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Tags Express | Trusted DMV Services Partner in California",
  description:
    "Learn about Tags Express — a modern, customer-first DMV partner offering registration, title transfers, VIN verifications, smog checks, and more with speed and simplicity.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-red-600 mb-4">
            Simplifying DMV Services, One Tag at a Time
          </h1>
          <p className="text-lg text-gray-700">
            Tags Express was built to eliminate the confusion, long waits, and paperwork
            stress of the DMV. We bring speed, clarity, and care to every registration and title.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-red-600">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            What started as a solution to help friends avoid DMV headaches became a full-scale
            mission to transform vehicle services in California. Tags Express is a licensed DMV
            business partner powered by real people, fast technology, and a relentless focus
            on making DMV experiences easier for everyone. We're not here to sell — we're here to
            solve.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/about-hero.jpg"
            alt="Tags Express team assisting customers"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive DMV Services</h2>
          <p className="text-gray-600">
            We offer all the essentials—and more. Whether you're renewing, transferring, or verifying, we’ve got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Vehicle Registration & Renewal",
            "Title Transfers (CA & Out-of-State)",
            "Smog Check Support (STAR, Exempt)",
            "VIN Verification & Mobile VIN",
            "Live Scan Fingerprinting",
            "Notary Public Services",
            "Temporary Trip Permits",
            "Citation Payment Help",
            "Fleet & Dealership Services",
          ].map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-xl border shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-red-600 text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Tags Express */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Tags Express?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            ["Fast Turnarounds", "Get your tags, title, or smog paperwork handled in minutes."],
            ["Real DMV Experts", "Our team is trained on DMV regulations and case resolution."],
            ["Tech + Human Help", "Online support, smart forms, and real people when you need them."],
            ["People Over Paperwork", "We make DMV human—no stress, just help."],
          ].map(([title, desc]) => (
            <div key={title} className="border p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-red-600 text-lg mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-700">
            Our dedicated professionals are DMV-trained and deeply committed to customer care.
            Whether you visit our office or reach out online, we’re here to help.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Customer Love</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Alex M.",
              quote:
                "Tags Express made my vehicle registration process seamless and stress-free. Highly recommend!",
            },
            {
              name: "Jamie L.",
              quote:
                "Professional staff and quick service. I was in and out in no time!",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white border-l-4 border-red-600 p-6 shadow rounded-lg"
            >
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-sm text-gray-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Licensing Disclosure */}
      <section className="bg-blue-50 py-14 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            DMV Authorized, Privately Operated
          </h2>
          <p className="text-gray-700">
            Tags Express is a licensed DMV Business Partner in California. While not the DMV
            itself, we are fully authorized to process DMV paperwork on your behalf with speed,
            accuracy, and state compliance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Let’s Get You Back on the Road</h2>
        <p className="text-gray-600 mb-6">
          Visit us, call us, or get a quote online—however you choose, we’re ready to help.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Contact Tags Express
        </Link>
      </section>
      </div>
      <Footer />
    </>
  );
}