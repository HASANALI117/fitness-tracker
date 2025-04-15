import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/components/Home";
import Signin from "./features/auth/pages/Signin";
import Signup from "./features/auth/pages/Signup";
import Dashboard from "./features/dashboard/pages/Dashboard";
// import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
