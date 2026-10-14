import { Link } from 'react-router-dom';

function Categories() {
  const categories = [
    {
      name: 'Ethiopian',
      recipes: 28,
      icon: '🇪🇹',
    },
    {
      name: 'Vegetarian',
      recipes: 38,
      icon: '🥬',
    },
    {
      name: 'Meat',
      recipes: 18,
      icon: '🥩',
    },
    {
      name: 'Soup',
      recipes: 8,
      icon: '🍲',
    },
    {
      name: 'Desserts',
      recipes: 18,
      icon: '🍰',
    },
    {
      name: 'Drinks',
      recipes: 18,
      icon: '🥤',
    },
  ];

  return (
    <section id="categories" className="bg-[#fffdfa] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c45b36]">
              FIND YOUR FAVORITE
            </p>

            <h2 className="font-serif text-3xl font-semibold text-[#292019] sm:text-4xl">
              Explore Categories
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600 sm:text-base">
              Explore delicious recipes across culinary categories, from traditional
              Ethiopian fasting platters to hearty soups and refreshing beverages.
            </p>
          </div>

          <Link
            to="/recipes"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#c45b36] transition hover:text-[#a9472b]"
          >
            View All Categories
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/recipes?category=${encodeURIComponent(category.name)}`}
              className="group rounded-2xl border border-stone-200/80 bg-[#fffaf3] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#c45b36]/40 hover:bg-white hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f7eee3] text-3xl transition duration-300 group-hover:scale-110">
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="font-serif text-lg font-semibold text-[#292019] transition group-hover:text-[#c45b36]">
                {category.name}
              </h3>

              {/* Recipe count */}
              <p className="mt-1 text-xs font-medium text-stone-500">
                {category.recipes} Recipes
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;