import React, { useContext } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';


const  Cart= () => {
  
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce ((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce ((acc, curr) => {
    return acc + curr.quantity * curr.prize;
  }, 0);

  return (
    <div>
      <div>Pizzas en el carrito: {quantity}</div>
      <div>Precio Total: ${totalPrice}</div>
      <button onClick={() => console.log(cart)}>Comprar ahora</button>
    </div>
  );
};

export default Cart;