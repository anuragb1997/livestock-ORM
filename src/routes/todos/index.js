const express = require("express");
const TodoService = require("../../services/TodoService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const todoService = new TodoService(config.development.postgres.client);
	router.get("/get-todos", async (req, res) => {
		try {
			const todos = await todoService.getTodoByid()
			res.send(todos);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-todo/:id", async (req, res) => {
		try {
			const todo = await todoService.getTodoByid(req.params.id);
			res.send(todo);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-todo/:user_id", async (req, res) => {
		try {
			const todo = await todoService.createTodo(req.body.description, req.body.deadline, req.params.user_id);
			res.send(todo);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-todo/:id", async (req, res) => {
		try {
			const todo = await todoService.updateTodoById(
                req.params.id,
				req.body.description, 
                req.body.deadline
			);
			res.send(todo);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-todo/:id", async (req, res) => {
		try {
			const message = await todoService.deleteTodo(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
