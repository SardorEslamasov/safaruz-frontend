import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "../components/HotelCard";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchHotels();
  }, [minPrice, maxPrice]);

  const fetchHotels = async () => {
    try {
      const res = await axios.get("http://localhost:5001/hotels", {
        params: {
          minPrice,
          maxPrice,
        },
      });
      setHotels(res.data);
    } catch (err) {
      console.error("Error fetching hotels", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Hotels</h1>

      {/* Filters */}
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
          onClick={fetchHotels}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Filter
        </button>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
