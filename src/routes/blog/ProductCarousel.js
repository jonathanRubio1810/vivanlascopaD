import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

// Importa las imágenes de tus productos
import productImage from "../../assets/images/catalogo/0X4A2101.jpg";
import productImage2 from "../../assets/images/catalogo/0X4A2102.jpg";
import productImage3 from "../../assets/images/catalogo/0X4A2118.jpg";
import productImage4 from "../../assets/images/catalogo/0X4A2119.jpg";
import productImage5 from "../../assets/images/catalogo/0X4A2139.jpg";
import productImage6 from "../../assets/images/catalogo/0X4A2185.jpg";
import productImage7 from "../../assets/images/catalogo/0X4A2186.jpg";
import productImage8 from "../../assets/images/catalogo/0X4A2198.jpg";
import productImage9 from "../../assets/images/catalogo/0X4A2205.jpg";
import productImage10 from "../../assets/images/catalogo/biciroja.jpeg";

const ProductCarousel = () => {
  const products = [
    { id: 1, name: "Libreta Pop-in Sirena", price: "$100", description: "Libreta ideal para regreso a clases", image: productImage },
    { id: 2, name: "Libreta Pop-in Auto", price: "$120", description: "Libreta ideal para regreso a clases", image: productImage2 },
    { id: 3, name: "Tupper transparente", price: "$80", description: "Indispensable para el orden del hogar", image: productImage3 },
    { id: 4, name: "Tupper rosa transparente", price: "$90", description: "Indispensable para el orden del hogar", image: productImage4 },
    { id: 5, name: "Paquete de colores", price: "$110", description: "Ideal para el regreso a clases", image: productImage5 },
    { id: 6, name: "Figura Robot de 1576 piezas", price: "$1199", description: "Diversión que los niños pueden construir", image: productImage6 },
    { id: 7, name: "Figura Robot de 1630 piezas", price: "$1199", description: "Diversión que los niños pueden construir", image: productImage7 },
    { id: 8, name: "Carreta color negro", price: "$130", description: "Para transportar tus objetos a donde sea", image: productImage8 },
    { id: 9, name: "Mesa larga para eventos", price: "$75", description: "Ideal para fiestas y eventos grandes", image: productImage9 },
    { id: 10, name: "Bicicleta roja", price: "$150", description: "Diversión y ejercicio unidos en un producto", image: productImage10 }
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className=" ">
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
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item mx-1"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className=" flex h-full transform flex-col items-center justify-between overflow-hidden rounded border-2 border-[#4dd49c] bg-[#0B0A09] shadow-lg transition duration-500 hover:shadow-2xl md:m-4"
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
  );
};

export default ProductCarousel;

