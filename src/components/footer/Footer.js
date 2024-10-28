import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";
import iconoF from '../../assets/images/socials/facebook.png'
import iconoX from '../../assets/images/socials/twitterW.png'
import iconoI from '../../assets/images/socials/instagram.png'
import iconoT from '../../assets/images/socials/tiktok.png'
import logoW from '../../assets/images/socials/logoMC-w.png'

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="relative bg-black pt-8 ">
  <div class="container mx-auto px-4 text-white">
    <div class="flex flex-wrap text-left ">
      <div class="w-full lg:w-6/12 px-4 ">
      <a href="#" class=" ">
                <img className=''
                src={logoW} alt="" />
            </a>   
        <div class="mt-6 lg:mb-0 ml-2 mb-6 wrapper text-center ">
        <p className='text-xl font-bold ml-2 pb-2 md:text-left text-center'>Redes Sociales</p>
        <div className="flex space-x-4 ml-2 pt-2 mb-5 justify-center md:justify-start">
        <a href="https://www.facebook.com/MarketConnectMexico?mibextid=ZbWKwL" target="_blank"
            className='bg-white rounded-full p-2 shadow-lg shadow-[#14b8a6]'>
              <img src={iconoF} 
                    alt="Ver más" 
                    className="w-6"/> 
          </a>
          <a href="#" target="_blank"
            className='bg-white rounded-full p-2 shadow-lg shadow-[#14b8a6] '>
              <img src={iconoX}
                    alt="Ver más" 
                    className="w-6"/> 
          </a>
          <a href="https://instagram.com/market.connect_?igshid=MzRlODBiNWFlZA=" target="_blank"
            className='bg-white rounded-full p-2 shadow-lg shadow-[#14b8a6]'>
              <img src={iconoI} 
                    alt="Ver más" 
                    className="w-6"/> 
          </a>
          <a href="https://www.tiktok.com/@market_connect?_t=8gFLiPflJ14&_r=1" target="_blank"
            className='bg-white rounded-full p-2 shadow-lg shadow-[#14b8a6]'>
              <img src={iconoT}
                    alt="Ver más" 
                    className="w-6"/> 
          </a>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4 grid-cols-2 md:pt-12">
        <div class="flex ">
          <div class=" lg:w-4/12 px-4 ml-auto ">
            
            <ul class="list-unstyled ">
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Inicio</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Servicios</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Productos</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Importaciones</a>
              </li>
              <li>
                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Acerca de</a>
              </li>
            </ul>
          </div>
          <div className=" wrapper pl-8">
          <div className="mb-4">
          <p className='text-xl font-bold '>Contacto</p>
            <p className='text-sm'>Teléfono: 123 456 789</p>
            <p className='text-sm'>Dirección: 123 Calle Principal</p>
            <p className='text-sm'>Email: example@gmail.com</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <hr class="my-5 border-gray-400"/>
    <div class="flex flex-wrap  md:justify-between justify-center">
      <div class="w-full  px-4 mx-auto ">
      <div className="text-center mb-5 ">
        
        <p className='text-sm text-gray-300 '>&copy; Copyright 2024 MarketConnect. Todos los derechos reservados.</p>
      </div>
      </div>
    </div>
  </div>
</footer>
    );
  }
}
