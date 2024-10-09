import { unstable_useViewTransitionState, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";


const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);

  return (
    <div className="category">
      {products?.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
        ))
      }
    </div>
  )
};

export default Category;