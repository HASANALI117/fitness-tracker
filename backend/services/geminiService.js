import OpenAI from "openai";

const getOpenAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  const baseURL = process.env.GEMINI_BASE_URL;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing or empty");
  }

  if (!baseURL) {
    throw new Error("GEMINI_BASE_URL environment variable is missing or empty");
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
    } = params;

    const workoutPrompt = `You are an experienced fitness coach creating a personalized ${plan_duration_weeks}-week workout plan based on:
    Age: ${age}
    Height: ${height} cm
    Weight: ${weight} kg
    Injuries or limitations: ${health_conditions.join(", ")}
    Schedule: ${schedule.days_per_week} days per week, ${
      schedule.session_duration
    } minutes per session
    Fitness goal: ${goal}
    Fitness level: ${fitness_level}
    Equipment: ${
      use_equipment ? "Will use gym equipment" : "Bodyweight exercises only"
    }
    Preferences: ${preferences.join(", ")}
    
    As a professional coach:
    - Design a progressive plan that increases in intensity appropriately over ${plan_duration_weeks} weeks
    - Consider muscle group splits to avoid overtraining the same muscles on consecutive days
    - Design exercises that match the fitness level and account for any injuries
    - Structure the workouts to specifically target the user's fitness goal
    
    CRITICAL SCHEMA INSTRUCTIONS:
    - Your output MUST contain ONLY the fields specified below, NO ADDITIONAL FIELDS
    - "sets" and "reps" MUST ALWAYS be NUMBERS, never strings
    - For example: "sets": 3, "reps": 10
    - Do NOT use text like "reps": "As many as possible" or "reps": "To failure" 
    - Instead use specific numbers like "reps": 12 or "reps": 15
    - For cardio, use "sets": 1, "reps": 1 or another appropriate number
    - NEVER include strings for numerical fields
    - NEVER add extra fields not shown in the example below

    Additional requirements:
    - ALWAYS include ALL 7 days of the week (Monday through Sunday) in your response
    - Based on the schedule of ${
      schedule.days_per_week
    } workout days per week, mark the remaining days as rest days
    - For rest days, use "Rest" as the focus and provide an empty exercises array
    - Distribute workout days evenly throughout the week
    - Ensure there's appropriate recovery time between similar muscle groups
    
    Return a JSON object with this EXACT structure:
    {
      "weekly_plans": [
        {
          "week": 1,
          "exercises": [
            {
              "day": "Monday",
              "focus": "Muscle groups targeted",
              "exercises": [
                {
                  "name": "Exercise Name",
                  "sets": 3,
                  "reps": 10,
                  "duration": 10,
                  "equipment": "Equipment used or 'None'"
                }
              ]
            }
          ]
        }
      ],
      "seo": {
        "title": "SEO optimized title",
        "description": "SEO optimized description",
        "keywords": ["keyword1", "keyword2", "keyword3"]
      }
    }
    
    DO NOT add any fields that are not in this example. Your response must be a valid JSON object with no additional text.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a professional fitness trainer specialized in creating personalized workout plans.",
        },
        {
          role: "user",
          content: workoutPrompt,
        },
      ],
      model: "gemini-2.0-flash",
      temperature: 0.4,
      max_tokens: 4000,
    });

    const responseText = completion.choices[0].message.content;

    console.log("gemini ai response:\n" + responseText);

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
