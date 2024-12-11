import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { Button } from "../button/button.component";

import "./product-card.styles.scss";

const COMPONENT = "product-card";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className={COMPONENT}>
      <img className={`${COMPONENT}__image`} alt={name} src={imageUrl} />

      <Button
        className="product-card__button"
        buttonType="inverted"
        onClick={addProductToCart}
        text="Add to cart"
      />

      <div className="product-card__info">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">€{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
