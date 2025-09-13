import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhatWeOffer from "../components/WhatweOffer";
import DestinationCard from "../components/DestinationCard";
import Testimonials from "../components/Testimonials";
import chobe from "../assets/chobe.jpg";
import hwange from "../assets/hwange.jpg";
import falls from "../assets/falls.jpg";
import delta from "../assets/delta.jpg";
import OrganizedTrips from "../components/OrganizedTrips";
import FAQ from "../components/FAQ";

export default function Home() {
  const destinations = [
    {
      name: "Victoria Falls",
      image: falls
    },
    {
      name: "Chobe National Park",
      image: chobe
    },
    {
      name: "Okavango Delta",
      image: delta
    },
    {
      name: "Hwange National Park",
      image: hwange
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-left">
          Popular Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <DestinationCard key={idx} name={dest.name} image={dest.image} />
          ))}
        </div>
      </section>
      <WhatWeOffer />
      <OrganizedTrips/>
      <FAQ/>
      <Testimonials/>

      <Footer />
    </>
  );
}
