import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await registerUser(name, email, password);
      login(res.token);
      navigate("/");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="w-full max-w-md rounded-xl bg-[#1f1f1f] p-8 shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-yellow-400">
          Create Account <span className="text-2xl"></span>
        </h2>

        {error && (
          <p className="mb-4 text-center text-sm text-red-400">{error}</p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
