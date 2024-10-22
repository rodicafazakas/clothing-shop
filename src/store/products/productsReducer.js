import { productsActionTypes } from './products.action';

const INITIAL_STATE = {
  products: [],
};

const productsReducer = (state=INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch(type) {
    case productsActionTypes.loadProducts:
      return {
        ...state, 
        products: payload
      };
    default:
      return state;
  }
};

export default productsReducer;