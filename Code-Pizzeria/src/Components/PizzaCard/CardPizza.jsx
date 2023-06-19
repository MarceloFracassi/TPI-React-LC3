import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './CardPizza.css';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function CardPizza({name, description, prize, image}) {
  
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <Card className="custom-card">
      <Card.Img variant="top" src={image} />
      <Card.Body className="card-body">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item>${prize}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card-body">
        <Button variant="primary">Agregar al carrito</Button>
        {/*<Button variant='primary' type='number'></Button>*/}
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardPizza;



// import images from "../../constants/images"