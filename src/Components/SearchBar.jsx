import { useState } from "react";
import { Link } from "react-router-dom";

import medievalRecipes from "../medievalRecipes";
import "../Styles/searchBar.css";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const filteredSuggestions = medievalRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="search_bar">
      <input
        type="search"
        placeholder="En quête d'une pitance ?"
        className="search_input"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        list="suggestionsList"
      />
      <div className="search_button">
        {filteredSuggestions.length > 0 && (
          <Link to={`/Produit/${filteredSuggestions[0].id}`}>
            <img src="src\assets\loupe.png" alt="search" />
          </Link>
        )}
      </div>

      <datalist id="suggestionsList">
        {filteredSuggestions.map((recipe) => (
          <option key={recipe.id} value={recipe.name} />
        ))}
      </datalist>
    </div>
  );
}

export default SearchBar;
