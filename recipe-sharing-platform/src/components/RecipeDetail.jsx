import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === Number(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-lg shadow mb-6 w-full"
      />

      <div className="bg-white p-5 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-1">
          {recipe.ingredients?.map((ing, index) => (
            <li key={index} className="text-gray-700">{ing}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="text-gray-700 leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
