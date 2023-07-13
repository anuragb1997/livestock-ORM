const models = require("../db/models");
const { userAuth } = require("../middlewares/auth-middleware");

class VaccineService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllVaccines() {
		try {
			const vaccines = await this.models.Vaccine.findAll();
			return vaccines;
		} catch (err) {
			return err;
		}
	}

	async getVaccineById(id) {
		try {
			const vaccine = await this.models.Vaccine.findOne({ where: { id } });
			return vaccine;
		} catch (err) {
			return err;
		}
	}

	async getVaccinesByAnimalId(animal_id) {
		try {
			const vaccines = await this.models.Vaccine.findAll({
				where: { AnimalId: animal_id },
			});
			return vaccines;
		} catch (err) {
			return err;
		}
	}

	async getVaccinesByDoctorId(doctor_id) {
		try {
			const vaccines = await this.models.Vaccine.findAll({
				where: { DoctorId: doctor_id },
			});
			return vaccines;
		} catch (err) {
			return err;
		}
	}

	async createVaccine(doctor_id, animal_id, name) {
		try {
			const vaccine = await this.models.Vaccine.create({
				name,
				DoctorId: doctor_id,
				AnimalId: animal_id,
			});
			return vaccine;
		} catch (err) {
			return err;
		}
	}
}

module.exports = VaccineService;
