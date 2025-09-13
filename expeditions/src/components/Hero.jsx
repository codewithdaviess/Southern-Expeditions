import heroImage from "../assets/1.jpg"; // adjust the path as needed

export default function Hero() {
  return (
    <section
      className="relative w-full h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Discover Victoria Falls
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
          Plan your perfect adventure with activities, destinations, and a smart itinerary planner.
        </p>
      </div>
    </section>
  );
}
