import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import categoryReducer from "./categories/category.reducer";
// import productsReducer from "./productsReducer";
// import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer
  // products: productsReducer,
  // cart: cartReducer
});

export default rootReducer;