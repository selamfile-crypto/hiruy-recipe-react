import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipes, categoriesList } from '../data/recipes';

function RecipesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';
  const searchTerm = searchParams.get('search') || '';
  const [selectedSpice, setSelectedSpice] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const handleCategorySelect = (catName) => {
    const newParams = new URLSearchParams(searchParams);
    if (catName === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', catName);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (val) => {
    const newParams = new URLSearchParams(searchParams);
    if (!val.trim()) {
      newParams.delete('search');
    } else {
      newParams.set('search', val);
    }
    setSearchParams(newParams);
  };

  const filteredRecipes = useMemo(() => {
    return recipes
      .filter((r) => {
        // Category filter
        if (selectedCategory !== 'All' && r.category !== selectedCategory) {
          return false;
        }

        // Spice filter
        if (selectedSpice !== 'All' && r.spiceLevel !== selectedSpice) {
          return false;
        }

        // Search filter
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchName = r.name.toLowerCase().includes(q);
          const matchDesc = r.description.toLowerCase().includes(q);
          const matchCategory = r.category.toLowerCase().includes(q);
          const matchIngredient = r.ingredients.some((ing) => ing.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchCategory && !matchIngredient) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popular') return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        if (sortBy === 'quickest') {
          const cookA = parseInt(a.cookTime) || 999;
          const cookB = parseInt(b.cookTime) || 999;
          return cookA - cookB;
        }
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [selectedCategory, selectedSpice, searchTerm, sortBy]);

  const clearAllFilters = () => {
    setSelectedSpice('All');
    setSortBy('featured');
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="min-h-screen bg-[#070d12] text-white">
      {/* Page Header */}
      <div className="relative overflow-hidden border-b border-white/10 bg-[#091117] py-16 sm:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ffbf24]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#ff5b4d]/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
              Authentic Kitchen &amp; Global Flavors
            </span>
            <h1 className="font-serif text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              Recipe Collection
            </h1>
            <p className="mt-4 text-base text-white/70 leading-relaxed sm:text-lg">
              Explore step-by-step Ethiopian classics and wholesome international meals.
              Filter by cuisine category, spice intensity, or search for ingredients in your pantry.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        {/* Controls Bar */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search recipes, ingredients, wots..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-stone-500 focus:border-[#ffbf24]/50 focus:bg-white/10 transition"
            />
            <span className="absolute left-4 top-3 text-stone-400">🔍</span>
            {searchTerm && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-3 text-stone-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters & Sorting Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Spice Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400">Spice:</span>
              <select
                value={selectedSpice}
                onChange={(e) => setSelectedSpice(e.target.value)}
                className="rounded-xl border border-white/10 bg-[#111c24] px-3 py-2 text-xs text-white outline-none focus:border-[#ffbf24]"
              >
                <option value="All">All Levels</option>
                <option value="Hot">🌶️ Hot</option>
                <option value="Medium">🌶️ Medium</option>
                <option value="Mild">🌱 Mild</option>
                <option value="None">None</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border border-white/10 bg-[#111c24] px-3 py-2 text-xs text-white outline-none focus:border-[#ffbf24]"
              >
                <option value="featured">Featured First</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="quickest">Quickest Cook</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categoriesList.map((cat) => (
            <button
              type="button"
              key={cat.name}
              onClick={() => handleCategorySelect(cat.name)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                selectedCategory === cat.name
                  ? 'bg-[#ffbf24] text-[#111820] shadow-[0_4px_16px_rgba(255,191,36,0.3)]'
                  : 'border border-white/10 bg-white/5 text-stone-300 hover:border-white/20 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Results Counter & Active Filter Tags */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <p className="text-xs font-medium text-stone-400">
            Showing <span className="font-bold text-white">{filteredRecipes.length}</span> {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
            {selectedCategory !== 'All' && <span> in <strong className="text-[#ffbf24]">{selectedCategory}</strong></span>}
            {searchTerm && <span> matching "<strong className="text-[#ffbf24]">{searchTerm}</strong>"</span>}
          </p>

          {(selectedCategory !== 'All' || searchTerm || selectedSpice !== 'All') && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-xs font-bold text-[#ffbf24] hover:underline"
            >
              Reset Filters ↺
            </button>
          )}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredRecipes.map((recipe) => (
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
        ) : (
          /* Empty State */
          <div className="my-16 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0d161d] p-12 text-center">
            <span className="mb-4 text-5xl">🍲</span>
            <h3 className="font-serif text-2xl font-bold text-white">
              No matching recipes found
            </h3>
            <p className="mt-2 max-w-md text-sm text-stone-400">
              We couldn't find any recipes matching your current filter criteria.
              Try clearing your search terms or picking another category.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="mt-6 rounded-full bg-[#ffbf24] px-6 py-2.5 text-xs font-bold text-[#111820] hover:bg-[#ffd45a]"
            >
              Show All Recipes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipesPage;
