import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../../store/menu/menu.action';
import { selectIsMenuOpen } from '../../../store/menu/menu.selector';

import './menu.styles.scss';

const COMPONENT = "menu";

const Menu = ({className}) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const toggleMenuHandler = () => dispatch(toggleMenu(!isMenuOpen));

  return (
    <nav className={`${COMPONENT} ${COMPONENT}--${className}`}>
      <button 
        className={`${COMPONENT}__button`} 
        aria-label="Close Menu"
        onClick={toggleMenuHandler}
      > 
        &#10005; 
      </button>

      <ul className={`${COMPONENT}__list`}>
        <Link className={`${COMPONENT}__item`} to="/shop/hats"> Hats </Link>
        <Link className={`${COMPONENT}__item`} to="/shop/jackets"> Jackets </Link>
        <Link className={`${COMPONENT}__item`} to="/shop/sneakers"> Sneakers</Link>
        <Link className={`${COMPONENT}__item`} to="/shop/women"> Women </Link>
        <Link className={`${COMPONENT}__item`} to="/shop/men"> Men </Link>
      </ul>
    </nav>
  )    
};

export default Menu;