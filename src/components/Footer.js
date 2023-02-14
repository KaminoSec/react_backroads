import { footerLinks } from '../data';
import Social from './Social';
const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {footerLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li id={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='footer-icons'>
        <Social href='https://www.twitter.com' icon='fab fa-facebook' />
        <Social href='https://www.twitter.com' icon='fab fa-twitter' />
        <Social href='https://www.twitter.com' icon='fab fa-squarespace' />
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
