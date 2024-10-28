// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const COMPONENT = "checkout-item";

const CheckoutItem = ({cartItem}) => {
  const {id, imageUrl, name, price, quantity} = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

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
          onClick={removeItemHandler}
        >
          &#10094;
        </span>
        <span className={`${COMPONENT}__quantity`}>{quantity}</span> 
        <span 
          className={`${COMPONENT}__arrow`} 
          onClick={addItemHandler}
        >
          &#10095;
        </span>
      </div>
      
      <span className={`${COMPONENT}__block`}>{price}</span>
      
      <div 
        className={`${COMPONENT}__block`}
        onClick={clearItemHandler}
      >
        &#10005;
      </div>
    </div>
  )  
};

export default CheckoutItem;