import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim()) {
      setError('Please provide your name and email.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <footer className="bg-[#292019] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block" aria-label="Hiruy Recipe Home">
              <img
                src="/images/logo.png"
                alt="Hiruy Recipe logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-stone-300">
              Discover authentic culinary heritage from the Ethiopian kitchen and
              delicious dishes from around the world.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="rounded-full bg-[#f4b323]/20 px-3 py-1 text-xs font-semibold text-[#f4b323]">
                🇪🇹 Authentic Heritage
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 font-serif text-lg font-semibold text-[#f4b323]">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Home
              </Link>

              <Link
                to="/recipes"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Recipes
              </Link>

              <Link
                to="/recipes"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Categories
              </Link>

              <Link
                to="/about"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-5 font-serif text-lg font-semibold text-[#f4b323]">
              Categories
            </h4>

            <nav className="flex flex-col gap-3">
              <Link
                to="/recipes?category=Ethiopian"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Ethiopian
              </Link>

              <Link
                to="/recipes?category=Vegetarian"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Vegetarian
              </Link>

              <Link
                to="/recipes?category=Meat"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Meat &amp; Tibs
              </Link>

              <Link
                to="/recipes?category=Soup"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Soups
              </Link>

              <Link
                to="/recipes?category=Desserts"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Desserts
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-5 font-serif text-lg font-semibold text-[#f4b323]">
              Community
            </h4>

            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Our Mission
              </Link>

              <Link
                to="/login"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Member Login
              </Link>

              <Link
                to="/signup"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Create Account
              </Link>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-stone-300 transition hover:text-[#f4b323]"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="mb-5 font-serif text-lg font-semibold text-[#f4b323]">
              Get in Touch
            </h4>

            {submitted ? (
              <div className="rounded-xl border border-stone-700 bg-[#211a15] p-4 text-xs text-stone-300">
                <p className="font-bold text-[#f4b323]">Message received!</p>
                <p className="mt-1">
                  Thank you, {contactName}. We'll respond to {contactEmail} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => {
                    setContactName(e.target.value);
                    setError('');
                  }}
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-stone-700 bg-[#211a15] px-4 py-2.5 text-sm text-white outline-none placeholder:text-stone-500 focus:border-[#f4b323]"
                />

                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => {
                    setContactEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-stone-700 bg-[#211a15] px-4 py-2.5 text-sm text-white outline-none placeholder:text-stone-500 focus:border-[#f4b323]"
                />

                {error && <p className="text-xs text-rose-300">{error}</p>}

                <button
                  type="submit"
                  className="rounded-lg bg-[#c45b36] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#a9472b]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-stone-700/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} Hiruy Recipe. Celebrating Ethiopian culinary heritage and global flavors.
          </p>
          <div className="flex gap-6 text-xs text-stone-400">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/recipes" className="hover:text-white">All Recipes</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;