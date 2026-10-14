import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedRecipes from '../components/FeaturedRecipes';
import PopularRecipes from '../components/PopularRecipes';
import Newsletter from '../components/Newsletter';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <main>
        <FeaturedRecipes />
        <PopularRecipes />
        <Newsletter />
      </main>
    </>
  );
}

export default HomePage;
