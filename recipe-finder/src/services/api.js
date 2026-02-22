import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (query) => {
  const res = await axios.get(`${BASE_URL}/search.php?s=${query}`);
  return res.data.meals;
};