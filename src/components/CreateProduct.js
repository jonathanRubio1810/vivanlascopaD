import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = ({ onProductCreated }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState(''); // Campo para la URL de la imagen
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProduct = { 
                name, 
                description, 
                price: Number(price), // Asegúrate de que el precio sea un número
                imageUrl, // Agregar el campo de la URL de la imagen
                category 
            };
            await axios.post('http://localhost:5000/api/products', newProduct);
            onProductCreated(); 
            // Limpiar el formulario
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl(''); // Limpiar el campo de la URL de la imagen
            setCategory('');
        } catch (err) {
            setError('Error al crear el producto. Por favor, intenta de nuevo.');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Crear Nuevo Producto</h2>
            {error && <p className="text-center text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Nombre del Producto</label>
                    <input
                        type="text"
                        placeholder="Nombre del Producto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Descripción</label>
                    <input
                        type="text"
                        placeholder="Descripción del Producto"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Precio</label>
                    <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">URL de Imagen</label>
                    <input
                        type="text"
                        placeholder="URL de la Imagen"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Categoría</label>
                    <input
                        type="text"
                        placeholder="Categoría del Producto"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-gray-900"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Crear Producto
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
