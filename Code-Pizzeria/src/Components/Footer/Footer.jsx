
import "./footer.css"

import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


const Footer = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="Footer">
          <h2 classNAme='info-container'>Seguinos en nuestras redes ♥ </h2>
      </div>
    </div>
  )
}


export default Footer;