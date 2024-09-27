import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

//import { useSelector } from 'react-redux';

import Button from '../button/button.component'; 
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const COMPONENT = "cart-dropdown";

const CartDropdown = () => {
  // using Context
  const { cartItems } = useContext(CartContext);

  // using Redux
  //const { cartItems } = useSelector(store => store.cartItems)

  return (
    <div className={COMPONENT}>
      <div className={`${COMPONENT}__items`}>
        {cartItems.map(cartItem => (
          <CartItem 
            key={cartItem.id} 
            cartItem={cartItem} 
          />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown;