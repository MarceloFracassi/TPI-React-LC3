import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import images from "../../constants/images";
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    return () => {
      setShowMenuPage(false);
    };
  }, []);

  const handleMenuClick = () => {
    setMenu(true);
  };

  return (
    
    <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className='app_navbar-logo'>
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <Link to="/" className="links" onClick={() => setShowMenuPage(true)}>Inicio     |</Link>
        <Link to="/about" className="links" onClick={() => setShowMenuPage(true)}>|     Historia     |</Link>
        <Link to="/menu" className='links' onClick={() => setShowMenuPage(true)}>|     Menu     |</Link>
        <Link to="/contact" className="links" onClick={() => setShowMenuPage(true)}>|     Contacto</Link>
      </ul>
      <div className='app_navbar-login'>
        <Link to="/login" className='links'>Iniciar Sesión    |</Link>
        <Link to="/signin" className='links'>|    Regístrate    |</Link>
        <Link to="/cart" className='links'>|    <IoCartOutline /></Link>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color="black" fontSize={27} onClick={handleMenuClick} />

        {menu && (
          <div className='app_navbar-smallscreen-overlay flex_center slide_bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setMenu(false)} />
            <ul className='app_navbar-smallscreen-links'>
              <li className='links'><Link to="/">Inicio</Link></li>
              <li className='links'><Link to="/about">Historia</Link></li>
              <li className='links'><Link to="/menu">Menu</Link></li>
              <li className='links'><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
