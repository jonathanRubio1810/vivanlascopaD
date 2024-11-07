import express, { json } from 'express';
import cors from 'cors';
import indexRouter from '../routes/index.route.mjs';
import usersRouter from '../routes/users.route.mjs';
import productRouter from '../routes/product.route.mjs'; 
import { connectToMongo } from '../config/sql.mjs';

const app = express();
const port = 5000; 


app.use(cors());
app.use(json());

app.use("/api/users", usersRouter);  
app.use("/api/products", productRouter); 
app.use("/", indexRouter);         

app.use("*", (req, res) => {
    res.status(404).send("404 - Not Found!");
});

// Conexion a MongoDB 
connectToMongo().then(() => {
    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
});
