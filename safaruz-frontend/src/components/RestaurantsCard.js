import React from "react";

const RestaurantsCard = ({ restaurant }) => {
  return (
    <div className="bg-secondary text-white shadow-md rounded-lg p-4 hover:shadow-xl transition border border-accent">
      <h3 className="text-xl font-semibold text-accent">{restaurant.name}</h3>
      <p className="text-lightText mt-1">{restaurant.description}</p>

      <div className="mt-3 text-sm space-y-1">
        <p><strong>Type:</strong> {restaurant.type}</p>
        <p><strong>Rating:</strong> ⭐ {restaurant.rating || "N/A"}</p>
        <p><strong>Location:</strong> {restaurant.location}</p>

        {restaurant.instagram && (
          <p>
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 hover:underline"
            >
              Instagram Page
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantsCard;
