import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const COMPONENT = "category-preview";

const CategoryPreview = ({title, products}) => {
  return (
    <section className={COMPONENT}>
      <h2 className={`${COMPONENT}__title`}>{title}</h2>

      <div className={`${COMPONENT}__products`}>
        {products
          .filter((_, idx) => idx < 4)
          .map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))
        }
      </div>

    </section>
  )  
};

export default CategoryPreview;