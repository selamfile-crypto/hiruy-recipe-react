import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { recipes } from '../data/recipes';

function FavoritesDrawer() {
  const { favorites, toggleFavorite, isFavoritesOpen, setIsFavoritesOpen } = useFavorites();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  if (!isFavoritesOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsFavoritesOpen(false)}
      />

      {/* Drawer */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0c151c] p-6 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5b4d]/20 text-[#ff5b4d]">
              ❤️
            </span>
            <h3 className="font-serif text-xl font-bold">Saved Recipes</h3>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-stone-300">
              {favoriteRecipes.length}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsFavoritesOpen(false)}
            className="rounded-full p-2 text-stone-400 hover:bg-white/10 hover:text-white"
            aria-label="Close favorites"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4">
          {favoriteRecipes.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-stone-400">
              <span className="mb-3 text-4xl">🥘</span>
              <p className="font-serif text-lg text-white">No saved recipes yet</p>
              <p className="mt-1 text-xs text-stone-400">
                Click the heart icon on any recipe to save it here for quick access.
              </p>
              <Link
                to="/recipes"
                onClick={() => setIsFavoritesOpen(false)}
                className="mt-5 rounded-full bg-[#ffbf24] px-5 py-2.5 text-xs font-bold text-[#111820] hover:bg-[#ffd45a]"
              >
                Browse Recipes
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {favoriteRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#111c24] p-3 transition hover:border-[#ffbf24]/30"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffbf24]">
                      {recipe.category}
                    </span>
                    <Link
                      to={`/recipes/${recipe.id}`}
                      onClick={() => setIsFavoritesOpen(false)}
                      className="block truncate font-serif text-base font-semibold text-white hover:text-[#ffbf24]"
                    >
                      {recipe.name}
                    </Link>
                    <p className="text-xs text-stone-400">{recipe.prepTime} • {recipe.cookTime}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(recipe.id)}
                    className="rounded-full p-2 text-stone-500 hover:text-[#ff5b4d]"
                    title="Remove from favorites"
                    aria-label={`Remove ${recipe.name} from favorites`}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {favoriteRecipes.length > 0 && (
          <div className="border-t border-white/10 pt-4">
            <Link
              to="/recipes"
              onClick={() => setIsFavoritesOpen(false)}
              className="block w-full rounded-xl bg-[#ffbf24] py-3 text-center text-sm font-bold text-[#111820] transition hover:bg-[#ffd45a]"
            >
              Discover More Recipes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesDrawer;
