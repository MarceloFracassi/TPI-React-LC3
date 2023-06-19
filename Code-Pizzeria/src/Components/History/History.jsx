import React from 'react'
import "./History.css"
import images from "../../constants/images"
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


export const History = () => {
    const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <div className="app__aboutus" id="about">
            
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <img src={images.historyImg} alt="about_pizzaHistory" className="pizzaHistory__img" />
            </div>
            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Nuestra Historia</h1>
                <p className="p__opensans">La historia de La Pizzería Marcello & Santino se remonta a la casa familiar, donde la abuela Maria preparaba exquisitas pizzas para sus hijos y nietos. Utilizando una receta transmitida de generación en generación, ella dominaba el arte de amasar la masa a mano y combinar los ingredientes más frescos y sabrosos. La pasión de la abuela Maria por la pizza se convirtió en una herencia familiar que Marcello y Santino honraron al abrir su propio restaurante.</p>
            </div>
        </div>
        <br></br>
    </div>
    </div>
    
    );
}
