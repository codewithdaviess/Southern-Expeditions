import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import destinations from "../data/destinations"; // your destinations file
import Navbar from "./Navbar";
import TripCard from "./TripCard";
import { motion } from "framer-motion";
import Footer from "./Footer";

// Gallery images
import falls from "../assets/falls.jpg";
import chobe from "../assets/chobe.jpg";
import okavango from "../assets/delta.jpg";
import hwange from "../assets/hwange.jpg";
import kalahari from "../assets/kalahari.jpg";
import capetown from "../assets/capetown.jpg";
import etoshanationalpark from "../assets/etoshanationalpark.jpg";
import liwondenationalpark from "../assets/liwondenationalpark.jpg";
import greatzimbabwe from "../assets/greatzimbabwe.jpg";
import waterfallLodgeRoom from "../assets/waterfalls_lodge_room.jpg";
import waterfallsLodge from "../assets/waterfalls_lodge.jpg";
import waterfallsLodgeArrival from "../assets/waterfalls_lodge_arrival.jpg";

export default function DestinationDetails() {
  const { slug } = useParams();
  const [weather, setWeather] = useState(null);

  // Find destination
  const destination = destinations.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!destination)
    return <p className="text-center mt-12">Destination not found</p>;

  // Gallery images (replace with destination.gallery if needed)
  const galleryImages = [
    falls,
    chobe,
    okavango,
    hwange,
    kalahari,
    capetown,
    etoshanationalpark,
    liwondenationalpark,
    greatzimbabwe,
  ];

  // Fetch weather
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_WEATHER_API_KEY
          }&q=${destination.name}&aqi=no`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
  }, [destination.name]);

  return (
    <>
      <Navbar />

      {/* Destination Header */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {destination.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            {destination.subheading}
          </p>
        </div>
      </section>

      {/* Overview / Description */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          About {destination.name}
        </h2>
        <p className="text-lg text-gray-700">
          {destination.description ||
            "Explore this beautiful destination, rich in culture, nature, and experiences. Discover everything from breathtaking scenery to exciting activities."}
        </p>
      </section>
      {/* Floating CTA Bar */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/book-trip"
          className="flex items-center gap-3 bg-[#9aa04f] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#7a8b3a] transition-all "
          title={`Book a trip to ${destination.name}`}
        >
          ✈️ Book Trip
        </a>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Daily Weather</h2>

        {weather ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Morning", "Afternoon", "Evening"].map((timeOfDay, i) => {
              // Generate fake temps for demo; you can replace with forecast API data
              const tempOffset = i === 0 ? -2 : i === 1 ? 0 : 2;
              const temp = weather.current.temp_c + tempOffset;
              const condition = weather.current.condition.text.toLowerCase();

              // Determine background & icon
              let bgColor = "bg-yellow-100 text-yellow-800";
              let icon = "🌤️";

              if (temp >= 30) {
                bgColor = "bg-red-200 text-red-800";
                icon = "☀️";
              } else if (temp <= 15) {
                bgColor = "bg-blue-200 text-blue-800";
                icon = "❄️";
              } else if (condition.includes("rain")) {
                bgColor = "bg-gray-300 text-gray-800";
                icon = "🌧️";
              } else if (condition.includes("cloud")) {
                bgColor = "bg-gray-200 text-gray-800";
                icon = "☁️";
              }

              return (
                <motion.div
                  key={i}
                  className={`p-6 rounded-lg shadow-lg flex flex-col items-center justify-center ${bgColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{timeOfDay}</h3>
                  <span className="text-6xl">{icon}</span>
                  <p className="mt-2 text-4xl font-bold">{temp}°C</p>
                  <p className="mt-1 text-lg">
                    Feels like {weather.current.feelslike_c}°C
                  </p>
                  <p className="mt-1 text-sm">{condition}</p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </section>

      {/* Organized Trips */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Organized Trips in {destination.name}
        </h2>

        {destination.trips && destination.trips.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destination.trips.map((trip, idx) => (
              <TripCard
                key={idx}
                image={trip.image}
                title={trip.title}
                description={trip.description}
                price={trip.price}
                duration={trip.duration}
              />
            ))}
          </div>
        ) : (
          <p>No trips available for this destination yet.</p>
        )}
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Gallery</h2>
        <div className="columns-[300px] space-y-4">
          {galleryImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-full mb-4 rounded-lg break-inside-avoid"
            />
          ))}
        </div>
      </section>

      {/* Map / Location */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Location</h2>
        <div className="relative w-full h-64">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              destination.name
            )}&output=embed`}
            width="100%"
            height="100%"
            className="rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Best Time to Visit
        </h2>
        <p className="text-lg text-gray-700">
          The best time to visit {destination.name} is during the dry season,
          from May to October. Clear skies and optimal water flow provide
          stunning views.
        </p>
      </section>

      {/* Accommodation */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Where to Stay</h2>
        <p className="text-lg text-gray-700 mb-6">
          {destination.name} offers a range of accommodations, from luxury
          hotels to budget lodges. Popular options include The Victoria Falls
          Hotel and Waterfalls Lodge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={waterfallLodgeRoom}
            alt="Waterfalls Lodge Room"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src={waterfallsLodge}
            alt="Waterfalls Lodge"
            className="w-full rounded-lg shadow-lg"
          />
          <img
            src={waterfallsLodgeArrival}
            alt="Waterfalls Lodge Arrival"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Travel Tips */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Travel Tips</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Carry light clothing and sunscreen; temperatures can be high.</li>
          <li>Stay hydrated, especially during the hot months.</li>
          <li>
            Respect local customs and always ask before taking photos of people.
          </li>
          <li>
            Be cautious near the edge of waterfalls or rivers; currents are
            strong.
          </li>
        </ul>
      </section>

      {/* Nearby Attractions */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Nearby Attractions
        </h2>
        <p className="text-lg text-gray-700">
          Explore nearby attractions such as Hwange National Park, Chobe
          National Park, and the Okavango Delta. These destinations offer unique
          wildlife experiences and are easily accessible from {destination.name}
          .
        </p>
      </section>

      <Footer />
    </>
  );
}
