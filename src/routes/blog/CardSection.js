import React from "react";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/product/details');
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
        <h3 className="text-xl font-semibold mb-2">¿Por qué te interesa?</h3>
        <p>Explora los productos que creemos que te encantarán.</p>
      </div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
        <h3 className="text-xl font-semibold mb-2">Ingresa a tu cuenta</h3>
        <p>Accede a tu cuenta para ver tus compras y recomendaciones personalizadas.</p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-[#4dd49c] transition">Ingresar</button>
      </div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
        <h3 className="text-xl font-semibold mb-2">Ingresa tu ubicación</h3>
        <p>Proporciona tu ubicación para ver productos disponibles en tu área.</p>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-[#4dd49c] transition">Ingresar ubicación</button>
      </div>
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:bg-gray-700 transition">
        <h3 className="text-xl font-semibold mb-2">Todo el catálogo</h3>
        <p>Revisa todos los productos disponibles en nuestro catálogo.</p>
        <button 
          onClick={handleRedirect}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-[#4dd49c] transition"
        >
          Ver catálogo
        </button>
      </div>
    </div>
  );
};

export default CardSection;
