import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedRecipes from './components/FeaturedRecipes';
import PopularRecipes from './components/PopularRecipes';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />

      <main>
        <Hero />
        <Categories />

        <FeaturedRecipes />

        <PopularRecipes />

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;