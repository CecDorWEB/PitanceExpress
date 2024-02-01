import FiltersMenu from "../Components/FiltersMenu";
import CardRecipe from "../Components/CardRecipe";
import BandeauPromo from "../Components/BandeauPromo";

import SearchBar from "../Components/Searchbar";

import "../Styles/menu.css";

function Menu() {
  return (
    <div>
      <BandeauPromo />
      <FiltersMenu />
      <CardRecipe />

      <h2>Menu</h2>
      <SearchBar />
    </div>
  );
}

export default Menu;
