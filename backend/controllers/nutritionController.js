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
    await NutritionPlan.create({
      userId,
      goal,
      dietary_restrictions,
      current_weight,
      target_weight,
      daily_activity_level,
      result: nutritionAdvice.result,
    });

    // Add cache timestamp and other metadata
    const currentTime = Date.now();
    const result = {
      ...nutritionAdvice,
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
