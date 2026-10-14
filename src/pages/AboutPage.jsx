import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#070d12] text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#091117] py-20 lg:py-28">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#ffbf24]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[#ff5b4d]/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#ffbf24]">
              Our Heritage • Our Kitchen • Our Passion
            </span>

            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Hiruy Recipe
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-stone-300 sm:text-xl font-light">
              Bridging centuries of authentic Ethiopian culinary heritage with
              delightful recipes from around the globe, created to make everyday cooking
              inspiring, flavorful, and deeply enjoyable.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/recipes"
                className="rounded-full bg-[#ffbf24] px-8 py-3.5 text-sm font-bold text-[#111820] shadow-[0_6px_24px_rgba(255,191,36,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffd45a]"
              >
                Explore Recipe Collection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Hiruy Recipe & Mission Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
              WHAT WE STAND FOR
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-2 sm:text-4xl">
              Making Cooking an Everyday Joy
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-300">
              <p>
                <strong>Hiruy Recipe</strong> was born from a simple belief: good food brings
                people together, and authentic home cooking should be welcoming rather than
                intimidating.
              </p>
              <p>
                Whether you are a seasoned cook recreating the deep, slow-cooked complexity of
                traditional <em>Doro Wat</em> or a curious food lover trying your first lentil
                <em> Misir Wot</em>, our platform provides reliable, tested guidance,
                thoughtful instructions, and cultural context that honors the roots of every dish.
              </p>
              <p>
                Our mission is to turn recipe discovery into an engaging journey—helping you
                learn new culinary techniques, understand flavor balance, and prepare meals
                that nourish both body and soul.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#111c24] p-4 flex-1 min-w-[200px]">
                <span className="text-2xl">🌾</span>
                <h4 className="font-serif text-base font-bold text-white mt-2">Authentic Ingredients</h4>
                <p className="text-xs text-stone-400 mt-1">Honoring traditional teff, berbere, and indigenous East African spices.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#111c24] p-4 flex-1 min-w-[200px]">
                <span className="text-2xl">✨</span>
                <h4 className="font-serif text-base font-bold text-white mt-2">Clear Guidance</h4>
                <p className="text-xs text-stone-400 mt-1">Step-by-step methods, prep timers, and chef's tips for authentic flavor.</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                <img
                  src="/images/injera.jpg"
                  alt="Traditional Ethiopian Injera"
                  className="h-60 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                <img
                  src="/images/shiro.jpg"
                  alt="Shiro Tegamino in clay pot"
                  className="h-44 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                <img
                  src="/images/ethiopian.jpg"
                  alt="Beyaynetu colorful vegetarian feast"
                  className="h-44 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                <img
                  src="/images/doro-wat-hero.jpg"
                  alt="Doro Wot with boiled eggs and berbere"
                  className="h-60 w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrating Ethiopian Culinary Heritage */}
      <section className="border-y border-white/10 bg-[#0c151c] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
              CULTURAL ROOTS
            </span>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl mt-2">
              Celebrating Ethiopian Culinary Heritage
            </h2>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed sm:text-base">
              Ethiopian cuisine is not merely food; it is an enduring cultural tapestry of communal dining,
              hospitality, and shared humanity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Gursha & Communal Dining */}
            <div className="rounded-3xl border border-white/10 bg-[#111c24] p-8 transition hover:border-[#ffbf24]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffbf24]/10 text-2xl mb-5">
                🤝
              </div>
              <h3 className="font-serif text-xl font-bold text-white">The Spirit of Gursha</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                In Ethiopian dining culture, meals are gathered around the <em>messob</em> (woven table).
                The tradition of <em>gursha</em>—feeding a mouthful of injera wrapped around stew to a loved
                one—is an act of friendship, love, and community trust.
              </p>
            </div>

            {/* The Mastery of Berbere */}
            <div className="rounded-3xl border border-white/10 bg-[#111c24] p-8 transition hover:border-[#ffbf24]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff5b4d]/10 text-2xl mb-5">
                🌶️
              </div>
              <h3 className="font-serif text-xl font-bold text-white">The Art of Berbere</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                Authentic berbere is an intricate blend of sun-dried red chilies, korarima (Ethiopian cardamom),
                fenugreek, ginger, garlic, cloves, and indigenous highlands herbs. It provides the deep,
                warming soul behind iconic stews.
              </p>
            </div>

            {/* The Ye'tsom Fasting Tradition */}
            <div className="rounded-3xl border border-white/10 bg-[#111c24] p-8 transition hover:border-[#ffbf24]/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#687c45]/20 text-2xl mb-5">
                🥬
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Ye’tsom (Plant-Based) Tradition</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">
                For centuries, Ethiopian Orthodox fasting seasons have inspired one of the world's richest
                plant-based culinary traditions: the vibrant <em>Beyaynetu</em> platter laden with spiced lentils,
                collard greens, turmeric split peas, and chickpea stews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Hiruy Recipe AI Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-[#ffbf24]/20 bg-gradient-to-br from-[#121f2b] to-[#070d12] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#ffbf24]/20 text-sm">
                  ✨
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
                  SMART CULINARY ASSISTANT
                </span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                The Role of Hiruy Recipe AI
              </h2>

              <p className="mt-4 text-base leading-relaxed text-stone-300">
                Cooking should never leave you guessing. That is why we integrated <strong>Hiruy Recipe AI</strong>—a
                specialized culinary assistant designed specifically to help you succeed in the kitchen.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-base text-[#ffbf24] mt-0.5">✓</span>
                  <p className="text-sm text-stone-300">
                    <strong>Ingredient matching:</strong> Tell the AI what you have in your pantry (onions, eggs, lentils) and discover what you can cook.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-[#ffbf24] mt-0.5">✓</span>
                  <p className="text-sm text-stone-300">
                    <strong>Ethiopian culinary expertise:</strong> Learn how to properly ferment teff for injera, master absit, or balance berbere heat.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-[#ffbf24] mt-0.5">✓</span>
                  <p className="text-sm text-stone-300">
                    <strong>Ingredient substitutions:</strong> Find practical home alternatives when rare spices or ingredients are not easily accessible.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-[#ffbf24] mt-0.5">✓</span>
                  <p className="text-sm text-stone-300">
                    <strong>Interactive navigation:</strong> Recommendations in chat link directly to our step-by-step recipe pages for effortless cooking.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Assistant Preview Card */}
            <div className="rounded-2xl border border-white/10 bg-[#091117] p-6 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffbf24] font-bold text-[#111820]">
                  ✨
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Hiruy Recipe AI in Action</h4>
                  <p className="text-xs text-stone-400">Try clicking the floating assistant at the bottom right</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-xs">
                <div className="rounded-xl bg-[#111c24] p-3 text-stone-300">
                  <span className="text-[#ffbf24] font-bold">You: </span>
                  "What is the secret to getting a deep, rich red color in Doro Wat without scorching the spices?"
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0e1922] p-3 text-stone-300 leading-relaxed">
                  <span className="text-emerald-400 font-bold">Hiruy AI: </span>
                  "The key is sweating finely pureed red onions with NO oil for 35-40 minutes first until they turn dark reddish-brown. Add Niter Kibbeh before the berbere, and toast on low heat for 5-7 minutes!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="border-t border-white/10 bg-[#070d12] py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
            READY TO TASTE?
          </span>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl mt-2">
            Bring the Flavors Home Today
          </h2>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            From quick 20-minute comfort dishes to slow-cooked celebration feasts, our recipes are waiting for you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/recipes"
              className="rounded-full bg-[#ffbf24] px-8 py-3.5 text-sm font-bold text-[#111820] shadow-[0_6px_24px_rgba(255,191,36,0.25)] transition hover:bg-[#ffd45a]"
            >
              Browse All Recipes
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
