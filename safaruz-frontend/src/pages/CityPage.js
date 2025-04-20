import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CityPage = () => {
  const { cityName } = useParams();
  const [historicalPlaces, setHistoricalPlaces] = useState([]);
  const [recreations, setRecreations] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const [histRes, recRes] = await Promise.all([
          axios.get(`http://localhost:5001/cities/${cityName}/historical-places`),
          axios.get(`http://localhost:5001/cities/${cityName}/recreations`)
        ]);
        setHistoricalPlaces(histRes.data);
        setRecreations(recRes.data);
      } catch (err) {
        console.error("Error fetching city data:", err);
      }
    };

    fetchCityData();
  }, [cityName]);

  const renderSection = (title, items) => (
    <section className="mb-10">
      <h2 className="text-3xl font-extrabold text-yellow-400 mb-6 border-b border-yellow-500 pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.description || "No description available."}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12 capitalize">
          {cityName} City Guide
        </h1>

        {renderSection(" Historical Places", historicalPlaces)}
        {renderSection(" Recreational Places", recreations)}
      </div>
    </div>
  );
};

export default CityPage;
