import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black text-white">
      <img
        src="https://breakdancelibrary.com/fitness/wp-content/uploads/sites/23/2022/12/logo-fitness.svg"
        alt=""
      />

      <div className="flex">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Features</h1>
        <h1>Service</h1>
        <h1>Exercise</h1>
      </div>

      <div className="flex">
        <button>Contact Us</button>
        <button>Get Started</button>
      </div>
    </div>
  );
}
