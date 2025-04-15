import React from "react";

export default function Header({ userName = "Test User" }) {
  //   const [userName, setUserName] = useState("Smith Adam");

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
        {/* <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center w-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none w-full text-white"
          />
        </div> */}

        <div className="flex items-center space-x-2">
          <img
            src="/api/placeholder/40/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span>{userName}</span>
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
