const fs = require('fs');
const path = require('path');

const cities = [
  "san-diego", "chula-vista", "el-cajon", "la-mesa", "santee",
  "national-city", "lemon-grove", "spring-valley", "lakeside",
  "bonita", "imperial-beach", "poway", "coronado", "carlsbad",
  "encinitas", "escondido", "vista", "san-marcos", "del-mar",
  "solana-beach", "rancho-santa-fe", "alpine"
];

const template = (cityName) => `// Auto-generated page for ${cityName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}

import Head from "next/head";
import Layout from "@/components/Layout";

export default function ${cityName.replace(/-([a-z])/g, g => g[1].toUpperCase()).replace(/^\w/, c => c.toUpperCase())}DMVPage() {
  return (
    <Layout>
      <Head>
        <title>DMV Services in ${cityName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | Tags Express</title>
        <meta name="description" content="Tags Express offers fast, reliable DMV services in ${cityName.replace(/-/g, ' ')}. Vehicle registration, title transfer, VIN verification & more." />
        <link rel="canonical" href="https://tagsexpress.com/services/${cityName}" />
      </Head>

      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">DMV Services in ${cityName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h1>
        <p className="mb-6">
          Fast, reliable vehicle services — registration renewals, out-of-state transfers, title changes, and more — without the DMV lines.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Why ${cityName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Drivers Trust Tags Express</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Same-day vehicle registration and title transfers</li>
            <li>On-site VIN verification and smog coordination</li>
            <li>Walk-ins welcome, or book ahead for faster service</li>
            <li>Multilingual staff and fair, transparent pricing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
          <p>3845 University Ave, San Diego, CA 92105</p>
          <p>Phone: (619) 777-9046</p>
          <p>Email: dmv@tagsexpress.com</p>
        </section>
      </main>
    </Layout>
  );
}
`;

const directory = path.join(__dirname, 'pages/services');

cities.forEach(city => {
  const filePath = path.join(directory, `${city}.tsx`);
  fs.writeFileSync(filePath, template(city), 'utf8');
});

console.log("✅ All city pages have been filled.");