import React from "react";
import { Link } from "react-router-dom";

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
    <div className="bg-[#050B1E] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/videos/uzbekistan.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            Discover Uzbekistan
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-4">
            Explore culture, cities and traditions with <span className="text-yellow-400 font-semibold">SafarUz</span>
          </p>

          {/* Search Bar */}
          <div className="mt-4 w-full max-w-md">
            <input
              type="text"
              placeholder="🔍 Where do you want to go?"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-90 text-black placeholder-gray-600 focus:outline-none"
            />
          </div>

          {/* CTA Button */}
          <Link
            to="/tours"
            className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Explore Tours
          </Link>

          {/* Tagline */}
          <p className="text-sm text-gray-400 mt-3">
            ✈️ Explore. Experience. Enjoy.
          </p>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 animate-bounce text-white text-sm">
            <span>⬇ Scroll to Explore</span>
          </div>
        </div>
      </div>

      {/* Cities Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
          Discover Cities of Uzbekistan
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Link
              key={index}
              to={`/cities/${city.name.toLowerCase()}`}
              className="bg-[#101935] rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <img
                src={city.image}
                alt={city.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white">{city.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
