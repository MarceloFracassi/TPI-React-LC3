import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import images from "../../constants/images"
//NO HACE NADA ///
function CardPizza() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={images.ahumada} />
      <Card.Body>
        <Card.Title>Pizza Ahumada</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Pizza casera, fina y crocante, con salsa de tomate y muzzarella ahumada</ListGroup.Item>
        <ListGroup.Item>$2500</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Agregar al carrito</Button>
        {/*<Button variant='primary' type='number'></Button>*/}
      </Card.Body>
    </Card>
  );
}

export default CardPizza;
