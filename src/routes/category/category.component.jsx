import { useParams } from "react-router-dom";
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
      <h1 className="category__title">{category}</h1>

      <div className="category__products">
        {products?.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
          ))
        }
      </div>
    </div>
  )
};

export default Category;