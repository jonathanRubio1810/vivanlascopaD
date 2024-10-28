import React, { useState } from 'react';

const BankTransferForm = ({ totalPrice, onPaymentSuccess }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmationNumber, setConfirmationNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para validar la transferencia
    // y enviar la información al servidor si es necesario.
    alert('Transferencia confirmada!');
    onPaymentSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="bank-transfer-form">
      <h3>Detalles de la Transferencia Bancaria</h3>
      <p>Realiza la transferencia a la siguiente cuenta:</p>
      <p><strong>Banco:</strong> Tu Banco</p>
      <p><strong>Cuenta:</strong> 1234567890</p>
      <p><strong>Titular:</strong> Tu Empresa</p>
      <div>
        <label>Número de cuenta desde la que realizas la transferencia:</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Número de confirmación de la transferencia:</label>
        <input
          type="text"
          value={confirmationNumber}
          onChange={(e) => setConfirmationNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Confirmar Transferencia</button>
    </form>
  );
};

export default BankTransferForm;
