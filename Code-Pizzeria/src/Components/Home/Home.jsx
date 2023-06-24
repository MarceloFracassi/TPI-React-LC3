import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import images from "../../constants/images"
import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const navigation = useNavigate();

  const handleVerMenuClick = () => {
    navigation('/menu');
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>

    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <h1>The real Italian tradition</h1>
        <p className='line'></p>
        <p className='p__opensans'>Hace más de medio siglo, en el corazón de Nápoles, Italia, una familia apasionada por la cocina decidió compartir su amor por la pizza con el mundo. Con el deseo de llevar la auténtica tradición de la pizza napolitana a nuevas fronteras</p>
        <button type='button' className='custom__button' onClick={handleVerMenuClick}>
          Ver Menú
        </button>
      </div> 
      <div>
      <Carousel class="col col-sm-9" className='app__home-carousel'>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={images.header}
                alt="First slide"
              />
              <Carousel.Caption className='Letter'>
                <h1>El verdadero sabor italiano 🍕</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={images.headerfamily1}
                alt="Second slide"
              />
              <Carousel.Caption className='Letter'>
                <h1>Para toda la familia ♥ </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={images.headerFriends}
                alt="Third slide"
              />
              <Carousel.Caption className='Letter'>
                <h1>Compartí momentos!</h1> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={images.headerPizza}
                alt="Fourth slide"
              />
              <Carousel.Caption className='Letter'>
                <h1>Marcello & Santino</h1>
              </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </div>

            
      </div>
    </div>
  )
}