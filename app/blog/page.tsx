"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "How to Renew Your Registration in California (Fast)",
    excerpt: "Avoid late fees and wasted time — here’s the quickest way to renew your tags in 2024.",
    slug: "how-to-renew-your-registration-fast",
    image: "/images/blog/registration.jpg",
  },
  {
    title: "Do You Need a Smog Check? (CA Emissions Rules)",
    excerpt: "Smog checks are required for many vehicles in California. Find out if yours qualifies.",
    slug: "do-you-need-a-smog-check",
    image: "/images/blog/smog-check.jpg",
  },
  {
    title: "Mobile VIN Verification: What to Expect",
    excerpt: "Too busy for the DMV? Learn how our mobile VIN service saves time and stress.",
    slug: "mobile-vin-verification-guide",
    image: "/images/blog/vin-verification.jpg",
  },
  {
    title: "Out-of-State Title Transfer Simplified",
    excerpt: "Bringing your car to California? This quick guide breaks down what you need to register it.",
    slug: "out-of-state-title-transfer",
    image: "/images/blog/out-of-state.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-b from-red-600 to-red-400 text-white text-center py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Tags Express Blog
            </h1>
            <p className="text-lg text-white/90">
              DMV tips, title help, smog check guides, and everything you need to stay pain-free on the road.
            </p>
          </div>
        </section>

        {/* Blog Cards */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a Blog Topic You Want Us to Cover?</h2>
          <p className="mb-6">We write what drivers care about. Let us know what questions we can answer next.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100"
          >
            Suggest a Topic
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}