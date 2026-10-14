import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { useFavorites } from '../context/FavoritesContext';
import RecipeCard from '../components/RecipeCard';

function RecipeDetailPage() {
  const { id } = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [copied, setCopied] = useState(false);

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#070d12] px-5 py-20 text-center text-white">
        <span className="mb-4 text-6xl">🥘</span>
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">Recipe Not Found</h2>
        <p className="mt-3 max-w-md text-stone-400">
          We couldn't locate the recipe you are looking for. It may have moved or been renamed.
        </p>
        <Link
          to="/recipes"
          className="mt-6 rounded-full bg-[#ffbf24] px-6 py-3 text-sm font-bold text-[#111820] hover:bg-[#ffd45a]"
        >
          Explore Other Recipes
        </Link>
      </div>
    );
  }

  const saved = isFavorite(recipe.id);

  const toggleIngredient = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const related = recipes
    .filter((r) => r.id !== recipe.id && (r.category === recipe.category || r.origin === recipe.origin))
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-[#070d12] text-white pb-20">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-white/10 bg-[#091117]/80">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-xs text-stone-400 sm:px-8">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link to="/recipes" className="hover:text-white">Recipes</Link>
          <span>/</span>
          <Link to={`/recipes?category=${recipe.category}`} className="hover:text-[#ffbf24]">
            {recipe.category}
          </Link>
          <span>/</span>
          <span className="truncate text-white font-medium">{recipe.name}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Details */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="rounded-full bg-[#ffbf24] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#111820]">
                {recipe.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
                📍 {recipe.origin}
              </span>
              {recipe.spiceLevel && recipe.spiceLevel !== 'None' && (
                <span className="rounded-full border border-[#ff5b4d]/30 bg-[#ff5b4d]/10 px-3 py-1 text-xs font-semibold text-[#ff5b4d]">
                  🌶️ {recipe.spiceLevel}
                </span>
              )}
            </div>

            <h1 className="font-serif text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
              {recipe.name}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-stone-300 sm:text-lg">
              {recipe.description}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-[#111c24] p-4 text-center">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-stone-400">Prep Time</span>
                <span className="mt-1 block text-base font-bold text-white">{recipe.prepTime}</span>
              </div>
              <div className="border-l border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-stone-400">Cook Time</span>
                <span className="mt-1 block text-base font-bold text-[#ffbf24]">{recipe.cookTime}</span>
              </div>
              <div className="border-l border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-stone-400">Servings</span>
                <span className="mt-1 block text-base font-bold text-white">{recipe.servings * servingsMultiplier} portions</span>
              </div>
              <div className="border-l border-white/10">
                <span className="block text-[11px] uppercase tracking-wider text-stone-400">Difficulty</span>
                <span className="mt-1 block text-base font-bold text-white">{recipe.difficulty}</span>
              </div>
            </div>

            {/* Actions: Save to Favorites & Share */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => toggleFavorite(recipe.id)}
                className={`flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold transition ${
                  saved
                    ? 'border-[#ff5b4d] bg-[#ff5b4d] text-white shadow-[0_4px_20px_rgba(255,91,77,0.3)]'
                    : 'border-white/15 bg-white/5 text-white hover:border-[#ff5b4d] hover:text-[#ff5b4d]'
                }`}
              >
                <span>{saved ? '❤️ Saved to Favorites' : '♡ Save Recipe'}</span>
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-stone-300 transition hover:bg-white/10 hover:text-white"
              >
                <span>🔗</span>
                <span>{copied ? 'Link Copied!' : 'Share Recipe'}</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#111c24] shadow-2xl">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Body: Ingredients & Method */}
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          {/* Ingredients Column */}
          <div>
            <div className="rounded-3xl border border-white/10 bg-[#0e171e] p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Ingredients</h3>
                  <p className="text-xs text-stone-400 mt-0.5">Check off items as you prep</p>
                </div>

                {/* Servings scaler */}
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#070d12] px-3 py-1.5">
                  <span className="text-xs text-stone-400">Scale:</span>
                  <button
                    type="button"
                    onClick={() => setServingsMultiplier((prev) => Math.max(0.5, prev - 0.5))}
                    className="h-6 w-6 rounded text-sm font-bold text-stone-300 hover:bg-white/10"
                    title="Decrease servings"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-[#ffbf24]">{servingsMultiplier}x</span>
                  <button
                    type="button"
                    onClick={() => setServingsMultiplier((prev) => Math.min(3, prev + 0.5))}
                    className="h-6 w-6 rounded text-sm font-bold text-stone-300 hover:bg-white/10"
                    title="Increase servings"
                  >
                    +
                  </button>
                </div>
              </div>

              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, idx) => {
                  const isChecked = checkedIngredients[idx];
                  return (
                    <li
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl p-2.5 transition ${
                        isChecked
                          ? 'bg-white/5 text-stone-500 line-through'
                          : 'hover:bg-white/5 text-stone-200'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition ${
                          isChecked
                            ? 'border-emerald-500 bg-emerald-500 text-white'
                            : 'border-white/20 bg-transparent'
                        }`}
                      >
                        {isChecked && '✓'}
                      </span>
                      <span className="text-sm leading-relaxed">{ingredient}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Nutrition Facts */}
              {recipe.nutrition && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <h4 className="font-serif text-lg font-bold text-white mb-3">
                    Nutrition Breakdown (per serving)
                  </h4>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="rounded-xl border border-white/5 bg-[#070d12] p-2.5">
                      <span className="block text-xs font-bold text-[#ffbf24]">{recipe.nutrition.calories}</span>
                      <span className="text-[10px] text-stone-400">Calories</span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-[#070d12] p-2.5">
                      <span className="block text-xs font-bold text-white">{recipe.nutrition.protein}</span>
                      <span className="text-[10px] text-stone-400">Protein</span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-[#070d12] p-2.5">
                      <span className="block text-xs font-bold text-white">{recipe.nutrition.carbs}</span>
                      <span className="text-[10px] text-stone-400">Carbs</span>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-[#070d12] p-2.5">
                      <span className="block text-xs font-bold text-white">{recipe.nutrition.fat}</span>
                      <span className="text-[10px] text-stone-400">Fat</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instructions Column */}
          <div className="space-y-8">
            {/* Cultural Story / Heritage */}
            {recipe.story && (
              <div className="rounded-3xl border border-[#ffbf24]/20 bg-gradient-to-br from-[#121c24] to-[#0a131a] p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
                  Culinary Heritage &amp; Tradition
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-3">
                  The Story Behind This Dish
                </h3>
                <p className="text-sm leading-relaxed text-stone-300">
                  {recipe.story}
                </p>
              </div>
            )}

            {/* Preparation Steps */}
            <div className="rounded-3xl border border-white/10 bg-[#0e171e] p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Step-by-Step Cooking Method
              </h3>

              <div className="space-y-6">
                {recipe.instructions.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#ffbf24] font-serif text-sm font-bold text-[#111820] shadow-md">
                      {idx + 1}
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                      <p className="text-sm leading-relaxed text-stone-200">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chef's Secret Tips */}
            {recipe.chefTips && (
              <div className="rounded-3xl border border-amber-500/30 bg-amber-500/10 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">💡</span>
                  <h4 className="font-serif text-lg font-bold text-[#ffd45a]">
                    Chef's Authentic Tip
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-amber-100/90">
                  {recipe.chefTips}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Recipes Section */}
      {related.length > 0 && (
        <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-10">
          <div className="mb-8 border-t border-white/10 pt-12 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
                MORE DELICIOUS INSPIRATION
              </p>
              <h3 className="font-serif text-3xl font-bold text-white mt-1">
                You May Also Enjoy
              </h3>
            </div>
            <Link
              to="/recipes"
              className="text-xs font-bold text-[#ffbf24] hover:underline"
            >
              All Recipes →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rel) => (
              <RecipeCard
                key={rel.id}
                id={rel.id}
                name={rel.name}
                image={rel.image}
                description={rel.description}
                category={rel.category}
                cookTime={rel.cookTime}
                spiceLevel={rel.spiceLevel}
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default RecipeDetailPage;
