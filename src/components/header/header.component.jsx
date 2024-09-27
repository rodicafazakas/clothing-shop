import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './header.styles.scss';

const COMPONENT = "header";

const Header = () => {
  // using Context
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <nav className={COMPONENT}>
      <Link 
        className={`
          ${COMPONENT}__link 
          ${COMPONENT}__logo
        `} 
        to='/'
      >
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