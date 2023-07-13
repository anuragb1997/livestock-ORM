const models = require("../db/models");
const { userAuth } = require("../middlewares/auth-middleware");

class WeightService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllWeights() {
		try {
			const weights = await this.models.Weight.findAll();
			return weights;
		} catch (err) {
			return err;
		}
	}

	async getWeightByAnimalId(animal_id) {
		try {
			const weights = await this.models.Weight.findAll({
				where: { AnimalId: animal_id },
			});
			return weights;
		} catch (err) {
			return err;
		}
	}

	async getWeightById(id) {
		try {
			const weight = await this.models.Weight.findOne({
				where: { id },
			});
			return weight;
		} catch (err) {
			return err;
		}
	}

	async createWeight(animal_id, weight) {
		try {
			const w = await this.models.Weight.create({
				weight,
				AnimalId: animal_id,
			});
			return w;
		} catch (err) {
			return err;
		}
	}

	async updateWeightById(id, weight) {
		try {
			const weight = await this.models.Weight.update(
				{
					weight,
				},
				{ where: { id } }
			);
			return weight;
		} catch (err) {
			return err;
		}
	}

	async deleteWeight(id) {
		try {
			await this.models.Weight.destroy({ where: { id } });
			return `deleted weight ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = WeightService;
