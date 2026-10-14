import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center bg-[#070d12] px-5 py-20 text-center text-white">
      <div className="relative">
        <span className="text-8xl">🍳</span>
        <div className="absolute -bottom-2 -right-2 rounded-full bg-[#ff5b4d] px-2.5 py-1 text-xs font-bold text-white shadow-lg">
          404
        </div>
      </div>

      <h1 className="mt-8 font-serif text-3xl font-extrabold sm:text-5xl text-white">
        Recipe Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-base leading-relaxed text-stone-400">
        We searched our spice cabinets and kitchen pantries, but we couldn't find the page you're looking for.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="rounded-full bg-[#ffbf24] px-7 py-3 text-sm font-bold text-[#111820] shadow-[0_4px_20px_rgba(255,191,36,0.25)] transition hover:bg-[#ffd45a]"
        >
          Return to Home
        </Link>
        <Link
          to="/recipes"
          className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Browse Recipes
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
