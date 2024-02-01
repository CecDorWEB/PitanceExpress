import medievalRecipes from "../medievalRecipes";
import { Link } from "react-router-dom";

import "../Styles/cash.css";

function Cash() {
  const recipe = medievalRecipes;
  return (
    <div className="Cash_Container">
      <h1>Mon Panier</h1>
      <div className="Cash_Choose_Recipe">
        <h1>Pitance Express</h1>
        <h1>{recipe[0].name}</h1>
        <img src={recipe[0].img}></img>
        <p>Categrory:{recipe[0].category}</p>
        <p>Allergen: {recipe[0].allergen}</p>
      </div>
      <h2>Total</h2>
      <div className="Cash_Price">
        <h4>150 ecus</h4>
      </div>
      <div className="Cash_Button">
        <Link>
          <button className="Cash_Paid">Acquittez !</button>
        </Link>
      </div>
    </div>
  );
}

export default Cash;
