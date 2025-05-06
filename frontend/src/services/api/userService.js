import apiClient from "./apiConfig";

/**
 * Get user profile data
 * @returns {Promise<Object>} User profile
 */
export const getProfile = async () => {
  try {
    const response = await apiClient.get("/api/user/profile");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
};

/**
 * Update user profile data
 * @param {Object} profileData - Updated profile information
 * @returns {Promise<Object>} Updated user profile
 */
export const updateProfile = async (profileData) => {
  try {
    const response = await apiClient.put("/api/user/profile", profileData);
    return response.data;
  } catch (error) {
    console.error("Failed to update profile:", error);
    throw error;
  }
};

/**
 * Change user password
 * @param {Object} passwordData - Password change data
 * @returns {Promise<Object>} Password change response
 */
export const changePassword = async (passwordData) => {
  try {
    const response = await apiClient.post(
      "/api/user/change-password",
      passwordData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to change password:", error);
    throw error;
  }
};

/**
 * Delete user account
 * @returns {Promise<Object>} Account deletion response
 */
export const deleteAccount = async () => {
  try {
    const response = await apiClient.delete("/api/user/account");
    return response.data;
  } catch (error) {
    console.error("Failed to delete account:", error);
    throw error;
  }
};
