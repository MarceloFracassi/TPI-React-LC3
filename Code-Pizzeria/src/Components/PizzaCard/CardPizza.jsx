import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// import images from "../../constants/images"

function CardPizza({name, description, prize, image}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item>{prize}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Agregar al carrito</Button>
        {/*<Button variant='primary' type='number'></Button>*/}
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
