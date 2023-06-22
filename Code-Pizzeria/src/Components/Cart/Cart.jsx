import React, { useContext, useMemo, useState } from 'react';
import { CartContext } from '../Context/ShoppingCartContext';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [isPurchased, setIsPurchased] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [showCardForm, setShowCardForm] = useState(false);

  const { quantity, totalPrice } = useMemo(() => {
    const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.prize, 0);

    return { quantity, totalPrice };
  }, [cart]);

  const handlePurchase = () => {
    const validationErrors = {};

    if (quantity === 0) {
      validationErrors.quantityError = 'Debes seleccionar al menos una pizza.';
    }

    if (paymentMethod === '') {
      validationErrors.paymentMethodError = 'Debes seleccionar el método de pago.';
    }

    if (deliveryOption === '') {
      validationErrors.deliveryOptionError = 'Debes seleccionar la opción de entrega.';
    }

    if (deliveryOption === 'domicilio' && deliveryAddress === '') {
      validationErrors.deliveryAddressError = 'Debes ingresar la dirección de entrega.';
    }

    if (paymentMethod === 'tarjeta') {
      if (cardData.cardNumber === '') {
        validationErrors.cardNumberError = 'Debes ingresar el número de tarjeta.';
      }
      if (cardData.cardHolder === '') {
        validationErrors.cardHolderError = 'Debes ingresar el titular de la tarjeta.';
      }
      if (cardData.expirationDate === '') {
        validationErrors.expirationDateError = 'Debes ingresar la fecha de vencimiento.';
      }
      if (cardData.cvv === '') {
        validationErrors.cvvError = 'Debes ingresar el CVV.';
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsPurchased(true);
    setCart([]);
    setPaymentMethod('');
    setDeliveryOption('');
    setDeliveryAddress('');
    setCardData({
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: '',
    });
    setErrors({});
    setShowCardForm(false);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setShowCardForm(e.target.value === 'tarjeta');
  };

  return (
    <div>
      {!isPurchased ? (
        <>
          {quantity > 0 ? (
            <div className="cart-form">
              <div>Pizzas en el carrito: {quantity}</div>
              <div>Precio Total: ${totalPrice}</div>

              <div className="form-row">
                <label htmlFor="paymentMethod">Método de pago:</label>
                <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
                  <option value="">Seleccionar</option>
                  <option value="efectivo">Efectivo</option>
                  <option value="tarjeta">Tarjeta</option>
                </select>
                {errors.paymentMethodError && <span className="error-message">{errors.paymentMethodError}</span>}
              </div>

              <div className="form-row">
                <label htmlFor="deliveryOption">Opción de entrega:</label>
                <select id="deliveryOption" value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)}>
                  <option value="">Seleccionar</option>
                  <option value="takeaway">Take Away</option>
                  <option value="domicilio">Domicilio</option>
                </select>
                {errors.deliveryOptionError && <span className="error-message">{errors.deliveryOptionError}</span>}
              </div>

              {deliveryOption === 'domicilio' && (
                <div className="form-row">
                  <label htmlFor="deliveryAddress">Dirección de entrega:</label>
                  <input
                    type="text"
                    id="deliveryAddress"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                  />
                  {errors.deliveryAddressError && <span className="error-message">{errors.deliveryAddressError}</span>}
                </div>
              )}

              {showCardForm && (
                <div>
                  <h3>Datos de la tarjeta:</h3>
                  <div className="form-row">
                    <label htmlFor="cardNumber">Número de tarjeta:</label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={cardData.cardNumber}
                      onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                    />
                    {errors.cardNumberError && <span className="error-message">{errors.cardNumberError}</span>}
                  </div>
                  <div className="form-row">
                    <label htmlFor="cardHolder">Titular de la tarjeta:</label>
                    <input
                      type="text"
                      id="cardHolder"
                      value={cardData.cardHolder}
                      onChange={(e) => setCardData({ ...cardData, cardHolder: e.target.value })}
                    />
                    {errors.cardHolderError && <span className="error-message">{errors.cardHolderError}</span>}
                  </div>
                  <div className="form-row">
                    <label htmlFor="expirationDate">Fecha de vencimiento:</label>
                    <input
                      type="text"
                      id="expirationDate"
                      value={cardData.expirationDate}
                      onChange={(e) => setCardData({ ...cardData, expirationDate: e.target.value })}
                    />
                    {errors.expirationDateError && <span className="error-message">{errors.expirationDateError}</span>}
                  </div>
                  <div className="form-row">
                    <label htmlFor="cvv">CVV:</label>
                    <input
                      type="text"
                      id="cvv"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                    />
                    {errors.cvvError && <span className="error-message">{errors.cvvError}</span>}
                  </div>
                </div>
              )}

              <button onClick={handlePurchase}>Comprar ahora</button>
            </div>
          ) : (
            <div className="empty-cart">
              <p>No hay pizzas en el carrito. ¡Agrega algunas deliciosas pizzas para comprar!</p>
            </div>
          )}
        </>
      ) : (
        <div className="purchase-message">
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu pedido ha sido procesado correctamente.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
