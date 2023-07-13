const models = require("../db/models");

class UserService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllUsers() {
		try {
			const users = await this.models.User.findAll();
			return users;
		} catch (err) {
			return err;
		}
	}

	async getUserByEmail(email) {
		try {
			const user = await this.models.User.findOne({ where: { email } });
			return user;
		} catch (err) {
			return err;
		}
	}

	async getUserByid(id) {
		try {
			const user = await this.models.User.findOne({ where: { id } });
			return user;
		} catch (err) {
			return err;
		}
	}

	async createUser(email, password) {
		try {
			const user = await this.models.User.create({
				email,
				password,
			});
			return user;
		} catch (err) {
			return err;
		}
	}

	async updateUserById(id, email, password) {
		try {
			const user = await this.models.User.update(
				{ email, password },
				{ where: { id } }
			);
			return user;
		} catch (err) {
			return err;
		}
	}

	async deleteUser(id) {
		try {
			await this.models.User.destroy({ where: { id } });
			return `deleted user ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = UserService;
