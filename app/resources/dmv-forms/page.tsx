"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const formCategories = [
  {
    heading: "Registration & Renewal",
    items: [
      { name: "REG 343 – Application for Title or Registration", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg343.pdf" },
      { name: "DMV 14 – Change of Address", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/dmv14.pdf" },
      { name: "REG 156 – Replacement Plates, Stickers, Documents", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg156.pdf" },
      { name: "REG 138 – Notice of Transfer and Release of Liability", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg138.pdf" },
      { name: "REG 1000 – Miscellaneous Certifications", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg1000.pdf" },
    ],
  },
  {
    heading: "Title & Transfers",
    items: [
      { name: "REG 227 – Application for Duplicate Title", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg227.pdf" },
      { name: "REG 260 – Power of Attorney", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg260.pdf" },
      { name: "REG 262 – Vehicle/Vessel Transfer Form", url: "https://www.dmv.ca.gov/portal/uploads/2021/01/reg262.pdf" },
      { name: "REG 166 – Lien Satisfied/Title Holder Release", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg166.pdf" },
      { name: "REG 101 – Statement to Record Ownership", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg101.pdf" },
      { name: "REG 5 – Affidavit for Repossession", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg5.pdf" },
    ],
  },
  {
    heading: "Smog, VIN & Verification",
    items: [
      { name: "REG 256 – Statement of Facts", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg256.pdf" },
      { name: "REG 31 – Verification of Vehicle (VIN)", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg31.pdf" },
    ],
  },
  {
    heading: "Plates & Decals",
    items: [
      { name: "REG 4008 – Clean Air Vehicle Decals", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/reg4008.pdf" },
      { name: "BOAT 101 – Application for Vessel Certificate of Number", url: "https://www.dmv.ca.gov/portal/uploads/2020/06/boat101.pdf" },
    ],
  },
];

export default function DMVFormsPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = formCategories
    .map(category => ({
      ...category,
      items: category.items.filter(form =>
        form.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(category => category.items.length > 0);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-red-600 mb-4">California DMV Forms Library</h1>
            <p className="text-lg text-gray-700">
              Search, preview, and download official DMV forms for registration, title transfers, VIN, and more.
            </p>
          </div>
        </section>

        <section className="py-10 px-6 max-w-5xl mx-auto">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for a form (e.g., REG 343, smog, duplicate title...)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-10 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {filteredCategories.map((category, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">{category.heading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.items.map((form, j) => (
                  <Link
                    key={j}
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border rounded-lg p-5 shadow-sm hover:shadow-md hover:border-red-500 transition"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-red-600 group-hover:scale-105 transition" />
                      <div className="font-semibold text-gray-800 group-hover:text-red-600">
                        {form.name}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Click to view or download PDF</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <p className="text-center text-gray-500 text-lg mt-12">No forms match your search.</p>
          )}
        </section>

        <section className="bg-red-600 text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Filling Out a DMV Form?</h2>
          <p className="mb-6">Let us handle the paperwork — accurately and stress-free.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Get DMV Help
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}