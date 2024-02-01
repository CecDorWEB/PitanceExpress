import FiltersMenu from "../Components/FiltersMenu";
import CardRecipe from "../Components/CardRecipe";
import "../Styles/menu.css";

function Menu() {
  return (
    <div>
      <FiltersMenu />
      <CardRecipe />
    </div>
  );
}

export default Menu;
