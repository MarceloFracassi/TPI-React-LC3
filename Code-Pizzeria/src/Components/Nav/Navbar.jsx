import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import images from '../../constants/images'
import {AiOutlineShoppingCart} from "react-icons/ai"

import './Nav.css'

function NavbarPizza() {
  return (
    <>
      <Navbar  expand="lg" className='app__navbar'>
      <Container>
        <Navbar.Brand href="#home"><img src={images.logoLetras} alt="logo-navbar" className='app_navbar_logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="app__navbar-links">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#history">Historia</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#cart"><AiOutlineShoppingCart/></Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarPizza;