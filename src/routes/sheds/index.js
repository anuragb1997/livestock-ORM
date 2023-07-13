const express = require("express");
const ShedService = require("../../services/ShedService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const shedService = new ShedService(config.development.postgres.client);
	router.get("/get-sheds", async (req, res) => {
		try {
			const sheds = await shedService.getAllSheds();
			res.send(sheds);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-shed/:id", async (req, res) => {
		try {
			const shed = await shedService.getUserByid(req.params.id);
			res.send(shed);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-shed", async (req, res) => {
		try {
			const shed = await shedService.createShed(req.body.name);
			res.send(shed);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-shed/:id", async (req, res) => {
		try {
			const user = await shedService.updateShedById(
				req.params.id,
				req.body.name
			);
			res.send(user);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-shed/:id", async (req, res) => {
		try {
			const message = await shedService.deleteShed(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
