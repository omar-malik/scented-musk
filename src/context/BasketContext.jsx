import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
}

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (product) => {
    setBasketItems([...basketItems, product]);
  };

  const removeFromBasket = (itemIndex) => {

  };

return(
  <BasketContext.Provider value={{ basketItems, addToBasket }}>
    {children}
  </BasketContext.Provider>
)
}