import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../compnents/NavBar';
import Footer from '../compnents/Footer';
import Auth from '../pages/Auth';
import User from '../pages/User';

const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path='/login' element={<Auth />} exact={true} />
        <Route path='/profile' element={<User />} exact={true} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
