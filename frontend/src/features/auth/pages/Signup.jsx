import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../services/api/authService";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    firstName: "",
    lastName: "",
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
      const userData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        age: formData.age ? Number(formData.age) : undefined,
        height: formData.height ? Number(formData.height) : undefined,
        weight: formData.weight ? Number(formData.weight) : undefined,
        email: formData.email,
        password: formData.password,
      };

      await signup(userData);

      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-black">
      <div className="w-full max-w-md p-8 mt-12 space-y-8 border border-gray-800 rounded-lg shadow-md bg-gray-900/80">
        <div className="text-center">
          <img
            className="w-auto h-24 mx-auto"
            src="logo.PNG"
            alt="Fitness Tracker Logo"
          />
          <h2 className="text-3xl font-bold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-lime-400 hover:text-lime-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-300"
                >
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="text"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                  placeholder="Age"
                />
              </div>
              <div>
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-gray-300"
                >
                  Height
                </label>
                <input
                  id="height"
                  name="height"
                  type="text"
                  required
                  value={formData.height}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                  placeholder="Height"
                />
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-gray-300"
                >
                  Weight
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="text"
                  required
                  value={formData.weight}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                  placeholder="Weight"
                />
              </div>
            </div>

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
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 text-white placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:border-lime-400 focus:ring-lime-400"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md group bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-lime-400"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          By signing up, you'll be able to track your workouts, set fitness
          goals, and monitor your progress!
        </p>
      </div>
    </div>
  );
}
