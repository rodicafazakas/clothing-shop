import { useContext } from 'react';
// import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';

import { useSelector } from 'react-redux';
import { selectCartIsCartOpen } from '../../store/cart/cart.selector';

import { Link } from 'react-router-dom';

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
  // const { currentUser} = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // using Redux
  const currentUser = useSelector(state => state.user.currentUser); 
  const isCartOpen = useSelector(selectCartIsCartOpen);
  
  return (
    <nav className={COMPONENT}>
      <div className={`${COMPONENT}__container`}>
        <aside
          className={`${COMPONENT}__sidenav`}
        >
          { !isMenuOpen && <MenuBurger className={`${COMPONENT}__burger`} onClick={toggleMenu} /> }
          { isMenuOpen && <Menu className="visible"/> }
        </aside>

        <div className={`${COMPONENT}__logo-main`}>
          <Link className={`${COMPONENT}__link`} to='/'>
            <span className={`${COMPONENT}__company`}>
              <span className={`${COMPONENT}__company-first`}>IN</span> FASHION
            </span>
          </Link>
        </div>

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
      </div>
    </nav>
  )
}

export default Header;