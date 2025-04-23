// import { createWorkoutPlan } from "../services/deepseekService.js";
import { createWorkoutPlan } from "../services/geminiService.js";
import WorkoutPlan from "../models/workoutModel.js";

export const generateWorkoutPlan = async (req, res) => {
  try {
    const {
      age,
      height,
      weight,
      goal,
      fitness_level,
      preferences = [],
      health_conditions = [],
      schedule,
      plan_duration_weeks,
      use_equipment,
    } = req.body;

    const userId = req.user._id;

    // Validate required fields
    if (
      !goal ||
      !fitness_level ||
      !schedule ||
      !plan_duration_weeks ||
      !age ||
      !height ||
      !weight
    ) {
      return res.status(400).json({
        status: false,
        message: "Missing required parameters",
      });
    }

    // Validate schedule structure
    if (!schedule.days_per_week || !schedule.session_duration) {
      return res.status(400).json({
        status: false,
        message: "Schedule must include days_per_week and session_duration",
      });
    }

    const workoutData = await createWorkoutPlan({
      age,
      height,
      weight,
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
      use_equipment,
    });

    // Create a workout plan record in the database
    const newPlan = await WorkoutPlan.create({
      userId,
      age,
      height,
      weight,
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
      use_equipment,
      // Store the more detailed response structure
      result: {
        weekly_plans: workoutData.weekly_plans,
        seo: workoutData.seo,
      },
    });

    // Add cache timestamp and other metadata
    const currentTime = Date.now();
    const result = {
      ...workoutData,
      id: newPlan._id,
      cacheTime: currentTime,
      time: currentTime,
      status: "success",
      message: "Workout plan generated successfully",
    };

    return res.status(200).json(result);
  } catch (error) {
    console.error("Workout plan error:", error);
    res.status(500).json({
      status: "error",
      message: error.message || "An error occurred generating the workout plan",
    });
  }
};

// Get user's workout history
export const getUserWorkoutPlans = async (req, res) => {
  try {
    const plans = await WorkoutPlan.find({ userId: req.user._id })
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
      message: error.message || "Failed to retrieve workout history",
    });
  }
};

// Get a specific workout plan by ID
export const getWorkoutPlanById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find plan by ID and verify it belongs to the current user
    const plan = await WorkoutPlan.findOne({
      _id: id,
      userId: req.user._id,
    });

    if (!plan) {
      return res.status(404).json({
        status: "error",
        message: "Workout plan not found",
      });
    }

    res.status(200).json({
      status: "success",
      plan,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message || "Failed to retrieve workout plan",
    });
  }
};
