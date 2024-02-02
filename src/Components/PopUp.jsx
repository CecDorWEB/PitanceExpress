/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

import "../Styles/popup.css";

function PopUp({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button
          type="button"
          className="close_btn"
          onClick={() => setTrigger(false)}
        >
          X
        </button>
        <div className="Desc_popup">
          <p>
            Merci pour votre commande, votre victuaille est en route, préparez
            vos plus belles écuelles pour accueillir les mets, vos cruches pour
            le breuvage et attablez vous prêt à faire ripaille !
          </p>
        </div>
        <div className="Service">
          <h5>Pris en charge par :</h5>
          <h6>Abdou et Kévin</h6>
        </div>
        <div className="Time_Desserve">
          <p>Temps de livraison : 35min</p>
          <p>
            Désolé messire, mais nous n'avons pas choisi les meilleurs livreurs,
            ils sont en carriole et dotés de deux mains gauches...
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

export default PopUp;

PopUp.propTypes = {
  trigger: PropTypes.bool.isRequired,
  setTrigger: PropTypes.func.isRequired,
};
