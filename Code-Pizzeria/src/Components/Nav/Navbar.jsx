import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
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
          <Nav.Link><Link to="/"><li>Inicio</li></Link></Nav.Link>
          <Nav.Link><Link to="/history"><li>Historia</li></Link></Nav.Link>
          <Nav.Link><Link to="/menu"><li>Menu</li></Link></Nav.Link>
          <Nav.Link><Link to="/contact"><li>Contacto</li></Link></Nav.Link>
          <Nav.Link><Link to="/cart"><AiOutlineShoppingCart/></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarPizza;