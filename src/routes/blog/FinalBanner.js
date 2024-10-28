import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faShieldAlt, faHeadset } from "@fortawesome/free-solid-svg-icons";

const FinalBanner = () => {
  const banners = [
    {
      id: 1,
      icon: faCreditCard,
      text: "Elige cómo pagar\nPaga con tarjeta, débito o efectivo."
    },
    {
      id: 2,
      icon: faShieldAlt,
      text: "Seguridad, de principio a fin\n¿No te gusta? ¡Devuélvelo!."
    },
    {
      id: 3,
      icon: faHeadset,
      text: "Atención al cliente\nEstamos aquí para ayudarte 24/7 con cualquier pregunta o problema que puedas tener. ¡Tu satisfacción es nuestra prioridad!"
    }
  ];

  return (
    <div className="final-banner">
      {banners.map((banner) => (
        <div key={banner.id} className="banner-part">
          <FontAwesomeIcon icon={banner.icon} size="3x" className="fa-icon" />
          <p>{banner.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FinalBanner;
