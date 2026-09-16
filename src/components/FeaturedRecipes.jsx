
import RecipeCard from './RecipeCard';

function FeaturedRecipes() {
  return (
    <section id="featured-recipe">
      <div className="featured">

        <div className="featured-header">
          <div>
            <h2>Featured Recipes</h2>
            <p>
              Discover some of our delicious featured recipes.
            </p>
          </div>

          <a href="#">View All</a>
        </div>

        <div className="featured-list">

          <RecipeCard
            name="Vegetable Soup"
            image="/images/vegetable-soup.jpg"
            description="Healthy and delicious vegetable soup."
            category="Soup"
          />

          <RecipeCard
            name="Soup"
            image="/images/soup.jpg"
            description="A warm and delicious homemade soup."
            category="Soup"
          />

          <RecipeCard
            name="Shiro"
            image="/images/shiro.jpg"
            description="Traditional Ethiopian chickpea stew."
            category="Vegetarian"
          />

          <RecipeCard
            name="Ethiopian Food"
            image="/images/ethiopian.jpg"
            description="Discover delicious Ethiopian flavors."
            category="Ethiopian"
          />

        </div>
      </div>
    </section>
  );
}

export default FeaturedRecipes;

