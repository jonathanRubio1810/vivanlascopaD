import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const ProductList = ({ refresh }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data.data);
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [refresh]);

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        Lista de Productos
      </h1>
      <ul className="divide-y divide-gray-200">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
