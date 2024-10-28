import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import image3 from '../../assets/images/servicio/Imagen2.jpg';

const ContactLanding = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ahnbctn', 'template_j9s2t49', form.current, {
        publicKey: '29U2QHAdjeacsjqFn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true); // Mostrar mensaje de éxito
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="flex justify-center">
        <motion.div
          id='contactanos'
          className="bg-gray-300 p-4 m-10 rounded-lg w-2/3 flex flex-col md:flex-row items-center md:justify-center"
        >
          <div className="bg-gray-300 p-4 rounded-lg w-full sm:w-96 text-left">
            <h1 className='text-4xl font-bold text-dark-charcoal '>Contáctanos</h1>
            <p className="text-dark-charcoal pb-4">¿Tienes alguna pregunta o sugerencia? Nos encantaría oírla</p>


            {messageSent && (
              <p className="text-green-600 mb-4 font-semibold">¡Mensaje enviado exitosamente!</p>
            )}

            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3 ">
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-dark-charcoal">Nombre</label>
                <input type="text" id="name" name="user_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nombre completo" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-dark-charcoal">Correo</label>
                <input type="email" id="email" name="user_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="example@gmail.com" required />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block mb-2 text-sm font-semibold text-dark-charcoal">Mensaje</label>
                <textarea id="message" name="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Deja aquí tus dudas..."></textarea>
              </div>
              <div className="flex max-w-md flex-col gap-4 pb-1" id="checkbox">
                <div className="flex items-center gap-2">
                  {/* AGREGAR TERMINOS Y CONDICIONES */}
                </div>
              </div>
              <button type="submit" value="Send" className="buttonG text-md w-full mb-1">Enviar</button>
            </form>
          </div>
          <img src={image3} alt="Imagen a pantalla completa" className="w-full sm:w-5/6 max-w-sm rounded-lg mt-6 md:mt-0 md:ml-6" />
        </motion.div>
      </div>
    </>
  );
}

export default ContactLanding;
