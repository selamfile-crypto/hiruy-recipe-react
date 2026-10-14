import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="bg-white px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#687c45] px-6 py-12 sm:px-10 lg:px-16 lg:py-14 shadow-xl">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-black/15 blur-xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
            {/* Logo */}
            <div className="hidden sm:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/95 p-3 shadow-lg">
                <img
                  src="/images/logo.png"
                  alt="Hiruy Recipe"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                STAY INSPIRED
              </p>

              <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                Get Delicious Recipes
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                Subscribe to our newsletter and get authentic Ethiopian recipes,
                seasonal cooking ideas, and culinary tips delivered straight to your inbox.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="rounded-2xl bg-white/20 p-5 text-center text-white backdrop-blur-md">
                  <span className="text-2xl">🎉</span>
                  <p className="font-serif text-lg font-bold">You're on the list!</p>
                  <p className="text-xs text-white/80 mt-1">
                    Thank you for subscribing to Hiruy Recipe weekly culinary updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex w-full flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      placeholder="Enter your email"
                      aria-label="Email address"
                      className="min-w-0 flex-1 rounded-full border border-white/25 bg-white px-5 py-3.5 text-sm text-[#292019] outline-none placeholder:text-stone-400 focus:ring-2 focus:ring-white/50 sm:w-64"
                    />

                    <button
                      type="submit"
                      className="rounded-full bg-[#f4b323] px-7 py-3.5 text-sm font-bold text-[#292019] transition hover:bg-[#ffd45a] hover:shadow-lg"
                    >
                      Subscribe
                    </button>
                  </div>
                  {error && (
                    <p className="text-xs font-medium text-rose-200 pl-4">{error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;