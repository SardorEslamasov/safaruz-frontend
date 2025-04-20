import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelCard from "../components/HotelCard";
import HotelFilter from "../components/HotelFilter";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [type, setType] = useState("");

  const fetchHotels = async () => {
    try {
      const res = await axios.get("http://localhost:5001/hotels", {
        params: { location, rating, type },
      });
      setHotels(res.data);
    } catch (err) {
      console.error("Error fetching hotels", err);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, [location, rating, type]);

  return (
    <div className="min-h-screen bg-primary text-light px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-accent mb-10">
           Explore Hotels in Uzbekistan
        </h1>

        <HotelFilter
          location={location}
          setLocation={setLocation}
          rating={rating}
          setRating={setRating}
          type={type}
          setType={setType}
          onFilter={fetchHotels}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {hotels.length === 0 ? (
            <p className="text-gray-400 col-span-full text-center">
              No hotels match your filters.
            </p>
          ) : (
            hotels.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
