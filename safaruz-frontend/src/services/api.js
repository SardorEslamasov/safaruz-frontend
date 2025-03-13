import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Change this if needed

// Fetch all tours
export const fetchTours = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tours`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    return [];
  }
};

// User login request
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
