const express = require("express");

const WeightService = require("../../services/WeightService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const weightService = new WeightService(config.development.postgres.client);

	router.get("/get-weights", async (req, res) => {
		try {
			const weights = await weightService.getAllWeights();
			res.send(weights);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-weights-by-animal-id/:animal_id", async (req, res) => {
		try {
			const weights = await weightService.getWeightByAnimalId(
				req.params.animal_id
			);
			res.send(weights);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-weights-by-id/:id", async (req, res) => {
		try {
			const weight = await weightService.getWeightById(id);
			res.send(weight);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-weight/:animal_id", async (req, res) => {
		try {
			const weight = await weightService.createWeight(
				req.params.animal_id,
				req.body.weight
			);
			res.send(weight);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-weight/:id", async (req, res) => {
		try {
			const weight = await weightService.updateWeightById(
				req.params.id,
				req.body.weight
			);
			res.send(weight);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-weight/:id", async (req, res) => {
		try {
			const message = await weightService.deleteWeight(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
