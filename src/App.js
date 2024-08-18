import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";

import './App.styles.scss';

const App = () => {
  return (
    <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop /> } />
        </Routes>
    </div>
  );
};

export default App;
