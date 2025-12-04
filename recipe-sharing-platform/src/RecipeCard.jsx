import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <img src={recipe.image} className="rounded mb-3" />
      <h3 className="text-xl font-bold">{recipe.title}</h3>
      <p className="text-gray-600">{recipe.summary}</p>

      <Link
        to={`/recipe/${recipe.id}`}
        className="text-blue-600 font-semibold mt-3 inline-block"
      >
        See Details →
      </Link>
    </div>
  );
}
