import { useContext } from "react";
import { useParams } from "react-router-dom";

import FavoriteContext from "../Context/FavoriteContext";
import "../Styles/produit.css";
import medievalRecipes from "../medievalRecipes";

function Produit() {
  const { id } = useParams();
  const { quantity, setQuantity } = useContext(FavoriteContext);
  console.log(id);
  const recipe = medievalRecipes[id - 1];
  console.log(recipe);
  //Il faudra afficher le résultat de la carte sur laquelle on aura cliqué.

  const addArticle = () => {
    setQuantity(quantity + 1);
  };

  const removeArticle = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="produit">
      <section>
        <img src={recipe.img}></img>
        <h1>{recipe.name}</h1>
        <div className="description">
          <p>Category: {recipe.category}</p>
          <p>Allergen: {recipe.allergen}</p>
          <h3>Price: {recipe.price} ecus</h3>
        </div>
        <div className="quantity">
          <button onClick={removeArticle}>-</button>
          <div>{quantity}</div>
          <button onClick={addArticle}>+</button>
        </div>
        <button className="RedButton">Ajouter</button>
      </section>
    </div>
  );
}

export default Produit;
