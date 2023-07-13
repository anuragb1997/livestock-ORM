const models = require("../db/models");
const { userAuth } = require("../middlewares/auth-middleware");

class AnimalService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllAnimals() {
		try {
			const animals = await this.models.Animal.findAll();
			return animals;
		} catch (err) {
			return err;
		}
	}

	async getAnimalByUserId(id) {
		try {
			const animals = await this.models.Animal.findAll({
				where: { UserId: id },
			});
			return animals;
		} catch (err) {
			return err;
		}
	}

	async getAnimalById(id) {
		try {
			const animal = await this.models.Animal.findOne({ where: { id } });
			return animal;
		} catch (err) {
			return err;
		}
	}

	async createAnimal(
		user_id,
		name,
		type,
		breed,
		status,
		sex,
		weight,
		ev,
		color,
		height,
		age
	) {
		try {
			const animal = await this.models.Animal.create({
				name,
				type,
				breed,
				status,
				sex,
				weight,
				ev,
				color,
				height,
				age,
				UserId: user_id,
			});
			return animal;
		} catch (err) {
			return err;
		}
	}

	async updateAnimalById(
		id,
		name,
		type,
		breed,
		status,
		sex,
		weight,
		ev,
		color,
		height,
		age
	) {
		try {
			const animal = await this.models.Animal.update(
				{
					name,
					type,
					breed,
					status,
					sex,
					weight,
					ev,
					color,
					height,
					age,
				},
				{ where: { id } }
			);
			return animal;
		} catch (err) {
			return err;
		}
	}

	async deleteAnimal(id) {
		try {
			await this.models.Animal.destroy({ where: { id } });
			return `deleted animal ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = AnimalService;
