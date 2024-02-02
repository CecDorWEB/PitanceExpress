import "../Styles/menu.css";
import { useContext, useState, useEffect } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import medievalRecipes from "../medievalRecipes";

function FiltersMenu() {
  const recipe = medievalRecipes;
  const [activeCategory, setActiveCategory] = useState("main course");

  const { filterValue, setFilterValue } = useContext(FavoriteContext);

  useEffect(() => {
    setFilterValue(activeCategory);
  }, [activeCategory, setFilterValue]);

  const filterMenu = (value) => {
    setFilterValue(value);
    setActiveCategory(value);
  };
  console.info(filterValue);

  return (
    <section className="filters_container">
      <div className="buttons_menu">
        <button
          className={activeCategory === "main course" ? "active" : ""}
          onClick={() => filterMenu("main course")}
        >
          Mets
        </button>
        <button
          className={activeCategory === "drink" ? "active" : ""}
          onClick={() => filterMenu("drink")}
        >
          Breuvages
        </button>
        <button
          className={activeCategory === "dessert" ? "active" : ""}
          onClick={() => filterMenu("dessert")}
        >
          Douceurs
        </button>
      </div>
    </section>
  );
}

export default FiltersMenu;
