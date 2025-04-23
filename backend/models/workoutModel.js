import mongoose from "mongoose";

// Exercise schema
const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number },
  reps: { type: Number },
  duration: { type: Number },
  equipment: { type: String },
});

// Day plan schema
const dayPlanSchema = new mongoose.Schema({
  day: { type: String, required: true },
  focus: { type: String },
  exercises: [exerciseSchema],
});

// Weekly plan schema
const weekPlanSchema = new mongoose.Schema({
  week: { type: Number, required: true },
  exercises: [dayPlanSchema],
});

// SEO schema matching the Gemini format
const seoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  keywords: [{ type: String }],
});

const workoutPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    age: { type: Number },
    height: { type: Number },
    weight: { type: Number },
    goal: { type: String, required: true },
    fitness_level: { type: String, required: true },
    preferences: [String],
    health_conditions: [String],
    schedule: {
      days_per_week: { type: Number, required: true },
      session_duration: { type: Number, required: true },
    },
    plan_duration_weeks: { type: Number, required: true },
    use_equipment: { type: Boolean },
    result: {
      weekly_plans: [weekPlanSchema],
      seo: seoSchema,
    },
  },
  { timestamps: true }
);

export default mongoose.model("WorkoutPlan", workoutPlanSchema);
