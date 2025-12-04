import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // بارگذاری mock data
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Recipe Finder</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-600 font-semibold"
              >
                See Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
