const express = require("express");
const DoctorService = require("../../services/DoctorService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const doctorService = new DoctorService(config.development.postgres.client);
	router.get("/get-doctors", async (req, res) => {
		try {
			const doctors = await doctorService.getAllDoctors();
			res.send(doctors);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-doctor/:id", async (req, res) => {
		try {
			const doctor = await doctorService.getDoctorById(req.params.id);
			res.send(doctor);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-doctor", async (req, res) => {
		try {
			const doctor = await doctorService.createDoctor(
				req.body.name,
				req.body.contact
			);
			res.send(doctor);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-doctor/:id", async (req, res) => {
		try {
			const doctor = await doctorService.updateDoctorById(
				req.params.id,
				req.body.name,
				req.body.contact
			);
			res.send(doctor);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-doctor/:id", async (req, res) => {
		try {
			const message = await doctorService.deleteDoctor(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
