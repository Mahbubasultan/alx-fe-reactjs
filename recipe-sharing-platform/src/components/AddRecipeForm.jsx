import { useState } from "react";

export default function AddRecipeForm({ addRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "At least two ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split("\n").map((s) => s.trim()),
    };

    addRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4 md:grid md:grid-cols-2 md:gap-4">
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Recipe Title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-600 mt-1">{errors.title}</p>}
        </div>

        <div className="md:col-span-2">
          <textarea
            placeholder="Ingredients (separate by commas)"
            className="w-full p-2 border rounded"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-600 mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <textarea
            placeholder="Preparation Steps (one step per line)"
            className="w-full p-2 border rounded"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && <p className="text-red-600 mt-1">{errors.steps}</p>}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700 transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
}
