import { TCartItem } from "../../store/cart/cart.types";
import "./cart-item.styles.scss";

const COMPONENT = "cart-item";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className={COMPONENT}>
      <img className={`${COMPONENT}__image`} alt={name} src={imageUrl} />
      <div className={`${COMPONENT}__info`}>
        <span className={`${COMPONENT}__name`}>{name}</span>
        <span className={`${COMPONENT}__price`}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
