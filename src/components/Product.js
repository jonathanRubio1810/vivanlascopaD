import React from "react";
import axios from "axios";

const Product = ({ product, onDelete }) => {
  const handleDelete = async () => {
    console.log("ID del producto a eliminar:", product.id); 
    try {
      await axios.delete(`http://localhost:5000/api/products/${product.id}`);
      onDelete(product.id); 
    } catch (err) {
      console.error("Error al eliminar el producto:", err);
    }
  };

  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-md text-gray-800 font-semibold">${product.price}</p>
      </div>
      <button
        onClick={handleDelete}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
      >
        Eliminar
      </button>
    </li>
  );
};

export default Product;
