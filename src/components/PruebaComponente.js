import React, { useEffect, useState } from "react";
import axios from "axios";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const DraggableProduct = ({ product }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "PRODUCT",
    item: { id: product.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      className={`p-4 border border-gray-600 rounded-xl mb-6 bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center shadow-lg transform transition duration-300 ease-in-out hover:scale-105 ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <img
        src={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mb-3 transition duration-300 transform hover:scale-110"
      />
      <h4 className="font-bold text-xl">{product.name}</h4>
      <p className="text-white text-lg font-semibold">${product.price}</p>
    </div>
  );
};

const WidgetZone = ({ name, products, onDrop }) => {
  const [, dropRef] = useDrop({
    accept: "PRODUCT",
    drop: (item) => onDrop(item.id, name),
  });

  return (
    <div
      ref={dropRef}
      className="border-2 border-dashed border-green-500 rounded-lg p-6 min-h-[250px] bg-gradient-to-r from-gray-800 to-black flex flex-col items-center justify-center space-y-4"
    >
      <h3 className="text-green-400 text-2xl font-semibold mb-4">{name}</h3>
      <div className="w-full max-w-xs space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-3 border border-green-400 rounded-lg bg-gray-800 text-white shadow-lg transform transition duration-300 hover:scale-105"
          >
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const PruebaComponente = () => {
  const [products, setProducts] = useState([]);
  const [widgets, setWidgets] = useState({
    Widget1: [],
    Widget2: [],
    Widget3: [],
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products/mercadolibre-products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDrop = (productId, widgetName) => {
    const product = products.find((prod) => prod.id === productId);

    setWidgets((prevWidgets) => {
      const updatedWidgets = { ...prevWidgets };

      for (const key in updatedWidgets) {
        updatedWidgets[key] = updatedWidgets[key].filter((p) => p.id !== productId);
      }

      updatedWidgets[widgetName] = [...updatedWidgets[widgetName], product];

      return updatedWidgets;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="max-w-7xl mx-auto p-8">
      <div className="mt-10">
  <h1 className="text-green-400 text-center text-3xl font-bold mb-8">
    Gestión de Productos
  </h1>
</div>

        <div className="flex gap-8">
        
          <div className="flex-1 flex flex-col items-center justify-center mt-10">
            <h2 className="text-green-400 text-2xl font-semibold mb-6">
              Productos
            </h2>
            <div className="space-y-6 overflow-y-auto max-h-[500px] pr-3">
              {products.map((product) => (
                <DraggableProduct key={product.id} product={product} />
              ))}
            </div>
          </div>

        
          <div className="flex-3 flex gap-8">
            {Object.keys(widgets).map((widgetName) => (
              <WidgetZone
                key={widgetName}
                name={widgetName}
                products={widgets[widgetName]}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default PruebaComponente;
