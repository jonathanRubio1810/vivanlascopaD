import { Router } from 'express';
import { db } from '../config/sql.mjs';
import { ObjectId } from 'mongodb';  // Importación de ObjectId

const usersRouter = Router();

// Ruta de prueba para verificar que la API funciona
usersRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'API is working' });
});

// Ruta para registrar un nuevo usuario
usersRouter.post('/', async (req, res) => {
    const { email, password, fullname, address, number } = req.body;

    console.log("Datos recibidos en la API:", req.body);

    if (!email || !password || !fullname) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const usersCollection = db.collection('users');

    try {
        // Aseguramos que el correo se convierta a minúsculas
        const existingUser = await usersCollection.findOne({ email: email.toLowerCase() });
        console.log("Usuario existente:", existingUser);
        if (existingUser) {
            return res.status(409).json({ message: 'This email is already registered!' });
        }

        const newUser = {
            email: email.toLowerCase(),  // Guardamos el correo en minúsculas
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

// Ruta para obtener todos los usuarios
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

// Ruta para eliminar un usuario
usersRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;

    // Verificación de si el ID es válido
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
        const usersCollection = db.collection('users');
        // Conversión del ID a ObjectId
        const deleteResult = await usersCollection.deleteOne({ _id: new ObjectId(id) });

        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default usersRouter;
