import videoBanner from '../../assets/images/hero/Imagen1.jpg'
import iconoMas from '../../assets/images/plus.svg';

export const Banner = () => {
    return (
      <div>
        <div className="md:inset-0 opacity-40 ">
          <img className="md:rounded-b-[150px] w-full h-[92vh] object-cover" src={videoBanner}></img>
        </div>
  
        <div
          
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-white text-center"
        >
          <h1 className="text-xl md:text-3xl font-bold">
            ¡Bienvenid@ a <br />
            <h1 className='text-4xl md:text-5xl'>Servicios Logísticos <br />Market Connect!</h1>
          </h1>
          <p className='p-2 pb-6 '>
            Conectamos tu negocio con el mundo
          </p>
  
          <div className='text-center'>
            
              <button className='md:inline-block md:m-2 pb-6'>
                <a className='buttonG' href="#contactanos">Contáctanos</a>
              </button>
            
            
              <button className='md:inline-block md:m-2 p-2'>
                <a className='buttonB'>Ver productos</a>
              </button>
            
          </div>
        </div>
  
        
          <div className="flex justify-center items-center pb-6 animate-bounce">
            <a href="#body" className='bg-white rounded-full p-2 absolute left-1/2 transform shadow-custom -translate-x-1/2 w-14 '>
              <img src={iconoMas} alt="Ver más" className="" />
            </a>
          </div>
        
      </div>
    );
  }
  
  export default Banner;