import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product;
  console.log(product);
  return (
    <div className='product-card'>
      <img className='product-card__image' alt={product.name} src={imageUrl} />
      <Button className='product-card__button'>Add to cart</Button>
      <div className='product-card__info'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>{price}</span>
      </div>
    </div>
  )
}

export default ProductCard;