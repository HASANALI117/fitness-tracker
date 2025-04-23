import express from "express";
import {
  generateWorkoutPlan,
  getUserWorkoutPlans,
  getWorkoutPlanById,
} from "../controllers/workoutController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generateWorkoutPlan", authMiddleware, generateWorkoutPlan);
router.get("/getAllPlans", authMiddleware, getUserWorkoutPlans);
router.get("/getPlan/:id", authMiddleware, getWorkoutPlanById);

export default router;
