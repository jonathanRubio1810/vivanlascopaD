import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons'; // Assuming this is the Mercado Libre icon
import { Tooltip } from 'react-tooltip';

const Card = styled.div`
  width: 80%;
  max-width: 250px;
  height: 350px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  color: #333333;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: ${props => (props.isHovered ? 'translateY(-5px)' : 'translateY(0)')};
  box-shadow: ${props => (props.isHovered ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.1)')};
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 200px;
    height: 300px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px; /* Tamaño fijo para el contenedor de la imagen */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px; /* Añadir margen inferior para espacio adicional */

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen cubra el contenedor sin distorsionarse */
`;

const InfoContainer = styled.div`
  text-align: left;
  overflow: hidden;
  flex: 1;
  font-family: 'Grotesk', monospace;
`;

const Title = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Grotesk', monospace;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Price = styled.p`
  font-size: 1.5em;
  color: #00a650;
  font-weight: bold;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Grotesk', monospace;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 60px; /* Ajustar el tamaño máximo de la descripción */
    font-family: 'Grotesk', monospace;

  @media (max-width: 768px) {
    font-size: 0.8em;
    max-height: 45px; /* Ajustar el tamaño máximo de la descripción en dispositivos pequeños */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; /* Centrar los botones horizontalmente */
  gap: 10px; /* Añadir espacio entre los botones */
`;

const IconButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  & > svg {
    width: 20px; /* Ajustar el tamaño del icono */
    height: 20px;
  }
`;

const ProductCard = ({ image, title, price, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Price>{price}</Price>
        <Description>{description}</Description>
        <ButtonContainer>
          <IconButton data-tooltip-id="amazonTip">
            <FontAwesomeIcon icon={faAmazon} size="lg" />
          </IconButton>
          <Tooltip id="amazonTip" place="top" effect="solid">
            Ir a amazon.com
          </Tooltip>

          <IconButton data-tooltip-id="mercadoLibreTip">
            <FontAwesomeIcon icon={faStore} size="lg" />
          </IconButton>
          <Tooltip id="mercadoLibreTip" place="top" effect="solid">
            Ir a mercadolibre.com
          </Tooltip>
        </ButtonContainer>
      </InfoContainer>
    </Card>
  );
};

export default ProductCard;

