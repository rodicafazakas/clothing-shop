import { createContext, useReducer } from "react";

import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};


// const cartReducer = (cart = INITIAL_STATE, action) => {
//   let newCart;

//   switch(action.type) {
//     case actionTypes.addProductToCart:
//       newCart = {...action.id};
//       break;
//     case actionTypes.toggleCart:
//       newCart = {}
//       break;
//     default:
//       newCart = {...cart};
//   }

//   return newCart;
// };

// export default cartReducer;



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
  cartTotal: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case actionTypes.setCartItems: 
      return {
        ...state, 
        ...payload,
      }
    case actionTypes.toggleCart: 
      return {
        ...state, 
        isCartOpen: payload,
      }
    default:
      throw new Error('unhandled error');
  }
};

const updateCartItemsReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity, 0) 
  setCartCount(count);

  const newCartTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price, 0) 
  setCartCount(count);

  dispatch({type: 'SET_CART_ITEMS', payload : {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  }})
};

export const CartProvider = ({children}) => {
  const [{cartItems, isCartOpen, cartCount, cartTotal}, dispatch]  = useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({
      type: 'SET_IS_CART_OPEN',
      payload: bool,
    })
  }

  const value = {
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    cartItems, 
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}; 