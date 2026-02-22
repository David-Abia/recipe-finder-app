export default function RecipeDetails({ recipe, onClose }) {
  if (!recipe) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${measure} ${ingredient}`);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
      <div className="bg-white max-w-2xl w-full rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="mb-4 text-red-600 font-bold"
        >
          Close
        </button>

        <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>
        <img
          src={recipe.strMealThumb}
          className="rounded-xl mb-4"
        />

        <h3 className="font-semibold mt-4">Ingredients</h3>
        <ul className="list-disc pl-6">
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold mt-4">Instructions</h3>
        <p className="whitespace-pre-line">{recipe.strInstructions}</p>

        {recipe.strYoutube && (
          <iframe
            className="w-full mt-4 aspect-video"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
            allowFullScreen
          />
        )}

        <a
          href={recipe.strSource}
          target="_blank"
          className="block mt-4 text-blue-600 underline"
        >
          View Full Recipe Source
        </a>
      </div>
    </div>
  );
}