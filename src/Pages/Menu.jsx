import FiltersMenu from "../Components/FiltersMenu";
import CardRecipe from "../Components/CardRecipe";
import BandeauPromo from "../Components/BandeauPromo";
import medievalRecipes from "../medievalRecipes";
import SearchBar from "../Components/Searchbar";

import "../Styles/menu.css";

function Menu() {
  const recipe = medievalRecipes;
  return (
    <div>
      <SearchBar />
      <BandeauPromo />
      <FiltersMenu />
      <CardRecipe />
    </div>
  );
}

export default Menu;
