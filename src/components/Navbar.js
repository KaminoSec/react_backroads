import logo from '../images/logo.svg';
import { pageLinks } from '../data';
import Social from './Social';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          <Social href='https://www.twitter.com' icon='fab fa-facebook' />
          <Social href='https://www.twitter.com' icon='fab fa-twitter' />
          <Social href='https://www.twitter.com' icon='fab fa-squarespace' />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
