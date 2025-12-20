import axios from 'axios';

const EDAMAM_APP_ID = import.meta.env.VITE_EDAMAM_APP_ID;
const EDAMAM_APP_KEY = import.meta.env.VITE_EDAMAM_APP_KEY;
const NUTRITION_API_URL = 'https://api.edamam.com/api/nutrition-details';

export const getNutritionData = async (ingredients) => {
  if (!EDAMAM_APP_ID || !EDAMAM_APP_KEY) {
    return null;
  }

  try {
    const response = await axios.post(
      `${NUTRITION_API_URL}?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`,
      {
        title: 'Recipe',
        ingr: ingredients
      }
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const formatNutrients = (nutritionData) => {
  if (!nutritionData || !nutritionData.totalNutrients) {
    return null;
  }

  const nutrients = nutritionData.totalNutrients;
  const servings = nutritionData.yield || 1;

  return {
    calories: Math.round((nutrients.ENERC_KCAL?.quantity || 0) / servings),
    protein: Math.round((nutrients.PROCNT?.quantity || 0) / servings),
    carbs: Math.round((nutrients.CHOCDF?.quantity || 0) / servings),
    fat: Math.round((nutrients.FAT?.quantity || 0) / servings),
    fiber: Math.round((nutrients.FIBTG?.quantity || 0) / servings),
    sodium: Math.round((nutrients.NA?.quantity || 0) / servings),
    servings: servings
  };
};
