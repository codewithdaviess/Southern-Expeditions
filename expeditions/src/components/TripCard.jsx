import { Clock } from "lucide-react";

export default function TripCard({ image, title, description, price, duration }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      {/* Image on top */}
      <div className="w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Text section below image */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-[#8E8E93] text-md mt-1 line-clamp-2 mb-6">{description}</p>

        {/* Price & Duration */}
        <div className="flex justify-between items-center text-gray-800 font-medium">
          {/* Price */}
          <span className="text-[#9aa04f] text-xl font-bold">{price}</span>

          {/* Duration with clock */}
          <div className="flex items-center bg-[#b5bc7933] text-[#9aa04f] px-3 py-1 rounded-full space-x-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
