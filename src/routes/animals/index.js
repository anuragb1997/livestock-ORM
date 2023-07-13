const express = require("express");
const AnimalService = require("../../services/AnimalService");
const UserService = require("../../services/UserService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const animalService = new AnimalService(config.development.postgres.client);

	router.get("/get-animals", async (req, res) => {
		try {
			const animals = await animalService.getAllAnimals();
			res.send(animals);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-animals-by-user-id/:user_id", async (req, res) => {
		try {
			const animals = await animalService.getAnimalByUserId(req.params.user_id);
			res.send(animals);
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

	router.post("/create-animal/:user_id", async (req, res) => {
		try {
			const animal = await animalService.createAnimal(
				req.params.user_id,
				req.body.name,
				req.body.type,
				req.body.breed,
				req.body.status,
				req.body.sex,
				req.body.weight,
				req.body.ev,
				req.body.color,
				req.body.height,
				req.body.age
			);
			res.send(animal);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-animal/:animal_id", async (req, res) => {
		try {
			const animal = await animalService.createAnimal(
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
				req.body.age
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
