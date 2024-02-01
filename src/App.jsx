import { Outlet } from "react-router-dom";

import "./App.css";

import medievalRecipes from "./medievalRecipes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <h1>Pitance Express</h1>
      <h1>{recipe[0].name}</h1>
      <img src={recipe[0].img}></img>
      <p>Categrory:{recipe[0].category}</p>
      <p>Allergen: {recipe[0].allergen}</p>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App;
