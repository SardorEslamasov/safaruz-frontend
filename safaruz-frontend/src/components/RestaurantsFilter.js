import React from "react";

const RestaurantsFilter = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, onFilter }) => {
  return (
    <div className="flex gap-4 mb-8">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="border p-2 rounded w-40"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="border p-2 rounded w-40"
      />
      <button
        onClick={onFilter}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Filter
      </button>
    </div>
  );
};

export default RestaurantsFilter;
