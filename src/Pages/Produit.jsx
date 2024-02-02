import { useParams } from "react-router-dom";
import { useState } from "react";

import "../Styles/produit.css";
import medievalRecipes from "../medievalRecipes";
import { FavoriteButton } from "../Components/FavoriteButton";

function Produit() {
  const { id } = useParams();

  const recipe = medievalRecipes[id - 1];
  //Il faudra afficher le résultat de la carte sur laquelle on aura cliqué.

  const [stateQuantity, setStateQuantity] = useState(recipe.quantity);

  const [favoriteImgIndex, setFavoriteImgIndex] = useState(0);

  const addArticle = () => {
    setStateQuantity(stateQuantity + 1);
  };

  const removeArticle = () => {
    if (stateQuantity > 0) {
      setStateQuantity(stateQuantity - 1);
    }
  };

  return (
    <div className="produit">
      <section>
        <img className="recipe" src={recipe.img}></img>
        <div className="title">
          <h1>{recipe.name}</h1>
          <FavoriteButton
            recipe={recipe}
            favoriteImgIndex={favoriteImgIndex}
            setFavoriteImgIndex={setFavoriteImgIndex}
          />
        </div>
        <div className="description">
          <p>Categorie: {recipe.category}</p>
          <p>Allergènes: {recipe.allergen}</p>
          <h3>Prix: {recipe.price} ecus</h3>
        </div>
        <div className="quantity">
          <button onClick={removeArticle}>-</button>
          <div>{stateQuantity}</div>
          <button onClick={addArticle}>+</button>
        </div>
        <button className="RedButton">Ajouter</button>
      </section>
    </div>
  );
}

export default Produit;
