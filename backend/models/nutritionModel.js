import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  calories: Number,
});

const mealSuggestionSchema = new mongoose.Schema({
  meal: { type: String, required: true },
  suggestions: [recipeSchema],
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
      goal: String,
      calories_per_day: Number,
      macronutrients: {
        carbohydrates: String,
        proteins: String,
        fats: String,
      },
      meal_suggestions: [mealSuggestionSchema],
      seo_title: String,
      seo_content: String,
      seo_keywords: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("NutritionPlan", nutritionPlanSchema);
