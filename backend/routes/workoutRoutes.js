import express from "express";
import { generateWorkoutPlan } from "../controllers/workoutController.js";

const router = express.Router();

router.post("/plan", generateWorkoutPlan);

export default router;
