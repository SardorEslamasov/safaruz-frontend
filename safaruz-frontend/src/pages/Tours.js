import React, { useEffect, useState } from "react";
import axios from "axios";
import TourCard from "../components/TourCard";

const Tours = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const res = await axios.get("http://localhost:5001/tours");
        setTours(res.data);
      } catch (err) {
        console.error("Failed to fetch tours:", err);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-background dark:bg-gray-950 text-light">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-accent text-center"> Tour Agencies in Uzbekistan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.length > 0 ? (
            tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
          ) : (
            <p className="text-center col-span-full text-gray-400">No tours available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tours;
