import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import "./checkout.styles.scss";

const COMPONENT = "checkout";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
        {cartItems?.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className={`${COMPONENT}__total`}>TOTAL: €{cartTotal}</div>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
