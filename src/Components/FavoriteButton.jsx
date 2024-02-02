import { useState } from "react";
/* eslint-disable react/prop-types */
export function FavoriteButton({ setFavorite, favorite, recipe }) {
  const favoriteState = () => {
    if (favorite.includes(recipe)) {
      return 1;
    } else {
      return 0;
    }
  };

  const [favoriteImgIndex, setFavoriteImgIndex] = useState(favoriteState());

  const imgSrc = [
    { src: "/src/assets/favoris.png" },
    {
      src: "/src/assets/favoris-red.png",
    },
  ];

  console.log(favoriteImgIndex);

  const handleChangeImg = () => {
    if (favorite.includes(recipe)) {
      setFavoriteImgIndex(0);
      const removeFavorite = favorite.filter((fav) => fav !== recipe);
      setFavorite(removeFavorite);
    } else {
      setFavorite([...favorite, recipe]);

      setFavoriteImgIndex(1);
    }
  };

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
