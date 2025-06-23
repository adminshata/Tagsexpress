// app/resources/page.tsx
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="bg-white text-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-lg text-gray-700 mb-12">
          Explore our resources to assist you with DMV services.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <Link href="/resources/service-area">
            <a className="block bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition">
              <h2 className="text-xl font-semibold">Service Area</h2>
              <p className="text-sm mt-2">Cities we serve</p>
            </a>
          </Link>
          <Link href="/resources/faq">
            <a className="block bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition">
              <h2 className="text-xl font-semibold">FAQ</h2>
              <p className="text-sm mt-2">Common questions answered</p>
            </a>
          </Link>
          <Link href="/resources/dmv-forms">
            <a className="block bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition">
              <h2 className="text-xl font-semibold">DMV Forms</h2>
              <p className="text-sm mt-2">Download necessary forms</p>
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}