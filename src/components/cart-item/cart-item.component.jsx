import "./cart-item.styles.scss";

const COMPONENT = "cart-item"; 

const CartItem = ({cartItem}) => {
  const { imageUrl, name, price, quantity} = cartItem;

  return (
    <div className={COMPONENT}>
      <img
        className={`${COMPONENT}__image`}
        alt={name}
        src={imageUrl} 
      />
      <div className={`${COMPONENT}__info`}>
        <span className={`${COMPONENT}__name`}>{name}</span>
        <span className={`${COMPONENT}__price`}>{quantity} x ${price}</span>
      </div>
    </div>
  )
};

export default CartItem;