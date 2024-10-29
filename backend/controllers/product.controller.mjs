import * as productModel from '../product.model.mjs';

export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts(); 
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.getProduct(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

export const createProduct = async (req, res) => {
    const { name, description, price, category, imageUrl } = req.body;

    if (!name || !description || !price || !imageUrl || !category) {
        return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    try {
        const newProduct = {
            name,
            description,
            price: Number(price),
            imageUrl,
            category,
        };

        const createdProduct = await productModel.createProduct(newProduct);
        res.status(201).json({
            message: "Producto creado",
            data: createdProduct,
        });
    } catch (err) {
        res.status(500).send({ message: "Error al crear el producto", error: err.message });
    }
};
