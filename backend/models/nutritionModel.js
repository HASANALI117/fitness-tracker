import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fats: { type: Number, required: true },
});

const mealSchema = new mongoose.Schema({
  meal: { type: String, required: true },
  suggestions: [foodItemSchema],
});

const nutritionPlanSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goal: { type: String, required: true },
    dietary_restrictions: [String],
    current_weight: { type: Number, required: true },
    target_weight: { type: Number, required: true },
    daily_activity_level: { type: String, required: true },
    result: {
      goal_summary: String,
      calories_per_day: { type: Number, required: true },
      macronutrients: {
        carbohydrates: { type: Number, required: true },
        proteins: { type: Number, required: true },
        fats: { type: Number, required: true },
      },
      daily_meals: [mealSchema], // Changed from meal_suggestions to daily_meals
      seo: {
        title: String,
        description: String,
        keywords: [String],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("NutritionPlan", nutritionPlanSchema);
