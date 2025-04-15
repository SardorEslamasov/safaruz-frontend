import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CityPage = () => {
  const { cityName } = useParams();
  const [historicalPlaces, setHistoricalPlaces] = useState([]);
  const [recreations, setRecreations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const [histRes, recRes, hotelRes, restRes] = await Promise.all([
          axios.get(`http://localhost:5001/cities/${cityName}/historical-places`),
          axios.get(`http://localhost:5001/cities/${cityName}/recreations`),
          axios.get(`http://localhost:5001/cities/${cityName}/hotels`),
          axios.get(`http://localhost:5001/cities/${cityName}/restaurants`)
        ]);
        setHistoricalPlaces(histRes.data);
        setRecreations(recRes.data);
        setHotels(hotelRes.data);
        setRestaurants(restRes.data);
      } catch (err) {
        console.error("Error fetching city data:", err);
      }
    };

    fetchCityData();
  }, [cityName]);

  const renderSection = (title, items) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            {item.name}
            {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 capitalize mb-8">
        {cityName} City Guide
      </h1>
      {renderSection("Historical Places", historicalPlaces)}
      {renderSection("Recreational Places", recreations)}
      {renderSection("Hotels", hotels)}
      {renderSection("Restaurants", restaurants)}
    </div>
  );
};

export default CityPage;
