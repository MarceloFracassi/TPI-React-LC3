import React, { useState, useEffect } from 'react';
import './Navbar.css';
import images from "../../constants/images";
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenuPage, setShowMenuPage] = useState(false);

  useEffect(() => {
    return () => {
      setShowMenuPage(false);
    };
  }, []);

  const handleMenuClick = () => {
    setMenu(true);
  };

  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.logoLetras} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <Link to="/" className="links" onClick={() => setShowMenuPage(true)}>Inicio</Link>
        <Link to="/about" className="links" onClick={() => setShowMenuPage(true)}>Historia</Link>
        <Link to="/menu" className='links' onClick={() => setShowMenuPage(true)}>Menu</Link>
        <Link to="/contact" className="links" onClick={() => setShowMenuPage(true)}>Contacto</Link>
      </ul>
      <div className='app_navbar-login'>
        <Link to="/login" className='links'>Iniciar Sesión</Link>
        <Link to="/signin" className='links'>Regístrate</Link>
        <Link to="/cart" className='links'><IoCartOutline /></Link>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color="black" fontSize={27} onClick={handleMenuClick} />

        {menu && (
          <div className='app_navbar-smallscreen-overlay flex_center slide_bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setMenu(false)} />
            <ul className='app_navbar-smallscreen-links'>
              <li className='links'><a href="/home">Inicio</a></li>
              <li className='links'><a href="/about">Historia</a></li>
              <li className='links'><a href="/menu">Menu</a></li>
              <li className='links'><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
