import React from "react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={hotel.image_url || "https://via.placeholder.com/400x200"}
        alt={hotel.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h2 className="text-xl font-semibold">{hotel.name}</h2>
      <p className="text-gray-600">{hotel.description}</p>
      <p className="mt-2 text-green-600 font-bold">${hotel.price_per_night} / night</p>
    </div>
  );
};

export default HotelCard;
