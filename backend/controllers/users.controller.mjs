import * as userServices from "../services/users.service.mjs";

export const getUsers = (req, res) => {
    userServices.getUsers()
        .then((result) => {
            res.status(200).json({
                message: "Users retrieved",
                data: result.rows
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const getUser = (req, res) => {
    const { id } = req.params;
    userServices.getUser(id)
        .then((result) => {
            if (result.rows.length === 0) {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(200).json({
                message: "User retrieved",
                data: result.rows
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const createUser = (req, res) => {
    const user = req.body;

    if (!user.email || !user.password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    userServices.createUser(user)
        .then(() => {
            res.status(201).json({
                message: "User created",
                data: user
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const updateUser = (req, res) => {
    const user = req.body;
    const { id } = req.params;

    if (!user.email && !user.password) {
        return res.status(400).json({ message: "At least one field is required to update" });
    }

    userServices.updateUser(id, user)
        .then(() => {
            res.status(200).json({
                message: "User updated",
                data: user
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    userServices.deleteUser(id)
        .then(() => {
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch((err) => {
            res.status(500).send(err);
        });
};
