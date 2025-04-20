import OpenAI from "openai";

const getOpenAIClient = () => {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const baseURL = process.env.DEEPSEEK_BASE_URL;

  if (!apiKey) {
    throw new Error(
      "DEEPSEEK_API_KEY environment variable is missing or empty"
    );
  }

  if (!baseURL) {
    throw new Error(
      "DEEPSEEK_BASE_URL environment variable is missing or empty"
    );
  }

  return new OpenAI({
    baseURL: baseURL,
    apiKey: apiKey,
  });
};

export const createWorkoutPlan = async (params) => {
  try {
    const openai = getOpenAIClient();

    const {
      goal,
      fitness_level,
      preferences,
      health_conditions,
      schedule,
      plan_duration_weeks,
    } = params;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a professional fitness trainer specialized in creating personalized workout plans.",
        },
        {
          role: "user",
          content: `Create a ${plan_duration_weeks}-week workout plan for someone with:
            - Goal: ${goal}
            - Fitness level: ${fitness_level}
            - Preferences: ${preferences.join(", ")}
            - Health conditions: ${health_conditions.join(", ")}
            - Schedule: ${schedule.days_per_week} days per week, ${
            schedule.session_duration
          } minutes per session
            
            Return the response as a JSON object with this format:
            {
              "result": {
                "goal": "${goal}",
                "fitness_level": "${fitness_level}",
                "total_weeks": ${plan_duration_weeks},
                "schedule": {
                  "days_per_week": ${schedule.days_per_week},
                  "session_duration": ${schedule.session_duration}
                },
                "exercises": [
                  {
                    "day": "Day name",
                    "exercises": [
                      {
                        "name": "Exercise name",
                        "duration": "Duration in minutes",
                        "repetitions": "Number of reps",
                        "sets": "Number of sets",
                        "equipment": "Equipment needed"
                      }
                    ]
                  }
                ],
                "seo_title": "SEO optimized title",
                "seo_content": "SEO optimized content description",
                "seo_keywords": "comma, separated, keywords"
              }
            }
            
            Important: Return ONLY the JSON object without any additional text, markdown, or explanation.`,
        },
      ],
      model: "deepseek-chat",
      temperature: 0.7,
      max_tokens: 4000,
    });

    const responseText = completion.choices[0].message.content;

    console.log(responseText);

    try {
      // Extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not extract JSON from response");
      }
    } catch (parseError) {
      console.error("Error parsing response:", parseError);
      throw new Error("Failed to parse workout plan");
    }
  } catch (error) {
    throw new Error("Workout plan generation failed: " + error.message);
  }
};

export const createNutritionAdvice = async (params) => {
  try {
    const openai = getOpenAIClient();

    const {
      goal,
      dietary_restrictions,
      current_weight,
      target_weight,
      daily_activity_level,
    } = params;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a certified nutritionist specialized in creating personalized nutrition plans.",
        },
        {
          role: "user",
          content: `Create a nutrition plan for someone with:
            - Goal: ${goal}
            - Dietary restrictions: ${dietary_restrictions.join(", ")}
            - Current weight: ${current_weight} kg
            - Target weight: ${target_weight} kg
            - Daily activity level: ${daily_activity_level}
            
            Return the response as a JSON object with this format:
            {
              "result": {
                "goal": "Detailed goal description",
                "calories_per_day": number,
                "macronutrients": {
                  "carbohydrates": "percentage",
                  "proteins": "percentage",
                  "fats": "percentage"
                },
                "meal_suggestions": [
                  {
                    "meal": "Meal name (e.g., Breakfast)",
                    "suggestions": [
                      {
                        "name": "Recipe name",
                        "ingredients": ["ingredient 1", "ingredient 2", ...],
                        "calories": number
                      }
                    ]
                  }
                ],
                "seo_title": "SEO optimized title",
                "seo_content": "SEO optimized content description",
                "seo_keywords": "comma, separated, keywords"
              }
            }
            
            Important: Make sure meal suggestions respect the dietary restrictions. Return ONLY the JSON object without any additional text, markdown, or explanation.`,
        },
      ],
      model: "deepseek-chat",
      temperature: 0.7,
      max_tokens: 4000,
    });

    const responseText = completion.choices[0].message.content;

    try {
      // Extract JSON from the response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not extract JSON from response");
      }
    } catch (parseError) {
      console.error("Error parsing response:", parseError);
      throw new Error("Failed to parse nutrition advice");
    }
  } catch (error) {
    throw new Error("Nutrition advice generation failed: " + error.message);
  }
};
