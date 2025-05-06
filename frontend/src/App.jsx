import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/pages/Home";
// import Signin from "./features/auth/pages/Signin";
// import Signup from "./features/auth/pages/Signup";
import Dashboard from "./features/dashboard/pages/Dashboard";
import Profile from "./features/profile/pages/Profile";
import WorkoutTrackerPage from "./features/workout/pages/WorkoutTrackerPage";
import NutritionTracker from "./features/nutrition/pages/NutritionTracker";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import About from "./features/about/pages/About";
import AuthPages from "./features/auth/pages/AuthPages";
import DashboardPage from "./features/dashboard/pages/DashboardPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signin" element={<Signin />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/signin" element={<AuthPages />} />
        <Route path="/signup" element={<AuthPages />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workout" element={<WorkoutTrackerPage />} />
          <Route path="/diet" element={<NutritionTracker />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
