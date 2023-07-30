const express = require("express");
const PedigreeService = require("../../services/PedigreeService");
const UserService = require("../../services/UserService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const pedigreeService = new PedigreeService(config.development.postgres.client);

	router.get("/get-pedigrees", async (req, res) => {
		try {
			const pedigree = await pedigreeService.getAllPedigree();
			res.send(pedigree);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-pedigree/:id", async (req, res) => {
		try {
			const pedigree = await pedigreeService.getPedigreeById(req.params.id);
			res.send(pedigree);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-pedigree/:user_id/:shed_id", async (req, res) => {
		try {
			const pedigree = await pedigreeService.createPedigree(
				req.body.pedigreee,
				req.params.user_id,
				req.params.shed_id,
			);
			res.send(pedigree);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-pedigree/:id", async (req, res) => {
		try {
			const pedigree = await pedigreeService.updatePedigreeId(
				req.params.id,
				req.body.pedigreee,
			);
			res.send(pedigree);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-pedigree/:id", async (req, res) => {
		try {
			const message = await pedigreeService.deletePedigree(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
