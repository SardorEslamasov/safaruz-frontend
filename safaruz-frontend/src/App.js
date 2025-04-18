import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Tours from "./pages/Tours";
import Hotels from "./pages/Hotels";
import Restaurants from "./pages/Restaurants";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CityDetails from "./pages/CityDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Header />

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cities/:cityName" element={<CityDetails />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
