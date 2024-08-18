import { useContext } from 'react';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const  CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon' onClick={toggleIsCartOpen}>
      <ShoppingBag className='cart-icon__icon' />
      <div className='cart-icon__count'>0</div>
    </div>
  )
};

export default CartIcon;