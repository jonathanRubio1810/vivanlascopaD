import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import styled from 'styled-components';

// Importa las imágenes de tus productos
import img1 from '../../assets/images/contact-us/0X4A2101.jpg';
import img2 from '../../assets/images/contact-us/0X4A2102.jpg';
import img3 from '../../assets/images/contact-us/0X4A2103.jpg';
import img4 from '../../assets/images/contact-us/0X4A2104.jpg';
import img5 from '../../assets/images/contact-us/0X4A2105.jpg';
import img6 from '../../assets/images/contact-us/0X4A2107.jpg';

const products = [
  { id: 1, name: "Libreta Pop-it Sirena", price: "$91.90", description: "Libreta ideal para regreso de clases y amantes de sirenas.", image: img1 },
  { id: 2, name: "Libreta Pop-it Auto", price: "$91.90", description: "Libreta ideal para regreso de clases y amantes de los autos.", image: img2 },
  { id: 3, name: "Libreta Pop-it Helado", price: "$91.90", description: "Libreta ideal para regreso de clases y amantes de los helados.", image: img3 },
  { id: 4, name: "Libreta Pop-it Unicornio", price: "$91.90", description: "Libreta ideal para regreso de clases y amantes de los unicornios.", image: img4 },
  { id: 5, name: "Libreta Pop-it Corazón", price: "$91.90", description: "Libreta ideal para regreso de clases y que irradia amor.", image: img5 },
  { id: 6, name: "Libreta Pop-it Cohete", price: "$91.90", description: "Libreta ideal para regreso de clases y amantes del espacio.", image: img6 },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

const CustomLeftArrow = ({ onClick }) => {
  return (
    <PrevButton onClick={onClick}>
      {"<"}
    </PrevButton>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <NextButton onClick={onClick}>
      {">"}
    </NextButton>
  );
};

const ContactUsLanding = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "4em" }}>Ofertas</h1>
      <div className="carousel-container">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item mx-1"
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex h-full transform flex-col items-center justify-between overflow-hidden border-2 border-[#4dd49c] bg-[#0B0A09] shadow-lg transition duration-500 hover:shadow-2xl md:m-4"
              style={{ minWidth: "300px", maxWidth: "300px", width: "100%" }}
            >
              <div className="px-6 py-6">
                <div className="mb-2 text-xl font-bold text-[#FFFFFF]">
                  {product.name}
                </div>
              </div>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-48 w-full object-cover"
                src={product.image}
                alt={product.name}
                style={{ borderRadius: "0" }} // Quitar bordes redondeados solo a la imagen
              />
              <div className="px-6 py-4">
                <p className="text-base text-[#FFFFFF]">{product.description}</p>
                <p className="text-md text-[#FFFFFF]">{product.price}</p>
              </div>
              <div className="w-full px-6 pb-5">
                <Link to="#" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mt-2 block w-full transform rounded bg-gray-300 px-4 py-2 font-bold text-dark-charcoal transition duration-500 hover:scale-110 hover:bg-[#4dd49c]"
                  >
                    Ver en Mercado Libre
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContactUsLanding;
