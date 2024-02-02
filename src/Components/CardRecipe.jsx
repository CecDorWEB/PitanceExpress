/* eslint-disable react/prop-types */
import "../Styles/menu.css";
import { useContext, useState } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import { Link } from "react-router-dom";
import { FavoriteButton } from "./FavoriteButton";

function CardRecipe({ recipe }) {
  console.log("toutes les rectees", recipe);
  const { setFavorite, favorite } = useContext(FavoriteContext);
  const [stateQuantity, setStateQuantity] = useState(
    recipe.map((recipe) => recipe.quantity)
  );

  const positiveCount = (index) => {
    const newQuantity = [...stateQuantity];
    newQuantity[index]++;
    setStateQuantity(newQuantity);
  };

  const notNegativeCount = (index) => {
    const newQuantity = [...stateQuantity];
    if (newQuantity[index] > 0) {
      newQuantity[index]--;
      setStateQuantity(newQuantity);
    }
  };
  console.info(stateQuantity);

  const { filterValue } = useContext(FavoriteContext);

  return (
    <section className="cardRecipe_container">
      {recipe
        .filter((category) => category.category === filterValue)
        .map((recipe, index) => (
          <figure key={recipe.id} className="cardRecipe">
            <img src={recipe.img} alt="Img des recettes médiévales" />
            <figcaption>
              <h1>{recipe.name}</h1>
              <FavoriteButton
                recipe={recipe}
                setFavorite={setFavorite}
                favorite={favorite}
              />
            </figcaption>
            <div className="button_count">
              <button className="moins" onClick={() => notNegativeCount(index)}>
                -
              </button>
              <p>{stateQuantity[index]}</p>
              <button className="plus" onClick={() => positiveCount(index)}>
                +
              </button>
            </div>
            <div className="buttons_voir_panier">
              <button className="voir_plus" type="button">
                <Link to={`/Produit/${recipe.id}`}>Voir</Link>
              </button>
              <button className="basket" type="button">
                <Link to={`/Cash/${recipe.id}`}>
                  <img src="src/assets/bourse-blanche.png" alt="paiement" />
                  <p>{stateQuantity[index]}</p>
                </Link>
              </button>
            </div>
          </figure>
        ))}
    </section>
  );
}

export default CardRecipe;
