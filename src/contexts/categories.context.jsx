// To populate the database with the products data
// -----------------------------------------------
// import SHOP_DATA from '../shop-data.js';
// -----------------------------------------------
// And then in the ProductsProvider
// -----------------------------------------------
// useEffect(() => {
//   addCollectionAndDocuments('categories', SHOP_DATA);
// }, []);


import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  
  return (
    <CategoriesContext.Provider value={{categoriesMap}}>
      {children}
    </CategoriesContext.Provider>
  )
}