import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";

import ProductCard from "../../components/product-card/product-card.component";
//import { selectCategoriesMap } from "../../redux/selectors/categorySelector";

import './shop.styles.scss';


const Shop = () => { 
  const { products } = useContext(ProductsContext);
  // const { products } = useSelector( store => store.products) 
  
  //const {category} = useParams();
  //const categoriesMap = useSelector(selectCategoriesMap);
  //const [products, setProducts] = useState(categoriesMap[category]);

  // useEffect(() => {
  //   setProducts(categoriesMap[category])
  // }, [category, categoriesMap]);

  return (
    <div className="products-container">
      {products?.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))}
    </div>
  ) 
};

export default Shop;