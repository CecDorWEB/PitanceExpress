import "../Styles/menu.css";
import { useState } from "react";
import medievalRecipes from "../medievalRecipes";
import { Link } from "react-router-dom";

import "../Styles/Footer.css";

function CardRecipe() {
  const recipe = medievalRecipes;

  // const [count, setCount] = useState(0);
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

  // const sum = stateQuantity.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );
  // console.info(stateQuantity);

  return (
    <section className="cardRecipe_container">
      {recipe.map((recipe, index) => (
        <figure key={recipe.id} className="cardRecipe">
          <img src={recipe.img} alt="Img des recettes médiévales" />
          <figcaption>
            <h1>{recipe.name}</h1>
          </figcaption>
          <div className="button_count">
            <button className="moins" onClick={() => notNegativeCount(index)}>
              -
            </button>
            <p>{stateQuantity[index]}</p>
            {/* <p>{sum}</p> */}
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
