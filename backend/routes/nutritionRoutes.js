import express from "express";
import { generateNutritionAdvice } from "../controllers/nutritionController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/plan", authMiddleware, generateNutritionAdvice);
router.post("/history", authMiddleware, generateNutritionAdvice);

export default router;
