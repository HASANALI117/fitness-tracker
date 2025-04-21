import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in attempted with:", formData);
    // Add authentication logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900/80 rounded-lg shadow-md border border-gray-800">
        <div className="text-center">
          <img
            className="mx-auto h-24 w-auto"
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
          <div className="rounded-md shadow-sm space-y-4">
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
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:border-lime-400 focus:ring-lime-400"
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
                className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm placeholder-gray-500 text-white focus:outline-none focus:border-lime-400 focus:ring-lime-400"
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-black bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-lime-400"
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
