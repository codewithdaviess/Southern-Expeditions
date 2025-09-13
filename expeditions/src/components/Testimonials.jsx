// import { useEffect, useState } from "react";
// 🔹 Google API logic commented out for now

import user1 from "../assets/yomaps.jpg";

const testimonials = [
  {
    name: "Yo Maps.",
    image: user1,
    rating: 5,
    text: "An unforgettable experience! Everything was perfectly organized.",
  },
  {
    name: "Yo Maps",
    image: user1,
    rating: 4,
    text: "Beautiful destinations and excellent service. Highly recommend!",
  },
  {
    name: "Yo Maps",
    image: user1,
    rating: 5,
    text: "The itinerary planner made everything so simple. I’ll book again!",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
        What Other Tourists Say
      </h2>

      {/* Grid of testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((review, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl  transition duration-300"
          >
            {/* User Image */}
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-xl  object-cover mb-4"
            />

            {/* Review Text */}
            <p className="text-gray-700 italic mb-4">“{review.text}”</p>

            {/* Name + Rating */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
