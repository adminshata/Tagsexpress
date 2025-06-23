import { Search } from "lucide-react";
import React from "react";

interface RequestFormSectionProps {
  title: string;
  subtitle: string;
  features?: string[];
  submitText?: string;
}

export default function RequestFormSection({
  title,
  subtitle,
  features = [],
  submitText = "Submit Request",
}: RequestFormSectionProps) {
  return (
    <section className="py-20 px-6 bg-red-600 text-white">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Intro */}
        <div className="space-y-6">
          <Search size={48} className="text-white" />
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-lg">{subtitle}</p>
          {features.length > 0 && (
            <ul className="list-disc list-inside space-y-2 text-white/90">
              {features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          )}
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
              {submitText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}