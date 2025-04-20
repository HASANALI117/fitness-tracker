// import axios from "axios";
import { createWorkoutPlan } from "../services/deepseekService.js";
import WorkoutPlan from "../models/workoutModel.js";

export const generateWorkoutPlan = async (req, res, next) => {
  try {
    const {
      goal,
      fitness_level,
      preferences = [],
      health_conditions = [],
      schedule,
      plan_duration_weeks,
    } = req.body;

    const userId = req.user._id;

    // Validate required fields
    if (!goal || !fitness_level || !schedule || !plan_duration_weeks) {
      return res.status(400).json({
        status: false,
        message: "Missing required parameters",
      });
    }

    const workoutData = await createWorkoutPlan({
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
    });

    await WorkoutPlan.create({
      userId,
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
      result: {
        exercises: workoutData.result.exercises,
        seo_title: workoutData.result.seo_title,
        seo_content: workoutData.result.seo_content,
        seo_keywords: workoutData.result.seo_keywords,
      },
    });

    // Add cache timestamp and other metadata
    const currentTime = Date.now();
    const result = {
      ...workoutData,
      cacheTime: currentTime,
      time: currentTime,
      status: "success",
      message: "Data generated successfully",
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

// export const generateWorkoutPlan = async (req, res) => {
//   try {
//     const {
//       goal,
//       fitness_level,
//       preferences,
//       health_conditions,
//       schedule,
//       plan_duration_weeks,
//       lang,
//     } = req.body;

//     const options = {
//       method: "POST",
//       url: "https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan",
//       params: { noqueue: "1" },
//       headers: {
//         "x-rapidapi-key": process.env.RAPIDAPI_KEY,
//         "x-rapidapi-host":
//           "ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com",
//         "Content-Type": "application/json",
//       },
//       data: {
//         goal,
//         fitness_level,
//         preferences,
//         health_conditions,
//         schedule,
//         plan_duration_weeks,
//         lang,
//       },
//     };

//     const response = await axios.request(options);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Workout API error:", error);
//     res.status(500).json({
//       message: "Error fetching workout plan",
//       error: error.response?.data || error.message,
//     });
//   }
// };
