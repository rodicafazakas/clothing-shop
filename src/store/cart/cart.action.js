import { createAction } from "../../utils/reducer/reducer.utils";

export const cartActionTypes = {
  setCartItems: "SET_CART_ITEMS",
  toggleCart: "TOGGLE_CART",   
};

export const setCartItems = ({cartItems, cartCount, cartTotal}) => 
  createAction(cartActionTypes.setCartItems, {cartItems, cartCount, cartTotal});

export const toggleCart = (boolean) => 
  createAction(cartActionTypes.toggleCart, boolean);

// const addItemToCart = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(cartItem => 
//     cartItem.id === productToAdd.id
//   );
  
//   let newCartItems = [];
//   if (!existingCartItem) {
//     newCartItems = [...cartItems, {...productToAdd, quantity: 1}]
//   } else {
//     newCartItems = cartItems.map(cartItem => 
//       cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
//   }

//   return newCartItems;
// };
 
// export const addCartItem = (cartItems, productToAdd) => {
//   const newCartItems = addItemToCart(cartItems, productToAdd);
//   return ({
//     type: actionTypes.addCartItem,
//     payload: newCartItems,
//   });
// };