/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import medievalRecipes from "../medievalRecipes";
import PopUp from "../Components/PopUp";

// import { Link } from "react-router-dom";

import "../Styles/cash.css";

function Cash() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const recipe = medievalRecipes;

  const payCard = useRef(null);

  const openPayModal = () => {
    payCard.current.showModal();
  };

  const closePayModal = () => {
    payCard.current.close();
  };

  const openPopup = () => {
    setButtonPopup(true);
  }

  const FunctionPopup = () => {
    openPopup(true);
    closePayModal();
  };

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
        <dialog ref={payCard} className="Modal_Container">
          <button className="Close_Modal" onClick={closePayModal}>
            X
          </button>
          <div className="Paye_Modal">
            <h2>Acquittez la somme</h2>
            <div className="Code_Card">
              <label htmlFor="">Code de la carte</label>
              <input type="text" required />
            </div>
            <div className="Date_Card">
              <label htmlFor="">date de validité</label>
              <input type="text" required />
            </div>
            <div className="Crypto">
              <label htmlFor="">criptogramme</label>
              <input type="text" required />
            </div>
            <div className="Checkbox_Paye">
              <input type="checkbox" />
              <p>Si vous préferez donner les ecus à la récéption</p>
            </div>
            <div className="Paiement_Mode">
              <a href="https://www.paypal.com/signin">
                <img src="src\assets\Paypal.png" alt="" />
              </a>
            </div>
            <div className="Cash_Paid_Modal">
              <button onClick={() => FunctionPopup()}>Acquitter</button>
            </div>
          </div>
        </dialog>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} />

        <button className="Cash_Paid" onClick={openPayModal}>
          Acquittez !
        </button>
      </div>
    </div>
  );
}

export default Cash;


PopUp.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
};