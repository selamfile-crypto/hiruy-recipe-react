import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';

function PopularRecipes() {
  const popular = recipes.filter((r) => r.isPopular).slice(0, 4);

  return (
    <section id="popular" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c45b36]">
              TRENDING NOW
            </p>

            <h2 className="font-serif text-3xl font-semibold text-[#292019] sm:text-4xl">
              Popular This Week
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
              Check out the favorite dishes that home cooks and culinary lovers are
              preparing right now.
            </p>
          </div>

          <Link
            to="/recipes"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#c45b36] transition hover:text-[#a9472b]"
          >
            View All Trending
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Popular Recipes Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {popular.map((recipe, index) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="group flex items-center gap-5 rounded-2xl border border-stone-200/80 bg-[#fffaf3] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#c45b36]/30 hover:bg-white hover:shadow-lg"
            >
              {/* Recipe Image */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28 bg-stone-100">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Ranking Badge */}
                <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-xs font-bold text-[#292019] shadow-sm">
                  #{index + 1}
                </span>
              </div>

              {/* Recipe Info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c45b36]">
                    {recipe.category}
                  </span>
                  <span className="text-stone-300">•</span>
                  <span className="text-[10px] text-stone-500">
                    {recipe.prepTime}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#292019] transition group-hover:text-[#c45b36]">
                  {recipe.name}
                </h3>

                <p className="mt-1 line-clamp-2 text-sm leading-5 text-stone-500">
                  {recipe.description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#c45b36]">
                  View Recipe
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularRecipes;