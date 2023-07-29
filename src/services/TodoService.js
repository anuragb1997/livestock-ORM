const models = require("../db/models");

class TodoService{
	constructor(seq) {
		models(seq);
		this.client = seq;
		this.models = seq.models;
	}

	async getAllTodos() {
		try {
			const todos = await this.models.Todo.findAll();
			return todos;
		} catch (err) {
			return err;
		}
	}

	async getTodoByid(id) {
		try {
			const todo = await this.models.Todo.findOne({ where: { id } });
			return todo;
		} catch (err) {
			return err;
		}
	}

	async createTodo(description, deadline, user_id) {
		try {
			const todo = await this.models.Todo.create({
				description, deadline, UserId: user_id
			});
			return todo;
		} catch (err) {
			return err;
		}
	}

	async updateTodoById(id, description, deadline) {
		try {
			const todo = await this.models.Todo.update({ description, deadline}, { where: { id } });
			return todo;
		} catch (err) {
			return err;
		}
	}

	async deleteTodo(id) {
		try {
			await this.models.Todo.destroy({ where: { id } });
			return `deleted todo ${id}`;
		} catch (err) {
			return err;
		}
	}
}

module.exports = TodoService;
