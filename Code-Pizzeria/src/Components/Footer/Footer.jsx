import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import images from "../../constants/images";
import './footer.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/3416691492';
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/marcelloysantino/';
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="Footer">
        <p className="line1"></p>
        <h2 className="info-container">Seguinos en nuestras redes ♥</h2>   
        <div className="LogosMedia">
          <div>
            <a href="https://wa.me/3416691492" onClick={handleWhatsAppClick}>
              <img src={images.WhatsAppLogo} alt="WhatsApp Logo" />
              <p>WhatsApp</p>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/marcelloysantino/" onClick={handleInstagramClick}>
              <img src={images.Instagram} alt="Instagram Logo" />
              <p>Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
