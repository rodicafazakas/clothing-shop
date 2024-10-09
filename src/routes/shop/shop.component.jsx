import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";

//import { selectCategoriesMap } from "../../redux/selectors/categorySelector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop.styles.scss';

const Shop = () => { 
  const { categoriesMap } = useContext(CategoriesContext);
  // const { products } = useSelector( store => store.products) 
  
  //const {category} = useParams();
  //const categoriesMap = useSelector(selectCategoriesMap);
  //const [products, setProducts] = useState(categoriesMap[category]);

  // useEffect(() => {
  //   setProducts(categoriesMap[category])
  // }, [category, categoriesMap]);

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