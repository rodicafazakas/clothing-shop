import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

import './shop.styles.scss';

const Shop = () => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className="shop"> 
    { isLoading ? (
        <Spinner />
      ) : (
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
      )
    }
    </div>
  ) 
};

export default Shop;