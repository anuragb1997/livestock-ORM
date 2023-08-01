const express = require("express");

const ExpenseService = require("../../services/ExpenseService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const expenseService = new ExpenseService(config.development.postgres.client);

	router.get("/get-expenses", async (req, res) => {
		try {
			const expenses = await expenseService.getAllExpenses();
			res.send(expenses);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-expenses-by-user-id/:user_id", async (req, res) => {
		try {
			const expenses = await expenseService.getExpsenseByUserId(
				req.params.user_id
			);
			res.send(expenses);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-expense-by-id/:id", async (req, res) => {
		try {
			const expense = await expenseService.getExpenseById(req.params.id);
			res.send(expense);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-expense/:user_id", async (req, res) => {
		try {
			const expense = await expenseService.createExpense(
				req.params.user_id,
				req.body.description,
				req.body.expenditure,
				req.body.income

			);
			res.send(expense);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-expense/:id", async (req, res) => {
		try {
			const expense = await expenseService.updateFoodById(
				req.params.id,
				req.body.description,
				req.body.expenditure,
				req.body.income

			);
			res.send(expense);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-expense/:id", async (req, res) => {
		try {
			const message = await expenseService.deleteExpense(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
