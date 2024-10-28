import { db } from "../config/sql.mjs";
import { ObjectId } from 'mongodb';

export const getUsers = async () => {
    try {
        const usersCollection = db.collection('users');
        const users = await usersCollection.find().toArray();
        return users;
    } catch (err) {
        throw err;
    }
};

export const getUser = async (id) => {
    try {
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ _id: new ObjectId(id) });
        return user;
    } catch (err) {
        throw err;
    }
};

export const createUser = async (user) => {
    try {
        if (!user.email || !user.password) {
            throw new Error("Email and password are required");
        }
        const usersCollection = db.collection('users');
        const result = await usersCollection.insertOne(user);
        return result.ops[0]; 
    } catch (err) {
        throw err;
    }
};

export const updateUser = async (id, user) => {
    try {
        const usersCollection = db.collection('users');
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: user }
        );
        if (result.matchedCount === 0) {
            throw new Error("User not found");
        }
        return result;
    } catch (err) {
        throw err;
    }
};

export const deleteUser = async (id) => {
    try {
        const usersCollection = db.collection('users');
        const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            throw new Error("User not found");
        }
        return result;
    } catch (err) {
        throw err;
    }
};
