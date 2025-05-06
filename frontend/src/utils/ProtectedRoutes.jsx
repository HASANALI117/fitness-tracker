import { Outlet, Navigate } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";
import { verifyAuth } from "../services/api/authService";

export const UserContext = createContext({ user: null, loading: true });

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const verifyAuthentication = async () => {
      try {
        const response = await verifyAuth();
        setIsAuthenticated(true);
        setUserData(response.data);
      } catch (error) {
        // If the request fails or returns non-2xx status, token is invalid
        console.log(error.message);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAuthentication();
  }, []);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-12 h-12 border-t-2 rounded-full animate-spin border-lime-400"></div>
      </div>
    );
  }

  // Once loaded, either show the protected content or redirect to signin
  return isAuthenticated ? (
    <UserContext.Provider value={{ user: userData, loading }}>
      <Outlet />
    </UserContext.Provider>
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoutes;
