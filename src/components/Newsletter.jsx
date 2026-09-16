function Newsletter() {
  return (
    <section id="get-delicious-recipes">
      <div className="delicious">
        <img
          src="/images/logo.png"
          alt="Hiruy Recipe"
        />

        <div className="delicious-note">
          <h2>Get Delicious Recipes</h2>

          <p>
            Subscribe to our newsletter and get delicious
            recipes delivered straight to your inbox.
          </p>
        </div>

        <div className="note">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button
            type="button"
            className="subscribe-button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
