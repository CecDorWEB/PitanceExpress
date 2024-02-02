/* eslint-disable react/prop-types */
import "../Styles/menu.css";
import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

import Card from "./Card";

function CardRecipe({ recipe }) {
  /* FORMULE POUR FILTRER */
  const { filterValue } = useContext(FavoriteContext);

  return (
    <section className="cardRecipe_container">
      {recipe
        .filter((recipeItem) => recipeItem.category === filterValue)
        .map((recipeItem, index) => (
          <Card
            key={index}
            recipe={recipeItem}
            id={recipeItem.id}
            img={recipeItem.img}
            name={recipeItem.name}
            quantity={recipeItem.quantity}
            index={index}
          />
        ))}
    </section>
  );
}

export default CardRecipe;
