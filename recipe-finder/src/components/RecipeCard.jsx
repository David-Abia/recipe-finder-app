export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      className="cursor-pointer bg-white rounded-2xl shadow hover:scale-105 transition"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-t-2xl"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-500">
          {recipe.strCategory} • {recipe.strArea}
        </p>
      </div>
    </div>
  );
}