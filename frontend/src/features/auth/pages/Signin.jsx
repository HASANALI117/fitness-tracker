import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../../services/api/authService";

export default function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signin({
        email: formData.email,
        password: formData.password,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Signin error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-black">
      <div className="w-full max-w-md p-8 space-y-8 border border-gray-800 rounded-lg shadow-md bg-gray-900/80">
        <div className="text-center">
          <img
            className="w-auto h-24 mx-auto"
            src="logo.PNG"
            alt="Fitness Tracker Logo"
          />
          <h2 className="text-3xl font-bold text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Or{" "}
            <Link
              to="/signup"
              className="font-medium text-lime-400 hover:text-lime-300"
            >
              create a new account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                placeholder="Email address"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-lime-400 hover:text-lime-300"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md group bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-lime-400"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          Start your fitness journey today! Track your workouts, set goals, and
          achieve results.
        </p>
      </div>
    </div>
  );
}
