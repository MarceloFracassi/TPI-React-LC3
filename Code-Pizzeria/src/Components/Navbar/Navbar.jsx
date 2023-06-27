import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import images from "../../constants/images";
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/ShoppingCartContext';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenuPage, setShowMenuPage] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const [cart] = useContext(CartContext); // Obtener el estado del carrito desde el contexto

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Calcular la cantidad total de pizzas en el carrito

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
        <li>
          <Link to="/" className="links" onClick={() => setShowMenuPage(true)}>Inicio</Link>
        </li>
        <li className="link-separator">|</li> {/* Separador */}
        <li>
          <Link to="/about" className="links" onClick={() => setShowMenuPage(true)}>Historia</Link>
        </li>
        <li className="link-separator">|</li> {/* Separador */}
        <li>
          <Link to="/menu" className='links' onClick={() => setShowMenuPage(true)}>Menu</Link>
        </li>
        <li className="link-separator">|</li> {/* Separador */}
        <li>
          <Link to="/contact" className="links" onClick={() => setShowMenuPage(true)}>Contacto</Link>
        </li>
      </ul>
      <div className='app_navbar-login'>
        <Link to="/login" className='links'>Iniciar Sesión</Link>
        <span className="link-separator">|</span> {/* Separador */}
        <Link to="/signin" className='links'>Regístrate</Link>
        <span className="link-separator">|</span> {/* Separador */}
        <Link to="/cart" className='links'><IoCartOutline /></Link>
        <span className='item_total'>{totalQuantity}</span> {/* Mostrar la cantidad de pizzas en el carrito */}
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
