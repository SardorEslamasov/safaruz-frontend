import axios from "axios";

// Base URL of your backend
const API_BASE_URL = "http://localhost:5001/api";

// Create a reusable axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false, // set to false if not using cookies
});

export default api;

// ==========================
// API CALL FUNCTIONS BELOW
// ==========================

// ✅ Fetch all tours
export const fetchTours = async () => {
  try {
    const response = await api.get("/tours");
    return response.data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
};

// ✅ Login user
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Register new user
export const registerUser = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;
  }
};


export const fetchUserProfile = async (token) => {
  const response = await api.get("/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// ✅ Get user bookings
export const fetchUserBookings = async (token) => {
  const response = await api.get("/my-bookings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// ✅ Get user's hotel bookings
export const fetchUserHotelBookings = async (token) => {
  try {
    const response = await api.get("/my-hotel-bookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel bookings:", error);
    throw error;
  }
};

// Update user profile info (username/email)
export const updateUserProfile = async (token, profileData) => {
  try {
    const response = await api.patch("/profile", profileData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Change password
export const changeUserPassword = async (token, oldPassword, newPassword) => {
  try {
    const response = await api.patch("/profile/password", { oldPassword, newPassword }, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

