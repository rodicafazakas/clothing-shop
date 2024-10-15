import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ReactComponent as MenuBurger} from "../../assets/menu-svgrepo-com.svg";
import Menu from './menu/menu.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { MenuContext } from '../../contexts/menu.context';

import './header.styles.scss';

const COMPONENT = "header";

const Header = () => {
  // using Context
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={COMPONENT}>
      <aside
        className={`${COMPONENT}__sidenav`}
      >
        { !isMenuOpen && <MenuBurger className={`${COMPONENT}__burger`} onClick={toggleMenu} /> }
        { isMenuOpen && <Menu className="visible"/> }
      </aside>

      <Link className={`${COMPONENT}__link ${COMPONENT}__logo`} to='/'>
        <CrwnLogo />
      </Link>

      <ul className={`${COMPONENT}__list`}>
        <li className={`${COMPONENT}__item`}>
          <Link className={`${COMPONENT}__link`} to='/shop'>SHOP</Link>
        </li> 
        { currentUser ? (
          <li className={`${COMPONENT}__item`}>
            <span 
              className={`${COMPONENT}__link`} 
              onClick={signOutUser}
            >
              SIGN OUT
            </span>
          </li>   
        ) : (        
          <li className={`${COMPONENT}__item`}>
            <Link className={`${COMPONENT}__link`} to='/auth'>SIGN IN</Link>
          </li>
        )} 
        <li className={`${COMPONENT}__item`}>  
           <CartIcon />
        </li>
      </ul>
      { isCartOpen && <CartDropdown /> }
    </nav>
  )
}

export default Header;