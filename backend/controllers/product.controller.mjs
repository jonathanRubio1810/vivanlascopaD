import * as productService from '../services/product.service.mjs';
import fs from 'fs';
import path from 'path';

export const createProduct = async (req, res) => {
    const { name, description, price, category } = req.body;
    const imageFile = req.file; 

    if (!name || !description || !price || !imageFile || !category) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const imagePath = path.join(__dirname, '../../uploads', imageFile.filename); 
        fs.writeFileSync(imagePath, imageFile.buffer); 

        const newProduct = {
            name,
            description,
            price: Number(price),
            imageUrl: imagePath, 
            category,
        };

        const createdProduct = await productService.createProduct(newProduct);
        res.status(201).json({
            message: "Product created",
            data: createdProduct,
        });
    } catch (err) {
        res.status(500).send({ message: "Error creating product", error: err });
    }
};
