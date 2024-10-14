import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';

const NavBar = () => {
  const user = null;
  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>

      {user ? (
        <div>
          <Link className='main-nav-item' to='/profile'>
            <i className='fa fa-user-circle'></i>
            Tony
          </Link>
          <Link className='main-nav-item' to='#'>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className='main-nav-item' to='/login'>
            <i className='fa fa-user-circle'></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
