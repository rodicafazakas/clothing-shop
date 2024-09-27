import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product-card.styles.scss';

const COMPONENT = "product-card";

const ProductCard = ({product}) => {
  const {imageUrl, name, price} = product;

  const { addItemToCart } = useContext(CartContext); 

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className={COMPONENT}>
      <img 
        className={`${COMPONENT}__image`} 
        alt={name} 
        src={imageUrl} 
      />

      <Button 
        className='product-card__button' 
        buttonType='inverted'
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
      
      <div className='product-card__info'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>${price}</span>
      </div>
    </div>
  )
}

export default ProductCard;