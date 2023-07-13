const express = require('express');
const UserService = require('../../services/UserService');
const router = express.Router();
const config = require('../../config')


module.exports = () => {
    const userService = new UserService(config.development.postgres.client);
    router.get('/get-users', async (req, res) => {
        try {
            const user = await userService.getUsers();
            res.send(user);
        } catch(error) {
            console.log(error);
        }
    })

    return router
}