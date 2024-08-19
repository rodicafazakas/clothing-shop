import { useContext } from 'react';

import Button from '../button/button.component'; 
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';


import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  console.log('cartItems=========', cartItems);

  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__items'>
        {cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem}/>))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
};

export default CartDropdown;