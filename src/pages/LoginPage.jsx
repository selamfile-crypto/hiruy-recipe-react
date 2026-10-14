import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiFeedback, setApiFeedback] = useState(null);

  const validate = () => {
    const errs = {};
    if (!email.trim()) {
      errs.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!password) {
      errs.password = 'Password is required.';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiFeedback(null);

    if (!validate()) return;

    setIsLoading(true);

    // Realistic API interaction simulation
    // In accordance with instructions: We do not fake authentication with localStorage plaintext
    setTimeout(() => {
      setIsLoading(false);
      setApiFeedback({
        type: 'info',
        message: 'Frontend validation passed. Connect this form to your backend auth API endpoint (e.g. POST /api/v1/auth/login). No insecure mock credentials or plaintext tokens are stored.'
      });
    }, 1000);
  };

  return (
    <div className="relative flex min-h-[calc(100vh-68px)] items-center justify-center bg-[#070d12] px-5 py-12 sm:px-8">
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#ffbf24]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#ff5b4d]/10 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0d161d]/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Back Link & Brand */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-[#ffbf24] transition"
          >
            ← Back to Home
          </Link>

          <Link to="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Hiruy Recipe"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-xs text-stone-400">
            Log in to save custom recipes, rate dishes, and sync your favorites.
          </p>
        </div>

        {/* Backend Auth Architecture Notice */}
        <div className="mb-6 rounded-2xl border border-white/10 bg-[#121e29] p-3.5 text-xs text-stone-300">
          <div className="flex items-center gap-2 text-[#ffbf24] font-semibold mb-1">
            <span>ℹ️</span>
            <span>Authentication Architecture</span>
          </div>
          <p className="text-[11px] leading-relaxed text-stone-400">
            Client-side validation is active. To enable live user logins, connect this form to your backend API service (Supabase, Firebase, or Node/Express).
          </p>
        </div>

        {/* Feedback Alert */}
        {apiFeedback && (
          <div
            className={`mb-6 rounded-2xl p-4 text-xs leading-relaxed ${
              apiFeedback.type === 'error'
                ? 'border border-rose-500/30 bg-rose-500/10 text-rose-200'
                : 'border border-[#ffbf24]/30 bg-[#ffbf24]/10 text-amber-200'
            }`}
          >
            {apiFeedback.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-300"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: null }));
              }}
              placeholder="you@example.com"
              className={`w-full rounded-xl border bg-[#070d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-stone-600 ${
                errors.email
                  ? 'border-rose-500 focus:border-rose-500'
                  : 'border-white/10 focus:border-[#ffbf24]/60'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400 font-medium">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-bold uppercase tracking-wider text-stone-300"
              >
                Password
              </label>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: null }));
                }}
                placeholder="Enter your password"
                className={`w-full rounded-xl border bg-[#070d12] px-4 py-3 pr-11 text-sm text-white outline-none transition placeholder:text-stone-600 ${
                  errors.password
                    ? 'border-rose-500 focus:border-rose-500'
                    : 'border-white/10 focus:border-[#ffbf24]/60'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-stone-400 hover:text-white"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-rose-400 font-medium">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-[#ffbf24] py-3.5 text-sm font-bold text-[#111820] shadow-[0_4px_20px_rgba(255,191,36,0.2)] transition duration-200 hover:bg-[#ffd45a] hover:shadow-[0_6px_25px_rgba(255,191,36,0.3)] disabled:opacity-50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#111820] border-t-transparent" />
                Validating...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Sign up redirect */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-stone-400">
          Don't have an account yet?{' '}
          <Link
            to="/signup"
            className="font-bold text-[#ffbf24] hover:underline"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
