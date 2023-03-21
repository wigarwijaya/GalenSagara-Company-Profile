import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLang, navLinks } from '../constants';
import './Nav.css';
import Dropd from './Dropd';

function Navbar() {
  const [click, setClick] = useState(false);
  const [language, setLanguage] = useState(false);
  const [service, setService] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setService(false);
    } else {
      setService(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setService(false);
    } else {
      setService(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GALENSAGARA
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='nav-lang'>
            <Link
              to='/'
              className=''
              onClick={closeMobileMenu}
            >
              EN <i className='fas fa-caret-down i-lang' />
            </Link>
            {language && <Dropd list={navLang}/>}
        </div>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down i-services' />
            </Link>
            {service && <Dropd list={navLinks}/>}
          </li>
          <li className='nav-item'>
            <Link to='/consultants' className='nav-links' onClick={closeMobileMenu}>
              Consultants
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down i-products' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down i-about-us' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
