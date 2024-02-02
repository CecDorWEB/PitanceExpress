import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import "../Styles/favorite.css";
import CardRecipe from "../Components/CardRecipe";

function Favorite() {
  const { favorite } = useContext(FavoriteContext);
  console.info("ici le tab des favoris", favorite);
  return (
    <div className="myfavoris">
      <h1>Mets Favoris</h1>
      <div>
        <CardRecipe recipe={favorite} />
      </div>
    </div>
  );
}

export default Favorite;
