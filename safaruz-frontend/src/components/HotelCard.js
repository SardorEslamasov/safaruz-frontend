import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-secondary text-light border border-dark shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
      <img
        src={hotel.image_url || "https://via.placeholder.com/400x200"}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-accent">{hotel.name}</h2>
        <p className="text-sm text-gray-400">{hotel.location}</p>
        <p className="text-sm mt-2">{hotel.type} • ⭐ {hotel.rating}</p>
        <p className="text-sm mt-2">{hotel.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default HotelCard;
