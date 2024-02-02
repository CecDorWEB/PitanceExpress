import "../Styles/menu.css";
import medievalRecipes from "../medievalRecipes";

function BandeauPromo() {
  const recipe = medievalRecipes;
  return (
    <div className="bandeau_promo">
      <div className="left">
        <p>
          En ces temps d&apos;austérité, une remise des plus généreuses, soit la
          moitié du tribut habituel.
        </p>
        <button>
          Je souhaite m&apos;octroyer les avantages de cette offrande !
        </button>
      </div>
      <div className="right">
        <img src={recipe[2].img} alt="Img réduction"></img>
        <p>-50%</p>
      </div>
    </div>
  );
}

export default BandeauPromo;
