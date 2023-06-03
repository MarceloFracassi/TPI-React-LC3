import React from 'react'
import './Home.css'
import images from "../../constants/images"
import SubHeading from './SubHeading/SubHeading'

export const Home = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Marcelo & Santino"/>
        <h1 className='app__header-h1'>The real Italian tradition</h1>
        <p className='p__opensans' style={{ margin: '2rem 0'}}>Hace más de medio siglo, en el corazón de Nápoles, Italia, una familia apasionada por la cocina decidió compartir su amor por la pizza con el mundo. Con el deseo de llevar la auténtica tradición de la pizza napolitana a nuevas fronteras</p>
        <button type='button' className='custom__button'>Ver Menú</button>
      </div>

      <div className='app_wrapper_img'>
        <img src={images.pizzaHome} alt="header-logo" className='header__logo-img'/>
      </div>
    </div>
  )
}
