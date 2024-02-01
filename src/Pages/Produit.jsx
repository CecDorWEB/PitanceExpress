import "../Styles/produit.css";
import medievalRecipes from "../medievalRecipes";

function Produit() {
  const recipe = medievalRecipes[2];
  console.info(recipe);
  return (
    <div className="produit">
      <section>
        <img src={recipe.img}></img>
        <h1>{recipe.name}</h1>
        <div className="description">
          <p>Category: {recipe.category}</p>
          <p>Allergen: {recipe.allergen}</p>
          <h2>Price: {recipe.price} ecus</h2>
        </div>
        <div className="quantity">
          <button>-</button>
          <div>0</div>
          <button>+</button>
        </div>
        <button className="RedButton">Ajouter</button>
      </section>
    </div>
  );
}

export default Produit;
