function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#070d12]">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#ffbf24]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#ff5b4d]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1500px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#ffbf24]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
              Good Food • Happy Life
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover
            <br />
            <span className="text-[#ffbf24]">Delicious</span>
            <br />
            Recipes.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Explore authentic Ethiopian dishes and delicious recipes from around
            the world. Simple ingredients, beautiful flavors, and meals made
            with love.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-xl items-center rounded-2xl border border-white/10 bg-white/5 p-1.5">
            <div className="flex h-12 w-12 items-center justify-center text-white/50">
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
            </div>

            <input
              type="text"
              placeholder="Search for a recipe..."
              className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-white/35"
            />

            <button
              type="button"
              className="rounded-xl bg-[#ffbf24] px-5 py-3 text-sm font-bold text-[#111820] hover:bg-[#ffd45a]"
            >
              Search
            </button>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="#recipes"
              className="rounded-full border border-[#ffbf24]/30 bg-[#ffbf24]/10 px-4 py-2 text-xs font-semibold text-[#ffbf24] hover:bg-[#ffbf24]/20"
            >
              🇪🇹 Ethiopian
            </a>

            <a
              href="#recipes"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white"
            >
              🌍 International
            </a>

            <a
              href="#recipes"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white"
            >
              ⚡ Quick & Easy
            </a>

            <a
              href="#recipes"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white"
            >
              🥗 Healthy
            </a>
          </div>

          {/* Statistics */}
          <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="text-2xl font-extrabold text-white">500+</p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                Recipes
              </p>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-extrabold text-white">50+</p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                Categories
              </p>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-extrabold text-white">100%</p>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/40">
                Homemade
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111c24] shadow-2xl">
            <img
              src="/images/doro-wat-hero.jpg"
              alt=""
              className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px] lg:h-[600px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#070d12]/80 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="mb-2 inline-block rounded-full bg-[#ffbf24] px-3 py-1 text-[10px] font-bold uppercase text-[#111820]">
                  Ethiopian Favorite
                </span>

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Doro Wot
                </h2>

                <p className="mt-1 text-sm text-white/60">
                  Rich • Spicy • Traditional
                </p>
              </div>

              <button
                type="button"
                aria-label="Save Doro Wot"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white hover:text-[#ff5b4d]"
              >
                ♡
              </button>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111c24] px-4 py-3 shadow-xl sm:left-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffbf24]/10 text-xl">
              🍲
            </div>

            <div>
              <p className="text-xs font-bold text-white">Today's Special</p>

              <p className="text-[11px] text-white/40">Made with love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
