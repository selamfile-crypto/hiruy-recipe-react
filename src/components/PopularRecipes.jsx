function PopularRecipes() {
  return (
    <section id="popular-week">
      <div className="popular">

        <div className="popular-header">
          <div>
            <h2>Popular This Week</h2>
            <p>
              Check out the recipes everyone is enjoying this week.
            </p>
          </div>

          <a href="#">View All</a>
        </div>

        <div className="popular-list">

          <div className="popular-card">
            <img
              src="/images/doro-wot.png"
              alt="Doro Wot"
            />

            <div className="popular-info">
              <h3>Doro Wot</h3>
              <p>Traditional Ethiopian chicken stew.</p>
            </div>
          </div>

          <div className="popular-card">
            <img
              src="/images/shiro.jpg"
              alt="Shiro"
            />

            <div className="popular-info">
              <h3>Shiro</h3>
              <p>Delicious Ethiopian chickpea stew.</p>
            </div>
          </div>

          <div className="popular-card">
            <img
              src="/images/desserts.jpg"
              alt="Dessert"
            />

            <div className="popular-info">
              <h3>Dessert</h3>
              <p>Sweet and delicious dessert recipes.</p>
            </div>
          </div>

          <div className="popular-card">
            <img
              src="/images/vegetable-soup.jpg"
              alt="Vegetable Soup"
            />

            <div className="popular-info">
              <h3>Vegetable Soup</h3>
              <p>A healthy and delicious soup.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PopularRecipes;