import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MenuContext } from '../../../contexts/menu.context';

import './menu.styles.scss';

const COMPONENT = "menu";

const Menu = ({className}) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`${COMPONENT} ${COMPONENT}--${className}`}>
      <button 
        className={`${COMPONENT}__button`} 
        aria-label="Close Menu"
        onClick={toggleMenu}
      > 
        &#10005; 
      </button>

      <ul className={`${COMPONENT}__list`}>
        <Link className={`${COMPONENT}__item`} to="/shop/hats"> Hats </Link>
        <Link className={`${COMPONENT}__item`} to="/shop/jackets"> Jackets </Link>
        <Link className={`${COMPONENT}__item`} to="/shop/sneakers"> Sneakers</Link>
        <Link className={`${COMPONENT}__item`} to="/shop/women"> Women </Link>
        <Link className={`${COMPONENT}__item`} to="/shop/jackets"> Men </Link>
      </ul>
    </nav>
  )    
};

export default Menu;