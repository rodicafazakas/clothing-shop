import { cartActionTypes } from "./cart.action";

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch(type) {
    case cartActionTypes.setCartItems:
      return {
        ...state, 
        cartItems: payload,
      };
    case cartActionTypes.toggleCart:
      return {
        ...state, 
        isCartOpen: payload
      }
    default:
      return state;
  }
};

export default cartReducer;



// const addItemToCart = (productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   updateCartItemsReducer(newCartItems);
// };


// const setIsCartOpen = (bool) => {
//   dispatch({
//     type: 'SET_IS_CART_OPEN',
//     payload: bool,
//   })
// }
