import { useParams } from "react-router-dom";
import destinations from "../data/destinations"; // make sure this path is correct
import Navbar from "./Navbar";
import TripCard from "./TripCard";
import falls from "../assets/falls.jpg";
import chobe from "../assets/chobe.jpg";
import okavango from "../assets/delta.jpg";
import Masonry from "react-masonry-css";
import Footer from "./Footer";
``;

export default function DestinationDetails() {
  const { slug } = useParams();

  // Images for the gallery (you can replace with destination.gallery if available)
  const galleryImages = [falls, chobe, okavango, falls, chobe, okavango];

  // Masonry breakpoints
  const breakpointColumnsObj = {
    default: 4, // lg+
    1024: 4,
    768: 3, // md
    640: 2, // sm
    0: 1, // xs
  };
  // normalize slugs to prevent case issues
  const destination = destinations.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!destination)
    return <p className="text-center mt-12">Destination not found</p>;

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

      {/* Current Weather */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Current Weather
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">{destination.name}</h3>
          <p className="text-lg">Hazy sunshine</p>
          <p className="text-lg">High: 92°F (33°C) | Low: 61°F (16°C)</p>
          <p className="text-lg">Humidity: 11%</p>
        </div>
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

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto" // container
          columnClassName="pl-4 bg-clip-padding" // columns
        >
          {galleryImages.map((src, i) => (
            <div key={i} className="mb-4">
              <img src={src} alt="" className="w-full rounded-lg shadow-lg" />
            </div>
          ))}
        </Masonry>
      </section>

      {/* Map / Location */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Location</h2>
        <div className="relative  w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13263.512645217226!2d25.856667!3d-17.924444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931b8c9b0b0b0b0%3A0x1234567890abcdef!2sVictoria%20Falls%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1633036800000!5m2!1sen!2sus"
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
        <p className="text-lg text-gray-700">
          {destination.name} offers a range of accommodations, from luxury
          hotels to budget lodges. Popular options include The Victoria Falls
          Hotel, Ilala Lodge, and nearby campsites.
        </p>
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
            Be cautious near the edge of the falls; the currents are strong.
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
