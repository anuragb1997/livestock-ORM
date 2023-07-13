const express = require("express");
const UserService = require("../../services/UserService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const userService = new UserService(config.development.postgres.client);
	router.get("/get-users", async (req, res) => {
		try {
			const user = await userService.getAllUsers();
			res.send(user);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-users-email/:email", async (req, res) => {
		try {
			const user = await userService.getUserByEmail(req.params.email);
			res.send(user);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-user", async (req, res) => {
		try {
			const user = await userService.createUser(
				req.body.email,
				req.body.password
			);
			res.send(user);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-user", async (req, res) => {
		try {
			const user = await userService.updateUser(
				req.body.email,
				req.body.password
			);
			res.send(user);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-user/:email", async (req, res) => {
		try {
			const message = await userService.deleteUser(req.params.email);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
