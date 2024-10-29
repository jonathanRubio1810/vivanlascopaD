import { Router } from 'express';
import { db } from '../config/sql.mjs'; 

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'API is working' });
});

usersRouter.post('/', async (req, res) => {
    const { email, password, fullname, address, number } = req.body;

    console.log("Datos recibidos en la API:", req.body);

    if (!email || !password || !fullname) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const usersCollection = db.collection('users');

    try {
        const existingUser = await usersCollection.findOne({ email });
        console.log("Usuario existente:", existingUser);
        if (existingUser) {
            return res.status(409).json({ message: 'This email is already registered!' });
        }

        const newUser = {
            email,
            password,
            fullname,
            address: address || '',
            number: number || ''
        };

        const insertResult = await usersCollection.insertOne(newUser);
        console.log("Resultado de la inserción:", insertResult);

        return res.status(201).json({ message: 'User registered successfully!', data: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

usersRouter.get('/all', async (req, res) => {
    try {
        const usersCollection = db.collection('users');
        const users = await usersCollection.find({}).toArray(); 
        return res.status(200).json(users); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default usersRouter;
