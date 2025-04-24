import { createNutritionAdvice } from "../services/deepseekService.js";
import NutritionPlan from "../models/nutritionModel.js";

export const generateNutritionAdvice = async (req, res) => {
  try {
    const {
      goal,
      dietary_restrictions,
      current_weight,
      target_weight,
      daily_activity_level,
    } = req.body;

    const userId = req.user._id;

    // Validate required fields
    if (
      !goal ||
      !dietary_restrictions ||
      !current_weight ||
      !target_weight ||
      !daily_activity_level
    ) {
      return res.status(400).json({
        status: false,
        message: "Missing required parameters",
      });
    }

    const nutritionAdvice = await createNutritionAdvice({
      goal,
      dietary_restrictions,
      current_weight,
      target_weight,
      daily_activity_level,
    });

    // Save to database
    const newPlan = await NutritionPlan.create({
      userId,
      goal,
      dietary_restrictions,
      current_weight,
      target_weight,
      daily_activity_level,
      result: nutritionAdvice.nutrition_plan,
    });

    // Add cache timestamp and other metadata
    const currentTime = Date.now();
    const result = {
      ...nutritionAdvice,
      id: newPlan._id,
      cacheTime: currentTime,
      time: currentTime,
      status: "success",
      message: "Data generated successfully",
    };

    return res.status(200).json(result);
  } catch (error) {
    console.error("Nutrition advice error:", error);
    res.status(500).json({
      status: "error",
      message: error.message || "An error occurred generating nutrition advice",
    });
  }
};

// Add this new endpoint to get nutrition history
export const getUserNutritionPlans = async (req, res) => {
  try {
    const plans = await NutritionPlan.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      status: "success",
      count: plans.length,
      data: plans,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message || "Failed to retrieve nutrition history",
    });
  }
};

// Get the most recent nutrition plan
export const getLatestNutritionPlan = async (req, res) => {
  try {
    const plan = await NutritionPlan.findOne({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    if (!plan) {
      return res.status(404).json({
        status: "error",
        message: "No nutrition plan found for this user",
      });
    }

    res.status(200).json({
      status: "success",
      data: [plan], // Wrapping in array for consistency with the frontend
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message || "Failed to retrieve latest nutrition plan",
    });
  }
};

// Get a nutrition plan by ID
export const getNutritionPlanById = async (req, res) => {
  try {
    const { planId } = req.params;

    const plan = await NutritionPlan.findOne({
      _id: planId,
      userId: req.user._id,
    });

    if (!plan) {
      return res.status(404).json({
        status: "error",
        message: "Nutrition plan not found or doesn't belong to this user",
      });
    }

    res.status(200).json({
      status: "success",
      data: plan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message || "Failed to retrieve nutrition plan",
    });
  }
};
