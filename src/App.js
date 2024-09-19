import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from './routes/authentication/authentication.component';

import './App.styles.scss';


const App = () => {
  return (
    <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop /> } />
          <Route path='/auth' element={<Authentication /> } />
        </Routes>
    </div>
  );
};

export default App;
