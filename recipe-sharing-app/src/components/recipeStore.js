import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Recipe Actions
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe]
  })),
  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r);
    return { 
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(r => r.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
      favorites: state.favorites.filter(id => id !== recipeId)
    };
  }),

  // Search
  setSearchTerm: (term) => set(state => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    )
  })),

  // Favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendations
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
