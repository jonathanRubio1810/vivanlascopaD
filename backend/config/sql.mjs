import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const mongoURL = process.env.MONGO_DB_URL;  
const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectToMongo = async () => {
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME); 
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error conectando a MongoDB", error);
    }
};

export { client, db, connectToMongo };
