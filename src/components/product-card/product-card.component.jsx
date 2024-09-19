import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product;

  const { addItemToCart } = useContext(CartContext); 

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card'>
      <img 
        className='product-card__image' 
        alt={product.name} 
        src={imageUrl} 
      />

      <Button 
        className='product-card__button' 
        type='base'
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
      
      <div className='product-card__info'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>{price}</span>
      </div>
    </div>
  )
}

export default ProductCard;