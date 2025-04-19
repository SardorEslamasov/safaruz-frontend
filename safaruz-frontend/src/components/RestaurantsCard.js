import React from "react";

const RestaurantsCard = ({ restaurant }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={restaurant.image || "https://via.placeholder.com/400x250"}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{restaurant.name}</h2>
        <p className="text-gray-600 text-sm mb-2">{restaurant.description}</p>
        <p className="text-gray-800 font-bold">💰 {restaurant.price} UZS</p>
        <p className="text-sm text-gray-500 mt-1">📍 {restaurant.location}</p>
      </div>
    </div>
  );
};

export default RestaurantsCard;
