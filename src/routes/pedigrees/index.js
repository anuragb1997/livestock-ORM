const express = require("express");
const PedigreeService = require("../../services/PedigreeService");
const UserService = require("../../services/UserService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const pedigreeService = new PedigreeService(config.development.postgres.client);

	router.get("/get-pedigree", async (req, res) => {
		try {
			const pedigree = await pedigreeService.getAllPedigree();
			res.send(pedigree);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-pedigree-by-user-id/:user_id", async (req, res) => {
		try {
			const pedigree = await pedigreeService.getPedigreeById(req.params.user_id);
			res.send(pedigree);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-animal-by-id/:animal_id", async (req, res) => {
		try {
			const animal = await animalService.getAnimalById(req.params.animal_id);
			res.send(animal);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-animal/:user_id/:shed_id", async (req, res) => {
		try {
			const animal = await animalService.createAnimal(
				req.params.user_id,
				req.params.shed_id,
				req.body.name,
				req.body.type,
				req.body.breed,
				req.body.status,
				req.body.sex,
				req.body.weight,
				req.body.ev,
				req.body.color,
				req.body.height,
				req.body.age,
				req.body.category
			);
			res.send(animal);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-animal/:animal_id", async (req, res) => {
		try {
			console.log(req.body);
			const animal = await animalService.updateAnimalById(
				req.params.animal_id,
				req.body.name,
				req.body.type,
				req.body.breed,
				req.body.status,
				req.body.sex,
				req.body.weight,
				req.body.ev,
				req.body.color,
				req.body.height,
				req.body.age,
				req.body.category
			);
			res.send(animal);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-animal/:animal_id", async (req, res) => {
		try {
			const message = await animalService.deleteAnimal(req.params.animal_id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
