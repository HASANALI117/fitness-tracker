import express from "express";
import {
  generateNutritionAdvice,
  getLatestNutritionPlan,
  getUserNutritionPlans,
  getNutritionPlanById,
} from "../controllers/nutritionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new plan
router.post("/generatePlan", authMiddleware, generateNutritionAdvice);

// Get latest plan (for the frontend DietTracker)
router.get("/latestPlan", authMiddleware, getLatestNutritionPlan);

// Get all plans
router.get("/allPlans", authMiddleware, getUserNutritionPlans);

// Get plan by ID
router.get("/getPlan/:id", authMiddleware, getNutritionPlanById);
export default router;
