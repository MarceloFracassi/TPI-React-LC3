import React from 'react'
import "./History.css"
import images from "../../constants/images"

export const History = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
            
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <img src={images.pizzaHistory} alt="about_pizzaHistory" className="pizzaHistory__img" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Nuestra Historia</h1>
                <img src={images.pizzaCutter} alt="about_pizzaCutter" className="pizzaCutter__img" />
                <p className="p__opensans">La historia de La Pizzería Marcello & Santino se remonta a la casa familiar, donde la abuela Maria preparaba exquisitas pizzas para sus hijos y nietos. Utilizando una receta transmitida de generación en generación, ella dominaba el arte de amasar la masa a mano y combinar los ingredientes más frescos y sabrosos. La pasión de la abuela Maria por la pizza se convirtió en una herencia familiar que Marcello y Santino honraron al abrir su propio restaurante.</p>
            </div>
        </div>
    </div>
    );
}
