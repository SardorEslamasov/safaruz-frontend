import React from "react";

const RestaurantsFilter = ({
  location,
  setLocation,
  rating,
  setRating,
  type,
  setType,
  onFilter,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="bg-secondary text-lightText border border-accent p-2 rounded w-48"
      >
        <option value=""> All Locations</option>
        <option value="Tashkent">Tashkent</option>
        <option value="Samarkand">Samarkand</option>
        <option value="Village">Village</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="bg-secondary text-lightText border border-accent p-2 rounded w-48"
      >
        <option value=""> All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4+ Stars</option>
        <option value="3">3+ Stars</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-secondary text-lightText border border-accent p-2 rounded w-48"
      >
        <option value=""> All Types</option>
        <option value="Cafe">Cafe</option>
        <option value="Fine Dining">Fine Dining</option>
        <option value="Fast Food">Fast Food</option>
      </select>

      <button
        onClick={onFilter}
        className="bg-accent hover:bg-yellow-400 text-black px-4 py-2 rounded shadow-md transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default RestaurantsFilter;
