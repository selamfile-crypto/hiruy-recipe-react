function Categories() {
  return (
    <section id="catagories">
      <div className="catagory">

        <div className="catagory-header">
          <div>
            <h2>Explore Categories</h2>
            <p>
              Explore delicious recipes from different categories.
            </p>
          </div>

          <a href="#">View All</a>
        </div>

        <div className="catagory-list">

          <div className="catagory-card">
            <h3>Ethiopian</h3>
            <p>28 Recipes</p>
          </div>

          <div className="catagory-card">
            <h3>Vegetarian</h3>
            <p>38 Recipes</p>
          </div>

          <div className="catagory-card">
            <h3>Meat</h3>
            <p>18 Recipes</p>
          </div>

          <div className="catagory-card">
            <h3>Soup</h3>
            <p>8 Recipes</p>
          </div>

          <div className="catagory-card">
            <h3>Desserts</h3>
            <p>18 Recipes</p>
          </div>

          <div className="catagory-card">
            <h3>Drinks</h3>
            <p>18 Recipes</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Categories;
