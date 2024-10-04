import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const COMPONENT = "checkout";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const totalCost = cartItems.reduce((total, cartItem) =>
    total + cartItem.price * cartItem.quantity
  , 0);

  console.log(cartItems);

  return (
    <div className={COMPONENT}>
      <div className={`${COMPONENT}__header`}>
        <div className={`${COMPONENT}__block`}>
          <span>Product</span>
        </div>
        <div className={`${COMPONENT}__block`}>
          <span>Description</span>
        </div>
        <div className={`${COMPONENT}__block`}>
          <span>Quantity</span>
        </div>
        <div className={`${COMPONENT}__block`}>
          <span>Price</span>
        </div>
        <div className={`${COMPONENT}__block`}>
          <span>Remove</span>
        </div>
      </div>
      <div className={`${COMPONENT}__items`}>
        {cartItems?.map(( cartItem ) => 
          <CheckoutItem 
            key={cartItem.id} 
            cartItem={cartItem} 
          />
        )}
      </div>
      <div className={`${COMPONENT}__total`}>
        TOTAL: ${totalCost}
      </div>
      
    </div>
  )
};

export default Checkout;