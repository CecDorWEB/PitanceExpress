import { createContext, useState } from "react";

const FavoriteContext = createContext();

// eslint-disable-next-line react/prop-types
export function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  const [quantity, setQuantity] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FavoriteContext.Provider
      value={{ favorite, setFavorite, quantity, setQuantity }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
