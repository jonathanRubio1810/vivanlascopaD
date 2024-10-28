import React from "react";
import image1 from "../../assets/images/catalogo/plumonesdoble.png"; // Importar la imagen 1
import image2 from "../../assets/images/catalogo/mercado.png"; // Importar la imagen 2

const LegendCardSection = () => {
  const cards = [
    { id: 1, legend: "Todo en papelería", buttonText: "Ver más", image: image1 },
    { id: 2, legend: "Con Mercado Libre", buttonText: "Ver más", image: image2 },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative overflow-hidden rounded-lg bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <img
            src={card.image}
            alt={`Imagen ${card.id}`}
            className="h-64 w-full object-cover rounded-lg opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
          <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-center bg-black bg-opacity-50 p-4 text-center text-white transition-opacity duration-300 hover:bg-opacity-70">
            <h3 className="mb-4 text-xl font-semibold">{card.legend}</h3>
            <button className="mt-2 transform rounded bg-blue-700 px-4 py-2 font-bold transition duration-500 hover:scale-110 hover:bg-sky-900">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LegendCardSection;
