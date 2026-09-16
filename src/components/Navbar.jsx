function Navbar() {
  return (
    <header className="navbar">
      <div className="nav">

        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
          <h2>Hiruy Recipe</h2>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/recipes">Recipes</a>
          <a href="/categories">Categories</a>
          <a href="/about">About us</a>
          <a href="/contact-us">Contact us</a>
        </div>

        <div className="nav-actions">
          <div className="searchbox">
            <input
              type="text"
              id="searchInput"
              placeholder="Search Recipes..."
            />
            <a href="#" className="login-btn">
              Login/Signup
            </a>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
