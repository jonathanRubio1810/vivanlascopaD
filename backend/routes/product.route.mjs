import { Router } from 'express';
import * as productController from '../controllers/product.controller.mjs';
import multer from 'multer';

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const productRouter = Router();

productRouter.get('/', productController.getAllProducts); 
productRouter.get('/:id', productController.getProduct);
productRouter.post('/', upload.single('image'), productController.createProduct); 
export default productRouter;
