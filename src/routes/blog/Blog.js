import React from "react";
import { motion } from "framer-motion";
import TopBar from "./TopBar";
import CarouselBanner from "./CarouselBanner";
import CardSection from "./CardSection";
import ProductCarousel from "./ProductCarousel";
import ImageCardSection from "./ImageCardSection";
import LegendCardSection from "./LegendCardSection";
import FinalBanner from "./FinalBanner"; // Importar el nuevo componente

const Blog = () => {
  return (
    <motion.main
      className="blog"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      
      <CarouselBanner />
      <TopBar />
      <CardSection />
      <ProductCarousel />
      <ImageCardSection />
      <LegendCardSection /> {/* Añadir la nueva sección */}
      <FinalBanner /> {/* Añadir el banner final */}
    </motion.main>
  );
}

export default Blog;
