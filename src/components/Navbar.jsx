import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import SearchModal from './SearchModal';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { favorites, setIsFavoritesOpen } = useFavorites();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070d12]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 transition hover:opacity-90"
            aria-label="Hiruy Recipe Home"
          >
            <img
              src="/images/logo.png"
              alt="Hiruy Recipe"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-5 text-[13px] font-medium tracking-wide transition ${
                    isActive
                      ? 'font-bold text-[#ffbf24]'
                      : 'text-white/75 hover:text-[#ffbf24]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#ffbf24]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Search Button */}
            <button
              type="button"
              aria-label="Search recipes"
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-[#ffbf24]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-[18px] w-[18px]"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 5 5" />
              </svg>
            </button>

            {/* Favorite Button with Count Badge */}
            <button
              type="button"
              aria-label="Saved Favorites"
              onClick={() => setIsFavoritesOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#ff5b4d] transition hover:bg-[#ff5b4d]/15 hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill={favorites.length > 0 ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-[19px] w-[19px]"
              >
                <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
              </svg>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5b4d] text-[10px] font-bold text-white shadow-sm">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Login / Signup Button */}
            <Link
              to="/login"
              className="ml-2 rounded-full bg-[#ffbf24] px-5 py-2.5 text-[12px] font-bold text-[#111820] shadow-[0_4px_18px_rgba(255,191,36,0.18)] transition hover:-translate-y-0.5 hover:bg-[#ffd45a] hover:shadow-[0_6px_24px_rgba(255,191,36,0.28)]"
            >
              Login / Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full text-white transition hover:bg-white/10 lg:hidden"
          >
            <span
              className={`h-[2px] w-5 bg-current transition ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-current transition ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-current transition ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0b1218] px-5 py-5 lg:hidden">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-white/10 text-[#ffbf24]'
                        : 'text-white/80 hover:bg-white/5 hover:text-[#ffbf24]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="my-3 h-px bg-white/10" />

              <div className="flex items-center gap-3 px-2">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white/10"
                  aria-label="Search recipes"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 5 5" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setIsFavoritesOpen(true);
                  }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#ff5b4d] hover:bg-white/10"
                  aria-label="Favorites"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={favorites.length > 0 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.2a4.8 4.8 0 0 1 8.8 2.6Z" />
                  </svg>
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5b4d] text-[10px] font-bold text-white">
                      {favorites.length}
                    </span>
                  )}
                </button>

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-full bg-[#ffbf24] px-5 py-3 text-center text-sm font-bold text-[#111820]"
                >
                  Login / Signup
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Navbar;