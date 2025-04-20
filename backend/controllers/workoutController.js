// import axios from "axios";
import { createWorkoutPlan } from "../services/deepseekService.js";

export const generateWorkoutPlan = async (req, res, next) => {
  try {
    const {
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
    } = req.body;

    // Validate required fields
    if (!goal || !fitness_level || !schedule || !plan_duration_weeks) {
      return res.status(400).json({
        status: false,
        message: "Missing required parameters",
      });
    }

    const workoutPlan = await createWorkoutPlan({
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
    });

    // Add cache timestamp and other metadata
    const currentTime = Date.now();
    const result = {
      ...workoutPlan,
      cacheTime: currentTime,
      time: currentTime,
      status: "success",
      message: "Data generated successfully",
    };

    return res.status(200).json(result);
  } catch (error) {
    next(error);
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
