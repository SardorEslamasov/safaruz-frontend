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
import Booking from "./pages/Booking";
import TourDetail from "./pages/TourDetail";
import PrivateRoute from "./components/PrivateRoute";


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { TourProvider } from "./context/TourContext";

// Styles
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <AuthProvider>
      <TourProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/tours/:id" element={<TourDetail />} />
            {/* 404 Route */}
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
          <Footer />
        </Router>
      </TourProvider>
    </AuthProvider>
  );
}

export default App;
