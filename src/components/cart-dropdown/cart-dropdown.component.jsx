import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import { Button } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const COMPONENT = "cart-dropdown";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  let navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className={COMPONENT}>
      <div className={`${COMPONENT}__items`}>
        {cartItems?.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className={`${COMPONENT}__empty`}>Your cart is empty.</span>
        )}
      </div>

      <Button
        onClick={goToCheckoutHandler}
        buttonType="base"
        text="GO TO CHECKOUT"
      />
    </div>
  );
};

export default CartDropdown;
