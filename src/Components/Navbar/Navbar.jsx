import React, { useState } from 'react'
import './Navbar.css'
import images from "../../constants/images";
import {IoCartOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <nav className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className='app_navbar-logo'>
        <img src={images.logoLetras} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <li className='links'><a href="#home"> | Inicio | </a></li>
        <li className='links'><a href="#about"> | Historia | </a></li>
        <li className='links'><a href="#menu"> | Menu | </a></li>
        <li className='links'><a href="#contact"> | Contacto | </a></li>
      </ul>
      <div className='app_navbar-login'>
      <a href="#login" className='links'>Iniciar Sesión | Regístrate | <span className='link-cart'><IoCartOutline/></span></a>
      </div>
      <div className='app_navbar-smallscreen'>
        <GiHamburgerMenu color="black" fontSize={27} onClick={() => setMenu(true)}/>
        
        {menu && (
        <div className='app_navbar-smallscreen-overlay flex_center slide_bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setMenu(false)}/>        
          <ul className='app_navbar-smallscreen-links'>
            <li className='links'><a href="#home">Inicio</a></li>
            <li className='links'><a href="#about">Historia</a></li>
            <li className='links'><a href="#menu">Menu</a></li>
            <li className='links'><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}