import { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './CardPizza.css';
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/ShoppingCartContext';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

import ahumada from "../../assets/img/ahumada.jpg";
import cebolla from "../../assets/img/cebolla.jpg";
import jamon from "../../assets/img/jamon.jpg";
import mozzarella from "../../assets/img/mozzarella.jpg";
import napolitana from "../../assets/img/napolitana.jpg";
import provolone from "../../assets/img/provolone.jpg";
import roquefort from "../../assets/img/roquefort.jpg";

function CardPizza() {
  const [data, setData] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'Menu');

      try {
        const querySnapshot = await getDocs(queryCollection);
        const newData = querySnapshot.docs.map((menu) => ({
          id: menu.id,
          ...menu.data()
        }));
        setData(newData);
      } catch (error) {
        console.log('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (id) => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        const pizza = data.find((item) => item.id === id);
        if (pizza) {
          return [...currItems, { id, quantity: 1, price: pizza.price }];
        }
      }
      return currItems;
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const getPizzaImage = (imgUrl) => {
    switch (imgUrl) {
      case 'ahumada.jpg':
        return ahumada;
      case 'cebolla.jpg':
        return cebolla;
      case 'jamon.jpg':
        return jamon;
      case 'mozzarella.jpg':
        return mozzarella;
      case 'napolitana.jpg':
        return napolitana;
      case 'provolone.jpg':
        return provolone;
      case 'roquefort.jpg':
        return roquefort;
      default:
        return "";
    }
  };

  return (
    <div className="custom-card-container">
      {data.map((pizza) => (
        <Card className={`custom-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`} key={pizza.id}>
          <Card.Img variant="top" src={getPizzaImage(pizza.imgUrl)} />
          <Card.Body className="card-body">
            <Card.Title>{pizza.product}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{pizza.description}</ListGroup.Item>
            <ListGroup.Item>${pizza.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body className="card-footer">
            {getQuantityById(pizza.id) > 0 && <div className="quantity">{getQuantityById(pizza.id)}</div>}
            {getQuantityById(pizza.id) === 0 ? (
              <Button variant="primary" onClick={() => addToCart(pizza.id)}>
                Agregar al carrito
              </Button>
            ) : (
              <>
                <Button variant="primary" onClick={() => addToCart(pizza.id)}>
                  +
                </Button>
                <Button variant="primary" onClick={() => removeItem(pizza.id)}>
                  -
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPizza;
