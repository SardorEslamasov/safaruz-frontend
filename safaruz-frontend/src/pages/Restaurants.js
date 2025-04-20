import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantsCard from "../components/RestaurantsCard";
import RestaurantsFilter from "../components/RestaurantsFilter";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [type, setType] = useState("");

  const fetchRestaurants = async () => {
    try {
      const res = await axios.get("http://localhost:5001/restaurants", {
        params: { location, rating, type },
      });
      setRestaurants(res.data);
    } catch (err) {
      console.error("Error fetching restaurants", err);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [location, rating, type]);

  return (
    <div className="min-h-screen px-6 py-10 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-accent mb-10">
           Discover the Best Restaurants
        </h1>

        <RestaurantsFilter
          location={location}
          setLocation={setLocation}
          rating={rating}
          setRating={setRating}
          type={type}
          setType={setType}
          onFilter={fetchRestaurants}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantsCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className="col-span-full text-center text-lightText">
              No restaurants match your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
