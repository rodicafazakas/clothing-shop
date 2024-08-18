import Button from '../button/button.component'; 

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
 return (
  <div className='cart-dropdown'>
    <div className='cart-dropdown__items'>
      ITEMS
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
 )
};

export default CartDropdown;