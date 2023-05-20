import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPizza() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Marcello & Santino</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#Pedido">Hacer un pedido</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPizza;