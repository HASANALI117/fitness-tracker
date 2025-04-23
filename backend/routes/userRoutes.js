import express from "express";
import {
  getProfile,
  updateProfile,
  deleteAccount,
  changePassword,
} from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.delete("/account", authMiddleware, deleteAccount);
router.post("/change-password", authMiddleware, changePassword);

export default router;
