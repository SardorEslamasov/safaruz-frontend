import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo and Motto */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">SafarUz</h2>
          <p className="text-sm">
            Discover the wonders of Uzbekistan with ease and comfort.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/tours" className="hover:text-yellow-300 transition">Tours</Link></li>
            <li><Link to="/hotels" className="hover:text-yellow-300 transition">Hotels</Link></li>
            <li><Link to="/restaurants" className="hover:text-yellow-300 transition">Restaurants</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Right: Social Media or Contact */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Connect</h3>
          <p className="text-sm">Email: info@safaruz.uz</p>
          <p className="text-sm">Phone: +998 90 123 45 67</p>
          <div className="mt-3 flex space-x-4">
            {/* Social media placeholders */}
            <a href="#" className="hover:text-yellow-300 transition">Instagram</a>
            <a href="#" className="hover:text-yellow-300 transition">Telegram</a>
            <a href="#" className="hover:text-yellow-300 transition">Facebook</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} SafarUz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
