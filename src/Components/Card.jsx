/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import "../Styles/menu.css";
import { FavoriteButton } from "./FavoriteButton";

// eslint-disable-next-line react/prop-types
function Card({ recipe, id, img, name, quantity }) {
  /* FONCTION FAVORIS */
  const { setFavorite, favorite } = useContext(FavoriteContext);

  /* FORMULE POUR QUANTITÉ INCRÉMENTÉE */

  const [stateQuantity, setStateQuantity] = useState(quantity);

  /* FORMULE POUR AJOUTER QUANTITÉ DANS FOOTER PANIER */
  const { setBasket, basket } = useContext(FavoriteContext);

  const addQuantity = () => {
    if (stateQuantity > 0) {
      const newBasket = Array.from({ length: stateQuantity }, () => recipe);
      setBasket([...basket, ...newBasket]);
    }
  };

  const positiveCount = () => {
    setStateQuantity(stateQuantity + 1);
  };

  const notNegativeCount = () => {
    if (stateQuantity > 0) {
      setStateQuantity(stateQuantity - 1);
    }
  };
  return (
    <figure key={id} className="cardRecipe">
      <img src={img} alt="Img des recettes médiévales" />
      <figcaption>
        <h1>{name}</h1>
        <FavoriteButton
          recipe={recipe}
          setFavorite={setFavorite}
          favorite={favorite}
        />
      </figcaption>
      <div className="button_count">
        <button className="moins" onClick={notNegativeCount}>
          -
        </button>
        <p>{stateQuantity}</p>
        <button className="plus" onClick={positiveCount}>
          +
        </button>
      </div>
      <div className="buttons_voir_panier">
        <button className="voir_plus" type="button">
          <Link to={`/Produit/${id}`}>Voir</Link>
        </button>
        <button onClick={addQuantity} className="basket" type="button">
          <img src="src/assets/bourse-blanche.png" alt="paiement" />
          <p>{stateQuantity}</p>
        </button>
      </div>
    </figure>
  );
}

export default Card;
