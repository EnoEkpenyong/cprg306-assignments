"use client";

import { useState, useEffect } from "react";

// API Fetching Function
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load Function
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []);
  };

  // useEffect Hook
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
      {meals.length === 0 ? (
        <p className="text-white">No meal ideas found for {ingredient}</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="p-2 m-2 bg-gray-900 max-w-sm text-white"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
