import { ObjectId } from 'mongodb';
import { db } from '../backend/config/sql.mjs'; 

const productSchema = {
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    category: String, 
};

export const createProduct = async (product) => {
    try {
        const productsCollection = db.collection('products');
        const result = await productsCollection.insertOne(product);
        return result.ops[0]; 
    } catch (err) {
        throw err;
    }
};

export const getProduct = async (id) => {
    try {
        const productsCollection = db.collection('products');
        const product = await productsCollection.findOne({ _id: new ObjectId(id) });
        return product;
    } catch (err) {
        throw err;
    }
};

export const getAllProducts = async () => {
    try {
        const productsCollection = db.collection('products');
        const products = await productsCollection.find().toArray();
        return products; 
    } catch (err) {
        throw err;
    }
};

export default { createProduct, getProduct, getAllProducts };
