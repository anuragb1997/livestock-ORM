const models = require("../db/models");
const { userAuth } = require("../middlewares/auth-middleware");

class FoodService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllFood() {
		try {
			const foods = await this.models.Food.findAll();
			return foods;
		} catch (err) {
			return err;
		}
	}

	async getFoodById(id) {
		try {
			const food = await this.models.Food.findAll({
				where: { id },
			});
			return food;
		} catch (err) {
			return err;
		}
	}

	async getFoodsByShedId(shed_id) {
		try {
			const foods = await this.models.Food.findAll({
				where: { ShedId: shed_id },
			});
			return foods;
		} catch (err) {
			return err;
		}
	}

	async createFood(shed_id, name, quantity) {
		try {
			const food = await this.models.Food.create({
				name,
				quantity,
				ShedId: shed_id,
			});
			return food;
		} catch (err) {
			return err;
		}
	}

	async updateFoodById(id, name, quantity) {
		try {
			const food = await this.models.Food.update(
				{
					name,
					quantity,
				},
				{ where: { id } }
			);
			return food;
		} catch (err) {
			return err;
		}
	}

	async deleteFood(id) {
		try {
			await this.models.Food.destroy({ where: { id } });
			return `deleted food ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = FoodService;
