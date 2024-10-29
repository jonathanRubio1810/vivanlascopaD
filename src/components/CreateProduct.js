import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = ({ onProductCreated }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState(''); 
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newProduct = { 
                name, 
                description, 
                price: Number(price), 
                imageUrl, 
                category 
            };
            await axios.post('http://localhost:5000/api/products', newProduct);
            onProductCreated(); 
            setName('');
            setDescription('');
            setPrice('');
            setImageUrl('');
            setCategory('');
        } catch (err) {
            setError('Error al crear el producto. Por favor, intenta de nuevo.');
        }
    };

    return (
<div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-20"> 
<h2 className="text-center text-xl font-semibold mb-4 text-gray-100">Crear Nuevo Producto</h2>
            {error && <p className="text-center text-red-500 mb-2">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <label className="block text-gray-100 font-bold mb-1">Nombre del Producto</label>
                    <input
                        type="text"
                        placeholder="Nombre del Producto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-100 font-bold mb-1">Descripción</label>
                    <input
                        type="text"
                        placeholder="Descripción del Producto"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-100 font-bold mb-1">Precio</label>
                    <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-100 font-bold mb-1">URL de Imagen</label>
                    <input
                        type="text"
                        placeholder="URL de la Imagen"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-100 font-bold mb-1">Categoría</label>
                    <input
                        type="text"
                        placeholder="Categoría del Producto"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Crear Producto
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
