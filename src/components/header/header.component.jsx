import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import './header.styles.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <nav className='header'>
      <Link className='header__link header__logo' to='/'>
        <CrwnLogo />
      </Link>
      <ul className="header__list">
        <li className='header__item'>
          <Link className='header__link' to='/shop'>SHOP</Link>
        </li>  
        <li className='header__item'>
          <Link className='header__link' to='/shop'>CONTACT</Link>
        </li> 
        <li className='header__item'>
          <Link className='header__link' to='/auth'>SIGN IN</Link>
        </li>  
        <li className='header__item'>  
           <CartIcon />
        </li>
        { isCartOpen && <CartDropdown /> }
      </ul>
    </nav>
  )
}

export default Header;