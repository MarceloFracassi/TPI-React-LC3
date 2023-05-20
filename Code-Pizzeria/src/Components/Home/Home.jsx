import React from 'react'

import "./Home.css"
import images from "../../constants/images"

export const Home = () => {
  return (
    <div className='app__home'>
        <div className='app__home-container'>
            <img src={images.bgHeader} alt="Descripción de la imagen" class="app__home-bg-img"/>
            <div className='app__home-text'>
                <strong>Bienvenidos a Marcello & Santino</strong>
                <br/>
                <div className='app__home-text-description'>El clásico sabor italiano. 
                </div> 
            </div>
        </div>
    </div>
  )
}
