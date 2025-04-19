import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantsCard from "../components/RestaurantsCard";
import RestaurantsFilter from "../components/RestaurantsFilter";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, [minPrice, maxPrice]);

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get("http://localhost:5001/restaurants", {
        params: { minPrice, maxPrice },
      });
      setRestaurants(res.data);
    } catch (err) {
      console.error("Error fetching restaurants", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Discover Restaurants</h1>

      {/* Filters */}
      <RestaurantsFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        onFilter={fetchRestaurants}
      />

      {/* Restaurants Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {restaurants.map((restaurant) => (
          <RestaurantsCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
