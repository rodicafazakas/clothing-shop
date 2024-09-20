import { useContext } from 'react';
//import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const  CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  
  //const dispatch = useDispatch();
  //const { isCartOpen, cartCount, toggleCart }  = useSelector(store => store.cart);

  //const toggleIsCartOpen = () => dispatch(toggleCart(!isCartOpen));

  return (
    <div 
      className='cart-icon' 
      //onClick={toggleIsCartOpen}
    >
      <ShoppingBag className='cart-icon__icon' />
      <div className='cart-icon__count'>{cartCount}</div>
    </div>
  )
};

export default CartIcon;