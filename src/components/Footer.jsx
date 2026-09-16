function Footer() {
  return (
    <footer>
      <div id="footer-content">
        <div className="footer">

          <div className="footer-note">
            <img
              src="/images/logo.png"
              alt="Hiruy Recipe logo"
            />

            <p>
              Discover delicious recipes from the Ethiopian
              kitchen and around the world.
            </p>
          </div>

          <div className="quick-links">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">Categories</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="categories-note">
            <h4>Categories</h4>
            <a href="#">Ethiopian</a>
            <a href="#">Vegetarian</a>
            <a href="#">Meat</a>
            <a href="#">Soup</a>
            <a href="#">Desserts</a>
          </div>

          <div className="follow-us">
            <h4>Follow Us</h4>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
          </div>

          <div className="contact-card">
            <h4>Contact Us</h4>

            <form>
              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="submit"
                value="Send Message"
              />
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

