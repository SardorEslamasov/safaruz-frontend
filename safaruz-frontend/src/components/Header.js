import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SafarUz
        </Link>

        <nav className="space-x-4 flex items-center">
          <Link to="/tours" className="text-gray-700 hover:text-blue-600">Tours</Link>
          <Link to="/cities" className="text-gray-700 hover:text-blue-600">Cities</Link>
          <Link to="/hotels" className="text-gray-700 hover:text-blue-600">Hotels</Link>
          <Link to="/restaurants" className="text-gray-700 hover:text-blue-600">Restaurants</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-gray-700 hover:text-blue-600">Profile</Link>
              <button
                onClick={logout}
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
              <Link to="/register" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
