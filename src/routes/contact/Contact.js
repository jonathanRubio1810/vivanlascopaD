import React, { useEffect } from "react";
import { motion } from "framer-motion";
import imagen4 from "../../assets/images/servicio/Imagen4.jpg"; // Importa la imagen
import img6 from "../../assets/images/servicio/img6.jpg"; 

const Contact = () => {
  useEffect(() => {
    document.title = "MarketConnect";

  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <section className="banner"></section>
      <section className="info-section py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold flex justify-center text-navyblue-500">Reseña de la empresa</h1>
            <p className="text-white font-bold text-justify">
            En la actualidad, las redes sociales están inundadas de diferentes personalidades que ofrecen consejos sobre cómo importar desde China. Sin embargo, en nuestra experiencia, hemos descubierto que estos consejos no son suficientes para lograr una importación exitosa. Muchas veces, estos "expertos" proporcionan información engañosa, generando confianza en los compradores, pero a medida que realizas tus compras y cotizaciones, te das cuenta de que la realidad es muy diferente. Puede que tu capital no sea
             suficiente o que te cobren honorarios excesivos que no tienen ninguna relación con tu importación.
            </p>
            <p className="text-white font-bold text-justify">
            MarketConnect no es una empresa diseñada simplemente para enseñar. Somos una empresa dedicada a ayudar y colaborar estrechamente con nuestros clientes como socios. 
            Nos enorgullece ver a nuestros clientes alcanzar sus metas y, sobre todo, generar utilidades.
            </p>
            <p className="text-white font-bold text-justify">
            En MarketConnect, te brindamos apoyo en todas las etapas de tu importación desde China. Te ayudamos a realizar compras inteligentes, identificando los productos que puedes adquirir de acuerdo a tu presupuesto. Además, mantenemos una comunicación constante contigo, proporcionándote información sobre la entrega de tus productos 
            a la bodega y asegurándonos de que la calidad sea la esperada.
            </p>
          </div>
        </div>
      </section>
      <section className="values">
        <img src={img6} alt="Nuestros Valores" className="values-img" />
        <div className="values-content">
        <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-blue-500">Nuestros valores</h1>
        <p className="text-white font-bold text-justify">Puedes añadir más contenido aquí si lo necesitas.</p>
        </div>
      </section>
      <section className="providers">
        <div className="providers-content">
        <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-blue-500">Nuestros proveedores</h1>
        <p className="text-white font-bold text-justify">
            Contamos con una amplia red de proveedores confiables en China. Nos encargamos de investigar y seleccionar a los proveedores adecuados para tus necesidades, asegurándonos de su reputación, calidad de productos y confiabilidad.
          </p>
        </div>
        <img src={imagen4} alt="Nuestros Proveedores" className="providers-img" />
      </section>
     
    </motion.main>
  );
};

export default Contact;