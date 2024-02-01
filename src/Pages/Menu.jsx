import FiltersMenu from "../Components/FiltersMenu";
import CardRecipe from "../Components/CardRecipe";

import SearchBar from "../Components/Searchbar";

import "../Styles/menu.css";

function Menu() {
  return (
    <div>
      <FiltersMenu />
      <SearchBar />
      <CardRecipe />
    </div>
  );
}

export default Menu;
