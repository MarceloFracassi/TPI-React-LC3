import React from 'react';
import './Order.css'

//Faltan agregar los items y datos del pedido
const Order = ({ totalPrice, quantityOrder, deliveryOption, deliveryAddress, paymentMethod }) => {
  return (
    <div className="order">
      <h3>Detalle:</h3>
      <div className="total-price">
        <p>Precio total: ${totalPrice}</p>
        <p>Pedido: {quantityOrder} pizzas.</p>
        <p>Opcion: {deliveryOption}</p>
        <p>Domicilio: {deliveryAddress}</p>
        <p>Metodo de Pago: {paymentMethod}</p>
        </div>
    </div>
  );
};

export default Order;

