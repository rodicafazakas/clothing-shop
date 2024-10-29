import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const [ products, setProducts ] = useState([]);

  const categoriesMap = useSelector( selectCategoriesMap );
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);

  return (
    <div className="category">
      <h1 className="category__title">{category}</h1>

      {isLoading ? (
          <Spinner />
        ) : (
          <div className="category__products">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
              />
              ))}
          </div>
        )}
    </div>
  )
};

export default Category;