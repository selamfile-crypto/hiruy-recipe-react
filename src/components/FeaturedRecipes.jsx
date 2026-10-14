import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { recipes } from '../data/recipes';

function FeaturedRecipes() {
  const featured = recipes.filter((r) => r.isFeatured).slice(0, 4);

  return (
    <section id="recipes" className="bg-[#fffaf3] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c45b36]">
              HANDPICKED FOR YOU
            </p>

            <h2 className="font-serif text-3xl font-semibold text-[#292019] sm:text-4xl">
              Featured Recipes
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
              Discover some of our signature culinary dishes, carefully curated to
              bring authentic flavors and inspiration into your home kitchen.
            </p>
          </div>

          <Link
            to="/recipes"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#c45b36] transition hover:text-[#a9472b]"
          >
            View All Recipes
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Recipe Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
              category={recipe.category}
              cookTime={recipe.cookTime}
              spiceLevel={recipe.spiceLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRecipes;