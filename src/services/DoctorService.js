const models = require("../db/models");

class DoctorService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllDoctors() {
		try {
			const doctors = await this.models.Doctor.findAll();
			return doctors;
		} catch (err) {
			return err;
		}
	}

	async getDoctorById(id) {
		try {
			const doctor = await this.models.Doctor.findOne({ where: { id } });
			return doctor;
		} catch (err) {
			return err;
		}
	}

	async createDoctor(name, contact) {
		try {
			const doctor = await this.models.Doctor.create({
				name,
				contact,
			});
			return doctor;
		} catch (err) {
			return err;
		}
	}

	async updateDoctorById(id, name, contact) {
		try {
			const doctor = await this.models.Doctor.update(
				{ name, contact },
				{ where: { id } }
			);
			return doctor;
		} catch (err) {
			return err;
		}
	}

	async deleteDoctor(id) {
		try {
			await this.models.Doctor.destroy({ where: { id } });
			return `deleted doctor ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = DoctorService;
