import { useEffect } from "react";
// import { useContext, useEffect } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";

import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { selectCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop.styles.scss';

const Shop = () => { 

  // using Context
  // const { categoriesMap } = useContext(CategoriesContext);

  // using Redux
  // fetching the categories data
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    };

    getCategories();
  }, [dispatch]);

  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className="shop">
    {
      Object.keys(categoriesMap).map( title => {
        const products = categoriesMap[title];
        
        return (
          <CategoryPreview 
            key={title} 
            title={title} 
            products={products} 
          />
        )
      })
    }
    </div>
  ) 
};

export default Shop;