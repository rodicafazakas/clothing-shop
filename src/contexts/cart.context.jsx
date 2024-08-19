import { createContext, useEffect, useState } from "react";


// Helper function
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(cartItem => 
    cartItem.id === productToAdd.id
  );
  
  let newCartItems = [];
  if (!existingCartItem) {
    newCartItems = [...cartItems, {...productToAdd, quantity: 1}]
  } else {
    newCartItems = cartItems.map(cartItem => 
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  }

  return newCartItems;
};


// Context
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(()  => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0) 
    setCartCount(count);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    cartItems, 
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}; 