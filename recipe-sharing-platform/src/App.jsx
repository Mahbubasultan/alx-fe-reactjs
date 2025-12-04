import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetail from "./pages/RecipeDetail";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
