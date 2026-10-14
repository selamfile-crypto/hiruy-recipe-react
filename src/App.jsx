import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import { FavoritesProvider } from './context/FavoritesContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FavoritesDrawer from './components/FavoritesDrawer';
import HiruyAiAssistant from './components/HiruyAiAssistant';

import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-[#070d12] text-white">
          <Navbar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/recipes/:id" element={<RecipeDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          <Footer />

          {/* Global Modals & Persistent Floating Assistant */}
          <FavoritesDrawer />
          <HiruyAiAssistant />
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;