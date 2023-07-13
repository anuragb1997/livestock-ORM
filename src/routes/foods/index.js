const express = require("express");

const FoodService = require("../../services/FoodService");
const router = express.Router();
const config = require("../../config");

module.exports = () => {
	const foodService = new FoodService(config.development.postgres.client);

	router.get("/get-foods", async (req, res) => {
		try {
			const foods = await foodService.getAllFood();
			res.send(foods);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-food-by-shed-id/:shed_id", async (req, res) => {
		try {
			const foods = await foodService.getFoodsByShedId(req.params.shed_id);
			res.send(foods);
		} catch (error) {
			console.log(error);
		}
	});

	router.get("/get-food-by-id/:id", async (req, res) => {
		try {
			const food = await foodService.getFoodById(req.params.id);
			res.send(food);
		} catch (error) {
			console.log(error);
		}
	});

	router.post("/create-food/:shed_id", async (req, res) => {
		try {
			const food = await foodService.createFood(
				req.params.shed_id,
				req.body.name,
				req.body.quantity
			);
			res.send(food);
		} catch (error) {
			console.log(error);
		}
	});

	router.put("/update-food/:id", async (req, res) => {
		try {
			const food = await foodService.updateFoodById(
				req.params.id,
				req.body.name,
				req.body.quantity
			);
			res.send(food);
		} catch (error) {
			console.log(error);
		}
	});

	router.delete("/delete-food/:id", async (req, res) => {
		try {
			const message = await foodService.deleteFood(req.params.id);
			res.send(message);
		} catch (error) {
			console.log(error);
		}
	});

	return router;
};
