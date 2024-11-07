import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products/mercadolibre-products");
        setProducts(response.data);
      } catch (err) {
        setError("Error al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  if (loading) return <div className="text-center p-4">Cargando productos...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 600ms ease-in-out"
        transitionDuration={600}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item p-2"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-between h-full max-w-xs overflow-hidden rounded-lg border border-[#4dd49c] bg-[#1E1E1E] shadow-md transition-shadow duration-300 hover:shadow-lg"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-48 object-cover rounded-t-lg"
              src={product.imageUrl || "https://via.placeholder.com/300"}
              alt={product.name}
            />
            <div className="p-4 flex flex-col items-start">
              <h2 className="text-lg font-bold text-white mb-2">{product.name}</h2>
              <p className="text-sm text-gray-400 mb-2">{product.description || "Sin descripción"}</p>
              <p className="text-md font-semibold text-[#4dd49c] mb-4">${product.price}</p>
              <Link to={product.permalink} target="_blank" className="w-full">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded bg-[#4dd49c] px-4 py-2 font-bold text-dark-charcoal transition duration-300 hover:bg-[#37a97b]"
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
