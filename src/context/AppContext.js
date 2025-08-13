import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(3);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <AppContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;