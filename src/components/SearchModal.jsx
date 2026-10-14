import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';

function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleClose = () => {
    setSearchTerm('');
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/recipes?search=${encodeURIComponent(searchTerm.trim())}`);
      handleClose();
    }
  };

  const handleSelectRecipe = (id) => {
    navigate(`/recipes/${id}`);
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0b1319] p-6 text-white shadow-2xl">
        <form onSubmit={handleSubmit} className="relative flex items-center border-b border-white/10 pb-4">
          <span className="text-xl text-stone-400 mr-3">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Ethiopian dishes, vegetarian, ingredients..."
            className="w-full bg-transparent text-lg text-white outline-none placeholder:text-stone-500 font-serif"
          />
          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-1.5 text-stone-400 hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </form>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto py-4">
          {searchTerm.trim() ? (
            filtered.length > 0 ? (
              <div className="grid gap-2">
                {filtered.map((recipe) => (
                  <button
                    type="button"
                    key={recipe.id}
                    onClick={() => handleSelectRecipe(recipe.id)}
                    className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 text-left transition hover:border-[#ffbf24]/40 hover:bg-white/10"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffbf24]">
                        {recipe.category}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-white">
                        {recipe.name}
                      </h4>
                      <p className="line-clamp-1 text-xs text-stone-400">
                        {recipe.description}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#ffbf24]">View →</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center text-stone-400">
                <p className="font-serif text-base text-white">No recipes found for "{searchTerm}"</p>
                <p className="mt-1 text-xs text-stone-500">
                  Try searching for "Doro", "Shiro", "Tibs", "Soup", or "Vegetarian".
                </p>
              </div>
            )
          ) : (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Doro Wot', 'Shiro Tegamino', 'Awaze Beef Tibs', 'Authentic Teff Injera', 'Spicy Misir Wot', 'Vegetable Soup'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setSearchTerm(term)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-stone-300 hover:border-[#ffbf24]/50 hover:bg-white/10 hover:text-white"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-3 text-right">
          <button
            type="button"
            onClick={() => {
              navigate('/recipes');
              onClose();
            }}
            className="text-xs font-bold text-[#ffbf24] hover:underline"
          >
            Explore All Recipes →
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
