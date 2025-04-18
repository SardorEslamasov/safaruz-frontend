import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


// Cities data
const cities = [
  { name: "Tashkent", image: "/images/cities/tashkent.jpg" },
  { name: "Samarkand", image: "/images/cities/samarkand.webp" },
  { name: "Bukhara", image: "/images/cities/bukhara.avif" },
  { name: "Khiva", image: "/images/cities/hiva.webp" },
  { name: "Karshi", image: "/images/cities/karshi.jpg" },
  { name: "Urgench", image: "/images/cities/urgench.jpg" },
  { name: "Namangan", image: "/images/cities/namangan.jpg" },
  { name: "Fergana", image: "/images/cities/fergana.jpg" },
  { name: "Karakalpakstan", image: "/images/cities/karakalpakstan.jpg" },
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/videos/uzbekistan.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Uzbekistan</h1>
          <p className="text-lg md:text-2xl mb-6">Explore culture, cities and traditions with SafarUz</p>
        </div>
      </div>

      {/* Cities Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Discover Cities of Uzbekistan
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, index) => (
              <Link
              key={index}
              to={`/cities/${city.name.toLowerCase()}`}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition bg-white block"
            >
              <img
                src={city.image}
                alt={city.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-700">{city.name}</h3>
              </div>
            </Link>            
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;