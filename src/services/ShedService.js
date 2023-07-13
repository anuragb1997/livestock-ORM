const models = require("../db/models");

class ShedService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllSheds() {
		try {
			const sheds = await this.models.Shed.findAll();
			return sheds;
		} catch (err) {
			return err;
		}
	}

	async getUserByid(id) {
		try {
			const shed = await this.models.Shed.findOne({ where: { id } });
			return shed;
		} catch (err) {
			return err;
		}
	}

	async createShed(name) {
		try {
			const shed = await this.models.Shed.create({
				name,
			});
			return shed;
		} catch (err) {
			return err;
		}
	}

	async updateShedById(id, name) {
		try {
			const shed = await this.models.Shed.update({ name }, { where: { id } });
			return shed;
		} catch (err) {
			return err;
		}
	}

	async deleteShed(id) {
		try {
			await this.models.Shed.destroy({ where: { id } });
			return `deleted shed ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = ShedService;
