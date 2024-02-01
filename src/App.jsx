import { Outlet } from "react-router-dom";

import "./App.css";
import medievalRecipes from "./medievalRecipes";

function App() {
  const recipe = medievalRecipes;
  console.info(recipe);
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
