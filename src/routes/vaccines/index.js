const express = require("express");

const VaccineService = require("../../services/VaccineService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const vaccineService = new VaccineService(config.development.postgres.client);

	router.get("/get-vaccines", async (req, res) => {
		try {
			const vaccines = await vaccineService.getAllVaccines();
			res.send(vaccines);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-vaccine/:id", async (req, res) => {
		try {
			const vaccine = await vaccineService.getVaccineById(req.params.id);
			res.send(vaccine);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-vaccines-by-animal-id/:animal_id", async (req, res) => {
		try {
			const vaccines = await vaccineService.getVaccinesByAnimalId(
				req.params.animal_id
			);
			res.send(vaccines);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-vaccines-by-doctor-id/:doctor_id", async (req, res) => {
		try {
			const vaccines = await vaccineService.getVaccinesByDoctorId(
				req.params.doctor_id
			);
			res.send(vaccines);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-vaccine/:doctor_id/:animal_id", async (req, res) => {
		try {
			const vaccine = await vaccineService.createVaccine(
				req.params.doctor_id,
				req.params.animal_id,
				req.body.name
			);
			res.send(vaccine);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-vaccine/:id", async (req, res) => {
		try {
			const message = await vaccineService.deleteVaccine(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
