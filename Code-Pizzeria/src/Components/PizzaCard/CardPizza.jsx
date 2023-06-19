import React from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './CardPizza.css';
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/ShoppingCartContext';

// Importa las imágenes de las pizzas
import ahumada from "../../assets/img/ahumada.jpg";
import cebolla from "../../assets/img/cebolla.jpg";
import jamon from "../../assets/img/jamon.jpg";
import mozzarella from "../../assets/img/mozzarella.jpg";
import napolitana from "../../assets/img/napolitana.jpg";
import provolone from "../../assets/img/provolone.jpg";
import roquefort from "../../assets/img/roquefort.jpg";

function CardPizza({ id, product, description, prize, imgUrl }) {
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

  // Función para obtener la ruta de la imagen según la URL
  const getPizzaImage = (imgUrl) => {
    switch (imgUrl) {
      case "./img/ahumada.jpg":
        return ahumada;
      case "./img/cebolla.jpg":
        return cebolla;
      case "./img/jamon.jpg":
        return jamon;
      case "./img/mozzarella.jpg":
        return mozzarella;
      case "./img/napolitana.jpg":
        return napolitana;
      case "./img/provolone.jpg":
        return provolone;
      case "./img/roquefort.jpg":
        return roquefort;
      default:
        return ""; // O devuelve una imagen por defecto si no hay ninguna coincidencia
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Card className="custom-card">
        <Card.Img variant="top" src={getPizzaImage(imgUrl)} />
        <Card.Body className="card-body">
          <Card.Title>{product}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{description}</ListGroup.Item>
          <ListGroup.Item>${prize}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="card-body">
          <>
            {quantityPerItem > 0 && <div>{quantityPerItem}</div>}

            {quantityPerItem === 0 ? (
              <Button variant="primary" onClick={() => addToCart()}>
                Agregar al carrito
              </Button>
            ) : (
              <Button variant="primary" onClick={() => addToCart()}>
                Agregar más
              </Button>
            )}

            {quantityPerItem > 0 && (
              <Button variant="primary" onClick={() => removeItem(id)}>
                Eliminar Pizza
              </Button>
            )}
          </>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardPizza;
