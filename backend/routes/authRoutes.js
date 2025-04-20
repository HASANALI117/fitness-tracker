import express from "express";
import { signin, signup } from "../controllers/authController.js";

const router = express.Router();

// Register a new user
router.post("/signup", signup);

// Login user
router.post("/signin", signin);

export default router;
