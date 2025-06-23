import Link from "next/link";

const cities = [
  "San Diego",
  "Chula Vista",
  "El Cajon",
  "La Mesa",
  "Santee",
  "National City",
  "Lemon Grove",
  "Spring Valley",
  "Lakeside",
  "Bonita",
  "Imperial Beach",
  "Poway",
  "Coronado",
  "Carlsbad",
  "Encinitas",
  "Escondido",
  "Vista",
  "San Marcos",
  "Del Mar",
  "Solana Beach",
  "Rancho Santa Fe",
  "Alpine",
];

export default function CitiesWeServe() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Cities We Serve Within 50 Miles of San Diego
        </h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          We proudly serve drivers across Southern California with fast,
          in-person DMV services in the following areas:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-800 text-sm font-medium">
          {cities.map((city) => {
            const slug = city.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link
                key={slug}
                href={`/city-pages/${slug}`}
                className="bg-gray-100 rounded px-3 py-2 shadow-sm hover:bg-red-100 transition block text-center"
              >
                {city}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}