import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCartIsCartOpen } from '../../store/cart/cart.selector';
import { selectIsMenuOpen } from '../../store/menu/menu.selector';
import { toggleMenu } from '../../store/menu/menu.action';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as MenuBurger} from "../../assets/menu-svgrepo-com.svg";
import Menu from './menu/menu.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './header.styles.scss';

const COMPONENT = "header";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser); 
  const isCartOpen = useSelector(selectCartIsCartOpen);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const toggleMenuHandler = () => dispatch(toggleMenu(!isMenuOpen));
  const signOutUser = () => dispatch(signOutStart());
  
  return (
    <header className={COMPONENT}>
      <div className={`${COMPONENT}__container`}>
        <aside
          className={`${COMPONENT}__sidenav`}
        >
          { !isMenuOpen && <MenuBurger className={`${COMPONENT}__burger`} onClick={toggleMenuHandler} /> }
          { isMenuOpen && <Menu /> }
        </aside>

        <h2 className={`${COMPONENT}__logo-main`}>
          <Link className={`${COMPONENT}__link`} to='/'>
            <span className={`${COMPONENT}__company-first`}>IN</span> FASHION
          </Link>
        </h2>

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
    </header>
  )
}

export default Header;