import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhatWeOffer from "../components/WhatweOffer";
import DestinationCard from "../components/DestinationCard";
import Testimonials from "../components/Testimonials";
import OrganizedTrips from "../components/OrganizedTrips";
import FAQ from "../components/FAQ";
import destinations from "../data/destinations"; // ✅ default import

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Popular Destinations - only first 4 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-left">
          Popular Places
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.slice(0, 4).map((dest) => (
            <DestinationCard
              key={dest.id}
              slug={dest.slug}
              name={dest.name}
              image={dest.image}
              trips={dest.trips} // pass trips array here
            />
          ))}
        </div>
      </section>

      <WhatWeOffer />
      <OrganizedTrips />
      <FAQ />
      <Testimonials />
      <Footer />
    </>
  );
}
