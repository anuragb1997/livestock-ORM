const models = require("../db/models");

class PedigreeService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllPedigree() {
		try {
			const pedigree = await this.models.Pedigree.findAll();
			return pedigree;
		} catch (err) {
			return err;
		}
	}

	async getPedigreeById(id) {
		try {
			const pedigree = await this.models.Pedigree.findOne({ where: { id } });
			return pedigree;
		} catch (err) {
			return err;
		}
	}

	async createPedigree(pedigreee) {
		try {
			const pedigree = await this.models.Pedigree.create({
				pedigreee
			});
			return pedigree;
		} catch (err) {
			return err;
		}
	}

	async updatePedigreeId(id, pedigreee) {
		try {
			const pedigree = await this.models.Pedigree.update(
				{ pedigreee },
				{ where: { id } }
			);
			return pedigree;
		} catch (err) {
			return err;
		}
	}

	async deletePedigree(id) {
		try {
			await this.models.Pedigree.destroy({ where: { id } });
			return `deleted doctor ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = PedigreeService;

