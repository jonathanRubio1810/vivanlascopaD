import { db } from "../config/sql.mjs";
import { ObjectId } from 'mongodb';

// Obtener todos los usuarios
export const getUsers = async () => {
    try {
        const usersCollection = db.collection('users');
        const users = await usersCollection.find().toArray();
        return users;
    } catch (err) {
        console.error("Error al obtener usuarios:", err);
        throw new Error("Error al obtener usuarios");
    }
};

// Obtener un usuario por su ID
export const getUser = async (id) => {
    try {
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ _id: new ObjectId(id) });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        return user;
    } catch (err) {
        console.error("Error al obtener el usuario:", err);
        throw new Error("Error al obtener el usuario");
    }
};

// Crear un nuevo usuario
export const createUser = async (user) => {
    try {
        if (!user.email || !user.password) {
            throw new Error("El email y la contraseña son obligatorios");
        }
        const usersCollection = db.collection('users');
        const result = await usersCollection.insertOne(user);
        return result.ops[0]; // Retorna el usuario recién insertado
    } catch (err) {
        console.error("Error al crear el usuario:", err);
        throw new Error("Error al crear el usuario");
    }
};

// Actualizar un usuario existente
export const updateUser = async (id, user) => {
    try {
        const usersCollection = db.collection('users');
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: user }
        );
        if (result.matchedCount === 0) {
            throw new Error("Usuario no encontrado");
        }
        return result;
    } catch (err) {
        console.error("Error al actualizar el usuario:", err);
        throw new Error("Error al actualizar el usuario");
    }
};

// Eliminar un usuario
export const deleteUser = async (id) => {
    try {
        const usersCollection = db.collection('users');
        const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            throw new Error("Usuario no encontrado");
        }
        return result;
    } catch (err) {
        console.error("Error al eliminar el usuario:", err);
        throw new Error("Error al eliminar el usuario");
    }
};
