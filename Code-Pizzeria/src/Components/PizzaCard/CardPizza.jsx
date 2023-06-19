import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './CardPizza.css';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/ShoppingCartContext';

function CardPizza({id ,name, description, prize, imgUrl}) {
  
  const { isDarkMode } = useContext(ThemeContext);
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound){
        return currItems.map((item) => {
            if (item.id === id){
                return {...item, quantity: item.quantity + 1};
            } else {
                return item;              }
          });
      } else {
          return [...currItems, {id, quantity: 1, prize}];
        }
    });
  }

  const removeItem = (id) => {
      setCart((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1 ){
            return currItems.filter ((item) => item.id !== id);
        } else {
            return currItems.map((item) => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1};
                } else {
                    return item;
                  }
            })    
          }
      });
  }

  const getQuantityById = (id) => {
      return cart.find((item) => item.id === id)?.quantity || 0;
    };

  const quantityPerItem = getQuantityById(id);
  

  return (
    
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
    <Card className="custom-card">
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body className="card-body">
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{description}</ListGroup.Item>
        <ListGroup.Item>${prize}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card-body">
        <>
          {
              quantityPerItem > 0 && (
                  <div>{quantityPerItem}</div>
          )}
          
          {quantityPerItem === 0 ? (
              <Button variant="primary" onClick={() => addToCart()}>
                  Agregar al carrito
              </Button>
          ) : (
              <Button variant="primary" onClick={() => addToCart()}>
                  Agregar más
              </Button>
          )}

          {
              quantityPerItem > 0 && (
                  <Button variant="primary" onClick={() => removeItem(id)}>
                      Eliminar Pizza
                  </Button>
              )
          }
        </>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardPizza;