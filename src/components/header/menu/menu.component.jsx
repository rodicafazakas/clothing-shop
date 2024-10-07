import { useContext } from 'react';

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
        <li className={`${COMPONENT}__item`}>Hats</li>
        <li className={`${COMPONENT}__item`}>Jackets</li>
        <li className={`${COMPONENT}__item`}>Sneakers</li>
        <li className={`${COMPONENT}__item`}>Women</li>
        <li className={`${COMPONENT}__item`}>Men</li>
      </ul>
    </nav>
  )    
};

export default Menu;