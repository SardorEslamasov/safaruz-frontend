import React, { useEffect, useState } from "react";
import { fetchUserProfile, fetchUserBookings, fetchUserHotelBookings } from "../services/api";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Password change
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [bookings, setBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setError("No token found. Please login.");

    // Fetch user profile
    fetchUserProfile(token)
      .then((data) => {
        setProfile(data);
        setUsername(data.username);
        setEmail(data.email);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load profile");
      });

    // Fetch user bookings
    fetchUserBookings(token)
      .then((data) => setBookings(data))
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
    // Fetch user hotel bookings
      fetchUserHotelBookings(token)
      .then((data) => setHotelBookings(data))
      .catch((err) => console.error("Failed to load hotel bookings", err));
    
  }, []);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!profile) return <div className="p-4">Loading profile...</div>;

  const handleSaveProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      await fetch("/api/users/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ username, email }),
      });
      setSuccessMsg("Profile updated successfully.");
      setErrorMsg("");
    } catch (err) {
      setErrorMsg("Failed to update profile.");
      setSuccessMsg("");
    }
  };
  
  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      setErrorMsg("Please fill in both old and new passwords.");
      setSuccessMsg("");
      return;
    }
  
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("/api/users/profile/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to change password");
      }
  
      setSuccessMsg("Password changed successfully.");
      setErrorMsg("");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setErrorMsg(err.message || "Failed to change password.");
      setSuccessMsg("");
    }
  };
  
  

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">My Profile</h2>
  
        {successMsg && <p className="text-green-600 mb-2">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}
  
        {/* Editable Profile Info */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3"
          />
  
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3"
          />
  
          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
  
        {/* Change Password Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Change Password</h3>
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2"
          />
          <button
            onClick={handleChangePassword}
            disabled={!oldPassword || !newPassword}
            className={`${
              oldPassword && newPassword ? "bg-yellow-500 hover:bg-yellow-600" : "bg-yellow-300 cursor-not-allowed"
            } text-white px-4 py-2 rounded transition`}
          >
            Change Password
          </button>

        </div>
  
        {/* My Tours */}
        <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-800">My Tours</h3>
        {bookings.length === 0 ? (
          <p className="text-gray-600">You haven’t booked any tours yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {bookings.map((booking) => (
              <li key={booking.id} className="py-3">
                <p><strong>Tour:</strong> {booking.tour_name}</p>
                <p><strong>Location:</strong> {booking.location}</p>
                <p><strong>Booked At:</strong> {new Date(booking.created_at).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        )}
  
        {/* My Hotel Bookings */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">My Hotel Bookings</h3>
          {hotelBookings.length === 0 ? (
            <p className="text-gray-600">No hotel bookings found.</p>
          ) : (
            <ul className="space-y-4">
              {hotelBookings.map((hotel, index) => (
                <li key={index} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
                  <p><strong>Hotel:</strong> {hotel.hotel_name}</p>
                  <p><strong>Check-in:</strong> {new Date(hotel.check_in).toLocaleDateString()}</p>
                  <p><strong>Check-out:</strong> {new Date(hotel.check_out).toLocaleDateString()}</p>
                  <p><strong>Guests:</strong> {hotel.guests}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );  
};

export default Profile;

