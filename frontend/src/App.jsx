import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
import Signin from "./features/auth/pages/Signin";
import Signup from "./features/auth/pages/Signup";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Profile from "./features/profile/Profile";
import WorkoutTracker from "./features/dashboard/pages/WorkoutTracker";
import DietTracker from "./features/dashboard/pages/DietTracker";
import ProtectedRoutes from "./utils/ProtectedRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workout" element={<WorkoutTracker />} />
          <Route path="/diet" element={<DietTracker />} />
        </Route>
      </Routes>
    </Router>
  );
}
