import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import { 
  createUserDocumentFromAuth, 
  onAuthStateChangedListener, 
} from "../src/utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

import Header from './components/header/header.component';
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Category from './routes/category/category.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';

import './App.styles.scss';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
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
