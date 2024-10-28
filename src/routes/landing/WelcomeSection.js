import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Banner from './Banner';

const WelcomeSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <><Banner></Banner>
      <motion.article
        className="welcome-section"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
       <div className='py-24 text-center'>
    <article>
      <h1 className='md:text-5xl text-4xl pb-6 font-semibold text-medium-turquoise'>¿Por qué con nosotros?</h1>
    </article>
    <div className='grid gap-6 mt-4 px-4 md:px-12 md:grid-cols-2'>
      {/* Primer artículo */}
      <article className='space-y-4 md:mx-8'>
        <div className='bg-white rounded-full font-bold flex items-center shadow-md hover:shadow-lg transition-shadow duration-300'>
          <span className='bg-medium-turquoise text-dark-charcoal px-7 rounded-full py-4 m-3'>01</span>
          <span className='flex-1 text-xl p-2 text-gray-700'>Te apoyamos en todas las etapas de tu importación desde China.</span>
        </div>
        <p className='text-white text-left'>
          Te ayudamos a realizar compras inteligentes, identificando los productos que puedes adquirir de acuerdo a tu presupuesto. Además, mantenemos una comunicación constante contigo, proporcionándote información sobre la entrega de tus productos a la bodega y asegurándonos de que la calidad sea la esperada.
        </p>
      </article>
      {/* Segundo artículo */}
      <article className='space-y-4 md:mx-8'>
        <div className='bg-white rounded-full font-bold flex items-center shadow-md hover:shadow-lg transition-shadow duration-300'>
          <span className='bg-medium-turquoise text-dark-charcoal px-7 rounded-full py-4 m-3'>02</span>
          <span className='flex-1 text-xl p-2 text-gray-700'>La gestión completa de la importación de tus productos.</span>
        </div>
        <p className='text-white text-left'>
          Desde el proveedor en China hasta la puerta de tu casa. Contamos con una amplia red de empresas marítimas que se adaptan a diferentes presupuestos, así como agentes aduanales profesionales que cumplen estrictamente con las leyes mexicanas para garantizar un despacho eficiente de tus mercancías.
        </p>
      </article>
    </div>
  </div>
      </motion.article></>
  );
}

export default WelcomeSection;
