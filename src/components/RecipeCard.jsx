
function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <img
        src={props.image}
        alt={props.name}
      />

      <div className="recipe-info">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.category}</span>
        <a href="#">View Recipe</a>
      </div>
    </div>
  );
}

export default RecipeCard;

