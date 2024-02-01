import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";

export function FavoriteButton({
  favoriteImgIndex,
  setFavoriteImgIndex,
  recipe,
}) {
  const imgSrc = [
    { src: "src/assets/favoris.png" },
    {
      src: "src/assets/favoris-red.png",
    },
  ];

  const { setFavorite, favorite } = useContext(FavoriteContext);

  const handleChangeImg = () => {
    if (favoriteImgIndex === 0) {
      setFavoriteImgIndex(1);
      setFavorite([...favorite, recipe]);
    } else {
      setFavoriteImgIndex(0);
      setFavorite(favorite.filter((element) => element !== recipe));
    }
  };
  console.log("favoris", favorite);

  return (
    <button className="favorite">
      <img
        onClick={handleChangeImg}
        src={imgSrc[favoriteImgIndex].src}
        alt="favorite star"
      />
    </button>
  );
}
