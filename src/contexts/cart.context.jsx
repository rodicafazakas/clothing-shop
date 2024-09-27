import { createContext, useEffect, useState } from "react";

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
    cartItems, 
    addItemToCart, 
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}; 

// Helper function
const addCartItem = (cartItems, productToAdd) => {
  const cartItemExists = cartItems.find(cartItem => 
    cartItem.id === productToAdd.id
  );
  
  let newCartItems = [];
  if (!cartItemExists) {
    newCartItems = [...cartItems, {...productToAdd, quantity: 1}]
  } else {
    newCartItems = cartItems.map(cartItem => 
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
  }

  return newCartItems;
};