import TripCard from "./TripCard";
import victoriaFalls from "../assets/falls.jpg";
import hwange from "../assets/hwange.jpg";
import zambezi from "../assets/chobe.jpg";

const trips = [
  {
    image: victoriaFalls,
    title: "Victoria Falls Adventure",
    description: "Experience the magnificent waterfalls and thrilling activities.",
    price: "$499",
    duration: "3 Days",
  },
  {
    image: hwange,
    title: "Hwange Safari Tour",
    description: "Witness wildlife in their natural habitat with guided safaris.",
    price: "$699",
    duration: "4 Days",
  },
  {
    image: zambezi,
    title: "Zambezi River Cruise",
    description: "Enjoy scenic river views and sunset cruises along the Zambezi.",
    price: "$599",
    duration: "2 Days",
  },
];

export default function OrganizedTrips() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Organized Trips</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trips.map((trip, idx) => (
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
    </section>
  );
}
