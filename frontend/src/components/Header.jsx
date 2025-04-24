import React, { useContext } from "react";
import { UserContext } from "../utils/ProtectedRoutes";
export default function Header() {
  const { user, loading } = useContext(UserContext);

  if (loading) return <p>Loading...</p>;

  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting = "Good Morning";
  if (hours >= 12 && hours < 17) {
    greeting = "Good Afternoon";
  } else if (hours >= 17) {
    greeting = "Good Evening";
  }
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-800">
      <div>
        <p className="text-gray-400">{greeting}</p>
        <h1 className="text-2xl font-bold">Welcome Back</h1>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <img
            src="https://picsum.photos/500"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-lime-500"
          />
          <h2 className="text-xl font-bold mx-2">
            {user.first_name + " " + user.last_name}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}
