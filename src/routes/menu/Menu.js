import React from "react";
import { motion } from "framer-motion";


import image1 from '../../assets/images/servicio/Imagen1.jpg';
import image2 from '../../assets/images/servicio/Imagen2.jpg';
import image3 from '../../assets/images/servicio/Imagen3.jpg';
import image4 from '../../assets/images/servicio/Imagen4.jpg';
import image5 from '../../assets/images/servicio/Imagen5.jpg';
import image6 from '../../assets/images/servicio/Imagen6.jpg';
import image7 from '../../assets/images/servicio/Imagen7.jpg';

const services = [
  {
    title: "Asesoramiento",
    description: "Te brindamos orientación experta para ayudarte a realizar compras inteligentes en China. Evaluamos tus necesidades, presupuesto y requisitos específicos, y te proporcionamos recomendaciones sobre los productos que puedes adquirir.",
    imageUrl: image1
  },
  {
    title: "Gestión Integral",
    description: "Nos encargamos de toda la gestión de tu importación, desde el proveedor en China hasta la entrega en tu bodega o domicilio. Coordinamos el transporte, el despacho aduanal y nos aseguramos de que tus mercancías lleguen de manera eficiente y segura.",
    imageUrl: image2
  },
  {
    title: "Selección",
    description: "Contamos con una amplia red de proveedores confiables en China. Nos encargamos de investigar y seleccionar a los proveedores adecuados para tus necesidades, asegurándonos de su reputación, calidad de productos y confiabilidad.",
    imageUrl: image3
  },
  {
    title: "Control",
    description: "Realizamos un estricto control de calidad para asegurarnos de que los productos que importas cumplan con los estándares y especificaciones requeridas. Realizamos inspecciones en fábrica y evaluamos la calidad antes del envío.",
    imageUrl: image4
  },
  {
    title: "Logística",
    description: "Facilitamos el transporte de tus productos desde China hasta tu ubicación final. Trabajamos con diferentes empresas marítimas y terrestres para ofrecerte opciones de transporte que se ajusten a tus necesidades y presupuesto.",
    imageUrl: image5
  },
  {
    title: "Despacho Aduanal",
    description: "Nos encargamos del proceso de despacho aduanal, asegurándonos de que tus mercancías cumplan con todas las regulaciones y requisitos aduaneros. Trabajamos con agentes aduanales profesionales para garantizar un despacho eficiente y sin contratiempos.",
    imageUrl: image6
  },
  {
    title: "Seguro de Carga",
    description: "Protegemos tu inversión y tranquilidad mediante el aseguramiento de tus mercancías durante el transporte. Ofrecemos opciones de seguro internacional para cubrir cualquier eventualidad que pueda ocurrir durante el traslado.",
    imageUrl: image7
  }
];

const Menu = () => {
  return (
    <motion.main

      className="menu-main p-4 bg-[#000000] text-white min-h-screen w-full"
      initial={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: 1, translateX: 0 }}

      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[92vh]">
        <img
          className="w-full h-full object-cover rounded-b-[300px] opacity-60"
          src={image4}
          alt="Banner"
        />
      </div>

      <section className="info-section py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">

          <img src={image3} className="w-full max-w-sm rounded-lg" alt="Asesoramiento" />
          <div className="text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-orange-500">Servicios</h1>
            <p className="text-white font-bold text-justify">

              MarketConnect ofrece una amplia gama de servicios para facilitar y optimizar tu proceso de importación desde China. Aquí están los principales servicios que podemos ofrecerte:
            </p>
          </div>
        </div>
      </section>

      <section className="services-section py-12 bg-transparent text-white">
        <h2 className="text-3xl sm:text-4xl mb-4 font-bold text-blue-500 text-center">Nuestros servicios</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              className="relative service-card bg-black bg-opacity-50 rounded-lg p-4 shadow-lg w-full sm:w-80 md:w-96 overflow-hidden group transition-all duration-300 hover:w-80 hover:p-6"
              key={index}
            >
              <div
                className="service-image w-full h-32 bg-cover bg-center rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.imageUrl})` }}

                aria-label={service.title}

              ></div>
              <h3 className="text-xl mb-2 font-bold text-blue-500 text-center">{service.title}</h3>
              <p className="font-bold text-center text-sm max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section py-12 bg-transparent text-white">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-6">

          <div className="w-full md:w-1/2 h-72 md:h-96 bg-cover bg-center rounded-lg mb-6 md:mb-0" style={{ backgroundImage: `url(${image3})` }} aria-label="Servicios adicionales"></div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-blue-500">Solicita nuestros servicios</h1>
            <p className="text-lg mb-4 font-bold">
              Nuestro servicio incluye la gestión completa de la importación de tus productos, desde el proveedor en China hasta la puerta de tu casa. Contamos con una amplia red de empresas marítimas que se adaptan a diferentes presupuestos.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Solicitar</button>

          </div>
        </div>
      </section>

      <section className="start-importing-section py-12 bg-transparent text-white">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-6">

          <div className="w-full md:w-1/2 h-72 md:h-96 bg-cover bg-center rounded-lg mb-6 md:mb-0" style={{ backgroundImage: `url(${image1})` }} aria-label="Comienza a importar"></div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4">¡Comienza a importar ya!</h1>
            <p className="text-lg mb-4 font-bold">Te brindamos orientación experta para ayudarte a realizar compras inteligentes en China.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Comienza</button>

          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Menu;
