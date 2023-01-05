import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const CardsContext = createContext({
  products: [],
});

export const CardsProvider = ({ children }) => {
  const [cards, setcards] = useState(PRODUCTS);
  const value = { cards };
  return (
    <CardsContext.Provider value={value}>
      {children}
    </CardsContext.Provider>
  );
};