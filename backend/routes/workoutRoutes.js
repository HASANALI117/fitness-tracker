import express from "express";
import {
  generateWorkoutPlan,
  getUserWorkoutPlans,
} from "../controllers/workoutController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/plan", authMiddleware, generateWorkoutPlan);
router.get("/history", authMiddleware, getUserWorkoutPlans);

export default router;
