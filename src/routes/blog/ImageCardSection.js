import React from "react";
import image1 from "../../assets/images/catalogo/0X4A2118.jpg"; // Importar la imagen 1
import image2 from "../../assets/images/catalogo/0X4A2119.jpg"; // Importar la imagen 2
import image3 from "../../assets/images/catalogo/0X4A2130.jpg"; // Importar la imagen 3
import image4 from "../../assets/images/catalogo/0X4A2149.jpg"; // Importar la imagen 4
import image5 from "../../assets/images/catalogo/0X4A2109.jpg"; // Importar la imagen 5
import image6 from "../../assets/images/catalogo/0X4A2108.jpg"; // Importar la imagen 6
import image7 from "../../assets/images/catalogo/boardmarket.jpeg"; // Importar la imagen 7
import image8 from "../../assets/images/catalogo/lapiz3cajas.png"; // Importar la imagen 8
import image9 from "../../assets/images/catalogo/0X4A2185.jpg"; // Importar la imagen 9
import image10 from "../../assets/images/catalogo/0X4A2186.jpg"; // Importar la imagen 10
import image11 from "../../assets/images/catalogo/dino.jpeg"; // Importar la imagen 11
import image12 from "../../assets/images/catalogo/biciroja.jpeg"; // Importar la imagen 12

const ImageCardSection = () => {
  const cards = [
    { id: 1, title: "Hogar", largeImage: image1, smallImages: [image2, image3, image4] },
    { id: 2, title: "Escolar", largeImage: image5, smallImages: [image6, image7, image8] },
    { id: 3, title: "Para los niños", largeImage: image9, smallImages: [image10, image11, image12] },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-lg bg-gray-900 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <h3 className="mb-4 text-xl font-semibold text-white">{card.title}</h3>
          <img
            src={card.largeImage}
            alt={`Imagen grande ${card.id}`}
            className="mb-4 h-64 w-full object-cover rounded-lg"
          />
          <div className="grid grid-cols-3 gap-2">
            {card.smallImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagen pequeña ${card.id}-${index + 1}`}
                className="h-20 w-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardSection;
