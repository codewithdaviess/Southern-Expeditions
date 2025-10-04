import { Link } from "react-router-dom";

export default function DestinationCard({ name, image, trips, slug }) {
  return (
    <Link to={`/destinations/${slug}`}>
      <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{trips?.length || 0} Experiences</p>
        </div>
      </div>
    </Link>
  );
}
