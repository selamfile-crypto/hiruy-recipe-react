import { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Recipe Question',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errs.email = 'Please enter a valid email address.';
      }
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#070d12] text-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#091117] py-16 sm:py-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ffbf24]/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[#ff5b4d]/10 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#ffbf24]">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Contact Hiruy Recipe
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-stone-300 leading-relaxed sm:text-lg">
            Have questions about a traditional Ethiopian recipe, spice blend ratios,
            or suggestions for our culinary platform? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Form */}
          <div className="rounded-3xl border border-white/10 bg-[#0e171e] p-8 sm:p-10 shadow-2xl">
            <h2 className="font-serif text-2xl font-bold text-white mb-2">Send Us a Message</h2>
            <p className="text-xs text-stone-400 mb-6">
              Fill in the form below and our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-200">
                <span className="text-3xl">💌</span>
                <h3 className="font-serif text-xl font-bold mt-2">Message Sent!</h3>
                <p className="mt-1 text-xs text-emerald-300">
                  Thank you, {formData.name}. We have received your inquiry and will respond to {formData.email} soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Recipe Question', message: '' });
                  }}
                  className="mt-5 rounded-full bg-[#ffbf24] px-5 py-2 text-xs font-bold text-[#111820]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="contact-name" className="mb-1 block text-xs font-bold uppercase tracking-wider text-stone-300">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: null });
                    }}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl border bg-[#070d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-stone-600 ${
                      errors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#ffbf24]'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1 block text-xs font-bold uppercase tracking-wider text-stone-300">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-[#070d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-stone-600 ${
                      errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#ffbf24]'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1 block text-xs font-bold uppercase tracking-wider text-stone-300">
                    Topic / Subject
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#070d12] px-4 py-3 text-sm text-white outline-none focus:border-[#ffbf24]"
                  >
                    <option value="Recipe Question">Recipe Question or Feedback</option>
                    <option value="Culinary Heritage">Ethiopian Culinary Heritage Inquiry</option>
                    <option value="AI Assistant">Hiruy Recipe AI Assistance</option>
                    <option value="Recipe Submission">Suggest a Family Recipe</option>
                    <option value="Other">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1 block text-xs font-bold uppercase tracking-wider text-stone-300">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: null });
                    }}
                    placeholder="Tell us about your culinary question or feedback..."
                    className={`w-full rounded-xl border bg-[#070d12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-stone-600 ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#ffbf24]'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#ffbf24] py-3.5 text-sm font-bold text-[#111820] shadow-[0_4px_20px_rgba(255,191,36,0.2)] transition hover:bg-[#ffd45a] disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right Info & FAQs */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#0e171e] p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-4">Direct Contact Information</h3>
              <div className="space-y-4 text-sm text-stone-300">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg">
                    📧
                  </span>
                  <div>
                    <span className="block text-[11px] text-stone-500 uppercase tracking-wider">Email Us</span>
                    <span className="font-semibold text-white">support@hiruyrecipe.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg">
                    🌍
                  </span>
                  <div>
                    <span className="block text-[11px] text-stone-500 uppercase tracking-wider">Community Hub</span>
                    <span className="font-semibold text-white">Celebrating African &amp; Global Flavors</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg">
                    ✨
                  </span>
                  <div>
                    <span className="block text-[11px] text-stone-500 uppercase tracking-wider">Hiruy Recipe AI</span>
                    <span className="font-semibold text-white">Always accessible via the bottom-right icon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="rounded-3xl border border-white/10 bg-[#0e171e] p-8">
              <h3 className="font-serif text-xl font-bold text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4 text-xs text-stone-300 leading-relaxed">
                <div>
                  <h4 className="font-bold text-[#ffbf24] text-sm">Where can I find authentic teff flour?</h4>
                  <p className="mt-1 text-stone-400">
                    Teff flour is available in Ethiopian grocery markets, African specialty grocers, and natural food stores. Both ivory (malko) and brown teff work wonderfully for injera.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#ffbf24] text-sm">Can I adjust the spice levels of wots?</h4>
                  <p className="mt-1 text-stone-400">
                    Yes! You can moderate the amount of berbere in dishes like Misir Wot or Doro Wat, or substitute half the berbere with sweet Hungarian paprika to preserve the deep red color while tempering heat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
