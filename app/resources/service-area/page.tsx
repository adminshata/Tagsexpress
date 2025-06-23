"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Wrench } from "lucide-react";

const cities = [
  "San Diego", "Chula Vista", "El Cajon", "La Mesa", "Santee",
  "National City", "Lemon Grove", "Spring Valley", "Lakeside", "Bonita",
  "Imperial Beach", "Poway", "Coronado", "Carlsbad", "Encinitas",
  "Escondido", "Vista", "San Marcos", "Del Mar", "Solana Beach",
  "Rancho Santa Fe", "Alpine", "Ramona", "Bonsall", "Oceanside",
];

const services = [
  "All Services",
  "VIN Verification",
  "Registration Renewal",
  "Title Transfer",
  "Smog Check",
  "Live Scan",
  "Notary Public",
  "Plates & Stickers",
  "Duplicate Title",
  "Fleet Services",
  "Mobile Services",
  "DMV Forms Help",
  "Pay Parking Citations",
];

export default function ServiceAreaPage() {
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState("All Services");

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Our Southern California Service Area
            </h1>
            <p className="text-lg text-gray-700">
              Tags Express provides fast, reliable DMV support throughout the greater San Diego region.
              Search your city or filter by service below.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-10 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search a city…"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <select
              value={selectedService}
              onChange={e => setSelectedService(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* City Grid */}
          {filteredCities.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">No city found — try another name.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredCities.map(city => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 shadow-sm hover:bg-red-50 transition"
                >
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* All Services Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">What Services We Offer</h2>
            <p className="text-gray-600 mb-6">Whether you're transferring a title or renewing your tags — we’ve got you covered.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {services.filter(s => s !== "All Services").map((service, index) => (
                <div key={index} className="flex items-start gap-2 bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
                  <Wrench className="w-5 h-5 text-red-600 mt-1" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Static Service Map Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Service Coverage Map</h2>
            <p className="text-gray-600 mt-2">Here’s where we currently serve customers across San Diego County and surrounding cities.</p>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=San+Diego,CA&zoom=8&size=1200x600&markers=color:red%7C32.7157,-117.1611"
              alt="San Diego Service Area Map"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="bg-gray-50 py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prefer to Visit Us?</h2>
            <p className="text-gray-600 mb-6">
              You’re always welcome at our main office in San Diego for walk-ins and appointments.
            </p>
            <Link
              href="https://maps.app.goo.gl/BLar89W673mTiGLE7"
              target="_blank"
              className="inline-block bg-red-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition"
            >
              Open in Google Maps
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-red-600 text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need DMV Help at Your Location?</h2>
          <p className="mb-6">Book mobile VIN verification, title transfer, or paperwork pickup — we’ll come to you.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Schedule a Mobile Visit
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}