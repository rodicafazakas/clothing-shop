import actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoryReducer = (state=INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch(type) {
    case actionTypes.setCategoriesMap:
      return {
        ...state, 
        categoriesMap: payload
      };
    default:
      return state;
  }
};

export default categoryReducer;