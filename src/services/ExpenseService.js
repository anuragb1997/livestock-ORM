const models = require("../db/models");
const { userAuth } = require("../middlewares/auth-middleware");

class ExpenseService {
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllExpenses() {
		try {
			const expenses = await this.models.Expense.findAll();
			return expenses;
		} catch (err) {
			return err;
		}
	}

	async getExpsenseByUserId(id) {
		try {
			const expenses = await this.models.Expense.findAll({
				where: { UserId: id },
			});
			return expenses;
		} catch (err) {
			return err;
		}
	}

	async getExpenseById(id) {
		try {
			const expense = await this.models.Expense.findOne({ where: { id } });
			return expense;
		} catch (err) {
			return err;
		}
	}

	async createExpense(user_id, description, amount) {
		try {
			const expense = await this.models.Expense.create({
				description,
				expenditure,
				income,
				UserId: user_id,
			});
			return expense;
		} catch (err) {
			return err;
		}
	}

	async updateExpenseById(id, description, amount) {
		try {
			const expense = await this.models.Expense.update(
				{
					description,
					expenditure,
					income,
				},
				{ where: { id } }
			);
			return expense;
		} catch (err) {
			return err;
		}
	}

	async deleteExpense(id) {
		try {
			await this.models.Expense.destroy({ where: { id } });
			return `deleted expense ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = ExpenseService;
