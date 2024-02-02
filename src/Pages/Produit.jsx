import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";

import "../Styles/produit.css";
import FavoriteContext from "../Context/FavoriteContext";
import medievalRecipes from "../medievalRecipes";
import { FavoriteButton } from "../Components/FavoriteButton";

function Produit() {
  const { id } = useParams();
  const { setFavorite, favorite } = useContext(FavoriteContext);

  const recipe = medievalRecipes[id - 1];
  //Il faudra afficher le résultat de la carte sur laquelle on aura cliqué.

  return (
    <div className="produit">
      <section>
        <img className="recipe" src={recipe.img}></img>
        <div className="title">
          <h1>{recipe.name}</h1>
          <FavoriteButton
            recipe={recipe}
            setFavorite={setFavorite}
            favorite={favorite}
          />
        </div>
        <div className="description">
          <p>Categorie: {recipe.category}</p>
          <p>Allergènes: {recipe.allergen}</p>
          <h3>Prix: {recipe.price} ecus</h3>
        </div>
        <Link to="/Menu" className="RedButton">
          retour
        </Link>
      </section>
    </div>
  );
}

export default Produit;
