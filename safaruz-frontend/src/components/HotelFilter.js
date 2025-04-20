import React from "react";

const HotelFilter = ({ location, setLocation, rating, setRating, type, setType, onFilter }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-3 bg-secondary text-light border border-light rounded-md w-56"
      >
        <option value=""> All Locations</option>
        <option value="Tashkent">Tashkent</option>
        <option value="Samarkand">Samarkand</option>
        <option value="Village">Village</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="p-3 bg-secondary text-light border border-light rounded-md w-56"
      >
        <option value=""> All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4+ Stars</option>
        <option value="3">3+ Stars</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-3 bg-secondary text-light border border-light rounded-md w-56"
      >
        <option value=""> All Types</option>
        <option value="Hostel">Hostel</option>
        <option value="Luxury">Luxury Hotel</option>
        <option value="Motel">Motel</option>
        <option value="Guesthouse">Guesthouse</option>
      </select>

      <button
        onClick={onFilter}
        className="bg-accent text-primary px-6 py-3 rounded-md hover:bg-highlight transition"
      >
         Apply Filters
      </button>
    </div>
  );
};

export default HotelFilter;
