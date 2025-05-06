import apiClient from "./apiConfig";

/**
 * Generates nutrition advice based on user parameters
 * @param {Object} params - Nutrition parameters
 * @returns {Promise<Object>} Nutrition plan
 */
export const generateNutritionAdvice = async (params) => {
  try {
    const response = await apiClient.post(
      "/api/nutrition/generateAdvice",
      params
    );
    return response.data;
  } catch (error) {
    console.error("Failed to generate nutrition advice:", error);
    throw error;
  }
};

/**
 * Fetches all nutrition plans for the user
 * @returns {Promise<Array>} Nutrition plans
 */
export const getAllNutritionPlans = async () => {
  try {
    const response = await apiClient.get("/api/nutrition/getAllPlans");
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch nutrition plans:", error);
    throw error;
  }
};

/**
 * Fetches a specific nutrition plan by ID
 * @param {string} id - The nutrition plan ID
 * @returns {Promise<Object>} Nutrition plan details
 */
export const getNutritionPlanById = async (id) => {
  try {
    const response = await apiClient.get(`/api/nutrition/getPlan/${id}`);
    return response.data.plan;
  } catch (error) {
    console.error(`Failed to fetch nutrition plan with ID ${id}:`, error);
    throw error;
  }
};
