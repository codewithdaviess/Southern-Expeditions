export default function DestinationCard({ name, image }) {
  return (
    <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg group">
      {/* Background image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>

      {/* Destination Name */}
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
      </div>
    </div>
  );
}
