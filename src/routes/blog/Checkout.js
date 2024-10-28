import React, { useState } from 'react';
import './Checkout.css';
import { FaCcVisa, FaCcMastercard, FaPaypal, FaUniversity, FaMoneyCheckAlt } from 'react-icons/fa'; // Importar icono para OpenPay
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importar framer-motion
import OpenPay from 'openpay-js'; // Importar OpenPay

const stripePromise = loadStripe('pk_test_51Pg7UNRxSlefJ6aqsekpDdziv5oiyX4xA3Wa9DklrdqeQJKHncVK2RefKA1WwCkDuNmudVE8cvE9iLUC7vesP1Xj00pnOPXZpU');

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      alert('Pago realizado con éxito');
      setLoading(false);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#f8f8f8',
        backgroundColor: '#1a1a1a',
        iconColor: '#f8f8f8',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#888',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={cardStyle} />
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Procesando...' : `Pagar $${totalPrice.toFixed(2)}`}
      </button>
    </form>
  );
};

const BankTransferInstructions = ({ totalPrice }) => {
  return (
    <div className="bank-transfer-instructions">
      <h3>Instrucciones de Transferencia Bancaria</h3>
      <p>Por favor, realiza una transferencia bancaria a la siguiente cuenta:</p>
      <ul>
        <li><strong>Banco:</strong> Nombre del Banco</li>
        <li><strong>Cuenta:</strong> 1234567890</li>
        <li><strong>Clave:</strong> 012345678901234567</li>
        <li><strong>Monto:</strong> ${totalPrice.toFixed(2)}</li>
      </ul>
      <p>Una vez realizada la transferencia, por favor envíanos un correo a <a href="mailto:correo@empresa.com">correo@empresa.com</a> con el comprobante de pago.</p>
    </div>
  );
};

const OpenPayForm = ({ totalPrice }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const deviceSessionId = OpenPay.deviceData.setup("openpay-form", "mks1hvlkd4z7c40uttrb", "pk_016dbb7773814feca27b69437476676e");
    const cardData = {
      holder_name: event.target.cardHolder.value,
      card_number: event.target.cardNumber.value,
      expiration_month: event.target.expirationMonth.value,
      expiration_year: event.target.expirationYear.value,
      cvv2: event.target.cvv.value,
    };

    OpenPay.token.create(cardData, (response) => {
      alert('Pago realizado con éxito');
      setLoading(false);
    }, (errorResponse) => {
      setError(errorResponse.data.description);
      setLoading(false);
    });
  };

  return (
    <div className="openpay-form-container">
      <h3>Formulario de Pago OpenPay</h3>
      <form onSubmit={handleSubmit} id="openpay-form">
        <input type="text" name="cardHolder" placeholder="Nombre en la tarjeta" required />
        <input type="text" name="cardNumber" placeholder="Número de la tarjeta" required />
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" name="expirationMonth" placeholder="Mes de expiración (MM)" required />
          <input type="text" name="expirationYear" placeholder="Año de expiración (YY)" required />
        </div>
        <input type="text" name="cvv" placeholder="CVV" required />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Procesando...' : `Pagar $${totalPrice.toFixed(2)}`}
        </button>
      </form>
    </div>
  );
};

const Checkout = ({ cart, totalPrice }) => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  return (
    <motion.div
      className="checkout-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="checkout-left">
        <h2>Resumen del Carrito</h2>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => navigate('/product/details')}>Volver al catalogo</button>
      </div>
      <div className="checkout-right">
        <div className="payment-methods">
          <h3>Seleccionar Método de Pago</h3>
          <div className="payment-options">
            <div
              className={`payment-option ${selectedPayment === 'credit-card' ? 'selected' : ''}`}
              onClick={() => handlePaymentSelection('credit-card')}
            >
              <FaCcVisa />
              <FaCcMastercard />
              <span>Tarjeta de Crédito/Débito</span>
            </div>
            <div
              className={`payment-option ${selectedPayment === 'paypal' ? 'selected' : ''}`}
              onClick={() => handlePaymentSelection('paypal')}
            >
              <FaPaypal />
              <span>PayPal</span>
            </div>
            <div
              className={`payment-option ${selectedPayment === 'bank-transfer' ? 'selected' : ''}`}
              onClick={() => handlePaymentSelection('bank-transfer')}
            >
              <FaUniversity />
              <span>Transferencia Bancaria</span>
            </div>
            <div
              className={`payment-option ${selectedPayment === 'openpay' ? 'selected' : ''}`}
              onClick={() => handlePaymentSelection('openpay')}
            >
              <FaMoneyCheckAlt />
              <span>OpenPay</span>
            </div>
          </div>
          {selectedPayment === 'credit-card' && (
            <Elements stripe={stripePromise}>
              <CheckoutForm totalPrice={totalPrice} />
            </Elements>
          )}
          {selectedPayment === 'bank-transfer' && (
            <BankTransferInstructions totalPrice={totalPrice} />
          )}
          {selectedPayment === 'openpay' && (
            <OpenPayForm totalPrice={totalPrice} />
          )}
          {selectedPayment !== 'credit-card' && selectedPayment !== 'bank-transfer' && selectedPayment !== 'openpay' && (
            <>
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <button onClick={() => alert('Compra realizada!')} disabled={!selectedPayment}>
                Realizar Compra
              </button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;