import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/images/safaruz-logo.png"
          alt="SafarUz Logo"
          className="h-10 w-auto"
        />
        <span className="text-2xl font-bold text-yellow-400">SafarUz</span>
      </Link>


        <nav className="space-x-6 text-sm md:text-base font-medium flex items-center">
          <Link to="/tours" className="hover:text-yellow-300 transition">Tours</Link>
          <Link to="/hotels" className="hover:text-yellow-300 transition">Hotels</Link>
          <Link to="/restaurants" className="hover:text-yellow-300 transition">Restaurants</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
              <button
                onClick={logout}
                className="ml-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md transition">
                Login
              </Link>
              <Link to="/register" className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
