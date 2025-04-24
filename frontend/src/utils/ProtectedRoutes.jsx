import { Outlet, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuthentication = async () => {
      try {
        // Axios automatically sends cookies with requests when withCredentials is true
        const response = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            withCredentials: true,
          }
        );
        // console.log(response);

        // If the request succeeds, the token is valid
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-lime-400"></div>
      </div>
    );
  }

  // Once loaded, either show the protected content or redirect to signin
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
