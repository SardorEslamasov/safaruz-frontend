import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "../services/api";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Password change
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setError("No token found. Please login.");

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
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-yellow-400">My Profile</h2>

        {successMsg && <p className="text-green-600 mb-2">{successMsg}</p>}
        {errorMsg && <p className="text-red-600 mb-2">{errorMsg}</p>}

        {/* Editable Profile Info */}
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3 dark:bg-gray-700 dark:text-white"
          />

          <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-3 dark:bg-gray-700 dark:text-white"
          />

          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>

        {/* Change Password Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 dark:text-white">Change Password</h3>
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleChangePassword}
            disabled={!oldPassword || !newPassword}
            className={`${
              oldPassword && newPassword
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-yellow-300 cursor-not-allowed"
            } text-white px-4 py-2 rounded transition`}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
