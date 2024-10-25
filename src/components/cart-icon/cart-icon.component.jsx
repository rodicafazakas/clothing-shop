// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context'; 

import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartIsCartOpen } from '../../store/cart/cart.selector';
import { toggleCart } from "../../store/cart/cart.action";

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const COMPONENT = "cart-icon";

const  CartIcon = () => {
  // using Context 
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  // const toggleCart = () => setIsCartOpen(!isCartOpen); 
  
  // using Redux
  const dispatch = useDispatch();
  const isCartOpen  = useSelector(selectCartIsCartOpen);
  const cartCount = useSelector(selectCartCount); 
  const toggleIsCartOpen = () => dispatch(toggleCart(!isCartOpen));

  return (
    <div 
      className={COMPONENT} 
      onClick={toggleIsCartOpen}
    >
      <ShoppingBag className={`${COMPONENT}__icon`}  />
      <div className={`${COMPONENT}__count`}>{cartCount}</div>
    </div>
  )
};

export default CartIcon;