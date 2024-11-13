import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from "./store/user/user.action";

import Header from './components/header/header.component';
import Home from "./pages/home/home.component";
import Shop from "./pages/shop/shop.component";
import Category from './pages/category/category.component';
import Authentication from './pages/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';

import './App.styles.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop /> } />
          <Route path='/shop/:category' element={<Category /> } />
          <Route path='/auth' element={<Authentication /> } />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </div>
  );
};

export default App;
