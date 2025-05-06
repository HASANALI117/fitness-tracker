import apiClient from "./apiConfig";

/**
 * Fetches all workout plans for the user
 * @returns {Promise<Array>} Workout plans
 */
export const getAllWorkoutPlans = async () => {
  try {
    const response = await apiClient.get("/api/workout/getAllPlans");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch workout plans:", error);
    throw error;
  }
};

/**
 * Fetches a specific workout plan by ID
 * @param {string} id - The workout plan ID
 * @returns {Promise<Object>} Workout plan details
 */
export const getWorkoutPlanById = async (id) => {
  try {
    const response = await apiClient.get(`/api/workout/getPlan/${id}`);
    return response.data.plan;
  } catch (error) {
    console.error(`Failed to fetch workout plan with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Generates a new workout plan
 * @param {Object} formData - Plan configuration data
 * @returns {Promise<Object>} The newly created workout plan
 */
export const generateWorkoutPlan = async (formData) => {
  try {
    const response = await apiClient.post(
      "/api/workout/generateWorkoutPlan",
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Failed to generate workout plan:", error);
    throw error;
  }
};
