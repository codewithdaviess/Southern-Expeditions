import { Globe, Hotel, Plane } from "lucide-react";

const offers = [
  {
    icon: (
      <Globe className="w-12 h-12 text-[#9aa04f] bg-[#b5bc7933] p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out group-hover:shadow-xl" />
    ),
    title: "World-Class Tours",
    description: "Explore breathtaking destinations with expert guides and curated experiences.",
  },
  {
    icon: (
      <Hotel className="w-12 h-12 text-[#9aa04f] bg-[#b5bc7933] p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out group-hover:shadow-xl" />
    ),
    title: "Comfortable Stays",
    description: "Enjoy the best hotels and lodges for a relaxing and memorable stay.",
  },
  {
    icon: (
      <Plane className="w-12 h-12 text-[#9aa04f] bg-[#b5bc7933] p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out group-hover:shadow-xl" />
    ),
    title: "Affordable Flights",
    description: "Book convenient and budget-friendly flights to your dream locations.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-left">
        What We Offer
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="group flex items-start space-x-4 bg-white p-6 rounded-2xl "
          >
            {/* Icon */}
            <div>{offer.icon}</div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {offer.title}
              </h3>
              <p className="text-[#8E8E93] text-md mt-1 tracking-tight">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
