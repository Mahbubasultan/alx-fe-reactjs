import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
