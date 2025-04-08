import axios from "axios"; // ✅ Use axios directly

const API_BASE_URL = "http://localhost:3000/api";


// Register user
export const registerUser = async ({ username, email, password, role }) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
    username, email, password, role,
  });
  return response.data;
};

// Login user
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
  return response.data;
};
