import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import "./Home.css"
import images from "../../constants/images"

export const Home = () => {
  return (
    <div className='app__home'>
        <div className='app__home-container'>
          <Carousel class="col col-sm-9" className='app__home-carousel'>
            <Carousel.Item interval={5000}>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={images.bgHeader}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={images.cebolla}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={images.napolitana}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
            {/* <Figure>
              <Figure.Caption>
                <strong>Bienvenidos a Marcello & Santino</strong> El clásico sabor italiano. 
                </Figure.Caption>
                <hr />
                <Figure.Image
                  lg={10}
                  width={500}
                  height={700}
                  margin={40}
                  alt="ImageBg"
                  src={images.bgHeader}
                /> 
              </Figure> */}
        </div>
    </div>
  )
}
