import express from 'express';
import axios from 'axios';

const productRouter = express.Router(); 

productRouter.get('/mercadolibre-products', async (req, res) => {
  try {
    const accessToken = process.env.ACCESS_TOKEN;
    const userId = '1285386665'; 

    
    const response = await axios.get(`https://api.mercadolibre.com/users/${userId}/items/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const productIds = response.data.results;

    
    const productDetails = await Promise.all(
      productIds.map(async (productId) => {
        const productResponse = await axios.get(`https://api.mercadolibre.com/items/${productId}`);
        return {
          id: productResponse.data.id,
          name: productResponse.data.title,
          price: productResponse.data.price,
          imageUrl: productResponse.data.thumbnail,
          permalink: productResponse.data.permalink,
        };
      })
    );

    res.json(productDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los productos de Mercado Libre' });
  }
});

export default productRouter;
