import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import { searchRecipes } from "./services/api";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setError("");
      setLoading(true);
      const data = await searchRecipes(query);

      if (!data) {
        setRecipes([]);
        setError("No recipes found.");
      } else {
        setRecipes(data);
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        Recipe Finder
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={setSelected}
          />
        ))}
      </div>

      <RecipeDetails
        recipe={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}