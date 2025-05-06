import apiClient from "./apiConfig";

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} Registration response
 */
export const signup = async (userData) => {
  try {
    const response = await apiClient.post("/api/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

/**
 * Log in an existing user
 * @param {Object} credentials - User login credentials
 * @returns {Promise<Object>} Login response with user data and token
 */
export const signin = async (credentials) => {
  try {
    const response = await apiClient.post("/api/auth/signin", credentials);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

/**
 * Verify if user is authenticated
 * @returns {Promise<Object>} User data if authenticated
 */
export const verifyAuth = async () => {
  try {
    const response = await apiClient.get("/api/user/profile");
    return response.data;
  } catch (error) {
    console.error("Authentication verification failed:", error);
    throw error;
  }
};
