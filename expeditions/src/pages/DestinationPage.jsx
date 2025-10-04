import destinations from "../data/destinations"; // ✅ default import

import DestinationCard from "../components/DestinationCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestImage from "../assets/destination.jpg";

export default function DestinationsPage() {
  return (
    <>
      <Navbar />

      <section
        className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${DestImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-white text-lg md:text-xl">
            Discover the most amazing places around the world.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Available Destinations
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              slug={dest.slug}
              name={dest.name}
              image={dest.image}
              trips={dest.trips} // pass trips array here too
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
