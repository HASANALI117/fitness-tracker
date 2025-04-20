import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: String,
  repetitions: String,
  sets: String,
  equipment: String,
});

const dayPlanSchema = new mongoose.Schema({
  day: { type: String, required: true },
  exercises: [exerciseSchema],
});

const workoutPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goal: { type: String, required: true },
    fitness_level: { type: String, required: true },
    preferences: [String],
    health_conditions: [String],
    schedule: {
      days_per_week: { type: Number, required: true },
      session_duration: { type: Number, required: true },
    },
    plan_duration_weeks: { type: Number, required: true },
    result: {
      exercises: [dayPlanSchema],
      seo_title: String,
      seo_content: String,
      seo_keywords: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("WorkoutPlan", workoutPlanSchema);
