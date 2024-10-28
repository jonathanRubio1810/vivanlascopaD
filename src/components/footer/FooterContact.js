import React from 'react'
import Visa from '../../assets/images/payment-methods/visa-icon.svg'
import MasterCard from '../../assets/images/payment-methods/mastercard-icon.svg'
import ApplePay from '../../assets/images/payment-methods/applepay-icon.svg'
import GooglePay from '../../assets/images/payment-methods/googlepay-icon.svg'

export default class FooterContact extends React.Component {
  render() {
    return (
      <section className="footer-contact  flex-container flex-column">
        <h3>Contacto</h3>
        <p>Teléfono: 123 456 789</p>
        <p>Dirección: 123 Calle Principal</p>
        <p>Email: example@gmail.com</p>
      </section>
    )
  }
}
