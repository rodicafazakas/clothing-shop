import { createContext, useState } from "react";

export const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},  
});

export const MenuProvider = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const value = {isMenuOpen, setIsMenuOpen};

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}