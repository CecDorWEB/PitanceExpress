import "./App.css";
import medievalRecipes from "./medievalRecipes";

function App() {
  const recipe = medievalRecipes;
  console.info(recipe);
  return (
    <>
      <h1>Pitance Express</h1>
      <h1>{recipe[0].name}</h1>
      <img src={recipe[0].img}></img>
      <p>Categrory:{recipe[0].category}</p>
      <p>Allergen: {recipe[0].allergen}</p>
    </>
  );
}

export default App;
