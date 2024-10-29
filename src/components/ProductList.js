import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = ({ refresh }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const fetchedProducts = response.data;

        if (Array.isArray(fetchedProducts)) {
          setProducts(fetchedProducts);
        } else {
          setError("La respuesta no contiene productos.");
        }
      } catch (err) {
        if (err.response) {
          setError(`Error: ${err.response.status} - ${err.response.data.message}`);
        } else {
          setError("Error al cargar los productos");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [refresh]);

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== id)
    );
  };

  if (loading) return <div className="text-center text-gray-600">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold text-white mb-6">
        Lista de Productos
      </h1>
      {Array.isArray(products) && products.length > 0 ? (
        <ul className="divide-y divide-gray-700">
          {products.map((product) => (
            <li key={product._id} className="flex justify-between items-center py-4 text-white">
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p>{product.description}</p>
                <p className="text-green-500 font-bold">${product.price}</p>
              </div>
              <button
                onClick={() => handleDeleteProduct(product._id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-400">No se encontraron productos.</div>
      )}
    </div>
  );
};

export default ProductList;
