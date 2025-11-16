import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import useRecipeStore from './components/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <button onClick={generateRecommendations}>Generate Recommendations</button>
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}


const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
