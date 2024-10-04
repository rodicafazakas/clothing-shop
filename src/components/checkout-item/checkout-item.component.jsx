import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const COMPONENT = "checkout-item";

const CheckoutItem = ({cartItem}) => {
  const {id, imageUrl, name, price, quantity} = cartItem;

  const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

  return (
    <div 
      key={id} 
      className={COMPONENT}
    > 
      <img 
        className={`
          ${COMPONENT}__image
          ${COMPONENT}__block
        `}
        alt={name}
        src={imageUrl} 
      />

      <span className={`${COMPONENT}__block`}>{name}</span> 

      <div className={`${COMPONENT}__block`}>
        <span 
          className={`${COMPONENT}__arrow`} 
          onClick={() => removeItemFromCart(cartItem)}
        >
          &#10094;
        </span>
        <span className={`${COMPONENT}__quantity`}>{quantity}</span> 
        <span 
          className={`${COMPONENT}__arrow`} 
          onClick={() => addItemToCart(cartItem)}
        >
          &#10095;
        </span>
      </div>
      
      <span className={`${COMPONENT}__block`}>{price}</span>
      
      <div 
        className={`${COMPONENT}__block`}
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  )  
};

export default CheckoutItem;