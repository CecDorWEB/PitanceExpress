import { createContext, useState } from "react";

const FavoriteContext = createContext();

// eslint-disable-next-line react/prop-types
export function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  const [quantityTotal, setQuantityTotal] = useState(0);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FavoriteContext.Provider
      value={{ favorite, setFavorite, quantityTotal, setQuantityTotal }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
