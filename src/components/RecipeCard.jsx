import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function RecipeCard({ id, name, image, description, category, cookTime, spiceLevel }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = id ? isFavorite(id) : false;

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Recipe Image & Category */}
      <div className="relative block aspect-[4/3] overflow-hidden bg-stone-100">
        <Link to={`/recipes/${id || ''}`}>
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#c45b36] shadow-sm backdrop-blur-sm">
          {category}
        </span>

        {/* Spice Level Badge if any */}
        {spiceLevel && spiceLevel !== 'None' && (
          <span className="absolute left-4 bottom-4 rounded-full bg-[#070d12]/80 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm">
            🌶️ {spiceLevel}
          </span>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          aria-label={`Save ${name} to favorites`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (id) toggleFavorite(id);
          }}
          className={`absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-lg shadow-sm transition hover:scale-110 ${
            saved ? 'text-[#ff5b4d]' : 'text-stone-500 hover:text-[#ff5b4d]'
          }`}
        >
          {saved ? '❤️' : '♡'}
        </button>
      </div>

      {/* Recipe Information */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <Link to={`/recipes/${id || ''}`}>
            <h3 className="font-serif text-xl font-semibold text-[#292019] transition group-hover:text-[#c45b36]">
              {name}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">
            {description}
          </p>
        </div>

        {/* Bottom Action */}
        <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
          <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
            {cookTime ? `⏱️ ${cookTime}` : 'Recipe'}
          </span>

          <Link
            to={`/recipes/${id || ''}`}
            className="group/link inline-flex items-center gap-2 text-sm font-bold text-[#c45b36] transition hover:text-[#a9472b]"
          >
            View Recipe
            <span className="transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;